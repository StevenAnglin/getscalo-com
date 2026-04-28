const stats = [
  {
    value: "$2.4M",
    label: "Revenue Recovered",
    sub: "Across 140+ PDP and checkout tests since 2023",
    ember: true,
  },
  {
    value: "+5%",
    label: "RPV Lift Guaranteed",
    sub: "Minimum guaranteed within 90 days or we keep working free",
    ember: false,
  },
  {
    value: "48",
    label: "Stores Audited",
    sub: "Since January 2023",
    ember: false,
  },
];

export default function Stats() {
  return (
    <section id="proof" className="py-24 lg:py-32 bg-grid-fade">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-20" data-reveal>
          <h2 className="display-lg text-[var(--scalo-cream)]">
            Numbers don&rsquo;t{" "}
            <span className="italic-editorial text-[var(--scalo-ember)]">lie.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              data-delay={`${i * 100}`}
              className="relative bg-[var(--scalo-bg-2)] rounded-2xl p-10 overflow-hidden border border-[var(--scalo-border-hairline)] group hover:border-[var(--scalo-border-ghost)] transition-colors"
            >
              {/* Ember top accent */}
              <div className={`absolute top-0 left-10 right-10 h-px ${s.ember ? "bg-[var(--scalo-ember)]" : "bg-[var(--scalo-border-strong)]"}`} />

              {/* Hover glow — only on ember card */}
              {s.ember && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse 80% 60% at 30% 0%, rgba(255,107,53,0.07) 0%, transparent 100%)" }} />
              )}

              {/* Decorative large background number */}
              <div className="absolute bottom-4 right-6 tnum text-[100px] font-medium leading-none text-[var(--scalo-cream)]/[0.03] select-none pointer-events-none">
                {i + 1}
              </div>

              <div className={`tnum text-[clamp(56px,8vw,96px)] leading-none font-medium tracking-tight ${s.ember ? "text-[var(--scalo-ember)]" : "text-[var(--scalo-cream)]"}`}>
                {s.value}
              </div>
              <div className="text-sm uppercase tracking-widest text-[var(--scalo-cream)] mt-5 font-medium">
                {s.label}
              </div>
              <p className="text-sm text-[var(--scalo-fg-3)] mt-2 leading-relaxed max-w-[240px]">
                {s.sub}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10" data-reveal>
          <a href="#calculator" className="inline-flex items-center gap-1.5 text-sm text-[var(--scalo-fg-2)] hover:text-[var(--scalo-cream)] border-b border-[var(--scalo-border-ghost)] hover:border-[var(--scalo-ember)] pb-1 transition-colors">
            See what this looks like for your store →
          </a>
        </div>
      </div>
    </section>
  );
}
