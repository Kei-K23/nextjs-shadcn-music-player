import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Lyric {
  time: number;
  text: string;
}

interface LyricsDisplayProps {
  lyrics: Lyric[];
  currentTime: number;
}

export function LyricsDisplay({ lyrics, currentTime }: LyricsDisplayProps) {
  const [activeLyricIndex, setActiveLyricIndex] = useState(0);

  useEffect(() => {
    const newIndex = lyrics.findIndex((lyric, index) => {
      const nextLyric = lyrics[index + 1];
      return (
        lyric.time <= currentTime &&
        (!nextLyric || nextLyric.time > currentTime)
      );
    });

    if (newIndex !== -1 && newIndex !== activeLyricIndex) {
      setActiveLyricIndex(newIndex);
    }
  }, [currentTime, lyrics, activeLyricIndex]);

  return (
    <div className="h-48 mt-4 overflow-hidden w-full relative">
      <AnimatePresence>
        {lyrics.map((lyric, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: index === activeLyricIndex ? 1 : 0.3,
              y: index === activeLyricIndex ? 0 : 20,
              scale: index === activeLyricIndex ? 1.1 : 1,
            }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`absolute left-0 right-0 text-center ${
              index === activeLyricIndex
                ? "text-primary font-bold"
                : "text-muted-foreground"
            }`}
            style={{
              top: `${50 + (index - activeLyricIndex) * 40}px`,
            }}
          >
            {lyric.text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
