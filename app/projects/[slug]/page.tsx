"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";
import {ReactNode} from "react";

type SectionProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  const Section = ({ icon, title, children }:SectionProps) => (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mb-14"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-sky-400 text-lg">{icon}</span>
        <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
      </div>
      {children}
    </motion.section>
  );

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-between mb-6"
      >
        <h1 className="text-4xl font-bold">{project.title}</h1>
        {project.type && (
          <span className="text-xs text-sky-400 font-medium uppercase">{project.type}</span>
        )}
      </motion.div>

      {project.description && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-sm mb-10 leading-snug"
        >
          {project.description}
        </motion.p>
      )}

      {project.reason && (
        <Section icon="💡" title="만든 이유">
          <p className="text-sm leading-relaxed whitespace-pre-line">{project.reason}</p>
        </Section>
      )}

      {Array.isArray(project.details) && project.details.length > 0 && (
        <Section icon="🛠️" title="주요 기능">
          <ul className="list-disc list-inside space-y-1 text-sm leading-relaxed">
            {project.details.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>
        </Section>
      )}

      {Array.isArray(project.tech) && project.tech.length > 0 && (
        <Section icon="🧪" title="기술 스택">
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
        </Section>
      )}

      {/*{Array.isArray(project.screenshots) && project.screenshots.length > 0 && (*/}
      {/*  <Section icon="🖼️" title="프로젝트 화면">*/}
      {/*    <div className="grid gap-4 sm:grid-cols-2">*/}
      {/*      {project.screenshots.map((src, i) => (*/}
      {/*        <img*/}
      {/*          key={i}*/}
      {/*          src={src}*/}
      {/*          alt={`screenshot-${i}`}*/}
      {/*          className="rounded-lg border border-[#333] w-full object-cover"*/}
      {/*        />*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </Section>*/}
      {/*)}*/}

      {project.learned && (
        <Section icon="📘" title="배운 점">
          <p className="text-sm leading-relaxed whitespace-pre-line">{project.learned}</p>
        </Section>
      )}

      {(project.demo || project.repo || project.video) && (
        <Section icon="🔗" title="관련 링크">
          <div className="flex flex-wrap gap-3">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md border border-sky-500 text-sky-400 text-sm hover:bg-sky-500 hover:text-black transition"
              >
                🔗 Demo
              </a>
            )}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md border border-gray-500 text-gray-300 text-sm hover:bg-gray-300 hover:text-black transition"
              >
                💻 GitHub
              </a>
            )}
            {project.video && (
              <a
                href={project.video}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-md border border-purple-500 text-purple-300 text-sm hover:bg-purple-500 hover:text-black transition"
              >
                🎥 시연 영상
              </a>
            )}
          </div>
        </Section>
      )}
    </main>
  );
}
