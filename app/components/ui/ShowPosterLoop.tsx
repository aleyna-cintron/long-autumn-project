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
  return (
    <div>
      <LogoLoop
        logos={posters}
        logoHeight={400}  // 400px on desktop, CSS handles mobile
        speed={speed}
        direction={direction}
        gap={40}
        scaleOnHover
        fadeOut
        fadeOutColor="#0B0B0D"
        ariaLabel="Past live shows"
      />
    </div>
  );
}
