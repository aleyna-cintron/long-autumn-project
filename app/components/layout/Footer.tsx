import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { FaSpotify, FaApple } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/longautumnmusic",
      icon: Instagram,
    },
    {
      name: "Spotify",
      href: "https://open.spotify.com/artist/3WChl0j61LISLXZn9X9Skm",
      icon: FaSpotify,
    },
    {
      name: "Apple Music",
      href: "https://music.apple.com/us/artist/long-autumn/1481105151",
      icon: FaApple,
    },
    {
      name: "Facebook",
      href: "https://facebook.com/longautumnmusic",
      icon: Facebook,
    },
    {
      name: "Twitter",
      href: "https://twitter.com/longautumnmusic",
      icon: Twitter,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/@LongAutumn",
      icon: Youtube,
    },
  ];

  return (
    <footer className="bg-bg-main border-t border-white/10 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Brand */}
          <div className="text-center md:text-left flex flex-col items-center md:items-start">
            <Link href="/">
              <Image
                src="/LA_Logo_Horiz.png"
                alt="Long Autumn"
                width={400}
                height={133}
                className="h-4 w-auto mb-2"
              />
            </Link>
            <p className="font-body text-text-secondary text-sm">
              Alt-Rock from Manchester, NH / Boston, MA
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-brutal-red transition-colors duration-200"
                aria-label={link.name}
              >
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-text-secondary">
          <p className="font-body text-sm">
            &copy; {new Date().getFullYear()} Long Autumn. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}