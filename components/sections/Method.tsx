import { Search, Split, BarChart3 } from "lucide-react";

const pillars = [
  { icon: Search, name: "Revenue Forensics", body: "Trace every drop in conversion to its source. Heatmaps, session recordings, funnel data — never guesses." },
  { icon: Split, name: "Parallel Testing", body: "4–8 experiments running simultaneously. More tests, faster learnings, compounding results." },
  { icon: BarChart3, name: "Transparent Reporting", body: "Every test documented. Every result attributed. No vanity metrics." },
];

const steps = [
  { n: "01", title: "Audit", body: "48–72 hour full store walkthrough. We log every friction point." },
  { n: "02", title: "Recommend", body: "Revenue-impact-ordered roadmap. No opinion without data." },
  { n: "03", title: "Implement", body: "In-house dev. No handoffs. No waiting on your team." },
  { n: "04", title: "Prove", body: "Every test runs in parallel with a control. You see the lift." },
];

export default function Method() {
  return (
    <section id="method" className="bg-[var(--scalo-bg-1)] py-24 lg:py-32 bg-lines-h-fade">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-24 max-w-[800px]" data-reveal>
          <h2 className="display-lg text-[var(--scalo-cream)]">
            Audit. Test.{" "}
            <span className="italic-editorial text-[var(--scalo-ember)]">Prove.</span>
          </h2>
          <p className="body-lg text-[var(--scalo-fg-2)] mt-6">
            Three principles, four steps. No opinion without data.
          </p>
        </div>

        {/* Pillars — borderless panels with ember icon accent */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--scalo-border-ghost)] rounded-2xl overflow-hidden" data-reveal data-delay="100">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.name}
                className="bg-[var(--scalo-bg-2)] p-8 lg:p-10 group hover:bg-[var(--scalo-bg-3)] transition-all duration-300 relative overflow-hidden"
              >
                {/* Subtle ember corner wash on hover */}
                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 0% 100%, rgba(255,107,53,0.08) 0%, transparent 70%)" }} />

                <div className="w-11 h-11 rounded-xl bg-[var(--scalo-ember)]/10 border border-[var(--scalo-ember)]/25 flex items-center justify-center mb-8 group-hover:bg-[var(--scalo-ember)]/15 group-hover:border-[var(--scalo-ember)]/40 transition-colors">
                  <Icon className="w-5 h-5 text-[var(--scalo-ember)]" strokeWidth={1.5} />
                </div>
                <div className="text-[11px] uppercase tracking-widest text-[var(--scalo-ember)] mb-3 font-medium">
                  0{i + 1}
                </div>
                <h3 className="text-xl font-medium text-[var(--scalo-cream)] mb-3">{p.name}</h3>
                <p className="text-sm text-[var(--scalo-fg-2)] leading-relaxed">{p.body}</p>
              </div>
            );
          })}
        </div>

        {/* Process strip — numbered with decorative large background numerals */}
        <div className="bg-[var(--scalo-bg-2)] rounded-2xl mt-4 overflow-hidden" data-reveal data-delay="200">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[var(--scalo-border-ghost)]">
            {steps.map((s) => (
              <div key={s.n} className="p-8 relative overflow-hidden group">
                {/* Decorative large step number in background */}
                <div className="absolute -top-2 right-4 tnum text-[96px] font-medium leading-none text-[var(--scalo-cream)]/[0.04] select-none pointer-events-none group-hover:text-[var(--scalo-ember)]/[0.06] transition-colors duration-300">
                  {s.n}
                </div>
                {/* Ember top accent — slides in on hover */}
                <div className="absolute top-0 left-0 w-0 h-px bg-[var(--scalo-ember)] group-hover:w-full transition-all duration-400" />

                <div className="text-xs text-[var(--scalo-ember)] font-medium tracking-widest mb-4 tnum">— {s.n}</div>
                <h4 className="text-lg font-medium text-[var(--scalo-cream)] mb-2">{s.title}</h4>
                <p className="text-sm text-[var(--scalo-fg-2)] leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mini stat row */}
        <div className="grid grid-cols-3 gap-6 mt-12 max-w-[560px]" data-reveal data-delay="300">
          <div className="border-l-2 border-[var(--scalo-ember)] pl-4">
            <div className="tnum text-3xl font-medium text-[var(--scalo-ember)]">5%</div>
            <div className="text-[11px] uppercase tracking-widest text-[var(--scalo-fg-3)] mt-1.5">RPV lift min</div>
          </div>
          <div className="border-l-2 border-[var(--scalo-border-strong)] pl-4">
            <div className="tnum text-3xl font-medium text-[var(--scalo-cream)]">$50K+</div>
            <div className="text-[11px] uppercase tracking-widest text-[var(--scalo-fg-3)] mt-1.5">Rev minimum</div>
          </div>
          <div className="border-l-2 border-[var(--scalo-border-strong)] pl-4">
            <div className="tnum text-3xl font-medium text-[var(--scalo-cream)]">4–8</div>
            <div className="text-[11px] uppercase tracking-widest text-[var(--scalo-fg-3)] mt-1.5">Tests / month</div>
          </div>
        </div>
      </div>
    </section>
  );
}
