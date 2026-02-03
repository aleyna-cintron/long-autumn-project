"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCartStore } from "../../store/cart-store-provider";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const cartCount = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  const displayCount = cartCount > 99 ? "99+" : cartCount;

  // Nav links stored in array
  const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "MUSIC", href: "/music" },
    { name: "SHOWS", href: "/shows" },
    { name: "MERCH", href: "/products" },
    { name: "GALLERY", href: "/gallery" },
    { name: "CONTACT", href: "/contact" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="w-full bg-bg-main border-b border-white/5 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Mobile Header */}
        <div className="flex md:hidden items-center justify-between h-14">
          {/* Burger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-text-secondary hover:text-accent-red transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo - centered on mobile */}
          {!isHomePage && (
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/LA_Logo_Horiz.png"
                alt="Long Autumn Logo"
                width={400}
                height={133}
                className="font-logo h-8 w-auto"
              />
            </Link>
          )}
          {isHomePage && <div />}

          {/* Cart Icon - right side on mobile */}
          <Link
            href="/cart"
            className={`relative transition-colors ${
              pathname === "/cart"
                ? "text-accent-red"
                : "text-text-secondary hover:text-accent-red"
            }`}
          >
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-accent-red text-bg-main text-[10px] font-bold rounded-full min-w-4 h-4 flex items-center justify-center px-1">
                {displayCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/5 py-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`block font-body text-sm font-bold tracking-wider transition-colors uppercase ${
                      pathname === link.href
                        ? "text-accent-red"
                        : "text-text-secondary hover:text-accent-red"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Desktop Header */}
        <div className="hidden md:block">
          {/* Logo - Only show on non-home pages, centered above nav */}
          {!isHomePage && (
            <div className="flex justify-center mt-4">
              <Link href="/">
                <Image
                  src="/LA_Logo_Horiz.png"
                  alt="Long Autumn Logo"
                  width={400}
                  height={133}
                  className="font-logo w-[200px] h-auto"
                />
              </Link>
            </div>
          )}

          <div className="flex justify-center items-center h-16">
            {/* Navigation Links */}
            <ul className="flex flex-row gap-8 justify-center items-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-body text-sm font-bold tracking-wider transition-colors uppercase ${
                      pathname === link.href
                        ? "text-accent-red"
                        : "text-text-secondary hover:text-accent-red"
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              {/* Cart Icon */}
              <li>
                <Link
                  href="/cart"
                  className={`relative transition-colors ${
                    pathname === "/cart"
                      ? "text-accent-red"
                      : "text-text-secondary hover:text-accent-red"
                  }`}
                >
                  <ShoppingCart size={20} />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-3 bg-accent-red text-bg-main text-xs font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                      {displayCount}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}