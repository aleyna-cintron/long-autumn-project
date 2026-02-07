'use client';
import RotatingFlipCard from '../ui/RotatingFlipCard';
import { EP } from '@/types/music-data';

interface RotatingAlbumArtProps {
  ep: EP;
}

export default function RotatingAlbumArt({ ep }: RotatingAlbumArtProps) {
  return (
    <RotatingFlipCard
      front={
        <img
          src={ep.coverArt}
          alt={`${ep.title} front`}
          className="w-90% h-90% object-cover"
        />
      }
      back={
        <img
          src={ep.backsideArt}
          alt={`${ep.title} back`}
          className="w-full h-full object-cover"
        />
      }
    />
  );
}
