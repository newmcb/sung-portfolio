import {FaCss3Alt, FaHtml5, FaJsSquare, FaNodeJs, FaReact} from "react-icons/fa";
import {RiNextjsFill} from "react-icons/ri";

export const SKILLS = [
  { label: "ReactJs", percent: 85, Icon: FaReact },
  { label: "NextJs", percent: 90, Icon: RiNextjsFill },
  { label: "JavaScript", percent: 90, Icon: FaJsSquare },
  { label: "HTML5", percent: 95, Icon: FaHtml5 },
  { label: "CSS3", percent: 70, Icon: FaCss3Alt },
  { label: "Node.js", percent: 80, Icon: FaNodeJs },
];

export const EXPERIENCE = [
  {
    date: "2023.05 – 재직중",
    title: "나우코딩랩스",
    desc: "웹개발 총괄, Angular → React 전환, 전북교육청 전용 LMS 및 OpenAI API 연동 화면 개발",
  },
  {
    date: "2020.08 – 2023.04",
    title: "블록스미스",
    desc: "광고 플랫폼·VIMUSE · 하이에너지 등 프론트엔드 개발 및 운영, React + Next.js 기반 리팩토링",
  },
  {
    date: "2017.07 – 2020.08",
    title: "더윌시스템",
    desc: "환경 인증 정보 시스템 고도화/운영, Java/Spring 기반 유지보수 및 UI 개선",
  },
];

export const CERTIFICATIONS = [
  { title: "정보처리기사", date: "2024.09", issuer: "한국산업인력공단", result: "최종합격" },
  { title: "리눅스 마스터 2급", date: "2025.03", issuer: "한국정보통신인력개발센터", result: "최종합격" },
];

export const EDUCATION = [
  {
    institution: "한국산업기술대학교 (4년제)",
    degree: "전자과",
    period: "2014.03 - 2018.02",
    note: "편입/졸업",
  },
  {
    institution: "학점은행제 학사대학교 (4년제)",
    degree: "경영학",
    period: "2013.03 - 2014.02",
    note: "졸업",
  },
  {
    institution: "동서울대학 (2·3년제)",
    degree: "기계자동차",
    period: "2011.03 - 2013.02",
    note: "졸업",
  },
  {
    institution: "배재고등학교",
    degree: "이과계열",
    period: "2004.03 - 2007.02",
    note: "졸업",
  },
];
