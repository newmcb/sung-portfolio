interface careerDataProps{
  slug:string;
  company:string;
  role:string;
  period:string;
  description:string[];
  achievements?:string[];
  tools?:string[];
  tech:string[];
}

export const careerData:careerDataProps[] = [
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
      "Angular 기반 교육 시스템을 React 및 Next.js로 전환하며, 하드코딩 구조를 모듈화하여 유지보수성과 확장성을 크게 개선. 특히, API 호출 로직을 재설계해 불필요한 네트워크 트래픽을 제거하고, 클라이언트 상태 관리에 Recoil과 React-Query를 도입하여 데이터 흐름의 안정성과 효율성을 확보",
      "D3.js를 활용한 Bellcurve 차트를 React 환경에 통합할 때, DOM 조작과 계산 로직을 분리함으로써 퍼포먼스와 코드 가독성을 모두 확보. 이를 통해 복잡한 수학적 계산과 유연한 UI 표현을 동시에 달성",
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
      "SK Hynix 프로젝트에서는 Tableau JavaScript API와 연동하여 대시보드 시각화 기능을 개발하고, 외부 스크립트 제한을 우회하기 위해 Java(Spring Boot) 기반 백엔드에서 이미지 저장 및 PPT 다운로드 기능을 구현하여 사용자 요구사항을 완전하게 충족",
      "VIMUSE와 We Will 영상 콘텐츠 플랫폼 개발에서 react-player 라이브러리를 커스터마이징하여 영상 재생, 시청 기록, 댓글/대댓글, 다양한 평가 유형(별점/객관식/주관식 등)을 구현. 이를 통해 사용자 친화적이고 유연한 인터랙션 경험을 제공",
      "프로젝트 전반에서 프레임워크와 라이브러리 간의 상호 작용을 전략적으로 조율하며, 제약을 극복하고 기술 스택의 강점을 극대화하는 방향으로 문제를 해결. 이로 인해 다양한 기술 요구사항을 충족시키는 동시에 높은 수준의 UI/UX를 구현함"
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
      "환경표지인증 시스템 UI 개선: 관리자, 사용자, 현장심사(실무자) UI 개선",
      "뉴스레터 기능 개발: 메일 발송 기능 추가",
      "친환경건설자재시스템: 모바일 페이지 신규 개발",
      "녹색건축인증: 불필요하게 하드코딩 된 1200개 JSP 파일을 파악하여 8개의 파일로 정리"
    ],
    achievements: [
      " 레거시 파일을 8개의 재사용 가능한 동적 파일로 구조화하여, 작업 효율성과 시스템 성능을 대폭 개선"
    ],
    tech: ["Java", "Spring", "Oracle", "JSP", "jQuery", "MyBatis"]
  }
];
