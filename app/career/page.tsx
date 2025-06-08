"use client";

import Link from "next/link";
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
      "LMS에 OpenAI API 연동 및 화면 신규 개발",
    ],
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
    tech: ["Java", "Spring", "Oracle", "JSP", "jQuery", "MyBatis"]
  }
];

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
