"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {projects} from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <motion.h1
        initial={{opacity: 0, y: -20}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.6}}
        className="text-4xl font-bold mb-12"
      >
        Projects
      </motion.h1>

      <div className="grid gap-8">
        {projects.map((project, i) => (
          <Link key={i} href={`/projects/${project.slug}`}>
            <motion.section
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{duration: 0.6, delay: i * 0.2}}
              whileHover={{scale: 1.02}}
              whileTap={{scale: 0.98}}
              className="block border rounded-xl p-6 hover:border-sky-400"
            >
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-2xl font-bold tracking-tight">{project.title}</h2>
                <span className="text-xs text-sky-400 font-medium uppercase">Side Project</span>
              </div>

              <div className="border-l-4 border-sky-400 pl-4 py-2 mb-4">
                <p className="text-sm font-medium">{project.description}</p>
              </div>

              <div className="mb-4 space-y-2">
                {Array.isArray(project.details) && project.details.length > 0 && project.details.map((line, idx) => (
                  <div
                    key={idx}
                    className="flex items-baseline gap-2 text-xs leading-relaxed"
                  >
                    <span className="text-sky-400">•</span>
                    <p className="whitespace-pre-line">{line}</p>
                  </div>
                ))}
              </div>

              <div className="flex gap-2 flex-wrap">
                {Array.isArray(project.tech) && project.tech.length > 0 && project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-[#222] text-sm px-3 py-1 rounded-full text-sky-300"
                  >
                    {t}
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
