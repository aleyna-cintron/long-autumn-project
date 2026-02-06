// HeroSection.tsx
import { Play, Calendar, ShoppingBag } from "lucide-react";
import BandMemberBackground from "./BandMemberBackground";
import { Button } from "../ui/Button";
import { HeroEffects } from "./HeroEffects";

const ctaButtons = [
  { href: "/music", label: "LISTEN NOW", icon: Play, variant: "primary" as const },
  { href: "/shows", label: "UPCOMING SHOWS", icon: Calendar, variant: "outline" as const },
  { href: "/products", label: "SHOP MERCH", icon: ShoppingBag, variant: "outline" as const },
];

export default function HeroSection() {

  return (
    <section className="relative w-full h-dvh">
      {/* ======================================================
          BACKGROUND LAYER
      ====================================================== */}
      <div className="absolute inset-0 z-0">
        {/* Image container - centered both ways */}
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="relative w-full 2xl:max-w-600 overflow-visible">
            <BandMemberBackground />
          </div>
        </div>

        {/* Effects layer */}
        <HeroEffects />
      </div>
      {/* Bottom half black — mobile/tablet only */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 sm:h-[45%] md:h-[40%] lg:h-[35%] xl:h-[30%] 2xl:h-[25%] z-10"
        style={{
          background: `linear-gradient(to top,
            rgb(0 0 0 / 1) 0%,
            rgb(0 0 0 / 1) 82%,
            rgb(0 0 0 / 0) 100%
          )`,
        }}
      />

      {/* ======================================================
          UNIFIED CONTENT - Single render, responsive CSS
      ====================================================== */}
      <div className="relative z-20 flex flex-col h-dvh px-4">
        {/* Logo - top on mobile, centered on desktop */}
        <div className="flex items-start lg:items-center justify-center mt-30 sm:mt-18 md:pt-24 lg:mt-0 lg:pt-16 lg:flex-1">
          <div className="max-w-xs lg:max-w-lg w-full">
            <img
              src="/LA_Logo_Clean_White.png"
              alt="Long Autumn"
              className="logo w-full"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Spacer - only on mobile/tablet */}
        <div className="flex-[0.70] sm:flex-[0.58] lg:hidden" />

        {/* CTA Section */}
        <div className="bg-black lg:bg-transparent flex flex-col items-center justify-center pb-6 lg:pb-12">
          <p className="text-off-white text-base lg:text-lg xl:text-xl tracking-widest mb-6 lg:mb-8 text-center uppercase">
            ALT-ROCK FROM MANCHESTER, NH / BOSTON, MA
          </p>

          {/* Mobile: single full-width button */}
          <div className="lg:hidden w-full max-w-sm">
            <Button {...ctaButtons[0]} className="w-full" />
          </div>

          {/* Desktop: all buttons in a row */}
          <div className="hidden lg:flex flex-row gap-4 items-center">
            {ctaButtons.map((button) => (
              <Button key={button.label} {...button} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}