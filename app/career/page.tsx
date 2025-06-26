"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { careerData } from "@/data/career";
import { parseDuration, formatDuration } from "@/utils/common";

export default function CareerPage() {

  const totalMonths = careerData.reduce((sum, item) => {
    return sum + parseDuration(item.period).totalMonths;
  }, 0);
  const totalDuration = formatDuration({
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
  });

  return (
    <main className="max-w-4xl mx-auto px-6 py-20 space-y-6">
      <motion.h1
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className="text-4xl font-bold mb-6"
      >
        Career
      </motion.h1>

      <motion.p
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6, delay: 0.6}}
        className="text-sm text-gray-500 mb-6"
      >
        총 경력기간: {totalDuration}
      </motion.p>


      <div className="space-y-12">
        {careerData.map((item, index) => {
          const {years, months} = parseDuration(item.period);
          return (
            <Link key={item.slug} href={`/career/${item.slug}`} className="block group">
              <motion.section
                initial={{opacity: 0, y: 20}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 0.6, delay: index * 0.2}}
                whileHover={{scale: 1.02}}
                whileTap={{scale: 0.98}}
                className="border rounded-xl p-6 shadow-sm group-hover:border-sky-400 group-hover:shadow-md"
              >
                <div className="flex justify-between items-baseline mb-1">
                  <h2 className="text-2xl font-semibold group-hover:text-sky-400">
                    {item.company}
                  </h2>
                  <span className="text-sm text-gray-500">
                    {formatDuration({years, months})}
                  </span>
                </div>
                <p className="text-sm mb-2">{item.period}</p>
                <p className="mb-4 font-medium">{item.role}</p>
                <ul className="list-disc list-inside space-y-1">
                  {item.description.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
                <div className="flex gap-2 flex-wrap mt-4">
                  {item.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-[#222] text-sm px-3 py-1 rounded-full text-sky-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.section>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
