"use client";

import { motion } from "framer-motion";
import happyimagenew from "@/assets/delhuan-happy-new-year.mp4";

export default function VideoHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={happyimagenew}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Center Heading */}
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="px-6 py-4 text-4xl font-extrabold tracking-wide text-white sm:text-5xl md:text-6xl bg-black/50 backdrop-blur-md rounded-2xl shadow-2xl"
        >
          Wish by{" "}
          <span className="font-black text-yellow-300 drop-shadow-lg">
            Delhuan Dairy Farm
          </span>
        </motion.h1>
      </div>

      {/* Floating New Year Envelope (WhatsApp style) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
        className="fixed bottom-6 right-32 z-30"
      >
        <div className="relative h-[220px] w-[200px]">
          {/* Card coming out */}
          <motion.div
            initial={{ y: 120, rotate: -8 }}
            animate={{ y: [20, 0, 20], rotate: [-6, -4, -6] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-0 z-20 w-[180px] -translate-x-1/2 rounded-xl bg-gradient-to-b from-white to-gray-50 px-4 py-5 text-center shadow-2xl"
          >
            <p className="text-lg font-extrabold tracking-wide text-yellow-600">
              HAPPY New Year
            </p>
            <p className="text-3xl font-black text-yellow-700">2026</p>
            <p className="mt-1 text-[10px] text-gray-600">
              Wishing you a New Year filled with<br />
              new hopes, new joy, and endless possibilities
            </p>
          </motion.div>

          {/* Envelope body */}
          <div className="absolute bottom-0 h-[120px] w-full rounded-b-2xl bg-gradient-to-br from-red-600 to-red-800 shadow-2xl" />

          {/* Envelope flap */}
          <div className="absolute bottom-[60px] left-0 right-0 mx-auto h-0 w-0 border-l-[100px] border-r-[100px] border-b-[70px] border-l-transparent border-r-transparent border-b-red-700" />

          {/* Seal */}
          <div className="absolute bottom-[40px] left-1/2 h-8 w-8 -translate-x-1/2 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-600 shadow-lg" />
        </div>
      </motion.div>
    </section>
  );
}
