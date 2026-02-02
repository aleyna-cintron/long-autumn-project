'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Play, Pause, Volume2 } from 'lucide-react';
import { EP, Track } from '@/types/music-data';
import { PanelCard } from '../ui/PanelCard';
import { Button } from '../ui/Button';

interface FeaturedEPPlayerProps {
  ep: EP;
}

export default function FeaturedEPPlayer({ ep }: FeaturedEPPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTrack, setCurrentTrack] = useState<Track>(ep.tracks[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showVolume, setShowVolume] = useState(false);

  // Reset when EP changes
  useEffect(() => {
    setCurrentTrack(ep.tracks[0]);
    setIsPlaying(false);
    setCurrentTime(0);
  }, [ep]);

  // Update time
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

  function togglePlay() {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }

  function playTrack(track: Track) {
    setCurrentTrack(track);
    setIsPlaying(true);
  }

  function formatTime(seconds: number): string {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  }

  function handleVolumeChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  }

  function handleSeek(e: React.ChangeEvent<HTMLInputElement>) {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  }

  const epYear = ep.year || 'N/A';
  const epCoverArt = ep.coverArt || '/placeholder-cover.jpg';

  return (
    <>
      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-10">
      {/* Left Side - Album Art & Links */}
      <div className="flex flex-col items-center pr-40">
        {/* Album Art with Rotating Vinyl */}
        <div className="relative w-full max-w-md aspect-square mb-8">
          {/* Rotating Vinyl - slides out from behind sleeve */}
          <div
            className={`absolute top-0 left-0 transition-all duration-700 z-0 ${
              isPlaying ? 'translate-x-[40%]' : 'translate-x-[20%]'
            }`}
            style={{ width: '100%', height: '100%' }}
          >
            {/* Vinyl Record */}
            <div
              className={`relative w-full h-full rounded-full bg-gradient-to-br from-black via-gray-900 to-black shadow-2xl ${
                isPlaying ? 'animate-spin-slow' : ''
              }`}
            >
              {/* Vinyl grooves effect */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-gray-800 to-black"></div>
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-gray-900 to-black"></div>
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-black to-gray-800"></div>
              
              {/* Center label with album art */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full overflow-hidden border-4 border-black shadow-xl">
                <Image
                  src={epCoverArt}
                  alt={ep.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Album Cover Sleeve - stays in place */}
          <div className="absolute inset-0 z-10">
            <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl bg-black">
              <Image
                src={epCoverArt}
                alt={`${ep.title} cover`}
                fill
                className="object-cover"
              />
              
              {ep.isLatest && (
                <div className="absolute top-4 right-4 bg-brutal-red text-white px-4 py-2 text-xs font-bold uppercase tracking-wider shadow-lg z-10">
                  EP • {epYear}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Streaming Links */}
          <div className="w-full max-w-md space-y-3">
            <Button href='https://open.spotify.com/artist/4o9s60Nr1QgG7FGLUQakzu' label='Spotify' variant='light' external />
            <Button href='https://music.apple.com/us/artist/long-autumn/1481105151' label='Apple Music' variant='light' external />
            <Button href='https://www.youtube.com/@LongAutumn' label='YouTube Music' variant='light' external />
        </div>
      </div>

        {/* Right Side - Track Info & Player */}
        <PanelCard title={`${ep.title} • ${epYear}`} className="lg:max-w-200">
          <div className="flex flex-col">
            {/* <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">{ep.title}</h1> */}

            {/* Track List with Now Playing */}
            <div className="bg-background border border-muted rounded-lg overflow-hidden">
              {/* Now Playing Header */}
              <div className="p-4 border-b border-muted">
                <div className="flex items-center gap-4">
                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-full bg-brutal-red hover:bg-red-700 flex items-center justify-center transition-colors flex-shrink-0"
                  >
                    {isPlaying ? <Pause size={18} fill="white" /> : <Play size={18} fill="white" className="ml-0.5" />}
                  </button>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm uppercase tracking-widest text-brutal-red font-bold mb-1">Now Playing</p>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-white truncate">{currentTrack.title}</p>
                      <span className="text-gray-500 text-sm">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowVolume(!showVolume)}
                    className="p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Volume2 size={18} />
                  </button>
                </div>

                {/* Progress Bar */}
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  onChange={handleSeek}
                  className="w-full h-1 bg-muted rounded-lg appearance-none cursor-pointer slider mt-3"
                />

                {/* Volume Control - shows on click */}
                {showVolume && (
                  <div className="flex items-center gap-2 mt-3">
                    <Volume2 size={14} className="text-gray-400" />
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.01"
                      value={volume}
                      onChange={handleVolumeChange}
                      className="flex-1 h-1 bg-muted rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                )}
              </div>

            </div>

            {/* Track List */}
            <div className="mt-4 space-y-3">
              {ep.tracks.map((track, index) => (
                <button
                  key={index}
                  onClick={() => playTrack(track)}
                  className={`w-full flex items-center justify-between p-5 rounded-lg transition-all duration-300 ${
                    currentTrack.title === track.title
                      ? 'bg-background border border-brutal-red'
                      : 'bg-background border border-muted  hover:border-brutal-red'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-lg w-8 ${currentTrack.title === track.title ? 'text-brutal-red' : 'text-gray-500'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-lg font-medium ${currentTrack.title === track.title ? 'text-white' : 'text-gray-300'}`}>
                      {track.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-gray-500">{track.duration}</span>
                    {currentTrack.title === track.title && (
                      <Play size={18} className="text-brutal-red" fill="currentColor" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Hidden Audio Element */}
            <audio
              ref={audioRef}
              src={currentTrack.src}
              onEnded={() => setIsPlaying(false)}
            />
              </div>
          </PanelCard>

      <style jsx>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #e63946;
          cursor: pointer;
        }

        .slider::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #e63946;
          cursor: pointer;
          border: none;
        }
      `}</style>
      </div>
    </>
  );
}