import type { Metadata } from "next";
import { projectsData, featureBadges } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Portfolio · Lance Ian T. Leanillo",
  description: "A curated selection of Lance Ian T. Leanillo’s projects across education, robotics, and community tech.",
};

  export default function PortfolioPage() {
    return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 pt-28">
        <div className="pointer-events-none fixed inset-0 opacity-80">
          <div className="absolute inset-0 animate-slow-pulse bg-[radial-gradient(circle_at_20%_15%,_rgba(56,189,248,0.35),_transparent_55%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.35),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.25),_transparent_60%)]" />
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-slate-900 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16 sm:px-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-200">Portfolio</p>
          <h1 className="text-4xl font-semibold text-white">Selected Projects & Experience</h1>
          <p className="text-base text-slate-300">
            Projects showcasing hands-on learning, UI/UX design, and practical development.
          </p>
        </header>
  
        <section className="grid gap-6 lg:grid-cols-3">
          {projectsData.map((project) => (
            <div
              key={project.title}
              className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-900/60 p-6 text-slate-100 shadow-lg shadow-indigo-900/40 transition hover:-translate-y-2"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Concept</p>
                <span className="text-xs font-semibold text-emerald-300">{project.concept}</span>
              </div>
              <h2 className="text-xl font-semibold text-white">{project.title}</h2>
              <p className="text-sm text-slate-200">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
                    {item}
                  </span>
                ))}
              </div>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-slate-200 transition hover:text-sky-300"
              >
                View build notes
                <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </section>
  
        <section className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-2xl shadow-indigo-200/40 backdrop-blur">
          <h2 className="text-2xl font-semibold text-white">Experience features</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {featureBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-200 transition hover:border-purple-300/60 hover:bg-purple-500/10 hover:text-white"
              >
                {badge}
              </span>
            ))}
          </div>
        </section>
        </div>
      </div>
    );
  }