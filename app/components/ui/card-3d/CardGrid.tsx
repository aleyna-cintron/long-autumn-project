"use client";

import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CardGridProps, CardGridConfig } from "./types";

gsap.registerPlugin(ScrollTrigger);

const DEFAULT_CONFIG: CardGridConfig = {
  positions: [14, 38, 62, 86],
  rotations: [-15, -7.5, 7.5, 15],
  scrollMultiplier: 3,
  cardWidth: 240,
  cardHeight: 360,
  staggerDelay: 0.05,
};

const MOBILE_BREAKPOINT = 1024;

interface CardGridInternalProps extends CardGridProps {
  config: CardGridConfig;
  isMobile: boolean;
}

const CardGridInternal = ({ cards, config, renderFront, renderBack, containerClassName, cardClassName, header, isMobile}: CardGridInternalProps) => {
  const container = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Refresh ScrollTrigger on resize (within same mode)
  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(
    () => {
      const cardElements = cardRefs.current.filter(
        (card) => card !== null
      ) as HTMLDivElement[];
      const positions = config.positions;
      const rotations = config.rotations;
      const cardsSection = container.current?.querySelector(".cards-section");

      if (!cardsSection) return;

      if (isMobile) {
        // MOBILE: Sequential card flip through stacked deck
        const mobileScrollHeight = window.innerHeight * (cards.length * 0.8);

        // Pin section with anticipatePin to prevent snap-back
        ScrollTrigger.create({
          trigger: cardsSection,
          start: "top top",
          end: () => `+=${mobileScrollHeight}`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        });

        // Stack cards with first on top
        cardElements.forEach((card, index) => {
          gsap.set(card, {
            zIndex: cards.length - index,
          });
        });

        // Flip through cards one at a time
        cardElements.forEach((card, index) => {
          const frontEl = card.querySelector(".flipCardFront");
          const backEl = card.querySelector(".flipCardBack");

          const segmentSize = 1 / cards.length;
          const cardStart = index * segmentSize;
          const cardEnd = cardStart + segmentSize;

          ScrollTrigger.create({
            trigger: cardsSection,
            start: "top top",
            end: () => `+=${mobileScrollHeight}`,
            scrub: 0.3,
            id: `mobile-flip-${index}`,
            onUpdate: (self) => {
              const progress = self.progress;

              if (progress >= cardStart && progress < cardEnd) {
                const localProgress = (progress - cardStart) / segmentSize;

                if (localProgress < 0.5) {
                  // First half: flip the card
                  const flipProgress = localProgress / 0.5;
                  const frontRotation = -180 * flipProgress;
                  const backRotation = 180 - 180 * flipProgress;

                  if (frontEl) gsap.set(frontEl, { rotateY: frontRotation });
                  if (backEl) gsap.set(backEl, { rotateY: backRotation });
                  gsap.set(card, { opacity: 1, y: 0 });
                } else {
                  // Second half: slide card up and fade
                  const exitProgress = (localProgress - 0.5) / 0.5;
                  if (frontEl) gsap.set(frontEl, { rotateY: -180 });
                  if (backEl) gsap.set(backEl, { rotateY: 0 });
                  gsap.set(card, {
                    y: -150 * exitProgress,
                    opacity: 1 - exitProgress,
                  });
                }
              } else if (progress >= cardEnd) {
                // Card has exited
                gsap.set(card, { opacity: 0, y: -150 });
              } else {
                // Card hasn't started yet - reset
                gsap.set(card, { opacity: 1, y: 0 });
                if (frontEl) gsap.set(frontEl, { rotateY: 0 });
                if (backEl) gsap.set(backEl, { rotateY: 180 });
              }
            },
          });
        });
      } else {
        // DESKTOP: Spread from center animation
        const totalScrollHeight = window.innerHeight * config.scrollMultiplier!;
        const centerIndex = Math.floor(cards.length / 2);

        // Pin cards section with anticipatePin to prevent snap-back
        ScrollTrigger.create({
          trigger: cardsSection,
          start: "top top",
          end: () => `+=${totalScrollHeight}`,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        });

        // Set z-index: center card on top, decreasing outward
        cardElements.forEach((card, index) => {
          const distanceFromCenter = Math.abs(index - centerIndex);
          const zIndex = cards.length - distanceFromCenter;
          gsap.set(card, { zIndex });
        });

        // Spread cards from center
        cardElements.forEach((card, index) => {
          gsap.to(card, {
            left: `${positions[index % positions.length]}%`,
            rotation: `${rotations[index % rotations.length]}`,
            ease: "none",
            scrollTrigger: {
              trigger: cardsSection,
              start: "top top",
              end: () => `+=${window.innerHeight}`,
              scrub: 0.5,
              id: `spread-${index}`,
            },
          });
        });

        // Flip cards with staggered effect
        cardElements.forEach((card, index) => {
          const frontEl = card.querySelector(".flipCardFront");
          const backEl = card.querySelector(".flipCardBack");

          const staggerOffset = index * config.staggerDelay!;
          const startOffset = 1 / 3 + staggerOffset;
          const endOffset = 2 / 3 + staggerOffset;

          ScrollTrigger.create({
            trigger: cardsSection,
            start: "top top",
            end: () => `+=${totalScrollHeight}`,
            scrub: 1,
            id: `rotate-flip-${index}`,
            onUpdate: (self) => {
              const progress = self.progress;
              if (progress >= startOffset && progress <= endOffset) {
                // During flip animation
                const animationProgress = (progress - startOffset) / (1 / 3);
                const frontRotation = -180 * animationProgress;
                const backRotation = 180 - 180 * animationProgress;
                const cardRotation =
                  rotations[index % rotations.length] * (1 - animationProgress);

                if (frontEl)
                  gsap.to(frontEl, {
                    rotateY: frontRotation,
                    ease: "power1.out",
                  });
                if (backEl)
                  gsap.to(backEl, {
                    rotateY: backRotation,
                    ease: "power1.out",
                  });
                gsap.to(card, {
                  xPercent: -50,
                  yPercent: -50,
                  rotate: cardRotation,
                  ease: "power1.out",
                });
              } else if (progress > endOffset) {
                // After flip - ensure final state
                if (frontEl) gsap.set(frontEl, { rotateY: -180 });
                if (backEl) gsap.set(backEl, { rotateY: 0 });
                gsap.set(card, { rotate: 0 });
              }
            },
          });
        });
      }

      // Cleanup function
      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    },
    { scope: container }
  );

  return (
    <div className={containerClassName || ""} ref={container} >
      <section className="cards-section">
        {/* Header inside pinned section */}
        {header && (
          <div className="absolute top-[15%] sm:top-[18%] left-0 right-0 z-20 text-center pointer-events-none">
            {header}
          </div>
        )}
        {cards.map((card, index) => (
          <Card
            key={card.id}
            id={card.id}
            cardClassName={cardClassName}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
          >
            {{
              front: renderFront(card),
              back: renderBack(card),
            }}
          </Card>
        ))}
      </section>
    </div>
  );
};

const CardGrid = ({ cards, config, renderFront, renderBack, containerClassName, cardClassName, header}: CardGridProps) => {
  const mergedConfig = { ...DEFAULT_CONFIG, ...config };
  const [isMobile, setIsMobile] = useState(false);

  // Track window resize
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <ReactLenis root>
      {/* Key forces remount when switching between mobile/desktop */}
      <CardGridInternal
        key={isMobile ? "mobile" : "desktop"}
        cards={cards}
        config={mergedConfig}
        renderFront={renderFront}
        renderBack={renderBack}
        containerClassName={containerClassName}
        cardClassName={cardClassName}
        header={header}
        isMobile={isMobile}
      />
    </ReactLenis>
  );
};

export default CardGrid;
