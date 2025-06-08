"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";

const projects = [
  {
    slug: "nowcoding",
    title: "NOWCODING",
    description: "AI 기반 개발 학습 플랫폼",
    details: "NOWCODING은 AI를 활용해 개발자가 실시간 피드백과 함께 코딩을 연습할 수 있도록 지원하는 교육 플랫폼입니다. 사용자 맞춤형 문제 추천, 코드 자동 평가, 통계 기반 피드백 기능 등을 갖추고 있습니다.",
    tech: ["React", "TypeScript", "OpenAI API", "Tailwind"],
    thumbnail: "/images/nowcoding.png",
  },
  {
    slug: "adview",
    title: "AdView",
    description: "광고주용 대시보드와 트래킹 시스템",
    details: "AdView는 광고주의 캠페인을 실시간으로 추적하고 시각화하는 대시보드 플랫폼입니다. 캠페인 ROI, 실시간 트래픽, 사용자 반응 데이터를 시각화하여 효과적인 광고 운영을 지원합니다.",
    tech: ["Next.js", "MobX", "Chart.js"],
    thumbnail: "/images/adview.png",
  },
  {
    slug: "vimuse",
    title: "VIMUSE",
    description: "영상 콘텐츠 큐레이션 플랫폼",
    details: "VIMUSE는 다양한 분야의 영상 콘텐츠를 카테고리별로 큐레이션하여 제공하는 플랫폼입니다. 사용자 참여형 큐레이션, 영상 통계 분석, 콘텐츠 추천 알고리즘을 통해 최적의 시청 경험을 제공합니다.",
    tech: ["React", "Chart.js", "SWR"],
    thumbnail: "/images/vimuse.png",
  },
  {
    slug: "hyfarm",
    title: "HYFARM 관리자 시스템",
    description: "풀무원 전자계약 및 물류 관리",
    details: "HYFARM은 풀무원 협력사를 위한 전자계약 및 물류 관리 시스템으로, Angular에서 React로 마이그레이션하며 사용성과 속도 모두를 개선했습니다.",
    tech: ["React", "TypeScript", "Recoil", "Zustand"],
    thumbnail: "/images/hyfarm.png",
  },
];

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <motion.img
        src={project.thumbnail}
        alt={project.title}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-64 object-cover rounded-lg mb-8 border border-[#333]"
      />

      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-4"
      >
        {project.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-gray-400 text-lg mb-6 leading-relaxed"
      >
        {project.details}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="flex gap-2 flex-wrap"
      >
        {project.tech.map((t, i) => (
          <span key={i} className="bg-[#222] text-sm px-3 py-1 rounded-full text-sky-300">
            {t}
          </span>
        ))}
      </motion.div>
    </main>
  );
}
