import type { Metadata } from "next";
import { servicesData } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services · Lance Ian T. Leanillo",
  description: "Explore the service offerings of Lance Ian T. Leanillo, from full-stack engineering to rapid prototyping.",
};

export default function ServicesPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 pt-28">
      <div className="pointer-events-none fixed inset-0 opacity-80">
        <div className="absolute inset-0 animate-slow-pulse bg-[radial-gradient(circle_at_20%_15%,_rgba(56,189,248,0.35),_transparent_55%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.35),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.25),_transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-slate-900 via-transparent to-transparent" />
      </div>
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col gap-10 px-6 py-16 sm:px-8">
      <header className="space-y-3">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-200">Services</p>
        <h1 className="text-4xl font-semibold text-white">From ideas to working projects.</h1>
        <p className="text-base text-slate-300">
          I collaborate with classmates, student orgs, and mentors to turn concepts into functional applications, explore automation,
          and document every learning.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-2">
        {servicesData.map((service, index) => {
          const gradientAccents = [
            "from-sky-500/80 via-blue-500/80 to-cyan-400/80",
            "from-purple-500/80 via-fuchsia-500/80 to-rose-400/80",
          ] as const;
          return (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-900/50 transition-all hover:-translate-y-2"
            >
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${
                    gradientAccents[index % gradientAccents.length]
                  } blur-3xl`}
                />
              </div>
              <div className="relative flex h-full flex-col gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.4em] text-slate-400">Service</p>
                  <h2 className="mt-2 text-2xl font-semibold text-white">{service.title}</h2>
                </div>
                <p className="text-sm text-slate-200">{service.description}</p>
                <ul className="mt-auto space-y-2 text-sm text-slate-200">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2">
                      <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </section>
      </div>
    </div>
  );
}


