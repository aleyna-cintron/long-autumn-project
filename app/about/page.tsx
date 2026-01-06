import OurStory from "../components/about/OurStory";
import BandMemberCard from "../components/ui/BandMemberCard";

export default function AboutPage() {
    return (
      
        <div className="w-full min-h-screen bg-black text-white pt-32 md:pt-36 lg:pt-40 px-8 md:px-16 lg:px-20 pb-8 md:pb-16 lg:pb-20">
            <OurStory></OurStory>
      {/* Meet the Band Section */}
      <div className="max-w-7xl mx-auto mb-20 px-4">
        <h2 className="text-6xl md:text-7xl font-bold mb-20 uppercase tracking-wider relative">
          <span className="relative z-10">Meet the Band</span>
          <div className="absolute top-1/2 left-0 w-32 h-px bg-brutal-red opacity-50"></div>
        </h2>
        
        <div className="flex flex-col gap-32">
          {/* John Mark - Left aligned */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brutal-red opacity-20 rounded-lg"></div>
                <BandMemberCard 
                  name="John Mark"        
                  role="Lead Vocals, Guitar"
                  imageUrl="/johnmark.jpeg"
                  bio="The voice that started it all. John's emotive delivery brings depth to every lyric, drawing inspiration from artists like Billie Eilish and The Neighbourhood. His raw, honest vocal style captures the essence of Long Autumn's sound, connecting with listeners on a deeply personal level."
                  variant="left"
                />
              </div>
              <div className="lg:col-span-5 flex items-center justify-end">
                <div className="text-9xl font-bold text-brutal-red opacity-10 select-none">01</div>
              </div>
            </div>
          </div>

          {/* Jam Templeton - Right aligned */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 flex items-center">
                <div className="text-9xl font-bold text-brutal-red opacity-10 select-none">02</div>
              </div>
              <div className="lg:col-span-7 relative">
                <div className="absolute -top-4 -right-4 w-full h-full border-2 border-brutal-red opacity-20 rounded-lg"></div>
                <BandMemberCard
                  name="Jam Templeton"
                  role="Guitar, Backing Vocals"
                  imageUrl="/jam.jpg"
                  bio="Jam's intricate guitar work and harmonies add layers of texture to Long Autumn's sound. Joining in January 2020, he brought a fresh perspective and completed the band's sonic identity. His versatility allows him to seamlessly shift between melodic leads and atmospheric rhythms."
                  variant="right"
                />
              </div>
            </div>
          </div>

          {/* Nick Harvey - Left aligned */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 relative">
                <div className="absolute top-4 left-4 w-full h-full bg-brutal-red opacity-5 rounded-lg"></div>
                <BandMemberCard 
                  name="Nick Harvey"    
                  role="Lead Guitar"    
                  imageUrl="/harv.jpg"
                  bio="One of the original three members, Nick's guitar work is the backbone of Long Autumn's sound. His ability to craft memorable riffs and soaring solos has been integral to the band's identity since day one. Nick's playing bridges the gap between indie sensibility and alt-rock power."
                  variant="left"
                />
              </div>
              <div className="lg:col-span-5 flex items-center justify-end">
                <div className="text-9xl font-bold text-brutal-red opacity-10 select-none">03</div>
              </div>
            </div>
          </div>

          {/* Kolbe Maloney - Right aligned */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 flex items-center">
                <div className="text-9xl font-bold text-brutal-red opacity-10 select-none">04</div>
              </div>
              <div className="lg:col-span-7 relative">
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brutal-red opacity-20 rounded-lg"></div>
                <BandMemberCard 
                  name="Kolbe Maloney"  
                  role="Bass Guitar"
                  imageUrl="/home-kolbe.jpg"
                  bio="Kolbe's bass lines provide the foundation that holds Long Autumn together. As one of the founding members, his grooves anchor the band's sound while adding subtle complexity. His intuitive sense of rhythm creates the perfect canvas for the rest of the band to build upon."
                  variant="right"
                />
              </div>
            </div>
          </div>

          {/* Conor Moran - Left aligned */}
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 relative">
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brutal-red opacity-20 rounded-lg"></div>
                <BandMemberCard 
                  name="Conor Moran"  
                  role="Drums"    
                  imageUrl="/conor.jpeg"
                  bio="Conor's dynamic drumming drives Long Autumn's live energy. The fourth member to join in 2019, he brought the power and precision needed to take the band from garage jams to the stage. His ability to shift from thunderous beats to subtle grooves gives each song its own character."
                  variant="left"
                />
              </div>
              <div className="lg:col-span-5 flex items-center justify-end">
                <div className="text-9xl font-bold text-brutal-red opacity-10 select-none">05</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Where We Play Section */}
      <div className="max-w-7xl mx-auto py-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Where We Play</h2>
        <p className="text-gray-400 text-sm mb-12">Shows within a 4-hour radius of Boston</p>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          <div className="px-6 py-3 border border-gray-600 rounded-full text-gray-300 text-sm hover:border-brutal-red hover:text-white transition-colors duration-300">
            New Hampshire
          </div>
          <div className="px-6 py-3 border border-gray-600 rounded-full text-gray-300 text-sm hover:border-brutal-red hover:text-white transition-colors duration-300">
            Massachusetts
          </div>
          <div className="px-6 py-3 border border-gray-600 rounded-full text-gray-300 text-sm hover:border-brutal-red hover:text-white transition-colors duration-300">
            Maine
          </div>
          <div className="px-6 py-3 border border-gray-600 rounded-full text-gray-300 text-sm hover:border-brutal-red hover:text-white transition-colors duration-300">
            Vermont
          </div>
          <div className="px-6 py-3 border border-gray-600 rounded-full text-gray-300 text-sm hover:border-brutal-red hover:text-white transition-colors duration-300">
            Connecticut
          </div>
          <div className="px-6 py-3 border border-gray-600 rounded-full text-gray-300 text-sm hover:border-brutal-red hover:text-white transition-colors duration-300">
            New York
          </div>
        </div>
      </div>

      {/* Closing Quote Section */}
      <div className="max-w-4xl mx-auto text-center py-32 border-t border-gray-800">
        <blockquote className="text-3xl md:text-4xl lg:text-5xl font-light leading-relaxed text-gray-200">
          "Long Autumn's story is one of collaboration and growth, rooted in a commitment to authenticity"
        </blockquote>
      </div>
    </div>
  );
}