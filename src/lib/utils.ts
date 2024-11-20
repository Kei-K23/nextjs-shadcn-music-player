import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSecond = Math.floor(seconds % 60);
  return `${minutes}:${remainingSecond.toString().padStart(2, "0")}`;
}
