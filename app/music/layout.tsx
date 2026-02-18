import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music",
  description:
    "Stream Long Autumn's full discography — five independently released EPs from 'Too Minded' (2019) to 'Fading' (2025). Featuring tracks like My Luck, Sky, D9, and Hands in the Soil. All self-produced indie rock from Boston and Manchester, NH.",
  keywords: [
    "Long Autumn music",
    "Long Autumn EP",
    "Long Autumn Fading",
    "Long Autumn Happy Hour",
    "Long Autumn Cold Sun",
    "Long Autumn Too Minded",
    "Long Autumn Change",
    "indie rock stream",
    "Long Autumn songs",
    "My Luck Long Autumn",
    "The Medic Long Autumn",
    "independent EP Boston",
    "DIY indie rock",
  ],
  openGraph: {
    title: "Music — Long Autumn",
    description:
      "Five independently released EPs. Stream the full discography from Long Autumn.",
    images: [{ url: "/EPart/fading.webp", width: 800, height: 800, alt: "Fading EP cover art" }],
  },
  alternates: { canonical: "https://longautumnmusic.com/music" },
};

export default function MusicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Preload the LCP image — always the latest EP on initial load */}
      <link rel="preload" as="image" href="/EPart/fading.webp" fetchPriority="high" />
      {children}
    </>
  );
}
