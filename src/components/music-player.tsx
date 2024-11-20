"use client";

import React, { useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import {
  Volume2,
  VolumeX,
  SkipBack,
  SkipForward,
  Play,
  Pause,
  Repeat,
  Shuffle,
} from "lucide-react";
import { useMusicPlayerStore } from "@/store/use-music-player-store";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const {
    currentTrack,
    isPlaying,
    volume,
    shuffle,
    repeat,
    playlist,
    setTrack,
    setIsPlaying,
    setVolume,
    toggleShuffle,
    toggleRepeat,
    nextTrack,
    prevTrack,
  } = useMusicPlayerStore();

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying, currentTrack]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const [progress, setProgress] = React.useState(0);

  const handleProgressChange = (newProgress: number[]) => {
    if (audioRef.current) {
      const newTime = (newProgress[0] / 100) * audioRef.current.duration;
      audioRef.current.currentTime = newTime;
      setProgress(newProgress[0]);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6 bg-background border rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <motion.div
          className="w-64 h-64 rounded-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full h-full relative">
            <Image
              src={currentTrack?.cover || "/img/music-notes.png"}
              alt={currentTrack?.title || "Album cover"}
              className="object-cover"
              fill
            />
          </div>
        </motion.div>
        <div className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTrack?.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center md:text-left"
            >
              <h2 className="text-2xl font-bold mb-2">
                {currentTrack?.title || "No track selected"}
              </h2>
              <p className="text-muted-foreground mb-1">
                {currentTrack?.artist || "Unknown artist"}
              </p>
              <p className="text-sm text-muted-foreground">
                {currentTrack?.album || "Unknown album"}
              </p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-4">
            <Slider
              value={[progress]}
              max={100}
              step={0.1}
              onValueChange={handleProgressChange}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-muted-foreground mt-1">
              <span>{formatTime(audioRef.current?.currentTime || 0)}</span>
              <span>{formatTime(audioRef.current?.duration || 0)}</span>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
            <Button variant="ghost" size="icon" onClick={toggleShuffle}>
              <Shuffle
                className={shuffle ? "text-primary" : "text-muted-foreground"}
              />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                if (!currentTrack && !isPlaying) {
                  setIsPlaying(true);
                  setTrack(playlist[playlist.length - 1]);
                  return;
                }
                prevTrack();
              }}
            >
              <SkipBack />
            </Button>
            <Button
              variant="default"
              size="icon"
              onClick={() => {
                if (!currentTrack && !isPlaying) {
                  setIsPlaying(true);
                  setTrack(playlist[0]);
                  return;
                }
                setIsPlaying(!isPlaying);
              }}
            >
              {isPlaying ? <Pause /> : <Play />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => {
                if (!currentTrack && !isPlaying) {
                  setIsPlaying(true);
                  setTrack(playlist[0]);
                  return;
                }
                nextTrack();
              }}
            >
              <SkipForward />
            </Button>
            <Button variant="ghost" size="icon" onClick={toggleRepeat}>
              <Repeat
                className={repeat ? "text-primary" : "text-muted-foreground"}
              />
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-6 flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setVolume(volume === 0 ? 0.5 : 0)}
        >
          {volume === 0 ? <VolumeX /> : <Volume2 />}
        </Button>
        <Slider
          value={[volume * 100]}
          max={100}
          step={1}
          onValueChange={(newVolume) => setVolume(newVolume[0] / 100)}
          className="w-full max-w-xs"
        />
      </div>
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Playlist</h3>
        <ul className="space-y-2">
          {playlist.map((track) => (
            <motion.li
              key={track.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Button
                variant="ghost"
                className={cn(
                  "w-full justify-start",
                  currentTrack?.id === track.id ? "bg-accent" : ""
                )}
                onClick={() => {
                  setTrack(track);
                  setIsPlaying(true);
                }}
              >
                <div className="size-12 rounded mr-1 relative">
                  <Image
                    src={track.cover}
                    alt={track.title}
                    className="object-fill"
                    fill
                  />
                </div>
                <div className="text-left">
                  <p className="font-medium">{track.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {track.artist}
                  </p>
                </div>
              </Button>
            </motion.li>
          ))}
        </ul>
      </div>
      <audio
        ref={audioRef}
        src={currentTrack?.audio}
        onEnded={nextTrack}
        onTimeUpdate={handleTimeUpdate}
      />
    </div>
  );
}

function formatTime(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}
