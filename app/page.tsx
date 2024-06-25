"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 h-screen text-3xl">
      <h1>WELCOME TO TECH TALKS RANDOM GAME</h1>
      <Link className="underline" href="/play">
        click to play
      </Link>
    </main>
  );
}
