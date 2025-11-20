import { Track } from "./track";

export interface EP {
  title: string;       // Name of the EP
  year?: number;       // Optional release year
  coverArt?: string;   // Optional EP cover image
  tracks: Track[];     // Ordered list of tracks
}
