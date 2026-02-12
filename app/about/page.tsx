import OurStory from '../components/about/OurStory';
import BandMembersSection from '../components/about/BandMembersSection';
import Image from 'next/image';
import Link from 'next/link';
import { FileText } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="w-full bg-transparent text-foreground scroll-smooth">
      {/* Our Story Section */}
      <section className="min-h-screen flex items-center justify-center pt-24 md:pt-36 lg:pt-40 px-8 md:px-16 lg:px-20 pb-20">
        <OurStory />
      </section>

      {/* Band Members Section */}
      <section className="band-section relative">
        <BandMembersSection />
      </section>
      
      {/* Band Running Section */}
      <section className="px-8 md:px-16 lg:px-20 3xl:px-32 py-16 md:py-20 w-full">
        <div className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-350 4xl:max-w-400 mx-auto">
          <Image
            src="/la-running.webp"
            alt="Long Autumn band running"
            width={1600}
            height={900}
            priority
            className="w-full h-auto rounded-lg 3xl:rounded-xl shadow-2xl"
          />
        </div>
      </section>

      {/* Booking & Press CTA */}
      <section className="pb-20 px-8">
        <div className="max-w-xl mx-auto bg-black/60 backdrop-blur-sm border border-white/10 rounded-sm p-8 text-center">
          <h3 className="text-lg md:text-xl font-bold uppercase tracking-widest text-text-primary mb-6">
            Booking &amp; Press
          </h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto text-center px-8 py-3 border-2 border-brutal-red uppercase tracking-widest font-semibold text-brutal-red hover:bg-brutal-red hover:text-black transition-all duration-300 text-sm md:text-base"
            >
              Booking Inquiry
            </Link>
            <Link
              href="/epk"
              className="w-full sm:w-auto text-center inline-flex items-center justify-center gap-3 px-8 py-3 border-2 border-white/30 uppercase tracking-widest font-semibold text-text-secondary hover:border-brutal-red hover:text-brutal-red transition-all duration-300 text-sm md:text-base"
            >
              <FileText className="w-4 h-4" />
              Press Kit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
