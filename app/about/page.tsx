"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-8"
      >
        About Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-400 leading-relaxed text-lg"
      >
        저는 React, Next.js, TypeScript 기반의 인터랙티브 웹 경험을 만드는 것을 즐기는 프론트엔드 개발자입니다. 사용자 친화적인 UI를 설계하고, 유지보수 가능한 구조로 구현하며, 최신 웹 기술을 활용해 빠르고 부드러운 사용자 경험을 추구합니다. <br /><br />
        최근에는 AI, 시각화, 에디터 인터페이스에 관심이 많고, 실제 서비스에 적용하면서 깊이를 더하고 있습니다.
      </motion.p>
    </main>
  );
}
