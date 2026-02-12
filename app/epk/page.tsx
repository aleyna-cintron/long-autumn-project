import Image from "next/image";
import { Download, Mail, MapPin, Calendar, Music, Users, Radio } from "lucide-react";
import { SiSpotify, SiApplemusic, SiInstagram, SiYoutube, SiFacebook } from "react-icons/si";
import { PanelCard } from "../components/ui/PanelCard";
import PageHeader from "../components/ui/PageHeader";
import { Button } from "../components/ui/Button";
import EpkTrackPlayer from "../components/epk/EpkTrackPlayer";
import EpkDownloadButtons from "../components/epk/EpkDownloadButtons";
import type { EpkTrack } from "../components/epk/EpkTrackPlayer";
import { allEPs } from "@/data/eps";

const pressPhotos = [
  { webp: "/epk/band-portrait-1.webp", jpg: "/epk/band-portrait-1.jpg", caption: "Band Portrait", w: 5397, h: 3598 },
  { webp: "/epk/band-portrait-2.webp", jpg: "/epk/band-portrait-2.jpg", caption: "Band Portrait", w: 3541, h: 3541 },
  { webp: "/epk/band-live-1.webp", jpg: "/epk/band-live-1.jpg", caption: "Live Performance", w: 2016, h: 1512 },
  { webp: "/epk/band-live-2.webp", jpg: "/epk/band-live-2.jpg", caption: "Live Performance", w: 3024, h: 4032 },
  { webp: "/epk/jam-templeton-live.webp", jpg: "/epk/jam-templeton-live.jpg", caption: "Jam Templeton", w: 2048, h: 1638 },
  { webp: "/epk/nick-harvey-live.webp", jpg: "/epk/nick-harvey-live.jpg", caption: "Nick Harvey", w: 1024, h: 819 },
];

const featuredTracks: EpkTrack[] = [
  { title: "Surf Munk", src: "/audio/EP4_HappyHour/04 - Long Autumn - Surf Munk.mp3", duration: "2:58", epName: "Happy Hour", epYear: 2024, coverArt: "/EPart/happyHour.webp" },
  { title: "My Luck", src: "/audio/EP5_Fading/Single1_MyLuck/MyLuckFinalMasterMP3.mp3", duration: "4:27", epName: "Fading", epYear: 2025, coverArt: "/EPart/fading.webp" },
  { title: "No Money", src: "/audio/EP3_ColdSun/NoMoney.mp3", duration: "3:07", epName: "Cold Sun", epYear: 2022, coverArt: "/EPart/coldSun.webp" },
  { title: "The Medic", src: "/audio/EP5_Fading/Single2_TheMedic/TheMedic.mp3", duration: "4:13", epName: "Fading", epYear: 2025, coverArt: "/EPart/fading.webp" },
];

const members = [
  { name: "Johnny Mark", role: "Lead Vocals" },
  { name: "Nick Harvey", role: "Guitar" },
  { name: "Jam Templeton", role: "Guitar & Backing Vocals" },
  { name: "Conor Moran", role: "Drums" },
  { name: "Kolbe Maloney", role: "Bass" },
];

const socialLinks = [
  { href: "https://instagram.com/longautumnmusic", icon: SiInstagram, label: "Instagram" },
  { href: "https://open.spotify.com/artist/3WChl0j61LISLXZn9X9Skm", icon: SiSpotify, label: "Spotify" },
  { href: "https://music.apple.com/us/artist/long-autumn/1481105151", icon: SiApplemusic, label: "Apple Music" },
  { href: "https://www.youtube.com/@LongAutumn", icon: SiYoutube, label: "YouTube" },
  { href: "https://facebook.com/longautumnmusic", icon: SiFacebook, label: "Facebook" },
];

