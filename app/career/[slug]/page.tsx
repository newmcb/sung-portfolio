"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {careerData} from "@/data/career";

export default function CareerDetailPage() {
  const { slug } = useParams();
  const data = careerData.find((item) => item.slug === slug);

  if (!data) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <motion.h1
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className="text-3xl font-bold mb-2"
      >
        {data.company}
      </motion.h1>
      <motion.p
        initial={{opacity: 0, x: -20}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 0.5, delay: 0.1}}
        className="text-sm mb-4"
      >
        {data.period}
      </motion.p>
      <motion.p
        initial={{opacity: 0, x: 20}}
        animate={{opacity: 1, x: 0}}
        transition={{duration: 0.5, delay: 0.2}}
        className="mb-6 font-medium text-lg"
      >
        {data.role}
      </motion.p>

      <motion.div
        initial={{opacity: 0, scale: 0.95}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5, delay: 0.2}}
        className="mb-6"
      >
        <h2 className="text-xl font-semibold mb-4">주요 업무</h2>

        <div className="flex flex-col gap-4">
          {data.description.map((desc, i) => (
            <motion.div
              key={i}
              initial={{opacity: 0, y: 8}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.3, delay: i * 0.1}}
              className="border border-gray-700 rounded-md p-4"
            >
              <div className="flex items-start gap-2">
                <span className="text-xs font-bold text-sky-400">•</span>
                <p className="text-sm leading-relaxed whitespace-pre-line">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>


      <motion.div
        initial={{opacity: 0, scale: 0.95}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5, delay: 0.2}}
        className="mb-6"
      >
        <h2 className="text-xl font-semibold mb-4">성과</h2>

        <div className="flex flex-col gap-4">
          {Array.isArray(data.achievements) && data.achievements.length > 0 && data.achievements.map((line, i) => (
            <motion.div
              key={i}
              initial={{opacity: 0, y: 8}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.3, delay: i * 0.1}}
              className="relative pl-4 border-l-4 border-sky-500 rounded-md p-4"
            >
              <p className="text-sm leading-relaxed whitespace-pre-line">
                {line}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>


      <motion.div
        initial={{opacity: 0, scale: 0.95}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5, delay: 0.4}}
        className="mb-6"
      >
        <h2 className="text-xl font-semibold mb-2">기술 스택</h2>
        <div className="flex gap-2 flex-wrap">
          {data.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-[#222] text-sm px-3 py-1 rounded-full text-sky-300 border"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{opacity: 0, scale: 0.95}}
        animate={{opacity: 1, scale: 1}}
        transition={{duration: 0.5, delay: 0.3}}
        className="mb-6"
      >
        {Array.isArray(data.tools) && data.tools.length > 0 && <>
            <h2 className="text-xl font-semibold mb-2">협업 도구</h2>
            <div className="flex gap-2 flex-wrap">
              {data.tools.map((tool, i) => (
                <span
                  key={i}
                  className="bg-gray-200 dark:bg-[#222] text-sm px-3 py-1 rounded-full text-sky-500 dark:text-sky-300"
                >
              {tool}
            </span>
              ))}
            </div>
        </>}
      </motion.div>
    </main>
  );
}
