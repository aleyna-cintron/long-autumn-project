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
    if (currentTrack.title === track.title) {
      // Same track - toggle play/pause
      togglePlay();
    } else {
      // Different track - switch and play
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  }

  // Auto-play when track changes and isPlaying is true
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    }
  }, [currentTrack]);

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
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-12 items-center pt-10">
      {/* Left Side - Album Art & Links */}
      <div className="flex flex-col items-center lg:pr-40">
        {/* Album Art with Rotating Vinyl */}
        <div className="relative w-full max-w-42 sm:max-w-52 md:max-w-88 lg:max-w-96 aspect-square mb-6 md:mb-8">
          {/* Rotating Vinyl - slides out from behind sleeve */}
          <div
            className={`absolute top-0 left-0 transition-all duration-700 z-0 ${
              isPlaying ? 'translate-x-[40%]' : 'translate-x-[20%]'
            }`}
            style={{ width: '100%', height: '100%' }}
          >
            {/* Vinyl Record */}
            <div
              className={`relative w-full h-full rounded-full bg-linear-to-br from-black via-gray-900 to-black shadow-2xl ${
                isPlaying ? 'animate-spin-slow' : ''
              }`}
            >
              {/* Vinyl grooves effect */}
              <div className="absolute inset-4 md:inset-8 rounded-full bg-gradient-to-br from-gray-800 to-black"></div>
              <div className="absolute inset-6 md:inset-12 rounded-full bg-gradient-to-br from-gray-900 to-black"></div>
              <div className="absolute inset-8 md:inset-16 rounded-full bg-gradient-to-br from-black to-gray-800"></div>

              {/* Center label with album art */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-40 md:h-40 rounded-full overflow-hidden border-2 md:border-4 border-black shadow-xl">
                <Image
                  src={epCoverArt}
                  alt={ep.title}
                  fill
                  sizes="(max-width: 768px) 80px, 160px"
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
                sizes="(max-width: 640px) 168px, (max-width: 768px) 208px, (max-width: 1024px) 352px, 384px"
                className="object-cover"
              />

            </div>
          </div>
        </div>

        {/* Streaming Links */}
          <div className="w-full max-w-full mt-2 px-8 md:px-0 space-y-4 md:space-y-3">
            <Button href='https://open.spotify.com/artist/4o9s60Nr1QgG7FGLUQakzu' label='Spotify' variant='light' external />
            <Button href='https://music.apple.com/us/artist/long-autumn/1481105151' label='Apple Music' variant='light' external />
            <Button href='https://www.youtube.com/@LongAutumn' label='YouTube Music' variant='light' external />
        </div>
      </div>

        {/* Right Side - Track Info & Player */}
        <PanelCard
          title={
            <div className="flex items-center justify-center gap-4 p-2">
              <span>{ep.title} • {epYear}</span>
              {ep.isLatest && (
                <span className="bg-brutal-red text-white px-4 py-0.5 md:px-3 md:py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider">
                  Latest
                </span>
              )}
            </div>
            
          }
          className="lg:max-w-400 !border-0 !border-t min-h-[30rem]"
        >
          <div className="flex flex-col p-4">
            {/* Track List with Now Playing */}
            <div className="bg-background border border-muted rounded-lg overflow-hidden">
              {/* Now Playing Header */}
              <div className="p-3 md:p-4 border-b border-muted">
                <div className="flex items-center gap-2 md:gap-4">
                  <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-brutal-red hover:bg-red-700 flex items-center justify-center transition-colors flex-shrink-0"
                  >
                    {isPlaying ? <Pause size={14} className="md:hidden" fill="white" /> : <Play size={14} className="md:hidden ml-0.5" fill="white" />}
                    {isPlaying ? <Pause size={18} className="hidden md:block" fill="white" /> : <Play size={18} className="hidden md:block ml-0.5" fill="white" />}
                  </button>
                  <div className="flex-1 min-w-0 px-2">
                    <p className="text-xs md:text-sm uppercase tracking-widest text-brutal-red font-bold mb-1">Now Playing</p>
                    <div className="flex items-center gap-2">
                      <p className="font-semibold text-white truncate text-sm md:text-base">{currentTrack.title}</p>
                      <span className="text-gray-400 text-xs md:text-sm">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowVolume(!showVolume)}
                    aria-label="Toggle volume control"
                    className="p-1.5 md:p-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Volume2 size={16} className="md:hidden" />
                    <Volume2 size={18} className="hidden md:block" />
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
            <div className="mt-3 md:mt-4 space-y-2 md:space-y-3">
              {ep.tracks.map((track, index) => (
                <button
                  key={index}
                  onClick={() => playTrack(track)}
                  className={`w-full flex items-center justify-between p-3 md:p-5 rounded-lg transition-all duration-300 ${
                    currentTrack.title === track.title
                      ? 'bg-background border border-brutal-red'
                      : 'bg-background border border-muted  hover:border-brutal-red'
                  }`}
                >
                  <div className="flex items-center gap-2 md:gap-4">
                    <span className={`font-mono text-sm md:text-lg w-6 md:w-8 ${currentTrack.title === track.title ? 'text-brutal-red' : 'text-gray-400'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-sm md:text-lg font-medium ${currentTrack.title === track.title ? 'text-white' : 'text-gray-300'}`}>
                      {track.title}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 md:gap-4">
                    <span className="text-gray-400 text-xs md:text-base">{track.duration}</span>
                    {currentTrack.title === track.title && (
                      isPlaying
                        ? <Pause size={14} className="text-brutal-red md:hidden" fill="currentColor" />
                        : <Play size={14} className="text-brutal-red md:hidden" fill="currentColor" />
                    )}
                    {currentTrack.title === track.title && (
                      isPlaying
                        ? <Pause size={18} className="text-brutal-red hidden md:block" fill="currentColor" />
                        : <Play size={18} className="text-brutal-red hidden md:block" fill="currentColor" />
                    )}
                  </div>
                </button>
              ))}
            </div>

            {/* Hidden Audio Element */}
            <audio
              ref={audioRef}
              src={currentTrack.src}
              preload="none"
              onEnded={() => setIsPlaying(false)}
            />
              </div>
          </PanelCard>

</div>
    </>
  );
}