import type { Metadata } from "next";
import { Geist, Geist_Mono, Permanent_Marker, Roboto_Condensed, Courier_Prime } from "next/font/google";
import "./styles.css";
import { CartStoreProvider } from "./store/cart-store-provider";
import NavBar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

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
  weight: ["700", "900"],
  subsets: ["latin"],
});

const courierPrime = Courier_Prime({
  variable: "--font-courier-prime",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Long Autumn",
  description: "Alt-rock from Manchester, NH / Boston, MA",
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
        {/* Animated cosmic background - global */}
        <div 
          className="fixed top-0 left-0 w-full h-full animate-cosmic-drift"
          style={{
            backgroundImage: 'url("/cosmic-bg.jpeg")',
            backgroundSize: '120%',
            backgroundPosition: 'center',
            zIndex: -20,
          }}
        />
        
        {/* Dark overlay for better text readability */}
        <div 
          className="fixed top-0 left-0 w-full h-full bg-black/40"
          style={{ zIndex: -10 }}
        />

        <CartStoreProvider>
          <NavBar />
          <main className="min-h-screen relative z-0">
            {children}
          </main>
          <Footer />
        </CartStoreProvider>
      </body>
    </html>
  );
}