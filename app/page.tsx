import type { ReactElement } from "react";
import Image from "next/image";
import {
  certificatesList,
  contactLinks,
  experienceTimeline,
  featureBadges,
  projectsData,
  servicesData,
  skillsList,
} from "@/lib/site-data";

type NavLink = {
  id: string;
  label: string;
};

const navLinks: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const IconArrow = (): ReactElement => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

const gradientAccents = [
  "from-sky-500/80 via-blue-500/80 to-cyan-400/80",
  "from-purple-500/80 via-fuchsia-500/80 to-rose-400/80",
] as const;

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 opacity-80">
        <div className="absolute inset-0 animate-slow-pulse bg-[radial-gradient(circle_at_20%_15%,_rgba(56,189,248,0.35),_transparent_55%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.35),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.25),_transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-slate-900 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-16 pt-10 sm:px-10 lg:px-12">
        <header className="sticky top-4 z-20 rounded-3xl border border-white/10 bg-slate-950/70 px-6 py-4 text-slate-100 shadow-[0_25px_100px_rgba(3,7,18,0.65)] backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-slate-400">Lance Ian T. Leanillo</p>
              <p className="text-base font-semibold text-white">Software Development Student · CPU</p>
            </div>
            <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-200">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="rounded-full px-4 py-2 transition hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex flex-col gap-24">
          <section
            id="home"
            className="grid items-center gap-10 rounded-[32px] border border-white/10 bg-gradient-to-br from-slate-950/80 via-slate-900/70 to-slate-900/50 p-8 shadow-[0_45px_140px_rgba(14,165,233,0.25)] backdrop-blur-2xl lg:grid-cols-2 lg:gap-12 lg:p-12"
          >
            <div className="flex flex-col gap-6">
              <span className="inline-flex items-center gap-2 self-start rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-200">
                Craft + Learning
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
                Passionate Software Developer in the Making
              </h1>
              <p className="text-lg text-slate-200">
                Hi, I’m Lance Ian T. Leanillo, a third-year Computer Science student at Central Philippine University specializing in
                Software Development. I am passionate about creating software and digital solutions that make life easier and more
                efficient.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-500/50"
                >
                  Work with me
                  <IconArrow />
                </a>
                <a
                  href="https://github.com/lanceian1978"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-emerald-300 hover:bg-white/10"
                >
                  GitHub profile
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 -top-6 h-24 w-24 animate-float rounded-full bg-gradient-to-r from-sky-400/60 to-emerald-300/60 blur-3xl" />
              <div className="absolute -right-4 bottom-10 h-32 w-32 animate-float-delayed rounded-full bg-gradient-to-r from-fuchsia-500/40 to-purple-500/40 blur-3xl" />
              <div className="relative">
                <p className="inline-flex rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.5em] text-slate-200">
                  Featured Identity
                </p>
                <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-white/20 bg-gradient-to-br from-slate-900 via-slate-800 to-violet-900 p-6 text-white shadow-[0_30px_80px_rgba(15,23,42,0.4)]">
                  <div className="flex items-center gap-4 text-slate-100">
                    <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/30">
                      <Image src="/profile.jpg" alt="Lance Ian T. Leanillo" fill className="object-cover" sizes="64px" priority />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.4em] text-white/70">CPU · Iloilo City</p>
                      <p className="text-xl font-semibold text-emerald-200">Lance Ian Leanillo</p>
                      <p className="text-sm text-slate-200">Software Development Specialist</p>
                    </div>
                  </div>
                  <p className="text-sm text-white/90">
                    Driven by curiosity and a passion for collaborative learning. I’m currently enhancing my skills through hands-on projects
                    and case studies that combine design and development.
                  </p>
                  <div className="grid gap-3 rounded-2xl bg-white/5 p-4 text-white/90 sm:grid-cols-2">
                    {certificatesList.map((certificate) => (
                      <div key={certificate} className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em]">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.9)]" />
                        {certificate}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="about"
            className="grid gap-10 rounded-[32px] border border-white/10 bg-slate-950/60 p-8 shadow-[0_45px_140px_rgba(99,102,241,0.2)] backdrop-blur-2xl lg:grid-cols-[1.15fr_0.85fr] lg:p-12"
          >
            <div className="flex flex-col gap-6">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-indigo-200">About Me</p>
              <h2 className="text-3xl font-semibold text-white">
                Transforming ideas into purposeful and engaging digital products.
              </h2>
              <p className="text-base text-slate-200">
                My journey into technology began with exploring programming and robotics through school projects and competitions. I
                have participated in LEGO Education Robotics Training, earned certifications including CompTIA IT Fundamentals and the
                BASED BUILD PH event, which helped me develop problem-solving and teamwork skills.
              </p>
              <div className="flex flex-wrap gap-3">
                {skillsList.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-100 transition hover:border-blue-300/60 hover:bg-blue-500/10 hover:text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              {experienceTimeline.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-slate-900/40 backdrop-blur transition hover:-translate-y-1 hover:border-blue-300/40"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">{item.period}</p>
                  <p className="mt-2 text-lg font-semibold text-white">{item.title}</p>
                  <p className="text-sm text-slate-200">{item.details}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="services"
            className="rounded-[32px] border border-white/10 bg-slate-950/60 p-8 shadow-[0_45px_140px_rgba(14,165,233,0.2)] backdrop-blur-2xl lg:p-12"
          >
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-200">Services</p>
              <h2 className="text-3xl font-semibold text-white">From Ideas to Working Projects</h2>
              <p className="text-base text-slate-300">
                I enjoy turning concepts into functional software. I collaborate with classmates, student organizations, and mentors
                to build practical applications, explore automation, and develop projects that solve real problems.
              </p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {servicesData.map((service, index) => (
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
                  <div className="relative flex flex-col gap-4">
                    <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    <p className="text-sm text-slate-200">{service.description}</p>
                    <ul className="space-y-2 text-sm text-slate-200">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white/80" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="portfolio"
            className="rounded-[32px] border border-white/10 bg-slate-950/60 p-8 shadow-[0_45px_140px_rgba(99,102,241,0.25)] backdrop-blur-2xl lg:p-12"
          >
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-200">Portfolio</p>
              <h2 className="text-3xl font-semibold text-white">Selected Projects & Experience</h2>
              <p className="text-base text-slate-300">
                Projects showcasing hands-on learning, UI/UX design, and practical development.
          </p>
        </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {projectsData.map((project) => (
                <div
                  key={project.title}
                  className="group flex flex-col gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900/80 to-slate-900/60 p-6 text-slate-100 shadow-lg shadow-indigo-900/40 transition hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Concept</p>
                    <span className="text-xs font-semibold text-emerald-300">{project.concept}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
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
                    className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-white underline underline-offset-4 transition hover:text-sky-300"
                  >
                    View detailed build notes <IconArrow />
                  </a>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
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

          <section
            id="contact"
            className="grid gap-8 rounded-[32px] border border-white/10 bg-slate-950/60 p-8 shadow-[0_45px_140px_rgba(16,185,129,0.25)] backdrop-blur-2xl lg:grid-cols-2 lg:p-12"
          >
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-200">Contact</p>
              <h2 className="text-3xl font-semibold text-white">Let’s collaborate on the next experience that wows.</h2>
              <p className="text-base text-slate-300">
                I’m open for internships, freelance collaborations, hackathons, and community-led experiments. Drop a
                message with what you’re building and let’s craft it together.
              </p>
              <div className="space-y-4">
                {contactLinks.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-slate-200 transition hover:-translate-y-1 hover:border-emerald-400 hover:bg-emerald-500/10 hover:shadow-lg hover:shadow-emerald-500/30"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-slate-400">{contact.label}</p>
                      <p className="text-lg font-semibold text-white">{contact.value}</p>
                    </div>
                    <IconArrow />
                  </a>
                ))}
              </div>
            </div>
            <form className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-900/50 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-200">Quick Message</p>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Name</label>
                <input
                  type="text"
                  placeholder="How should I call you?"
                  className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200/40"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Contact Number</label>
                <input
                  type="tel"
                  placeholder="+63 976 150 6616"
                  className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200/40"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Email</label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200/40"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">What do you want to build?</label>
                <textarea
                  rows={4}
                  placeholder="Share the experience, app, or system you want me to make."
                  className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200/40"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 px-4 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white shadow-lg transition hover:scale-[1.02] hover:shadow-indigo-500/40"
              >
                Send Message
              </button>
              <p className="text-xs text-slate-400">Not a real form yet — but it shows how I plan user flows before handing off.</p>
            </form>
          </section>
      </main>

        <footer className="flex flex-col gap-4 pb-10 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Lance Ian T. Leanillo · CPU Student</p>
          <p>Always learning, building, and exploring new technologies, let’s create something amazing together.</p>
        </footer>
      </div>
    </div>
  );
}
