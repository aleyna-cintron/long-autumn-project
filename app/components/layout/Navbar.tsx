"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  // Nav links stored in array
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Music", href: "/music" },
    { name: "Shows", href: "/shows" },
    { name: "Merch", href: "/products" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="mx-auto p-5 w-full">
      <div className="flex flex-col items-center p-4 text-2xl">
        {/* Logo */}
        <div className="mb-4">
          <Link href="/">
            <Image
              src="/LA_Logo_Clean_White.png"
              alt="Logo"
              width={250}
              height={250}
              className="font-logo" // your custom logo font
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-row gap-1 justify-center items-center">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`font-feature ${
                  pathname === link.href
                    ? "text-primary font-medium" // active: red, medium weight
                    : "text-secondary hover:text-primary" // inactive: black/secondary, hover red
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
              className={`${
                pathname === "/cart"
                  ? "text-primary font-medium"
                  : "text-secondary hover:text-primary"
              }`}
            >
              <ShoppingCart size={24} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
