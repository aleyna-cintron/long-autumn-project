"use client";
import OurStory from '../components/about/OurStory';
import BandMembersSection from '../components/about/BandMembersSection';
import WhereWePlay from '../components/about/WhereWePlay';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="w-full bg-transparent text-foreground scroll-smooth">
      {/* Our Story Section */}
      <section className="min-h-screen flex items-center justify-center pt-32 md:pt-36 lg:pt-40 px-8 md:px-16 lg:px-20 pb-20">
        <OurStory />
      </section>

      {/* Band Members Section */}
      <section className="band-section relative">
        <BandMembersSection />
      </section>

      {/* Where We Play Section */}
      {/* <section className="px-8 md:px-16 lg:px-20 py-16 md:py-20">
        <WhereWePlay />
      </section> */}

      {/* Band Running Section */}
      <section className="px-8 md:px-16 lg:px-20 3xl:px-32 py-16 md:py-20 w-full">
        <div className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-350 4xl:max-w-400 mx-auto">
          <Image
            src="/la-running.jpg"
            alt="Long Autumn band running"
            width={1600}
            height={900}
            priority
            className="w-full h-auto rounded-lg 3xl:rounded-xl shadow-2xl"
          />
        </div>
      </section>
    </div>
  );
}
