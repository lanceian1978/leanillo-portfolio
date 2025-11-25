import type { Metadata } from "next";
import { contactLinks } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact · Lance Ian T. Leanillo",
  description: "Reach out to Lance Ian T. Leanillo for collaborations, internships, and software projects.",
};

export default function ContactPage() {
    return (
      <div className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16 sm:px-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">Contact</p>
          <h1 className="text-4xl font-semibold text-slate-900">Let’s build something unforgettable.</h1>
          <p className="text-base text-slate-600">
            I’m currently open for internships, freelance work, and community-led experiments. Fill out the form or reach me
            through any of the channels below and I’ll respond within 24 hours.
          </p>
        </header>

        <section className="rounded-3xl border border-white/15 bg-white/95 p-6 shadow-2xl shadow-slate-200/60 backdrop-blur">
        <form className="space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-2xl border border-slate-200/70 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@email.com"
              className="w-full rounded-2xl border border-slate-200/70 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Contact Number
            </label>
            <input
              type="tel"
              placeholder="+63 976 150 6616"
              className="w-full rounded-2xl border border-slate-200/70 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              What should we build?
            </label>
            <textarea
              rows={4}
              placeholder="Tell me about the experience, system, or collaboration you have in mind."
              className="w-full rounded-2xl border border-slate-200/70 bg-transparent px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-900 px-4 py-3 text-sm font-semibold uppercase tracking-[0.4em] text-white transition hover:scale-[1.01]"
          >
            Send Message
          </button>
          <p className="text-xs text-slate-500">This demo form illustrates my preferred UX patterns.</p>
        </form>
      </section>

      <section className="rounded-3xl border border-white/15 bg-white/90 p-6 shadow-2xl shadow-slate-200/60 backdrop-blur">
        <h2 className="text-2xl font-semibold text-slate-900">Direct Channels</h2>
        <div className="mt-4 space-y-4">
          {contactLinks.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              className="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white/90 px-5 py-4 text-slate-700 transition hover:-translate-y-1 hover:border-slate-900"
            >
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-slate-500">{contact.label}</p>
                <p className="text-lg font-semibold">{contact.value}</p>
              </div>
              <span className="text-sm font-semibold text-slate-500">Reach out</span>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}


