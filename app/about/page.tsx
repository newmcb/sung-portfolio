"use client";

import { motion } from "framer-motion";
import { FiTool, FiBriefcase, FiAward, FiBook } from "react-icons/fi";
import {formatDuration, parseDuration} from "@/utils/common";
import {CERTIFICATIONS, EDUCATION, EXPERIENCE, SKILLS} from "@/data/about";

export default function AboutPage() {
  const sectionVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const totalMonths = EXPERIENCE.reduce((sum, { date }) => sum + parseDuration(date).totalMonths, 0);
  const totalDuration = formatDuration({
    years: Math.floor(totalMonths / 12),
    months: totalMonths % 12,
  });

  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <motion.section
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className=""
      >
        <h1 className="text-4xl font-bold">About Me</h1>
        <blockquote className="italic text-gray-500 text-sm md:text-base">
          {`"끊임없이 배우고 성장하는 프론트엔드 개발자"`}
        </blockquote>
      </motion.section>

      <motion.section
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.3 }}
        className="rounded-2xl shadow-lg py-8"
      >
        <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2 mb-6 flex items-center">
          <FiTool className="w-6 h-6 mr-2 text-sky-400" />Skills
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6">
          {SKILLS.map(({ label, percent, Icon }, idx) => (
            <li key={label} className="p-4 text-center hover:shadow-lg transition">
              <Icon className="w-8 h-8 mx-auto mb-2" />
              <div className="text-lg font-medium mb-1">{label}</div>
              <div
                className="h-1 bg-gray-200 rounded-full overflow-hidden mb-1"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={percent}
                aria-label={`${label} 숙련도`}
              >
                <motion.div
                  className="h-full bg-sky-400"
                  initial={{ width: 0 }}
                  animate={{ width: `${percent}%` }}
                  transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
                />
              </div>
              <span className="text-sm text-gray-600">{percent}%</span>
            </li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.6 }}
        className="rounded-2xl shadow-lg py-8"
      >
        <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2 mb-4 flex items-center">
          <FiBriefcase className="w-6 h-6 mr-2 text-sky-400" />Experience
        </h2>

        <p className="text-sm text-gray-500 mb-6 pl-8">총 경력기간: {totalDuration}</p>

        <div className="border-l-4 border-sky-400 pl-4 py-2 mb-4 space-y-8">
          {EXPERIENCE.map(({ date, title, desc }) => {
            const { years, months } = parseDuration(date);
            return (
              <div key={date} className="flex items-start">
                <div className="flex-shrink-0 mt-1.5">
                  <span className="block w-3 h-3 bg-sky-400 rounded-full border-2 border-white" />
                </div>
                <div className="ml-4">
                  <time className="block text-sm text-gray-500 mb-1">{date} ({formatDuration({ years, months })})</time>
                  <h3 className="text-lg font-medium">{title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>

      <motion.section
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 0.9 }}
        className="rounded-2xl shadow-lg py-8"
      >
        <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2 mb-6 flex items-center">
          <FiAward className="w-6 h-6 mr-2 text-sky-400" />Certifications
        </h2>
        <ul className="space-y-4 px-8">
          {CERTIFICATIONS.map(({ title, date, issuer, result }) => (
            <li key={title} className="space-y-1">
              <div className="flex justify-between">
                <span>{title}</span>
                <time className="text-gray-500">{date}</time>
              </div>
              <div className="text-sm text-gray-500">
                {issuer} · {result}
              </div>
            </li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        variants={sectionVariant}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6, delay: 1.2 }}
        className="rounded-2xl shadow-lg py-8"
      >
        <h2 className="text-2xl font-semibold border-b border-gray-200 pb-2 mb-6 flex items-center">
          <FiBook className="w-6 h-6 mr-2 text-sky-400" />Education
        </h2>
        <ul className="space-y-4 pl-8" >
          {EDUCATION.map(({ institution, degree, period, note }) => (
            <li key={institution} className="space-y-1">
              <h3 className="text-lg font-medium">{degree}</h3>
              <span className="block text-gray-600">{institution}</span>
              <div className="flex flex-wrap text-sm text-gray-500">
                <span>{period}</span>
                {note && <span className="ml-4">{note}</span>}
              </div>
            </li>
          ))}
        </ul>
      </motion.section>
    </main>
  );
}
