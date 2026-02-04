'use client';
import LogoLoop from "@/components/LogoLoop";

interface ShowPoster {
  src: string;
  alt: string;
  href?: string;
}

interface ShowPosterLoopProps {
  posters: ShowPoster[];
  height?: number;
  speed?: number;
  direction?: "left" | "right";
}

export default function ShowPosterLoop({ posters, height = 400, speed = 40, direction = "left" }: ShowPosterLoopProps) {
  // Calculate logoHeight to fit within container including hover scale padding
  const logoHeight = Math.floor(height / 1.2);

  return (
    <div
      style={{
        height,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <LogoLoop
        logos={posters}
        speed={speed}
        direction={direction}
        logoHeight={logoHeight}
        gap={40}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#0B0B0D"
        ariaLabel="Past live shows"
      />
    </div>
  );
}
