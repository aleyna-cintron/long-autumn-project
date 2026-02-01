"use client";
import OurStory from '../components/about/OurStory';
import BandMembersSection from '../components/about/BandMembersSection';
import WhereWePlay from '../components/about/WhereWePlay';

export default function AboutPage() {
  return (
    <div className="w-full bg-transparent text-foreground scroll-smooth snap-y snap-mandatory overflow-y-auto">
      {/* Our Story Section */}
      <section className="min-h-screen snap-start flex items-center justify-center pt-32 md:pt-36 lg:pt-40 px-8 md:px-16 lg:px-20 pb-20">
        <OurStory />
      </section>

      {/* Band Members Section */}
      <section className="band-section relative snap-start">
        <BandMembersSection />
      </section>

      {/* Where We Play Section */}
      <section className="min-h-screen snap-start flex items-center justify-center px-8 md:px-16 lg:px-20 py-20">
        <WhereWePlay />
      </section>
    </div>
  );
}
