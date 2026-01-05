"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

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
      <div className="max-w-7xl mx-auto px-4">
        {/* Logo - Only show on non-home pages, centered above nav */}
        {!isHomePage && (
          <div className="flex justify-center">
            <Link href="/">
              <Image
                src="/LA_Logo_Clean_White.png"
                alt="Long Autumn Logo"
                width={80}
                height={80}
                className="font-logo"
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
                className={`transition-colors ${
                  pathname === "/cart"
                    ? "text-brutal-red"
                    : "text-neutral-400 hover:text-brutal-red"
                }`}
              >
                <ShoppingCart size={20} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}