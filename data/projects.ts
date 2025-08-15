export interface Project {
  slug: string;
  title: string;
  description?: string;
  details?: string[];
  tech?: string[];
  reason?: string;
  learned?: string;
  screenshots?: string[];
  demo?: string;
  repo?: string;
  video?: string;
  type?: 'Side Project' | 'Team Project' | 'Toy Project';
}

export const projects: Project[] = [
  {
    slug: "life-sync",
    title: "Life Sync",
    description: "재무, 일정, 아이디어 관리를 위한 통합형 개인 생산성 도구",
    details: [
      "유료 가계부의 제한, 일정-부채 관리 분리, 메모 분산 문제를 해결하기 위해 직접 개발",
      "수입/지출 관리, TODO 기반 일정 및 부채 추적, 자유 메모 기능을 통합한 개인 맞춤형 웹앱"
    ],
    tech: ["ReactJs", "NextJs", "TypeScript", "Tailwind"],
    reason:
      `시중의 가계부는 유료이거나 기능이 분산되어 있어 불편했습니다. 
      일정과 메모도 다른 앱에서 관리하는 불편함을 느껴, 나만의 워크플로우에 최적화된 도구를 직접 만들게 되었습니다.`,
    learned:
      "FSD 아키텍처 적용과 Zustand, React Query, Tailwind CSS를 활용해 프로젝트를 구현하며 기술적 경험을 쌓았습니다.",
    screenshots: [
      "/images/life-sync-1.png",
      "/images/life-sync-2.gif"
    ],
    demo: "https://life-sync-khaki.vercel.app/",
    repo: "https://github.com/newmcb/life-sync",
    type: "Side Project"
  },
  {
    slug: "portfolio",
    title: "Sung Portfolio",
    description: "포트폴리오",
    details: [
      "Framer Motion을 사용해 페이지 전환 및 요소 애니메이션 구현",
      "다크 모드 지원 및 반응형 레이아웃 설계로 다양한 디바이스 대응",
      "직접 수행한 프로젝트들을 정리하고, 기술 스택과 성과를 명확히 시각화"
    ],
    tech: ["ReactJs", "NextJs", "TypeScript", "Tailwind"],
    reason:
      `이력서나 정적인 PDF 대신, 실제 작업물을 담은 인터랙티브한 포트폴리오가 더 효과적인 커뮤니케이션 수단이라고 판단했습니다.
      자신의 기술 스택과 UI/UX 감각을 보여주기 위한 용도로 직접 제작하였습니다.`,
    learned:
      `모던 프론트엔드 개발의 전반적인 흐름을 정리하면서, 사용자 경험을 고려한 인터랙션 구성과 코드 구조화의 중요성을 체감했습니다.
      애니메이션, 라우팅, 상태 관리 등을 종합적으로 조율하는 UI 설계 경험을 쌓을 수 있었습니다.`,
    screenshots: [
      "/images/life-sync-1.png",
      "/images/life-sync-2.gif"
    ],
    demo: "https://sung-portfolio-chi.vercel.app//",
    repo: "https://github.com/newmcb/sung-portfolio",
    type: "Side Project"
  }
];
