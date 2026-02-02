'use client';

import { motion } from 'framer-motion';
import { EP } from '@/types/music-data';

interface RotatingAlbumArtProps {
  ep: EP;
}

export default function RotatingAlbumArt({ ep }: RotatingAlbumArtProps) {
  return (
    <div className="relative z-10 w-64 h-64" style={{ perspective: '1000px' }}>
        <motion.div
          animate={{
            rotateY: [0, 360]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            transformStyle: 'preserve-3d',
            position: 'relative',
            width: '100%',
            height: '100%'
          }}
        >
        {/* Front - Album Cover */}
        <img
                          src={ep.coverArt}
                          alt="Faded EP Front"
                          style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backfaceVisibility: 'hidden'
                          }}
                        />
                        {/* Back of record */}
                        <img
                          src={ep.backsideArt}
                          alt="Faded EP Back"
                          style={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backfaceVisibility: 'hidden',
                            transform: 'rotateY(180deg)'
                          }}
                        />
        </motion.div>
    </div>
  );
}