"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const phrases = [
  "꾸준히 발전하는",
  "성장을 멈추지 않는",
  "함께하고 싶은 개발자"
];

export default function HomePage() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="h-screen flex flex-col justify-center items-center text-center px-4">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-4"
      >
        프론트엔드 개발자 성경진
      </motion.h1>

      <div className="h-6 mb-6">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
            className="text-gray-400 text-lg"
          >
            {phrases[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {/*<Link*/}
        {/*  href="/projects"*/}
        {/*  className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-lg text-lg font-medium"*/}
        {/*>*/}
        {/*  View Projects*/}
        {/*</Link>*/}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="mt-4"
      >
        <Link
          href="/about"
          className="text-sky-400 hover:underline text-lg"
        >
          About Me →
        </Link>
      </motion.div>
    </main>
  );
}
