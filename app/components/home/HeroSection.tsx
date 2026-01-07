import Image from "next/image";
import Link from "next/link";
import { Play, Calendar, ShoppingBag } from "lucide-react";
import BandMemberBackground from "./BandMemberBackground";

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

      {/* Content layer: Logo centered, text and buttons at bottom */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4">
        {/* Logo - centered */}
        <div className="flex-1 flex items-center justify-center max-w-2xl w-full">
          <Image
            src="/LA_Logo_Clean_White.png"
            alt="Long Autumn"
            width={700}
            height={700}
            priority
            className="w-full"
          />
        </div>

        {/* Text and buttons - at bottom */}
        <div className="flex flex-col items-center pb-12">
          {/* Tagline */}
          <p className="text-off-white text-lg md:text-xl tracking-widest mb-8 text-center uppercase">
            ALT-ROCK FROM MANCHESTER, NH / BOSTON, MA
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            {ctaButtons.map((button) => (
              <CTAButton key={button.label} {...button} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Modular component for CTA buttons
function CTAButton({
  href,
  label,
  icon: Icon,
  variant,
}: {
  href: string;
  label: string;
  icon: React.ComponentType<{ size: number; fill?: string }>;
  variant: "primary" | "outline";
}) {
  const isPrimary = variant === "primary";
  
  return (
    <Link
      href={href}
      className={`
        ${isPrimary 
          ? "bg-brutal-red hover:bg-deep-black text-deep-black hover:text-brutal-red border-brutal-red" 
          : "bg-transparent hover:bg-off-white/10 text-off-white border-off-white"
        }
        font-bold px-8 py-4 flex items-center gap-3 uppercase tracking-wider text-sm border-2
      `}
    >
      <Icon size={20} {...(isPrimary ? { fill: "currentColor" } : {})} />
      {label}
    </Link>
  );
}