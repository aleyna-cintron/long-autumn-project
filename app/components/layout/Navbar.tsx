'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import CartIcon from '../ui/CartIcon'

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT', href: '/about' },
    { name: 'MUSIC', href: '/music' },
    { name: 'SHOWS', href: '/shows' },
    { name: 'MERCH', href: '/products' },
    { name: 'GALLERY', href: '/gallery' },
    { name: 'EPK', href: '/epk' },
    { name: 'CONTACT', href: '/contact' },
  ]

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="fixed top-0 z-50 w-full bg-bg-main border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4">

        {/* MOBILE HEADER */}
        <div className="flex md:hidden items-center justify-between h-14">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-text-secondary hover:text-brutal-red transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {!isHomePage ? (
            <Link href="/" onClick={closeMenu}>
              <Image
                src="/LA_Logo_Horiz.png"
                alt="Long Autumn Logo"
                width={400}
                height={133}
                sizes="120px"
                className="h-6 w-auto"
              />
            </Link>
          ) : (
            <div />
          )}

          <CartIcon pathname={pathname} />
        </div>

        {/* MOBILE MENU */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-white/5 py-4">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={`block font-body text-sm font-bold tracking-wider uppercase transition-colors ${
                      pathname === link.href
                        ? 'text-brutal-red'
                        : 'text-text-secondary hover:text-brutal-red'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* DESKTOP HEADER */}
        <div className="hidden md:block">
          {!isHomePage && (
            <div className="flex justify-center mt-4">
              <Link href="/">
                <Image
                  src="/LA_Logo_Horiz.png"
                  alt="Long Autumn Logo"
                  width={400}
                  height={133}
                  sizes="200px"
                  className="w-[200px] h-auto"
                />
              </Link>
            </div>
          )}

          <div className="flex justify-center items-center h-16">
            <ul className="flex gap-8 items-center">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`font-body text-sm font-bold tracking-wider uppercase transition-colors ${
                      pathname === link.href
                        ? 'text-brutal-red'
                        : 'text-text-secondary hover:text-brutal-red'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

              <li>
                <CartIcon pathname={pathname} />
              </li>
            </ul>
          </div>
        </div>

      </div>
    </nav>
  )
}
