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
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* ======================================================
          COMPOSITING LAYER (image + effects share pixels)
      ====================================================== */}
      <div className="absolute inset-0 z-0">
        {/* IMAGE (max-width applies ONLY here) */}
        <div className="absolute inset-0 flex justify-center">
          <div className="relative h-full w-full max-w-600">
            <BandMemberBackground />
          </div>
        </div>

        {/* EFFECTS (no background paint, all overlays) */}
        <HeroEffects />
      </div>

      {/* ======================================================
          MOBILE / TABLET CONTENT
      ====================================================== */}
      <div className="lg:hidden relative z-20 flex flex-col min-h-screen px-4 py-8">
        {/* Logo */}
        <div className="max-w-xs w-full pt-20 md:pt-24 mx-auto">
          <img
            src="/LA_Logo_Clean_White.png"
            alt="Long Autumn"
            className="logo w-full"
            fetchPriority="high"
          />
        </div>

        <div className="flex-1" />

        {/* Tagline + CTA */}
        <div className="flex flex-col items-center mb-58 md:pb-4 md:mb-18">
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
