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
    <section id="proof" className="py-24 lg:py-32" style={{ background: "#0C0C09" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-20" data-reveal>
          <h2 className="display-lg text-white">
            Numbers don&rsquo;t{" "}
            <span className="italic-editorial text-[var(--scalo-accent)]">lie.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              data-reveal
              data-delay={`${i * 100}`}
              className="relative bg-white/[0.04] rounded-2xl p-10 overflow-hidden border border-white/[0.08] group hover:border-white/[0.14] transition-colors"
            >
              <div className={`absolute top-0 left-10 right-10 h-px ${s.ember ? "bg-[var(--scalo-accent)]" : "bg-white/[0.12]"}`} />

              {s.ember && (
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(ellipse 80% 60% at 30% 0%, rgba(170,255,0,0.09) 0%, transparent 100%)" }} />
              )}

              <div className="absolute bottom-4 right-6 tnum text-[100px] font-medium leading-none text-white/[0.03] select-none pointer-events-none">
                {i + 1}
              </div>

              <div className={`tnum text-[clamp(56px,8vw,96px)] leading-none font-bold tracking-tight ${s.ember ? "text-[var(--scalo-accent)]" : "text-white"}`}>
                {s.value}
              </div>
              <div className="text-sm uppercase tracking-widest text-white mt-5 font-medium">
                {s.label}
              </div>
              <p className="text-sm text-white/45 mt-2 leading-relaxed max-w-[240px]">
                {s.sub}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10" data-reveal>
          <a href="#calculator" className="inline-flex items-center gap-1.5 text-sm text-white/50 hover:text-white border-b border-white/[0.15] hover:border-[var(--scalo-accent)] pb-1 transition-colors">
            See what this looks like for your store →
          </a>
        </div>
      </div>
    </section>
  );
}
