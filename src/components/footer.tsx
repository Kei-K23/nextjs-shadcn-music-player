import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16">
      <p className="text-center text-muted-foreground text-xs">
        Copyright-{new Date().getFullYear()}@next-shadcn-music-player
      </p>
      <p className="text-center text-muted-foreground text-xs">
        Create with 💙 by{" "}
        <Link
          href={"https://github.com/Kei-K23"}
          target="_blank"
          className="text-blue-500"
        >
          Kei-K
        </Link>
      </p>
    </footer>
  );
}
