"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Slider } from "./ui/slider";
import { Button } from "./ui/button";
import {
  Pause,
  Repeat,
  Shuffle,
  SkipBack,
  SkipForward,
  Volume2,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function MusicPlayer() {
  return (
    <div className="max-w-4xl w-full mx-auto shadow-lg rounded-md border">
      <div className="flex flex-col p-4 gap-y-4">
        {/* Sound Cover Image */}
        <motion.div
          className="w-full h-64 rounded-md overflow-hidden relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={"/img/sparkle_img.jpg"}
            alt="sparkle_img"
            fill
            className="object-fill"
          />
        </motion.div>
        <div>
          {/* Sound Information */}
          <AnimatePresence mode="wait">
            <motion.div
              key={"key-1"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-1">No track selected</h3>
              <h4>Unknown artist</h4>
              <h5 className="text-muted-foreground text-sm">Unknown album</h5>
            </motion.div>
          </AnimatePresence>
          {/* Music progress bar */}
          <div className="mt-5">
            <Slider
              value={[50]}
              max={100}
              min={0}
              step={0.1}
              className="w-full"
            />
            <div className="mt-1 w-full flex items-center justify-between gap-x-4">
              <span>0:00</span>
              <span>0:00</span>
            </div>
          </div>
          {/* Music player controls */}
          <div className="mt-5 flex justify-between items-center gap-x-4">
            <Button variant={"ghost"}>
              <Shuffle className={cn("text-muted-foreground")} />
            </Button>
            <Button variant={"ghost"}>
              <SkipBack className={cn("text-muted-foreground")} />
            </Button>
            <Button>
              <Pause />
            </Button>
            <Button variant={"ghost"}>
              <SkipForward className={cn("text-muted-foreground")} />
            </Button>
            <Button variant={"ghost"}>
              <Repeat className={cn("text-muted-foreground")} />
            </Button>
          </div>
          {/* Sound adjuster */}
          <div className="mt-5 flex items-center gap-x-4">
            <Button variant={"ghost"} size={"icon"}>
              <Volume2 />
            </Button>
            <Slider
              value={[50]}
              max={100}
              min={0}
              step={0.1}
              className="w-full"
            />
          </div>
          {/* Playlist */}
          <div className="mt-5"></div>
        </div>
      </div>
    </div>
  );
}
