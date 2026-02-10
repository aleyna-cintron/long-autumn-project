import type { Metadata } from "next";
import { Geist, Geist_Mono, Permanent_Marker, Roboto_Condensed, Courier_Prime } from "next/font/google";
import "./styles.css";
import { CartStoreProvider } from "./store/cart-store-provider";
import NavBar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { AtmosphericTexture } from "./components/ui/AtmosphericTexture";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const permanentMarker = Permanent_Marker({
  variable: "--font-permanent-marker",
  weight: "400",
  subsets: ["latin"],
});

const robotoCondensed = Roboto_Condensed({
  variable: "--font-roboto-condensed",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://longautumnmusic.com"),
  title: {
    default: "Long Autumn | Indie Rock Band from Boston, MA & Manchester, NH",
    template: "%s | Long Autumn",
  },
  description:
    "Long Autumn is an independent five-piece indie rock band from Boston, MA and Manchester, NH. Born in a freezing garage in Acton, MA, the band blends influences from The Neighbourhood to Slipknot into an ethereal, ecoindustrial sound that's entirely their own. Stream music, see live shows, and shop official merch.",
  keywords: [
    "Long Autumn",
    "Long Autumn band",
    "indie rock Boston",
    "indie band Manchester NH",
    "independent band Boston",
    "New England indie rock",
    "DIY band Boston",
    "Long Autumn music",
    "Long Autumn merch",
    "Long Autumn live shows",
    "ecoindustrial",
    "ethereal indie rock",
    "garage band Boston",
    "underground rock New England",
  ],
  authors: [{ name: "Long Autumn" }],
  creator: "Long Autumn",
  icons: {
    icon: "/LA_Logo_Clean_White.png",
    apple: "/LA_Logo_Clean_White.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Long Autumn",
    title: "Long Autumn | Indie Rock Band from Boston, MA & Manchester, NH",
    description:
      "Independent five-piece indie rock band with an ethereal, ecoindustrial sound. Born in a garage, built on the road. Stream music, see live shows, and shop official gear.",
    images: [{ url: "/LA_Logo_Clean_White.png", width: 800, height: 600, alt: "Long Autumn logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Long Autumn | Indie Rock from Boston & Manchester",
    description:
      "Independent five-piece indie rock from New England. Born in a garage, built on the road.",
    images: ["/LA_Logo_Clean_White.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://longautumnmusic.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body 
        className={`${geistSans.variable} ${geistMono.variable} ${permanentMarker.variable} ${robotoCondensed.variable} ${courierPrime.variable} antialiased text-off-white min-h-screen`}
      > 
        <AtmosphericTexture></AtmosphericTexture>

        <CartStoreProvider>
          <NavBar />
          <main className="min-h-screen relative z-0">
            {children}
          </main>
          <Footer />
          <Toaster position="bottom-right" theme="dark" />
        </CartStoreProvider>
      </body>
    </html>
  );
}