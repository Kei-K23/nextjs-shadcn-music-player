"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Header() {
  const { resolvedTheme } = useTheme();

  return (
    <header className="mb-6 flex justify-end">
      <Link
        href={"https://github.com/Kei-K23/nextjs-shadcn-music-player"}
        target="_blank"
        className={cn(
          buttonVariants({
            variant: "ghost",
            size: "icon",
          }),
          "text-blue-500"
        )}
      >
        {resolvedTheme === "dark" ? (
          <Image src={"/github_dark.svg"} alt="github" width={20} height={20} />
        ) : (
          <Image
            src={"/github_light.svg"}
            alt="github"
            width={20}
            height={20}
          />
        )}
      </Link>
    </header>
  );
}
