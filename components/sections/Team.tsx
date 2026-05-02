export default function Team() {
  return (
    <section id="team" className="bg-[var(--scalo-bg-1)] py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo column */}
          <div className="lg:col-span-5 order-2 lg:order-1" data-reveal>
            <div className="relative bg-[var(--scalo-bg-2)] rounded-3xl overflow-hidden border border-[var(--scalo-border-ghost)] flex flex-col">
              {/* Ember top accent */}
              <div className="absolute top-0 left-12 right-12 h-px bg-[var(--scalo-ember)]/60 z-10" />

              {/* Cross-grid pattern */}
              <div className="absolute inset-0 bg-cross-fade" />

              {/* Ember corner wash */}
              <div className="absolute -bottom-10 -right-10 w-80 h-80 pointer-events-none"
                style={{ background: "radial-gradient(circle at 70% 70%, rgba(170,255,0,0.28) 0%, rgba(170,255,0,0) 70%)" }} />

              {/* Avatar block */}
              <div className="relative flex flex-col items-center gap-3 pt-10 pb-8 px-8">
                <div className="w-20 h-20 rounded-full bg-[var(--scalo-bg-3)] border border-[var(--scalo-border-strong)] flex items-center justify-center">
                  <span className="text-2xl font-medium text-[var(--scalo-fg-2)] tracking-tight">S</span>
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[var(--scalo-fg-3)]">steven-headshot.jpg</span>
              </div>

              {/* Stat rows */}
              <div className="relative px-8 pb-2 space-y-0">
                <div className="h-px bg-[var(--scalo-border-hairline)]" />
                {[
                  { label: "Stores Audited", value: "48", ember: false },
                  { label: "Avg RPV Lift", value: "+18%", ember: true },

                  { label: "Revenue Recovered", value: "$2.4M+", ember: false },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between py-4">
                      <span className="text-[10px] uppercase tracking-widest text-[var(--scalo-fg-3)]">{s.label}</span>
                      <span className={`tnum text-sm font-medium ${s.ember ? "text-[var(--scalo-ember)]" : "text-[var(--scalo-ink)]"}`}>{s.value}</span>
                    </div>
                    <div className="h-px bg-[var(--scalo-border-hairline)]" />
                  </div>
                ))}
              </div>

              {/* Credential chips */}
              <div className="relative flex flex-wrap gap-2 px-8 py-6">
                {["CRO Specialist", "48 Audits", "Shopify Expert"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-[var(--scalo-bg-0)]/70 backdrop-blur-sm border border-[var(--scalo-border-ghost)] text-[var(--scalo-fg-2)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="lg:col-span-7 order-1 lg:order-2" data-reveal data-delay="150">
            <h2 className="display-lg text-[var(--scalo-ink)]">
              Steven personally audits{" "}
              <span className="italic-editorial text-[var(--scalo-ember)]">every store.</span>
            </h2>
            <blockquote className="border-l-2 border-[var(--scalo-ember)] pl-5 mt-10 text-lg text-[var(--scalo-fg-2)] leading-relaxed italic-editorial max-w-[560px]">
              &ldquo;Before we take on a client, I walk the entire store. If we can&rsquo;t find something worth fixing in the first hour, we say no. That&rsquo;s the filter.&rdquo;
            </blockquote>

            <div className="mt-10 grid grid-cols-2 gap-5 max-w-[480px]">
              {[
                { value: "48", label: "Stores Audited" },
                { value: "< 48h", label: "Audit Delivery" },
                { value: "95%", label: "Stat Significance" },
                { value: "5%", label: "Min RPV Guarantee" },
              ].map((s) => (
                <div key={s.label} className="border-l-2 border-[var(--scalo-border-strong)] pl-4">
                  <div className="tnum text-2xl font-medium text-[var(--scalo-ink)]">{s.value}</div>
                  <div className="text-[11px] uppercase tracking-widest text-[var(--scalo-fg-3)] mt-1">{s.label}</div>
                </div>
              ))}
            </div>

            <p className="text-sm text-[var(--scalo-fg-3)] mt-10 leading-relaxed">
              Backed by a team of developers, analysts, and copywriters.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
