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
          MOBILE / TABLET CONTENT
      ====================================================== */}
      <div className="lg:hidden relative z-20 flex flex-col h-dvh">
        {/* Block 1 — Logo */}
        <div className="flex items-start justify-center mt-30 sm:mt-18 md:pt-24">
          <div className="max-w-xs w-full">
            <img
              src="/LA_Logo_Clean_White.png"
              alt="Long Autumn"
              className="logo w-full"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Block 2 — Breathing room */}
        <div className="flex-[0.70] sm:flex-[0.58]" />

        {/* Block 3 — CTA (black background) */}
        <div className="bg-black flex flex-col items-center justify-center pb-6 px-4">
          <p className="text-off-white text-base tracking-widest mb-6 text-center uppercase">
            ALT-ROCK FROM MANCHESTER, NH / BOSTON, MA
          </p>
          <div className="w-full max-w-sm">
            <Button {...ctaButtons[0]} className="w-full" />
          </div>
        </div>
      </div>
      {/* ======================================================
          DESKTOP CONTENT
      ====================================================== */}
      <div className="hidden lg:flex absolute inset-0 z-20 flex-col items-center px-4">
        <div className="flex-1 flex items-center justify-center pt-16">
          <div className="max-w-lg w-full">
            <img
              src="/LA_Logo_Clean_White.png"
              alt="Long Autumn"
              className="logo w-full"
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="flex flex-col items-center pb-12">
          <p className="text-off-white text-lg md:text-xl tracking-widest mb-8 text-center uppercase">
            ALT-ROCK FROM MANCHESTER, NH / BOSTON, MA
          </p>
          <div className="flex flex-row gap-4 items-center">
            {ctaButtons.map((button) => (
              <Button key={button.label} {...button} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}