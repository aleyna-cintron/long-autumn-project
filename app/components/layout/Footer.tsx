import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Music", href: "/music" },
    { name: "Shows", href: "/shows" },
    { name: "Merch", href: "/products" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    { name: "Instagram", href: "https://instagram.com/longautumnmusic" },
    { name: "Facebook", href: "https://facebook.com/longautumnmusic" },
    { name: "Twitter", href: "https://twitter.com/longautumnmusic" },
    { name: "YouTube", href: "https://www.youtube.com/@LongAutumn" },
    { name: "Apple Music", href: "https://music.apple.com/us/artist/long-autumn/1481105151" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Use", href: "/terms" },
  ];

  return (
    <footer className="bg-deep-black border-t border-neutral-800">
      <div className="w-[90%] md:w-[80%] mx-auto px-4 md:px-8 py-12 md:py-16 3xl:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-8 3xl:gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <Link href="/">
              <Image
                src="/LA_Logo_Horiz.png"
                alt="Long Autumn Logo"
                width={400}
                height={133}
                className="w-[150px] md:w-[180px] 3xl:w-[220px] h-auto mb-6"
              />
            </Link>
            <p className="font-body text-off-white/70 text-sm md:text-sm 3xl:text-base leading-relaxed mb-6">
              Cinematic alt-rock from Manchester, NH / Boston, MA. For the midnight wanderers and the dreamers.
            </p>
            <p className="font-body text-cold-blue text-xs md:text-xs 3xl:text-sm">
              © 2024 Long Autumn. All rights reserved.
            </p>
          </div>

          {/* Navigate Section */}
          <div>
            <h4 className="font-body text-off-white text-sm 3xl:text-base font-bold mb-6 uppercase tracking-widest">
              NAVIGATE
            </h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="font-body text-off-white/70 hover:text-brutal-red text-sm 3xl:text-base transition-colors block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="font-body text-off-white text-sm 3xl:text-base font-bold mb-6 uppercase tracking-widest">
              CONNECT
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-off-white/70 hover:text-brutal-red text-sm 3xl:text-base transition-colors block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-off-white/50 text-xs 3xl:text-sm">
            Designed with brutalist aesthetics and analog soul.
          </p>
          <div className="flex gap-8">
            {legalLinks.map((link, index) => (
              <span key={link.name} className="flex items-center gap-8">
                <Link
                  href={link.href}
                  className="font-body text-off-white/50 hover:text-brutal-red text-xs 3xl:text-sm transition-colors"
                >
                  {link.name}
                </Link>
                {index < legalLinks.length - 1 && (
                  <span className="text-off-white/50">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}