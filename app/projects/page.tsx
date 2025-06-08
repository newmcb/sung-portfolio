"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    slug: "nowcoding",
    title: "NOWCODING",
    description: "AI 기반 개발 학습 플랫폼",
    tech: ["React", "TypeScript", "OpenAI API", "Tailwind"],
    thumbnail: "/images/nowcoding.png",
  },
  {
    slug: "adview",
    title: "AdView",
    description: "광고주용 대시보드와 트래킹 시스템",
    tech: ["Next.js", "MobX", "Chart.js"],
    thumbnail: "/images/adview.png",
  },
  {
    slug: "vimuse",
    title: "VIMUSE",
    description: "영상 콘텐츠 큐레이션 플랫폼",
    tech: ["React", "Chart.js", "SWR"],
    thumbnail: "/images/vimuse.png",
  },
  {
    slug: "hyfarm",
    title: "HYFARM 관리자 시스템",
    description: "풀무원 전자계약 및 물류 관리",
    tech: ["React", "TypeScript", "Recoil", "Zustand"],
    thumbnail: "/images/hyfarm.png",
  },
];

export default function ProjectsPage() {
  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-12"
      >
        Projects
      </motion.h1>

      <div className="grid gap-8">
        {projects.map((project, i) => (
          <Link key={i} href={`/projects/${project.slug}`}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block border border-[#333] rounded-xl p-6 hover:border-sky-400 transition-colors"
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4 border border-[#222]"
              />
              <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
              <p className="text-gray-400 mb-3">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-[#222] text-sm px-3 py-1 rounded-full text-sky-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </main>
  );
}
