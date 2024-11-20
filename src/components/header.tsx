import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";
import Image from "next/image";

export default function Header() {
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
        <Image src={"/github.svg"} alt="github" width={20} height={20} />
      </Link>
    </header>
  );
}
