import { EP } from '../types/ep'
const basePath = "/audio/change/";

export const change: EP = {
  title: "change",
  year: 2023,
  coverArt: "/ChangeEP_Art.png",
  tracks: [
    { title: "Hard One", src: `${basePath}HardOne.mp3`, duration: "3:45" },
    { title: "Carry You Home", src: `${basePath}CarryYouHome.mp3`, duration: "4:20" },
    { title: "Balloon", src: `${basePath}Balloon.mp3`, duration: "5:10" },
    { title: "Them", src: `${basePath}Them.wav`, duration: "5:10" },
  ],
};


export const tooMinded: EP = {
  title: "Second EP",
  year: 2024,
  coverArt: "/ChangeEP_Art.png",
   tracks: [
    { title: "Hard One", src: "/audio/HardOne.mp3", duration: "3:45" },
    { title: "Carry You Home", src: "/audio/CarryYouHome.mp3", duration: "4:20" },
    { title: "Balloon", src: "/audio/Balloon.mp3", duration: "5:10" },
    { title: "Them", src: "/audio/Them.wav", duration: "5:10" },
  ],
};

// Export all EPs together
export const allEPs: EP[] = [change, tooMinded];
