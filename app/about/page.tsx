import type { Metadata } from "next";
import {
  certificatesList,
  experienceTimeline,
  skillsList,
} from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About · Lance Ian T. Leanillo",
  description: "Learn more about Lance Ian T. Leanillo, a CPU BSCS student focused on software development, and community innovation.",
};

export default function AboutPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 pt-28">
      <div className="pointer-events-none fixed inset-0 opacity-80">
        <div className="absolute inset-0 animate-slow-pulse bg-[radial-gradient(circle_at_20%_15%,_rgba(56,189,248,0.35),_transparent_55%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.35),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.25),_transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-slate-900 via-transparent to-transparent" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16 sm:px-8">
      <header className="space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-indigo-200">About Me</p>
        <h1 className="text-4xl font-semibold text-white">Transforming ideas into purposeful and engaging products.</h1>
        <p className="text-base text-slate-200">
          Hi, I’m Lance Ian T. Leanillo, a third-year Computer Science student at Central Philippine University specializing in
          Software Development. I’m passionate about building software and digital solutions that make life easier while exploring the
          worlds of robotics and automation.
        </p>
      </header>

      <section className="grid gap-6 rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-slate-900/40 backdrop-blur">
        <h2 className="text-2xl font-semibold text-white">Experience timeline</h2>
        <div className="space-y-4">
          {experienceTimeline.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-slate-900/40 backdrop-blur"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-slate-300">{item.period}</p>
              <p className="mt-2 text-lg font-semibold text-white">{item.title}</p>
              <p className="text-sm text-slate-200">{item.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-slate-900/40 backdrop-blur">
        <h2 className="text-2xl font-semibold text-white">Skills & Stacks</h2>
        <p className="mt-2 text-sm text-slate-200">
          The tools I use most for discovery, prototyping, and building working software.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          {skillsList.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-100 transition hover:border-blue-300/60 hover:bg-blue-500/10 hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-xl shadow-slate-900/40 backdrop-blur">
        <h2 className="text-2xl font-semibold text-white">Certificates</h2>
        <div className="mt-4 grid gap-3">
          {certificatesList.map((certificate) => (
            <div
              key={certificate}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
              {certificate}
            </div>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
}


