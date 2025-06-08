"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";

const careerData = [
  {
    slug: "nowcoding",
    company: "나우코딩랩스",
    role: "프론트엔드",
    period: "2023.05 – 재직중",
    description: [
      "삼성, 한전 KPS, 초,중,고등학교, 개인을 대상으로 프로그래밍 교육 시스템 유지보수 및 신규 개발",
      "Angular 프로젝트 React로 전환하여 프로토 타입 개발",
      "전북교육청 전용 LMS 신규 개발",
      "LMS에 OpenAI API 연동 및 화면 신규 개발"
    ],
    achievements: [
      "Angular에서 React로 마이그레이션 후 페이지 로딩 시간 40% 단축",
      "OpenAI GPT 연동으로 사용자 만족도 20% 증가"
    ],
    tools: ["JIRA", "Figma", "Slack"],
    tech: ["Angular", "TypeScript", "NodeJs", "NextJs"]
  },
  {
    slug: "blocksmith",
    company: "블록스미스",
    role: "프론트엔드",
    period: "2020.08 – 2023.04",
    description: [
      "광고 플랫폼: ReactJs, TypeScript, NextJs 등을 활용해 광고주 플랫폼 개발 및 공통 레이아웃 구현",
      "VIMUSE: 영상 큐레이팅 플랫폼에서 영상 재생, 댓글, 대댓글 기능 개발 및 레거시 코드 리팩토링",
      "SK Hynix 프로젝트: Tableau와 연동하여 차트 시각화 및 속도 개선, PPT 다운로드 기능 개발",
      "Firebase 활용: 서버리스 홈페이지 개발 및 빠른 구축을 위한 Firestore Database 사용",
      "기타 프로젝트: 다양한 영상 평가 및 관리 시스템을 구축하고, 기능 개선 및 최적화 작업 수행"
    ],
    achievements: [
      "대시보드 성능 개선으로 초기 로딩 속도 60% 향상",
      "Tableau 연동 작업 시 시각화 정확도 개선 및 운영 효율성 확보"
    ],
    tools: ["GitLab", "Notion", "Slack"],
    tech: ["ReactJs", "NextJs", "MobX", "TypeScript", "NodeJs", "ExpressJs", "Prisma"]
  },
  {
    slug: "thewill",
    company: "더윌시스템",
    role: "웹 개발",
    period: "2017.07 – 2020.08",
    description: [
      "환경성적표지 홈페이지 리뉴얼: ASP → JSP 전환, UI 개선, 영문 페이지 추가, 사용자 및 관리자 페이지 리뉴얼",
      "환경신기술정보 시스템: 메인 UI 개선",
      "환경표지인증 시스템 UI 개선: 관리자, 사용자, 현장심사 UI 개선",
      "뉴스레터 기능 개발: 메일 발송 기능 추가",
      "친환경건설자재시스템: 모바일 페이지 개발"
    ],
    achievements: [
      "대시보드 성능 개선으로 초기 로딩 속도 60% 향상",
      "Tableau 연동 작업 시 시각화 정확도 개선 및 운영 효율성 확보"
    ],
    tools: ["GitLab", "Notion", "Slack"],
    tech: ["Java", "Spring", "Oracle", "JSP", "jQuery", "MyBatis"]
  }
];

export default function CareerDetailPage() {
  const { slug } = useParams();
  const data = careerData.find((item) => item.slug === slug);

  if (!data) return notFound();

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-2"
      >
        {data.company}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-sm mb-4"
      >
        {data.period}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6 font-medium text-lg"
      >
        {data.role}
      </motion.p>

      <motion.ul
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
        className="list-disc list-inside space-y-2 mb-6"
      >
        {data.description.map((line, i) => (
          <motion.li
            key={i}
            variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
          >
            {line}
          </motion.li>
        ))}
      </motion.ul>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-6"
      >
        <h2 className="text-xl font-semibold mb-2">성과</h2>
        <ul className="list-disc list-inside space-y-1">
          {data.achievements.map((line, i) => (
            <li key={i}>{line}</li>
          ))}
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-6"
      >
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
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-6"
      >
        <h2 className="text-xl font-semibold mb-2">기술 스택</h2>
        <div className="flex gap-2 flex-wrap">
          {data.tech.map((tech, i) => (
            <span
              key={i}
              className="bg-[#222] text-sm px-3 py-1 rounded-full text-sky-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
