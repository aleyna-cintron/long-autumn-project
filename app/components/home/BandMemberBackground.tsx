'use client';

import Image from "next/image";
import { useState } from "react";

const bandMembers = [
  { src: "/home-kolbe.png", alt: "Kolbe" },
  { src: "/home-nick.png", alt: "Nick" },
  { src: "/home-john.png", alt: "John" },
  { src: "/home-jam.png", alt: "Jam" },
  { src: "/home-connor.png", alt: "Connor" },
];

export default function BandMemberBackground() {
  const [imagesLoaded, setImagesLoaded] = useState(0);
  const allImagesLoaded = imagesLoaded >= bandMembers.length;

  return (
    // Apply grayscale ONCE to the entire container instead of 5 times
    <div 
      className={`absolute inset-0 flex ${allImagesLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{ filter: 'grayscale(100%)' }}
    >
      {bandMembers.map((member) => (
        <div key={member.alt} className="w-1/5 relative">
          <Image
            src={member.src}
            alt={member.alt}
            fill
            className="object-cover object-center"
            priority
            onLoad={() => setImagesLoaded(prev => prev + 1)}
          />
          
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% via-black/60 to-black pointer-events-none z-10" />
          
          {/* Simplified grain - reduced opacity and simpler SVG */}
          <div 
            className="absolute inset-0 opacity-30 mix-blend-overlay pointer-events-none z-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='2' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            }}
          />
        </div>
      ))}
    </div>
  );
}