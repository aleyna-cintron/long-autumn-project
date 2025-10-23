import BandMemberCard from "../components/ui/BandMemberCard";

export default function AboutPage() {
  return (
    <div className="w-full bg-cover bg-center flex flex-col justify-center items-center p-20" style={{ backgroundImage: "url('/boi.JPG')" }}>
        <div className="h-50 text-9xl">
            <h1> About Us </h1>
        </div>
        <main className="flex flex-col gap-8 items-center p-8 bg-black/70 rounded-lg max-w-3xl mx-auto mb-20">
            <h1 className="text-3xl font-bold text-white">About Long Autumn</h1>
            <p className="text-center text-white">
                Long Autumn started in 2019, when lead singer John Mark, bassist Kolbe Maloney, and guitarist Nick Harvey began playing together in a small, rundown garage in Acton, Massachusetts. Drawn together by a shared love of alt-rock and indie music, they soon added drummer Conor Moran, expanding their sound. By January 2020, guitarist and backing vocalist Jam Templeton joined, completing the five-piece lineup.
            </p>
            <p className="text-center text-white">
                Coming out of Boston’s vibrant music scene, Long Autumn quickly took to the stage, developing a live energy that reflected their diverse influences. Over the years, they’ve shared the stage with bands like Valleyheart and The Backfires, honing their performance style along the way.
            </p>
            <p className="text-center text-white">
                Known for crafting emotive alt-rock, the band focuses on creating music that connects with listeners on a personal level. Their upcoming EP, Happy Hour, set for release in early 2024, reflects this evolution, blending their signature sound with new textures and ideas.
            </p>
            <p className="text-center text-white">
                Long Autumn’s story is one of collaboration and growth, rooted in a commitment to authenticity. Their music captures moments, moods, and seasons, inviting listeners to experience it alongside them.
              </p>
            
          </main>
          <div className="h-20 text-6xl text-white mb-10">
              <h2>Meet the Band</h2>
            </div>
          <div className="flex flex-row sm:flex-row md:flex-row gap-8 w-full mx-auto mb-20 mt-8 justify-center">
                <BandMemberCard 
                    name="John Mark"        
                    role="Lead Vocals, Guitar"
                    imageUrl="/johnmark.jpeg"
              />
                <BandMemberCard
                        name="Jam Templeton"
                        role="Guitar, Backing Vocals"
                        imageUrl="/jam.jpeg"
                />
                <BandMemberCard 
                    name="Nick Harvey"    
                    role="Lead Guitar"    
                    imageUrl="/harv.jpeg"
                />
                <BandMemberCard 
                    name="Kolbe Maloney"  
                    role="Bass Guitar"
                    imageUrl="/kolbe.jpeg"
                />
                <BandMemberCard 
                    name="Conor Moran"  
                    role="Drums"    
                    imageUrl="/conor.jpeg"
                />
          </div>      
          <div className="h-20 text-6xl text-white mb-10">
              <h2>Where We Play</h2>
          </div>
          <div className="grid grid-cols-3 gap-8 w-full max-w-4xl mx-auto mb-20 text-white text-2xl text-center">
                <div className="p-4 border rounded-lg bg-black/70">New Hampshire</div>
                <div className="p-4 border rounded-lg bg-black/70">Massachusetts</div>
                <div className="p-4 border rounded-lg bg-black/70">Maine</div>
                <div className="p-4 border rounded-lg bg-black/70">Connecticut</div>
                <div className="p-4 border rounded-lg bg-black/70">Vermont</div>
                <div className="p-4 border rounded-lg bg-black/70">New York</div>
          </div>
          
    </div>
);
}       
