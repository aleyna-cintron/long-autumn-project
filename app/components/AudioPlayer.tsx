'use client';

import { useRef, useState, useEffect } from "react";
import { change } from "../../data/eps";
import { Track } from "@/types/track";

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [songPlaying, setSongPlaying] = useState(change.tracks[0].src);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  function getAudioType(src: string) {
    if (src.endsWith(".mp3")) return "audio/mpeg";
    if (src.endsWith(".wav")) return "audio/wav";
    if (src.endsWith(".ogg")) return "audio/ogg";
    return "";
  }

  function playSong(track: Track) {
    if (track.src === songPlaying) {
      // toggle play/pause if same track
      if (!audioRef.current) return;
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    } else {
      // switch to new track
      setSongPlaying(track.src);
      setIsPlaying(true);
    }
  }
  function formatTime(seconds: number): string {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    // padStart ensures two digits for seconds
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  } 


  // Update currentTime while audio is playing
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime ?? 0);
    audio.addEventListener("timeupdate", updateTime);

    return () => audio.removeEventListener("timeupdate", updateTime);
  }, [audioRef, songPlaying]);

  return (
    <div className="w-full max-w-md mx-auto">
      {/* key forces remount when song changes, avoids AbortError */}
      <audio
        key={songPlaying}
        ref={audioRef}
        controls
        preload="metadata"
        className="w-full"
        autoPlay={isPlaying}
      >
        <source src={songPlaying} type={getAudioType(songPlaying)} />
      </audio>

      <p>Current Time: {formatTime(currentTime)}s</p>

      <ul className="flex flex-col gap-4 mt-4">
        {change.tracks.map((track, i) => (
          <li key={i} className="flex flex-row items-center justify-between gap-4">
            <span>{track.title} - {track.duration}</span>
            <button onClick={() => playSong(track)}>
              {songPlaying === track.src && isPlaying ? "Pause" : "Play"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
