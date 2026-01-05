import Image from "next/image";
import Link from "next/link";
import { Play, Calendar, ShoppingBag } from "lucide-react";

export default function HeroSection() {
    return (
        <div className="relative w-full h-screen">
            {/* Background: 5 band member images side by side */}
            <div className="absolute inset-0 flex">
                <div className="w-1/5 relative">
                    <Image
                        src="/home-kolbe.jpg"
                        alt="Kolbe"
                        fill
                        className="object-cover object-center grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% via-black/60 to-black pointer-events-none z-10" />
                </div>
        
                <div className="w-1/5 relative">
                    <Image
                        src="/home-nick.jpg"
                        alt="Nick"
                        fill
                        className="object-cover object-center grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% via-black/60 to-black pointer-events-none z-10" />
                </div>
        
                <div className="w-1/5 relative">
                    <Image
                        src="/home-john.jpg"
                        alt="John"
                        fill
                        className="object-cover object-center grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% via-black/60 to-black pointer-events-none z-10" />
                </div>
        
                <div className="w-1/5 relative">
                    <Image
                        src="/home-jam.jpg"
                        alt="Jam"
                        fill
                        className="object-cover object-center grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% via-black/60 to-black pointer-events-none z-10" />
                </div>
        
                <div className="w-1/5 relative">
                    <Image
                        src="/home-connor.jpg"
                        alt="Connor"
                        fill
                        className="object-cover object-center grayscale"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent from-30% via-black/60 to-black pointer-events-none z-10" />
                </div>
            </div>

            {/* Content layer: Logo centered, text and buttons at bottom */}
            <div className="relative z-10 flex flex-col items-center justify-between h-full px-4 py-16">
                {/* Logo - centered vertically */}
                <div className="flex-1 flex items-center justify-center">
                    <Image
                        src="/LA_Logo_Clean_White.png"
                        alt="Long Autumn"
                        width={700}
                        height={700}
                        priority
                        className="w-full max-w-2xl"
                    />
                </div>

                {/* Text and buttons - at bottom */}
                <div className="flex flex-col items-center">
                    {/* Tagline */}
                    <p className="font-body text-off-white text-lg md:text-xl tracking-widest mb-12 text-center uppercase">
                        ALT-ROCK FROM MANCHESTER, NH / BOSTON, MA
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        {/* Listen Now - Red button */}
                        <Link
                            href="/music"
                            className="bg-brutal-red hover:bg-deep-black text-deep-black hover:text-brutal-red font-body font-bold px-8 py-4 flex items-center gap-3 transition-all uppercase tracking-wider text-sm border-2 border-brutal-red"
                        >
                            <Play size={20} fill="currentColor" />
                            LISTEN NOW
                        </Link>

                        {/* Upcoming Shows - Outlined button */}
                        <Link
                            href="/shows"
                            className="bg-transparent hover:bg-off-white/10 text-off-white font-body font-bold px-8 py-4 flex items-center gap-3 transition-all uppercase tracking-wider text-sm border-2 border-off-white"
                        >
                            <Calendar size={20} />
                            UPCOMING SHOWS
                        </Link>

                        {/* Shop Merch - Outlined button */}
                        <Link
                            href="/products"
                            className="bg-transparent hover:bg-off-white/10 text-off-white font-body font-bold px-8 py-4 flex items-center gap-3 transition-all uppercase tracking-wider text-sm border-2 border-off-white"
                        >
                            <ShoppingBag size={20} />
                            SHOP MERCH
                        </Link>
                    </div>
                </div>
            </div>
        </div>
)}