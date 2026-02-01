import Image from "next/image";
import Link from "next/link";
import { Play, Calendar, ShoppingBag } from "lucide-react";
import BandMemberBackground from "./BandMemberBackground";
import { Button } from '../ui/Button'

const ctaButtons = [
  {
    href: "/music",
    label: "LISTEN NOW",
    icon: Play,
    variant: "primary" as const,
  },
  {
    href: "/shows",
    label: "UPCOMING SHOWS",
    icon: Calendar,
    variant: "outline" as const,
  },
  {
    href: "/products",
    label: "SHOP MERCH",
    icon: ShoppingBag,
    variant: "outline" as const,
  },
];

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background: 5 band member images side by side */}
      <BandMemberBackground />

      {/* Dark retro video game filter overlay */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {/* Dark tint */}
        <div className="absolute inset-0 bg-black/30" />

        {/* CRT Scanlines */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              0deg,
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.3) 1px,
              transparent 1px,
              transparent 3px
            )`,
            opacity: 0.6,
          }}
        />

        {/* Color aberration / RGB shift effect */}
        <div
          className="absolute inset-0 mix-blend-overlay"
          style={{
            background: `
              linear-gradient(90deg, rgba(255,0,0,0.03) 0%, transparent 50%, rgba(0,255,255,0.03) 100%)
            `,
          }}
        />

        {/* Vignette effect */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.6) 100%)',
          }}
        />
      </div>

      {/* Content layer */}
      <div className="absolute inset-0 z-10 flex flex-col items-center px-4">
        {/* Logo - upper-middle third */}
        <div className="flex-1 flex items-center justify-center pt-16">
          <div className="max-w-lg w-full">
            <Image
              src="/LA_Logo_Clean_White.png"
              alt="Long Autumn"
              width={600}
              height={240}
              priority
              className="w-full"
            />
          </div>
        </div>

        {/* Tagline + CTAs - bottom section */}
        <div className="flex flex-col items-center pb-12">
          {/* Tagline */}
          <p className="text-off-white text-lg md:text-xl tracking-widest mb-8 text-center uppercase">
            ALT-ROCK FROM MANCHESTER, NH / BOSTON, MA
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {ctaButtons.map((button) => (
              <Button key={button.label} {...button} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
