import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Long Autumn — an independent five-piece indie rock band born in a freezing garage in Acton, MA. Influences spanning The Neighbourhood, Slipknot, and John Mayer collide into something ethereal and ecoindustrial. Self-built from the ground up, playing every bar and venue they can find.",
  keywords: [
    "Long Autumn band members",
    "Long Autumn biography",
    "indie band Boston biography",
    "Johnny Mark singer",
    "Long Autumn story",
    "New England indie band",
    "Manchester NH indie band",
    "ecoindustrial music",
    "DIY rock band",
    "independent band story",
    "garage band Acton MA",
  ],
  openGraph: {
    title: "About Long Autumn",
    description:
      "Five friends, a freezing garage, and a sound that's entirely their own. Meet the independent indie rock band from Boston and Manchester, NH.",
    images: [{ url: "/la-running.webp", width: 1600, height: 900, alt: "Long Autumn band running" }],
  },
  alternates: { canonical: "https://longautumnmusic.com/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
