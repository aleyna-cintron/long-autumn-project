export default function OurStory() {
  return (
    <div className="w-full bg-background/90 rounded-lg text-accent p-2 md:p-12 lg:p-16 pt-20 md:pt-24 lg:pt-30">      {/* Our Story Section - Two Column Layout */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-2 text-foreground">Our Story</h1>
            <div className="w-16 h-1 bg-wine mb-8"></div>
            
            <div className="space-y-6 text-foreground leading-relaxed">
              <p>
                Long Autumn started in 2019, when lead singer John Mark, bassist Kolbe Maloney, and guitarist Nick Harvey began playing together in a small, rundown garage in Acton, Massachusetts. Drawn together by a shared love of alt-rock and indie music, they soon added drummer Conor Moran, expanding their sound. By January 2020, guitarist and backing vocalist Jam Templeton joined, completing the five-piece lineup.
              </p>
              <p>
                Coming out of Boston's vibrant music scene, Long Autumn quickly took to the stage, developing a live energy that reflected their diverse influences. Over the years, they've shared the stage with bands like Valleyheart and The Backfires, honing their performance style along the way.
              </p>
              <p>
                Known for crafting emotive alt-rock, the band focuses on creating music that connects with listeners on a personal level. Their upcoming EP, Happy Hour, set for release in early 2024, reflects this evolution, blending their signature sound with new textures and ideas.
              </p>
            </div>
          </div>
          
          {/* Right Column - Images */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="overflow-hidden rounded">
                <img 
                  src="three.jpg" 
                  alt="Private Property Sign" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="overflow-hidden rounded">
                <img 
                  src="two.jpg" 
                  alt="Basketball Hoop" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="overflow-hidden rounded">
              <img 
                src="one.jpg" 
                alt="Band by the water" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}