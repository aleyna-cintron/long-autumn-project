import { Play } from "lucide-react";

export default function FeaturedTrackSection() {
  return (
    <section className="bg-deep-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="font-feature text-4xl font-bold text-off-white mb-2">
            Featured Track
          </h2>
          <div className="w-16 h-1 bg-brutal-red mx-auto" />
        </div>

        {/* Spotify Player Container */}
        <div className="bg-near-black border border-neutral-800 p-12 flex flex-col items-center justify-center min-h-[400px]">
          {/* Play Icon */}
          <div className="mb-6">
            <Play size={64} className="text-brutal-red" fill="currentColor" />
          </div>

          {/* Placeholder Text */}
          <p className="font-body text-off-white text-lg font-bold mb-2">
            Spotify Player
          </p>
          <p className="font-body text-off-white/60 text-sm">
            Embed your latest single or album here
          </p>

          {/* Optional: Uncomment and replace with your actual Spotify embed */}
          {/* 
          <iframe 
            src="https://open.spotify.com/embed/track/YOUR_TRACK_ID" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
            className="mt-6"
          />
          */}
        </div>
      </div>
    </section>
  );
}