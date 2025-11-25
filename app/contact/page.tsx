import type { Metadata } from "next";
import { contactLinks } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact · Lance Ian T. Leanillo",
  description: "Reach out to Lance Ian T. Leanillo for collaborations, internships, and software projects.",
};

export default function ContactPage() {
    return (
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-slate-100 pt-28">
        <div className="pointer-events-none fixed inset-0 opacity-80">
          <div className="absolute inset-0 animate-slow-pulse bg-[radial-gradient(circle_at_20%_15%,_rgba(56,189,248,0.35),_transparent_55%),radial-gradient(circle_at_80%_20%,_rgba(168,85,247,0.35),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.25),_transparent_60%)]" />
          <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-slate-900 via-transparent to-transparent" />
        </div>
        <div className="relative z-10 mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16 sm:px-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-200">Contact</p>
          <h1 className="text-4xl font-semibold text-white">Let’s build something unforgettable.</h1>
          <p className="text-base text-slate-300">
            I’m currently open for internships, freelance work, and community-led experiments. Fill out the form or reach me
            through any of the channels below and I’ll respond within 24 hours.
          </p>
        </header>

        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-900/50 backdrop-blur">
        <form className="space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200/40"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200/40"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Contact Number
            </label>
            <input
              type="tel"
              placeholder="+63 976 150 6616"
              className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200/40"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              What should we build?
            </label>
            <textarea
              rows={4}
              placeholder="Tell me about the experience, system, or collaboration you have in mind."
              className="w-full rounded-2xl border border-white/20 bg-transparent px-4 py-3 text-sm text-white outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200/40"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 px-4 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white shadow-lg transition hover:scale-[1.02] hover:shadow-indigo-500/40"
          >
            Send Message
          </button>
          <p className="text-xs text-slate-400">This demo form illustrates my preferred UX patterns.</p>
        </form>
      </section>

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-900/50 backdrop-blur">
        <h2 className="text-2xl font-semibold text-white">Direct Channels</h2>
        <div className="mt-4 space-y-4">
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
              <span className="text-sm font-semibold text-slate-400">Reach out</span>
            </a>
          ))}
        </div>
      </section>
      </div>
    </div>
  );
}


