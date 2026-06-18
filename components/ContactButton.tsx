"use client";

import Link from "next/link";

export default function ContactButton() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-10 right-10 z-[9999] inline-flex items-center gap-2
  rounded-sm bg-yellow-500 px-6 py-3 text-lg md:text-xl font-semibold
  text-black shadow-lg shadow-black/20
  transition-all duration-300 hover:bg-yellow-400 hover:scale-105
  focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2">
      Let's Talk
    </Link>
  );
}