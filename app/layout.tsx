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
        className={`${geistSans.variable} ${geistMono.variable} ${permanentMarker.variable} ${robotoCondensed.variable} ${courierPrime.variable} antialiased bg-deep-black text-off-white min-h-screen`}
      >
        <CartStoreProvider>
          <NavBar />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CartStoreProvider>
      </body>
    </html>
  );
}