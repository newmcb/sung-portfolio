"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {careerData} from "@/data/career";

export default function CareerPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10">💼 Career</h1>
      <div className="space-y-12">
        {careerData.map((item, index) => (
          <Link key={item.slug} href={`/career/${item.slug}`} className="block group">
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="border rounded-xl p-6 shadow-sm group-hover:border-sky-400 group-hover:shadow-md hover:scale-[1.01]"
            >
              <h2 className="text-2xl font-semibold mb-1 group-hover:text-sky-400 ">{item.company}</h2>
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
        ))}
      </div>
    </main>
  );
}
