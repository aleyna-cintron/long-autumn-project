import { EP } from '@/types/music-data'

const basePath = "/audio";

export const tooMinded: EP = {
  id: "too-minded",
  title: "Too Minded",
  year: 2019,
  coverArt: "/EPart/tooMinded.jpg",
  tracks: [
    { title: "Hands in the Soil", src: `${basePath}/EP1_TooMinded/HandsInTheSoil.mp3`, duration: "3:15" },
    { title: "Poison", src: `${basePath}/EP1_TooMinded/Poison.mp3`, duration: "4:03" },
    { title: "Dirt", src: `${basePath}/EP1_TooMinded/Dirt.mp3`, duration: "3:11" },
    { title: "I Could Get Used to This", src: `${basePath}/EP1_TooMinded/ICouldGetUsedToThis.mp3`, duration: "3:38" },
    { title: "Black", src: `${basePath}/EP1_TooMinded/Black.mp3`, duration: "3:30" },
    { title: "Rainbow Hell", src: `${basePath}/EP1_TooMinded/RainbowHell.mp3`, duration: "3:56" },
  ],
};

export const change: EP = {
  id: "change",
  title: "Change",
  year: 2021,
  coverArt: "/EPart/change.png",
  tracks: [
    { title: "Hard One", src: `${basePath}/EP2_Change/HardOne_FinalMasterMP3.mp3`, duration: "3:41" },
    { title: "Carry You Home", src: `${basePath}/EP2_Change/CarryYouHome_FinalMaster.mp3`, duration: "4:26" },
    { title: "Balloon", src: `${basePath}/EP2_Change/Balloon_FinalMaster.mp3`, duration: "3:30" },
    { title: "Them", src: `${basePath}/EP2_Change/Them_FinalMasterMP3.mp3`, duration: "3:26" },
  ],
};

export const coldSun: EP = {
  id: "cold-sun",
  title: "Cold Sun",
  year: 2022,
  coverArt: "/EPart/coldSun.jpg",
  tracks: [
    { title: "D9", src: `${basePath}/EP3_ColdSun/D9.mp3`, duration: "4:21" },
    { title: "Locked Lips", src: `${basePath}/EP3_ColdSun/LockedLips.mp3`, duration: "4:15" },
    { title: "The Sand", src: `${basePath}/EP3_ColdSun/sandmasterFinalFinalFinal4.mp3`, duration: "5:08" },
    { title: "A Million Reasons", src: `${basePath}/EP3_ColdSun/amillionreasonsFinalMaster.mp3`, duration: "3:24" },
    { title: "No Money", src: `${basePath}/EP3_ColdSun/NoMoney.mp3`, duration: "3:07" },
  ],
};

export const happyHour: EP = {
  id: "happy-hour",
  title: "Happy Hour",
  year: 2024,
  coverArt: "/EPart/happyHour.png",
  tracks: [
    { title: "Sky", src: `${basePath}/EP4_HappyHour/01 - Long Autumn - Sky.mp3`, duration: "3:37" },
    { title: "Mood", src: `${basePath}/EP4_HappyHour/02 - Long Autumn - Mood.mp3`, duration: "2:34" },
    { title: "Run", src: `${basePath}/EP4_HappyHour/03 - Long Autumn - Run.mp3`, duration: "3:10" },
    { title: "Surf Munk", src: `${basePath}/EP4_HappyHour/04 - Long Autumn - Surf Munk.mp3`, duration: "2:58" },
  ],
};

export const fading: EP = {
  id: "fading",
  title: "Fading",
  year: 2025,
  coverArt: "/EPart/fading.png",
  backsideArt: "/EPart/fading-backside.jpeg",
  isLatest: true,
  tracks: [
    { title: "My Luck", src: `${basePath}/EP5_Fading/Single1_MyLuck/MyLuckFinalMasterMP3.mp3`, duration: "4:27" },
    { title: "The Medic", src: `${basePath}/EP5_Fading/Single2_TheMedic/TheMedic.mp3`, duration: "4:13" },
  ],
};

// Export all EPs together (newest first)
export const allEPs: EP[] = [fading, happyHour, coldSun, change, tooMinded];