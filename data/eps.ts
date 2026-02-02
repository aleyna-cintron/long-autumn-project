import { EP } from '@/types/music-data'

const basePath = "/audio/change/";

export const change: EP = {
  id: "change",
  title: "Change",
  year: 2022,
  coverArt: "/epArt/change.png",
  tracks: [
    { title: "Hard One", src: `${basePath}HardOne.mp3`, duration: "3:45" },
    { title: "Carry You Home", src: `${basePath}CarryYouHome.mp3`, duration: "4:20" },
    { title: "Balloon", src: `${basePath}Balloon.mp3`, duration: "5:10" },
    { title: "Them", src: `${basePath}Them.wav`, duration: "5:10" },
  ],
};

export const tooMinded: EP = {
  id: "too-minded",
  title: "Too Minded",
  year: 2021,
  coverArt: "/epArt/tooMinded.jpg",
  tracks: [
    { title: "Track 1", src: "/audio/placeholder.mp3", duration: "3:38" },
    { title: "Track 2", src: "/audio/placeholder.mp3", duration: "4:22" },
    { title: "Track 3", src: "/audio/placeholder.mp3", duration: "3:48" },
  ],
};

export const coldSun: EP = {
  id: "cold-sun",
  title: "Cold Sun",
  year: 2023,
  coverArt: "/epArt/coldSun.jpg",
  tracks: [
    { title: "Track 1", src: "/audio/placeholder.mp3", duration: "3:30" },
    { title: "Track 2", src: "/audio/placeholder.mp3", duration: "4:05" },
    { title: "Track 3", src: "/audio/placeholder.mp3", duration: "3:42" },
  ],
};

export const happyHour: EP = {
  id: "happy-hour",
  title: "Happy Hour",
  year: 2024,
  coverArt: "/epArt/happyHour.png",
  tracks: [
    { title: "Track 1", src: "/audio/placeholder.mp3", duration: "3:45" },
    { title: "Track 2", src: "/audio/placeholder.mp3", duration: "4:12" },
    { title: "Track 3", src: "/audio/placeholder.mp3", duration: "3:58" },
  ],
};

export const fading: EP = {
  id: "fading",
  title: "Fading",
  year: 2025,
  coverArt: "/epArt/fading.png",
  backsideArt: "/epArt/fading-backside.jpeg",
  isLatest: true,
  tracks: [
    { title: "Track 1", src: "/audio/placeholder.mp3", duration: "3:30" },
    { title: "Track 2", src: "/audio/placeholder.mp3", duration: "4:15" },
    { title: "Track 3", src: "/audio/placeholder.mp3", duration: "3:52" },
    { title: "Track 4", src: "/audio/placeholder.mp3", duration: "4:05" },
  ],
};

// Export all EPs together (newest first)
export const allEPs: EP[] = [fading, happyHour, coldSun, change, tooMinded];