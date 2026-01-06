export interface Track {
  title: string;       // Name of the song
  src: string;         // Path to the MP3 file
  duration?: string;   // Optional, e.g., "3:45"
  coverArt?: string;   // Optional, path to track cover image
}

export interface EP {
  title: string;       // Name of the EP
  year?: number;       // Optional release year
  coverArt?: string;   // Optional EP cover image
  isLatest?: boolean;  // Optional flag for latest release
  tracks: Track[];     // Ordered list of tracks
}