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
    tech: ["React", "TypeScript", "Tailwind"],
    reason:
      "시중의 가계부는 유료이거나 기능이 분산되어 있어 불편했습니다. 일정과 메모도 다른 앱에서 관리하는 불편함을 느껴, 나만의 워크플로우에 최적화된 도구를 직접 만들게 되었습니다.",
    learned:
      "React 상태 관리 전략(Recoil, Context 등)을 실제로 적용하며 경험을 쌓을 수 있었고, 사용자 관점에서 어떤 흐름이 효율적인지 고민하게 되었습니다.",
    screenshots: [
      "/images/life-sync-1.png",
      "/images/life-sync-2.gif"
    ],
    demo: "https://life-sync-khaki.vercel.app/",
    repo: "https://github.com/newmcb/life-sync",
    type: "Side Project"
  }
];
