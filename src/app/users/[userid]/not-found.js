"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { UserX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-900 to-black text-white text-center px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 120 }}
        className="flex items-center justify-center w-24 h-24 rounded-full bg-red-700/30 border border-red-600"
      >
        <UserX size={50} className="text-red-500" />
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-6 text-4xl font-bold tracking-tight text-red-500"
      >
        User Not Found
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-3 text-gray-400"
      >
        The user you’re looking for vanished. Maybe the profile was deleted or
        never existed.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
      >
        <Link
          href="/users"
          className="mt-8 inline-block border border-red-600 px-6 py-2 rounded-full text-red-500 hover:bg-red-600 hover:text-white transition-all duration-300"
        >
          Back to Users
        </Link>
      </motion.div>

      <motion.div
        animate={{
          opacity: [1, 0.6, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-10 text-gray-600 text-sm"
      >
        Searching the void for users…
      </motion.div>
    </main>
  );
}
