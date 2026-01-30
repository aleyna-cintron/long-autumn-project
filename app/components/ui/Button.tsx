import React from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "outline" | "dark" | "muted";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  href: string;
  label: string;
  icon?: React.ComponentType<{ size: number; fill?: string }>;
  variant?: ButtonVariant;
  size?: ButtonSize;
  external?: boolean;
  className?: string;
}

export function Button({
  href,
  label,
  icon: Icon,
  variant = "primary",
  size = "md",
  external = false,
  className = "",
}: ButtonProps) {
  // Size-based classes
  const sizeClasses = {
    sm: "px-6 py-3 border",
    md: "px-8 py-4 border-2",
    lg: "px-12 py-6 border-4",
  };

  // Variant-based classes
  const variantClasses = {
    primary: "bg-brutal-red hover:bg-deep-black text-deep-black hover:text-brutal-red border-brutal-red",
    outline: "bg-black hover:bg-off-white/10 text-off-white border-off-white/30",
    dark: "bg-black text-brutal-red border-border hover:bg-brutal-red hover:text-black",
    muted: "bg-near-black text-off-white border-border hover:border-brutal-red [&_svg]:text-brutal-red",
  };

  const baseClasses = `
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    font-bold flex items-center justify-center gap-3 uppercase tracking-wider text-sm rounded-sm transition-all duration-300
    ${className}
  `;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
      >
        {Icon && <Icon size={20} {...(variant === "primary" ? { fill: "currentColor" } : {})} />}
        {label}
      </a>
    );
  }

  return (
    <Link href={href} className={baseClasses}>
      {Icon && <Icon size={20} {...(variant === "primary" ? { fill: "currentColor" } : {})} />}
      {label}
    </Link>
  );
}