export default function EpkPage() {
  return (
    <div className="w-full min-h-screen text-text-primary md:pt-20 lg:pt-24 pb-20">
      <PageHeader
        title="Press Kit"
        subtitle="Booking, press, and media resources"
      />

      <div className="max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl 3xl:max-w-300 4xl:max-w-350 mx-auto px-4 space-y-10 md:space-y-16 mt-10 md:mt-16">

        {/* Bio Section */}
        <section>
          <PanelCard title="About Long Autumn">
            <div className="p-4 md:p-0 space-y-6">
              <p className="text-text-secondary leading-relaxed text-base md:text-lg">
                Long Autumn is a five-piece indie rock band from Boston, MA and Manchester, NH. Formed in late 2019 in a garage in Acton, Massachusetts, the band blends influences ranging from The Neighbourhood to Slipknot into an ethereal, ecoindustrial sound that feels familiar yet distinctly their own. With five independently released EPs and a growing live presence across New England, Long Autumn is a fully independent, self-produced project built from the ground up.
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                <div className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 bg-muted/30 rounded-sm border border-border">
                  <Music className="w-4 h-4 md:w-5 md:h-5 text-brutal-red shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider">Genre</p>
                    <p className="text-xs md:text-sm text-text-primary font-medium">Indie Rock</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 bg-muted/30 rounded-sm border border-border">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-brutal-red shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider">Location</p>
                    <p className="text-xs md:text-sm text-text-primary font-medium">Boston & Manchester</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 bg-muted/30 rounded-sm border border-border">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5 text-brutal-red shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider">Formed</p>
                    <p className="text-xs md:text-sm text-text-primary font-medium">2019</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:gap-3 p-2.5 md:p-3 bg-muted/30 rounded-sm border border-border">
                  <Users className="w-4 h-4 md:w-5 md:h-5 text-brutal-red shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-wider">Members</p>
                    <p className="text-xs md:text-sm text-text-primary font-medium">5-piece</p>
                  </div>
                </div>
              </div>

              {/* Members List */}
              <div className="border border-border rounded-sm overflow-hidden">
                {members.map((member, i) => (
                  <div
                    key={member.name}
                    className={`flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 py-2.5 sm:py-3 ${
                      i < members.length - 1 ? "border-b border-border" : ""
                    }`}
                  >
                    <span className="text-text-primary font-medium text-sm md:text-base">{member.name}</span>
                    <span className="text-gray-400 text-xs sm:text-sm">{member.role}</span>
                  </div>
                ))}
              </div>

              {/* Press Highlights */}
              <div className="space-y-2">
                <p className="text-xs md:text-sm text-gray-400 uppercase tracking-wider font-medium">Press Highlights</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-sm border border-border">
                    <Radio className="w-4 h-4 md:w-5 md:h-5 text-brutal-red shrink-0 mt-0.5" />
                    <p className="text-sm text-text-secondary">
                      <span className="text-text-primary font-medium">&quot;Surf Munk&quot;</span> featured on 92.5 The River&apos;s Homegrown Music Showcase (2024)
                    </p>
                  </div>
                  <div className="flex items-start gap-3 p-3 bg-muted/30 rounded-sm border border-border">
                    <Radio className="w-4 h-4 md:w-5 md:h-5 text-brutal-red shrink-0 mt-0.5" />
                    <p className="text-sm text-text-secondary">
                      <span className="text-text-primary font-medium">&quot;I Can Get Used to This&quot;</span> featured on 92.5 The River&apos;s Homegrown Music Showcase &mdash; Best of 2020
                    </p>
                  </div>
                </div>
              </div>

              {/* Download Buttons */}
              <div className="print:hidden">
                <EpkDownloadButtons
                  photos={pressPhotos.map((p) => ({ url: p.jpg, filename: p.jpg.split("/").pop()! }))}
                  tracks={featuredTracks.map((t) => ({ url: t.src, filename: `${t.title} - Long Autumn.mp3` }))}
                />
              </div>
            </div>
          </PanelCard>
        </section>

        {/* Press Photos Section */}
        <section>
          <PanelCard title="Press Photos">
            <div className="p-4 md:p-0">
              <p className="text-text-secondary text-sm md:text-base mb-6">
                High-resolution press photos available for download. Click the download icon on any image for the full-resolution JPG.
              </p>
              <div className="columns-2 lg:columns-3 gap-4 md:gap-6">
                {pressPhotos.map((photo) => (
                  <div key={photo.jpg} className="break-inside-avoid mb-4 md:mb-6 group relative rounded-lg overflow-hidden">
                    <Image
                      src={photo.webp}
                      alt={`Long Autumn - ${photo.caption}`}
                      width={photo.w}
                      height={photo.h}
                      className="w-full h-auto transition-transform duration-300 md:group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                    <a
                      href={photo.jpg}
                      download
                      className="absolute top-2 right-2 p-2 bg-black/70 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-brutal-red"
                    >
                      <Download className="w-4 h-4 text-white" />
                    </a>
                    <p className="absolute bottom-0 left-0 right-0 p-2 text-xs text-white/80 bg-black/50 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {photo.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </PanelCard>
        </section>

        {/* Featured Tracks Section */}
        <section>
          <PanelCard title="Featured Tracks">
            <div className="p-4 md:p-0">
              <EpkTrackPlayer tracks={featuredTracks} />
            </div>
          </PanelCard>
        </section>

        {/* Discography Section */}
        <section>
          <PanelCard title="Discography">
            <div className="p-4 md:p-0">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
                {allEPs.filter((ep) => ep.coverArt).map((ep) => (
                  <div key={ep.id} className="flex flex-col items-center gap-2">
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                      <Image
                        src={ep.coverArt!}
                        alt={`${ep.title} EP cover`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      />
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-medium text-text-primary">{ep.title}</p>
                      <p className="text-xs text-gray-400">{ep.year}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-8 justify-center">
                <Button
                  href="https://open.spotify.com/artist/3WChl0j61LISLXZn9X9Skm"
                  label="Listen on Spotify"
                  variant="light"
                  size="sm"
                  external
                />
                <Button
                  href="https://music.apple.com/us/artist/long-autumn/1481105151"
                  label="Listen on Apple Music"
                  variant="light"
                  size="sm"
                  external
                />
              </div>
            </div>
          </PanelCard>
        </section>

        {/* Contact & Booking Section */}
        <section>
          <PanelCard title="Contact & Booking">
            <div className="p-4 md:p-0 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-sm border border-border">
                  <Mail className="w-5 h-5 text-brutal-red shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Email</p>
                    <a href="mailto:longautumnband@gmail.com" className="text-sm text-text-primary hover:text-brutal-red transition-colors">
                      longautumnband@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-muted/30 rounded-sm border border-border">
                  <MapPin className="w-5 h-5 text-brutal-red shrink-0" />
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wider">Booking Radius</p>
                    <p className="text-sm text-text-primary">Within 4 hours of Boston</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button href="/contact" label="Send Booking Inquiry" variant="primary" size="sm" />
                <Button href="/shows" label="View Upcoming Shows" variant="outline" size="sm" />
              </div>

              {/* Social Links */}
              <div className="flex items-center justify-center gap-4 pt-4 border-t border-border">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 text-gray-400 hover:text-brutal-red transition-colors"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </PanelCard>
        </section>
      </div>
    </div>
  );
}
