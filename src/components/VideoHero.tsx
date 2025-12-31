"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function VideoHero() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Poster Image */}
      <img
        src="/public/new-year-delhuan.png"
        alt="Happy New Year"
        className={`absolute inset-0 z-0 h-full w-full object-contain transition-opacity duration-700 ${
          videoLoaded ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Background Video */}
      <video
        className={`absolute inset-0 z-0 h-full w-full object-contain transition-opacity duration-700 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        src="/public/delhuan-happy-new-year.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlayThrough={() => setVideoLoaded(true)}
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black/40" />

      {/* Center Content */}
      <div className="relative z-20 flex h-full items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-6 py-4 text-4xl font-extrabold text-white bg-black/60 rounded-2xl"
        >
          Wish by{" "}
          <span className="text-yellow-300 font-black">
            Delhuan Dairy Farm
          </span>
        </motion.h1>
      </div>
    </section>
  );
}
