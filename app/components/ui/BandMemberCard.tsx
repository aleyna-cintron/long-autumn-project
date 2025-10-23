// create a band member card component that takes in name, role, and image url as props and displays them in a card format
import Image from "next/image";

// Define the props for the BandMemberCard component
interface BandMemberCardProps {
    name: string;
    role: string;
    imageUrl: string;
}

export default function BandMemberCard({ name, role, imageUrl }: BandMemberCardProps) {
  return (
    <div className="flex flex-col items-center rounded-lg shadow-md p-4">
      <Image src={imageUrl} alt={`${name}'s photo`} width={300} height={1000} className="mb-4 rounded-md" />
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-white-600">{role}</p>
    </div>
  );
}