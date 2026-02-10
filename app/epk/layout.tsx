import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Electronic Press Kit",
  description:
    "Long Autumn's official EPK — bio, press photos, featured tracks, discography, and booking information. Independent five-piece indie rock band from Boston, MA and Manchester, NH. Available for shows within a 4-hour radius of Boston.",
  keywords: [
    "Long Autumn EPK",
    "Long Autumn press kit",
    "Long Autumn booking",
    "indie rock EPK",
    "Long Autumn bio",
    "Long Autumn press photos",
    "book Long Autumn",
    "Long Autumn media",
    "indie band press kit Boston",
  ],
  openGraph: {
    title: "Electronic Press Kit — Long Autumn",
    description:
      "Bio, press photos, featured tracks, and booking info for Long Autumn.",
    images: [
      {
        url: "/epk/band-portrait-2.webp",
        width: 1200,
        height: 800,
        alt: "Long Autumn band photo",
      },
    ],
  },
  alternates: { canonical: "https://longautumnmusic.com/epk" },
};

export default function EpkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
