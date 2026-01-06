// create a band member card component that takes in name, role, and image url as props and displays them in a card format
import Image from "next/image";

// Define the props for the BandMemberCard component
interface BandMemberCardProps {
    name: string;
    role: string;
    imageUrl: string;
    bio: string;
    variant?: "left" | "right"; // Layout variant
}

export default function BandMemberCard({ name, role, imageUrl, bio, variant = "left" }: BandMemberCardProps) {
  return (
    <div className="relative group">
      {/* Image */}
      <div className="relative overflow-hidden rounded-lg">
        <Image 
          src={imageUrl} 
          alt={`${name}'s photo`}
          width={0}
          height={0}
          sizes="100vw"
          className="rounded-lg grayscale object-cover w-full h-auto transition-all duration-700 group-hover:grayscale-0 group-hover:saturate-50 group-hover:scale-110"
        />
        {/* Dark gradient overlay - always visible at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
        
        {/* Name and Role - Always visible at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 z-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-1 uppercase tracking-tight">{name}</h2>
          <p className="text-brutal-red text-base lg:text-lg font-semibold uppercase tracking-wide">{role}</p>
        </div>
      </div>

      {/* Bio Text - Slides up from below image on hover */}
      <div className="absolute -bottom-4 left-0 right-0 mx-4 bg-black/95 backdrop-blur-sm p-6 lg:p-8 rounded-lg border border-brutal-red/20 shadow-2xl transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out z-30">
        <p className="text-gray-300 text-sm leading-relaxed">
          {bio}
        </p>
      </div>
    </div>
  );
}