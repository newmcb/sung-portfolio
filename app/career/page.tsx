"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {careerData} from "@/data/career";

const calculateDuration = (period: string)=> {
  const [startRaw, endRaw] = period.split("–").map((s) => s.trim());
  const [startYear, startMonth] = startRaw.split(".").map(Number);

  const now = new Date();
  let endYear: number, endMonth: number;

  if (endRaw === "재직중") {
    endYear = now.getFullYear();
    endMonth = now.getMonth() + 1;
  } else {
    const [ey, em] = endRaw.split(".").map(Number);
    endYear = ey;
    endMonth = em;
  }

  let years = endYear - startYear;
  let months = endMonth - startMonth;
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const parts = [];
  if (years > 0) parts.push(`${years}년`);
  if (months > 0) parts.push(`${months}개월`);
  return parts.length > 0 ? parts.join(" ") : "0개월";
}


export default function CareerPage() {

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-10">💼 Career</h1>
      <div className="space-y-12">
        {careerData.map((item, index) => (
          <Link key={item.slug} href={`/career/${item.slug}`} className="block group">
            <motion.section
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: index * 0.2}}
              className="border rounded-xl p-6 shadow-sm group-hover:border-sky-400 group-hover:shadow-md hover:scale-[1.01]"
            >
              <div className="flex justify-between items-baseline mb-1">
                <h2 className="text-2xl font-semibold group-hover:text-sky-400">
                  {item.company}
                </h2>
                <span className="text-sm text-gray-500">
                  {calculateDuration(item.period)}
                </span>
              </div>
              {/*<h2 className="text-2xl font-semibold mb-1 group-hover:text-sky-400 ">{item.company}</h2>*/}
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
