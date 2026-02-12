'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Play, Pause, Download } from 'lucide-react';

export interface EpkTrack {
  title: string;
  src: string;
  duration: string;
  epName: string;
  epYear: number;
  coverArt: string;
}

interface EpkTrackPlayerProps {
  tracks: EpkTrack[];
}

export default function EpkTrackPlayer({ tracks }: EpkTrackPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrack, setCurrentTrack] = useState<EpkTrack>(tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime ?? 0);
    const updateDuration = () => setDuration(audio.duration ?? 0);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, [currentTrack]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    }
  }, [currentTrack]);

  function togglePlay() {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  function playTrack(track: EpkTrack) {
    if (currentTrack.title === track.title) {
      togglePlay();
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  }

  function formatTime(seconds: number): string {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  function handleSeek(e: React.ChangeEvent<HTMLInputElement>) {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  }

  return (
    <div className="flex flex-col">
      {/* Now Playing */}
      <div className="bg-background border border-muted rounded-lg overflow-hidden">
        <div className="p-3 md:p-4 border-b border-muted">
          <div className="flex items-center gap-3 md:gap-4">
            <div className="relative w-10 h-10 md:w-12 md:h-12 rounded overflow-hidden flex-shrink-0">
              <Image
                src={currentTrack.coverArt}
                alt={currentTrack.epName}
                fill
                sizes="48px"
                className="object-cover"
              />
            </div>
            <button
              onClick={togglePlay}
              aria-label={isPlaying ? 'Pause' : 'Play'}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brutal-red hover:bg-red-700 flex items-center justify-center transition-colors flex-shrink-0"
            >
              {isPlaying
                ? <Pause size={16} fill="white" className="text-white" />
                : <Play size={16} fill="white" className="text-white ml-0.5" />
              }
            </button>
            <div className="flex-1 min-w-0">
              <p className="text-xs uppercase tracking-widest text-brutal-red font-bold mb-0.5">Now Playing</p>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-white truncate text-sm md:text-base">{currentTrack.title}</p>
                <span className="text-gray-400 text-xs whitespace-nowrap">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>
            </div>
          </div>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer epk-slider mt-3"
          />
        </div>
      </div>

      {/* Track List */}
      <div className="mt-3 md:mt-4 space-y-2 md:space-y-3">
        {tracks.map((track, index) => (
          <div
            key={index}
            className={`flex items-center justify-between p-3 md:p-4 rounded-lg transition-all duration-300 ${
              currentTrack.title === track.title
                ? 'bg-background border border-brutal-red'
                : 'bg-background border border-muted hover:border-brutal-red'
            }`}
          >
            <button
              onClick={() => playTrack(track)}
              className="flex items-center gap-3 md:gap-4 flex-1 min-w-0 text-left"
            >
              <div className="relative w-8 h-8 md:w-10 md:h-10 rounded overflow-hidden shrink-0">
                <Image
                  src={track.coverArt}
                  alt={track.epName}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className={`text-sm md:text-base font-medium truncate ${currentTrack.title === track.title ? 'text-white' : 'text-gray-300'}`}>
                  {track.title}
                </p>
                <p className="text-xs text-gray-400">{track.epName} ({track.epYear})</p>
              </div>
            </button>
            <div className="flex items-center gap-2 md:gap-3 shrink-0 ml-2">
              <span className="text-gray-400 text-xs md:text-sm">{track.duration}</span>
              {currentTrack.title === track.title && (
                isPlaying
                  ? <Pause size={14} className="text-brutal-red" fill="currentColor" />
                  : <Play size={14} className="text-brutal-red" fill="currentColor" />
              )}
              <a
                href={track.src}
                download
                onClick={(e) => e.stopPropagation()}
                className="p-1.5 text-gray-400 hover:text-brutal-red transition-colors"
                aria-label={`Download ${track.title}`}
              >
                <Download size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <audio
        ref={audioRef}
        src={currentTrack.src}
        onEnded={() => setIsPlaying(false)}
      />

      <style jsx>{`
        .epk-slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #e63946;
          cursor: pointer;
        }
        .epk-slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #e63946;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </div>
  );
}
