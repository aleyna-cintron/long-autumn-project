'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Play, Pause, Music, ExternalLink } from 'lucide-react';
import { EP, Track } from '@/types/music-data';

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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center pt-10">
      {/* Left Side - Album Art & Links */}
      <div className="flex flex-col items-center lg:items-end lg:pr-40">
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
          <button className="w-full bg-brutal-red hover:bg-red-700 text-white font-bold py-3 px-6 transition-colors duration-300 flex items-center justify-center gap-2">
            <Music size={20} />
            Latest Release
          </button>
          <button className="w-full bg-red-500/20 hover:bg-red-500/30 border border-brutal-red text-white font-semibold py-3 px-6 transition-colors duration-300 flex items-center justify-center gap-2">
            <ExternalLink size={18} />
            Spotify
          </button>
          <button className="w-full bg-transparent hover:bg-white/5 border border-gray-700 hover:border-gray-500 text-gray-300 font-semibold py-3 px-6 transition-colors duration-300">
            TikTok
          </button>
          <button className="w-full bg-transparent hover:bg-white/5 border border-gray-700 hover:border-gray-500 text-gray-300 font-semibold py-3 px-6 transition-colors duration-300">
            YouTube Music
          </button>
        </div>
      </div>

      {/* Right Side - Track Info & Player */}
      <div className="flex flex-col">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">{ep.title}</h1>
        <p className="text-gray-400 text-sm mb-8">
          Our latest EP blending our signature sound with new textures and ideas.
        </p>

        {/* Now Playing */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Now Playing</h2>
          
          {/* Custom Audio Player */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={togglePlay}
                className="w-12 h-12 rounded-full bg-brutal-red hover:bg-red-700 flex items-center justify-center transition-colors"
              >
                {isPlaying ? <Pause size={20} fill="white" /> : <Play size={20} fill="white" className="ml-1" />}
              </button>
              <div className="flex-1">
                <p className="font-semibold text-white">{currentTrack.title}</p>
                <p className="text-sm text-gray-400">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </p>
              </div>
            </div>

            {/* Progress Bar */}
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
            />

            {/* Volume Control */}
            <div className="flex items-center gap-2 mt-4">
              <span className="text-xs text-gray-400">Volume</span>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="flex-1 h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
              />
            </div>
          </div>

          {/* Hidden Audio Element */}
          <audio
            ref={audioRef}
            src={currentTrack.src}
            onEnded={() => setIsPlaying(false)}
          />
        </div>

        {/* Playlist */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Playlist</h2>
          <div className="space-y-2">
            {ep.tracks.map((track, index) => (
              <button
                key={index}
                onClick={() => playTrack(track)}
                className={`w-full flex items-center justify-between p-4 rounded-lg transition-all duration-300 ${
                  currentTrack.title === track.title
                    ? 'bg-brutal-red/20 border border-brutal-red'
                    : 'bg-gray-900/30 border border-gray-800 hover:bg-gray-800/50 hover:border-gray-700'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-gray-400 font-mono text-sm w-6">{index + 1}</span>
                  <span className="font-medium">{track.title}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-400 text-sm">{track.duration}</span>
                  {currentTrack.title === track.title && (
                    <Play size={16} className="text-brutal-red" fill="currentColor" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

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
  );
}