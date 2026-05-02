import { ArrowUpRight, Check } from "lucide-react";

const audit = {
  tag: "ONE-TIME",
  headline: "Full store audit + optimization",
  meta: "Up to 30 days · 30-day results window",
  features: ["Full store walkthrough & audit", "Revenue-impact prioritized roadmap", "Full build & implementation by our team", "30-day results window"],
  cta: "Start with a teardown",
};

const program = {
  tag: "ONGOING",
  headline: "4–8 tests monthly",
  meta: "Month-to-month · cancel anytime",
  features: ["Hypothesis through reporting", "In-house development", "Monthly lift guarantee", "Transparent test tracking"],
  cta: "Apply now",
};

export default function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-[var(--scalo-bg-1)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-20 max-w-[800px]" data-reveal>
          <h2 className="display-lg text-[var(--scalo-ink)]">
            We find what&rsquo;s{" "}
            <span className="italic-editorial text-[var(--scalo-accent)]">leaking</span>{" "}
            and we fix it.
          </h2>
          <p className="body-lg text-[var(--scalo-fg-2)] mt-6">
            Every engagement starts with a full audit. Steven personally walks your store and produces a 20-page teardown — before we ship a single test.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] rounded-3xl overflow-hidden border border-[var(--scalo-border-ghost)]" data-reveal data-delay="100">
          {/* Audit panel */}
          <div className="p-10 lg:p-14 bg-[var(--scalo-bg-2)] relative overflow-hidden border-b lg:border-b-0 lg:border-r border-[var(--scalo-border-hairline)]">
            <div className="absolute top-0 left-10 right-10 h-px bg-[var(--scalo-border-strong)]" />

            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase border border-[var(--scalo-border-strong)] text-[var(--scalo-fg-2)]">
              {audit.tag}
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-[var(--scalo-ink)] mt-6 tracking-tight">
              {audit.headline}
            </h3>
            <div className="text-sm text-[var(--scalo-fg-3)] mt-3">{audit.meta}</div>

            <ul className="mt-10 space-y-4">
              {audit.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-[var(--scalo-fg-2)]">
                  <div className="w-5 h-5 rounded-full bg-[var(--scalo-bg-3)] border border-[var(--scalo-border-ghost)] flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[var(--scalo-fg-2)]" strokeWidth={2.5} />
                  </div>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#book"
              className="mt-10 inline-flex items-center gap-1.5 bg-[var(--scalo-ink)] hover:bg-[var(--scalo-ink-2)] text-[var(--scalo-bg-0)] rounded-full h-12 px-7 text-sm font-semibold transition-colors btn-press"
            >
              {audit.cta} <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Program panel — featured with volt green */}
          <div className="p-10 lg:p-14 bg-[var(--scalo-bg-0)] relative overflow-hidden">
            <div className="absolute top-0 left-8 right-8 h-px bg-[var(--scalo-accent)]" />
            <div className="pointer-events-none absolute -bottom-16 -right-16 w-64 h-64"
              style={{ background: "radial-gradient(circle at 70% 70%, rgba(170,255,0,0.12) 0%, transparent 70%)" }} />

            <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-widest uppercase bg-[var(--scalo-accent)] text-[#0C0C09]">
              {program.tag}
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-[var(--scalo-ink)] mt-6 tracking-tight">
              {program.headline}
            </h3>
            <div className="text-sm text-[var(--scalo-fg-3)] mt-3">{program.meta}</div>

            <ul className="mt-10 space-y-4">
              {program.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-[var(--scalo-fg-2)]">
                  <div className="w-5 h-5 rounded-full bg-[var(--scalo-accent)]/10 border border-[var(--scalo-accent)]/30 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-[var(--scalo-accent)]" strokeWidth={2.5} />
                  </div>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#book"
              className="mt-10 inline-flex items-center gap-1.5 bg-[var(--scalo-accent)] hover:bg-[var(--scalo-accent-dim)] text-[#0C0C09] rounded-full h-12 px-7 text-sm font-semibold transition-colors btn-press"
            >
              {program.cta} <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
