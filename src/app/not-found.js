"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-950 to-gray-900 text-white text-center px-6">
      <motion.h1
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="text-8xl font-extrabold tracking-widest text-red-600 drop-shadow-lg"
      >
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-4 text-2xl font-semibold"
      >
        You wandered too far.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-2 text-gray-400"
      >
        This page doesn’t exist. Maybe you took a wrong turn.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <Link
          href="/"
          className="mt-8 inline-block border border-red-600 px-6 py-2 rounded-full text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300"
        >
          Go Home
        </Link>
      </motion.div>

      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 1, -1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 text-gray-700 text-sm"
      >
        Lost in the void…
      </motion.div>
    </main>
  );
}
