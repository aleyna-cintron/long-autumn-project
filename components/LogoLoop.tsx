import { useCallback, useEffect, useMemo, useRef, useState, memo, CSSProperties } from 'react';
import './LogoLoop.css';

const CONFIG = { 
  SMOOTH_TAU: 0.25, 
  MIN_COPIES: 2, 
  COPY_HEADROOM: 2,
  DEFAULT_SPEED: 120,
  DEFAULT_GAP: 32,
  DEFAULT_HEIGHT: 28
};

interface LogoItem {
  src: string;
  srcSet?: string;
  sizes?: string;
  width?: number;
  height?: number;
  alt?: string;
}

type Direction = 'left' | 'right' | 'up' | 'down';

interface LogoLoopProps {
  logos: LogoItem[];
  speed?: number;
  direction?: Direction;
  logoHeight?: number | string;
  gap?: number;
  hoverSpeed?: number;
  fadeOut?: boolean;
  fadeOutColor?: string;
  scaleOnHover?: boolean;
  ariaLabel?: string;
  className?: string;
  style?: CSSProperties;
}

const useResizeObserver = (callback: () => void, refs: React.RefObject<HTMLElement | null>[]) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      window.addEventListener('resize', callback);
      callback();
      return () => window.removeEventListener('resize', callback);
    }
    
    const observers = refs.map(ref => {
      if (!ref.current) return null;
      const observer = new ResizeObserver(callback);
      observer.observe(ref.current);
      return observer;
    });
    
    callback();
    return () => observers.forEach(o => o?.disconnect());
  }, [callback, refs]);
};

const useImageLoader = (seqRef: React.RefObject<HTMLUListElement | null>, onLoad: () => void) => {
  useEffect(() => {
    const images = Array.from(seqRef.current?.querySelectorAll('img') ?? []);
    if (images.length === 0) return onLoad();
    
    let remaining = images.length;
    const handleLoad = () => --remaining === 0 && onLoad();
    
    images.forEach(img => {
      if (img.complete) {
        handleLoad();
      } else {
        img.addEventListener('load', handleLoad, { once: true });
        img.addEventListener('error', handleLoad, { once: true });
      }
    });
    
    return () => images.forEach(img => {
      img.removeEventListener('load', handleLoad);
      img.removeEventListener('error', handleLoad);
    });
  }, [onLoad, seqRef]);
};

const useAnimationLoop = (
  trackRef: React.RefObject<HTMLDivElement | null>,
  targetVelocity: number,
  seqSize: number,
  hoverSpeed?: number
) => {
  const rafRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number | null>(null);
  const offsetRef = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track || seqSize === 0) return;

    offsetRef.current = ((offsetRef.current % seqSize) + seqSize) % seqSize;

    const animate = (time: number) => {
      if (!lastTimeRef.current) lastTimeRef.current = time;
      
      const delta = Math.max(0, time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      const target = hoverSpeed ?? targetVelocity;
      const easing = 1 - Math.exp(-delta / CONFIG.SMOOTH_TAU);
      velocityRef.current += (target - velocityRef.current) * easing;

      let next = offsetRef.current + velocityRef.current * delta;
      offsetRef.current = ((next % seqSize) + seqSize) % seqSize;
      track.style.transform = `translate3d(-${offsetRef.current}px, 0, 0)`;

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTimeRef.current = null;
    };
  }, [targetVelocity, seqSize, hoverSpeed, trackRef]);
};

export const LogoLoop = memo(({
  logos,
  speed = CONFIG.DEFAULT_SPEED,
  direction = 'left',
  logoHeight = CONFIG.DEFAULT_HEIGHT,
  gap = CONFIG.DEFAULT_GAP,
  hoverSpeed,
  fadeOut = false,
  fadeOutColor,
  scaleOnHover = false,
  ariaLabel = 'Partner logos',
  className,
  style
}: LogoLoopProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const seqRef = useRef<HTMLUListElement>(null);

  const [seqWidth, setSeqWidth] = useState(0);
  const [copyCount, setCopyCount] = useState(CONFIG.MIN_COPIES);

  const velocity = useMemo(() => {
    const multiplier = direction === 'left' ? 1 : -1;
    return Math.abs(speed) * multiplier * (speed < 0 ? -1 : 1);
  }, [speed, direction]);

  const updateDimensions = useCallback(() => {
    const containerWidth = containerRef.current?.clientWidth ?? 0;
    const sequenceWidth = seqRef.current?.getBoundingClientRect()?.width ?? 0;
    
    if (sequenceWidth > 0) {
      setSeqWidth(Math.ceil(sequenceWidth));
      const needed = Math.ceil(containerWidth / sequenceWidth) + CONFIG.COPY_HEADROOM;
      setCopyCount(Math.max(CONFIG.MIN_COPIES, needed));
    }
  }, []);

  useResizeObserver(updateDimensions, [containerRef, seqRef]);
  useImageLoader(seqRef, updateDimensions);
  useAnimationLoop(trackRef, velocity, seqWidth, hoverSpeed);

  const classes = [
    'logoloop',
    fadeOut && 'logoloop--fade',
    scaleOnHover && 'logoloop--scale-hover',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={containerRef}
      className={classes}
      style={{
        '--logoloop-gap': `${gap}px`,
        '--logoloop-logoHeight': typeof logoHeight === 'number' ? `${logoHeight}px` : logoHeight,
        ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor }),
        ...style
      } as CSSProperties}
      role="region"
      aria-label={ariaLabel}
    >
      <div className="logoloop__track" ref={trackRef}>
        {Array.from({ length: copyCount }, (_, i) => (
          <ul
            className="logoloop__list"
            key={i}
            role="list"
            aria-hidden={i > 0}
            ref={i === 0 ? seqRef : undefined}
          >
            {logos.map((logo, j) => (
              <li className="logoloop__item" key={j} role="listitem">
                <img
                  src={logo.src}
                  srcSet={logo.srcSet}
                  sizes={logo.sizes}
                  width={logo.width}
                  height={logo.height}
                  alt={logo.alt ?? ''}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
});

LogoLoop.displayName = 'LogoLoop';

export default LogoLoop; 