"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCartStore } from "../../store/cart-store-provider";

export default function NavBar() {
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

  return (
    <nav className="w-full bg-deep-black border-b border-white fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 md:px-4">
        {/* Logo - Only show on non-home pages, centered above nav */}
        {!isHomePage && (
          <div className="flex justify-center mt-2 md:mt-4">
            <Link href="/">
              <Image
                src="/LA_Logo_Horiz.png"
                alt="Long Autumn Logo"
                width={200}
                height={200}
                className="font-logo w-[120px] md:w-[200px] h-auto"
              />
            </Link>
          </div>
        )}

        <div className="flex justify-center items-center h-12 md:h-16">
          {/* Navigation Links */}
          <ul className="flex flex-row gap-2 xs:gap-3 sm:gap-4 md:gap-8 justify-center items-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-body text-[10px] sm:text-xs md:text-sm font-bold tracking-wider transition-colors uppercase ${
                    pathname === link.href
                      ? "text-brutal-red" // active: brutal red
                      : "text-neutral-400 hover:text-brutal-red" // inactive: gray, hover brutal red
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
                    ? "text-brutal-red"
                    : "text-neutral-400 hover:text-brutal-red"
                }`}
              >
                <ShoppingCart className="w-4 h-4 md:w-5 md:h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-3 bg-brutal-red text-black text-[10px] md:text-xs font-bold rounded-full min-w-[16px] md:min-w-[18px] h-[16px] md:h-[18px] flex items-center justify-center px-1">
                    {displayCount}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}