"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="max-w-xl mx-auto px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8"
      >
        Contact
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-400 mb-6"
      >
        궁금한 점이 있으시거나 협업 제안이 있다면 언제든지 아래 이메일로 연락 주세요.
      </motion.p>

      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        href="mailto:your.email@example.com"
        className="text-sky-400 text-lg underline hover:text-sky-300"
      >
        your.email@example.com
      </motion.a>
    </main>
  );
}
