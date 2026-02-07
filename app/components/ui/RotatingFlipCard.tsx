'use client';
import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface RotatingFlipCardProps {
  front: ReactNode;
  back: ReactNode;
  className?: string;
}

export default function RotatingFlipCard({front, back, className = '',}: RotatingFlipCardProps) {
  return (
    <div
      className={`relative w-full max-w-80 aspect-square ${className}`}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        animate={{ rotateY: 360 }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0"
          style={{ backfaceVisibility: 'hidden' }}
        >
          {front}
        </div>

        {/* Back */}
        <div
          className="absolute inset-0"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)',
          }}
        >
          {back}
        </div>
      </motion.div>
    </div>
  );
}
