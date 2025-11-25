"use client";

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

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

const IconArrow = () => (
  <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-2">
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      <div className="pointer-events-none fixed inset-0 opacity-80">
        <div className="absolute inset-0 animate-slow-pulse bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.25),_transparent_55%)]" />
        <div className="absolute inset-x-0 top-0 h-72 bg-gradient-to-b from-white via-transparent to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-24 px-6 pb-16 pt-10 sm:px-10 lg:px-12">
        <header className="sticky top-4 z-20 rounded-3xl border border-white/10 bg-white/90 px-6 py-4 shadow-xl backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.5em] text-slate-500">Lance Ian T. Leanillo</p>
              <p className="text-base font-semibold text-slate-900">Software Development Student · CPU</p>
            </div>
            <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-slate-600">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="rounded-full px-4 py-2 transition hover:bg-slate-900/5 hover:text-slate-900"
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
            className="grid items-center gap-10 rounded-[32px] border border-white/20 bg-white/90 p-8 shadow-2xl shadow-sky-200/40 backdrop-blur-2xl lg:grid-cols-2 lg:gap-12 lg:p-12"
          >
            <div className="flex flex-col gap-6">
              <span className="inline-flex items-center gap-2 self-start rounded-full border border-slate-200/70 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-slate-500">
                Craft + Learning
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.7)]" />
              </span>
              <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                Passionate Software Developer in the Making
              </h1>
              <p className="text-lg text-slate-600">
                Hi, I’m Lance Ian T. Leanillo, a third-year Computer Science student at Central Philippine University specializing in
                Software Development. I am passionate about creating software and digital solutions that make life easier and more
                efficient.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/30 transition hover:-translate-y-1 hover:bg-slate-700"
                >
                  Work with me
                  <IconArrow />
                </a>
                <a
                  href="https://github.com/lanceian1978"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-1 hover:border-slate-900 hover:bg-white"
                >
                  GitHub profile
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 -top-6 h-24 w-24 animate-float rounded-full bg-gradient-to-r from-sky-400/60 to-emerald-300/60 blur-3xl" />
              <div className="absolute -right-4 bottom-10 h-32 w-32 animate-float-delayed rounded-full bg-gradient-to-r from-fuchsia-500/40 to-purple-500/40 blur-3xl" />
              <div className="relative rounded-[28px] border border-white/20 bg-white/85 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.2)] backdrop-blur-2xl">
                <p className="text-xs uppercase tracking-[0.5em] text-slate-500">Featured Identity</p>
                <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-white/20 bg-gradient-to-br from-slate-900 via-slate-800 to-violet-900 p-6 text-white shadow-inner">
                  <div className="flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-white/30">
                      <Image src="/profile.jpg" alt="Lance Ian T. Leanillo" fill className="object-cover" sizes="64px" priority />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-[0.4em] text-white/70">CPU · Iloilo City</p>
                      <p className="text-xl font-semibold">Lance Leanillo</p>
                      <p className="text-sm text-white/80">Software Development Specialist</p>
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
            className="grid gap-10 rounded-[32px] border border-white/15 bg-white/85 p-8 shadow-2xl shadow-blue-200/30 backdrop-blur-2xl lg:grid-cols-[1.15fr_0.85fr] lg:p-12"
          >
            <div className="flex flex-col gap-6">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">About Me</p>
              <h2 className="text-3xl font-semibold text-slate-900">
                Transforming ideas into purposeful and engaging digital products.
              </h2>
              <p className="text-base text-slate-600">
                My journey into technology began with exploring programming and robotics through school projects and competitions. I
                have participated in LEGO Education Robotics Training, earned certifications including CompTIA IT Fundamentals and the
                BASED BUILD PH event, which helped me develop problem-solving and teamwork skills.
              </p>
              <div className="flex flex-wrap gap-3">
                {skillsList.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200/70 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500"
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
                  className="rounded-2xl border border-white/30 bg-white/85 p-5 shadow-lg shadow-slate-200/40 backdrop-blur"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">{item.period}</p>
                  <p className="mt-2 text-lg font-semibold text-slate-900">{item.title}</p>
                  <p className="text-sm text-slate-600">{item.details}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="services"
            className="rounded-[32px] border border-white/15 bg-white/90 p-8 shadow-2xl shadow-slate-200/60 backdrop-blur-2xl lg:p-12"
          >
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">Services</p>
              <h2 className="text-3xl font-semibold text-slate-900">From Ideas to Working Projects</h2>
              <p className="text-base text-slate-600">
                I enjoy turning concepts into functional software. I collaborate with classmates, student organizations, and mentors
                to build practical applications, explore automation, and develop projects that solve real problems.
              </p>
            </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {servicesData.map((service) => (
                <div
                  key={service.title}
                  className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/95 p-6 shadow-xl shadow-slate-200/60"
                >
                  <div className="relative flex flex-col gap-4">
                    <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
                    <p className="text-sm text-slate-600">{service.description}</p>
                    <ul className="space-y-2 text-sm text-slate-600">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" />
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
            className="rounded-[32px] border border-white/20 bg-white/90 p-8 shadow-2xl shadow-indigo-200/40 backdrop-blur-2xl lg:p-12"
          >
            <div className="flex flex-col gap-4">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">Portfolio</p>
              <h2 className="text-3xl font-semibold text-slate-900">Selected Projects & Experience</h2>
              <p className="text-base text-slate-600">
                Projects showcasing hands-on learning, UI/UX design, and practical development.
          </p>
        </div>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {projectsData.map((project) => (
                <div
                  key={project.title}
                  className="flex flex-col gap-4 rounded-3xl border border-white/20 bg-gradient-to-br from-white via-white to-slate-100/70 p-6 shadow-lg shadow-slate-200/60"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm uppercase tracking-[0.4em] text-slate-400">Concept</p>
                    <span className="text-xs font-semibold text-emerald-500">{project.concept}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{project.title}</h3>
                  <p className="text-sm text-slate-600">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span key={item} className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-600">
                        {item}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://github.com/lanceian1978"
            target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-slate-900 transition hover:text-blue-600"
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
                  className="rounded-full border border-slate-200/70 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500"
                >
                  {badge}
                </span>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="grid gap-8 rounded-[32px] border border-white/20 bg-white/90 p-8 shadow-2xl shadow-emerald-200/40 backdrop-blur-2xl lg:grid-cols-2 lg:p-12"
          >
            <div className="space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">Contact</p>
              <h2 className="text-3xl font-semibold text-slate-900">Let’s collaborate on the next experience that wows.</h2>
              <p className="text-base text-slate-600">
                I’m open for internships, freelance collaborations, hackathons, and community-led experiments. Drop a
                message with what you’re building and let’s craft it together.
              </p>
              <div className="space-y-4">
                {contactLinks.map((contact) => (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white/95 px-5 py-4 text-slate-700 transition hover:-translate-y-1 hover:border-slate-900"
                  >
                    <div>
                      <p className="text-xs uppercase tracking-[0.4em] text-slate-500">{contact.label}</p>
                      <p className="text-lg font-semibold">{contact.value}</p>
                    </div>
                    <IconArrow />
                  </a>
                ))}
              </div>
            </div>
            <form className="space-y-4 rounded-3xl border border-white/20 bg-white/95 p-6 shadow-xl shadow-slate-200/60 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-slate-500">Quick Message</p>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Name</label>
                <input
                  type="text"
                  placeholder="How should I call you?"
                  className="w-full rounded-2xl border border-slate-200/70 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Contact Number</label>
                <input
                  type="tel"
                  placeholder="+63 976 150 6616"
                  className="w-full rounded-2xl border border-slate-200/70 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">Email</label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="w-full rounded-2xl border border-slate-200/70 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">What do you want to build?</label>
                <textarea
                  rows={4}
                  placeholder="Share the experience, app, or system you want me to make."
                  className="w-full rounded-2xl border border-slate-200/70 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
                />
        </div>
              <button
                type="submit"
                className="w-full rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-900 px-4 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white transition hover:scale-[1.01]"
              >
                Send Message
              </button>
              <p className="text-xs text-slate-500">Not a real form yet — but it shows how I plan user flows before handing off.</p>
            </form>
          </section>
      </main>

        <footer className="flex flex-col gap-4 pb-10 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Lance Ian T. Leanillo · Crafted with Next.js 16 in Iloilo City.</p>
          <p>Let’s push ideas forward — robotics, education, software craftsmanship.</p>
        </footer>
      </div>
    </div>
  );
}
