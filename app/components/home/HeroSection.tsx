import { Play, Calendar, ShoppingBag } from "lucide-react";
import BandMemberBackground from "./BandMemberBackground";
import { Button } from "../ui/Button";

const ctaButtons = [
  { href: "/music", label: "LISTEN NOW", icon: Play, variant: "primary" as const },
  { href: "/shows", label: "UPCOMING SHOWS", icon: Calendar, variant: "outline" as const },
  { href: "/products", label: "SHOP MERCH", icon: ShoppingBag, variant: "outline" as const },
];

export default function HeroSection() {
  return (
    <section
      className="
        relative w-full h-screen overflow-hidden
        bg-linear-to-b from-transparent from-30% via-black/60 to-black
      "
    >
      {/* ======================================================
          COMPOSITING LAYER (image + effects share context)
      ====================================================== */}
      <div className="absolute inset-0 z-0">

        {/* IMAGE (max-width constrained only here) */}
        <div className="absolute inset-0 flex justify-center">
          <div className="relative h-full w-full max-w-600">
            <BandMemberBackground />
          </div>
        </div>

        {/* EFFECTS (full-bleed, affect image) */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Dark tint */}
          <div className="absolute inset-0 bg-black/30" />

          {/* CRT scanlines */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: `repeating-linear-gradient(
                0deg,
                rgba(0,0,0,0.35),
                rgba(0,0,0,0.35) 1px,
                transparent 1px,
                transparent 3px
              )`,
            }}
          />

          {/* Grain */}
          <div
            className="absolute inset-0 opacity-25 mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='2' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />

          {/* Vignette */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)",
            }}
          />
        </div>
      </div>

      {/* ======================================================
          CONTENT (isolated, interactive, above everything)
      ====================================================== */}
      <div className="absolute inset-0 z-20 flex flex-col items-center px-4">
        {/* Logo */}
        <div className="flex-1 flex items-center justify-center pt-16">
          <div className="max-w-lg w-full">
            <img
              src="/LA_Logo_Clean_White.png"
              alt="Long Autumn"
              className="w-full"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Tagline + CTA */}
        <div className="flex flex-col items-center pb-12">
          <p className="text-off-white text-lg md:text-xl tracking-widest mb-8 text-center uppercase">
            ALT-ROCK FROM MANCHESTER, NH / BOSTON, MA
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {ctaButtons.map((button) => (
              <Button key={button.label} {...button} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
