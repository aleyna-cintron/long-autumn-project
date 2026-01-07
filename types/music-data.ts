export interface Track {
  title: string;       // Name of the song
  src: string;         // Path to the MP3 file
  duration?: string;   // Optional, e.g., "3:45"
  coverArt?: string;   // Optional, path to track cover image
}

export interface EP {
  title: string;
  year?: number;
  coverArt?: string;
  backsideArt?: string;  // Add this line
  isLatest?: boolean;
  tracks: Track[];
}