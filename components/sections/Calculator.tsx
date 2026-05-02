import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Calculator() {
  const [revenue, setRevenue] = useState(100000);
  const [uplift, setUplift] = useState(5);
  const annual = Math.round(revenue * (uplift / 100) * 12);
  const formatted = `$${annual.toLocaleString()}`;

  return (
    <section id="calculator" className="bg-[var(--scalo-bg-1)] py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="mb-12 lg:mb-16 max-w-[760px] mx-auto text-center" data-reveal>
          <h2 className="display-md text-[var(--scalo-cream)]">
            See what 1% looks like{" "}
            <span className="italic-editorial text-[var(--scalo-ember)]">for your store.</span>
          </h2>
        </div>

        <div className="max-w-[760px] mx-auto border-ember-top" data-reveal data-delay="100">
          <div className="bg-[var(--scalo-bg-2)] rounded-3xl p-10 lg:p-14 border border-[var(--scalo-border-ghost)] border-t-0 relative overflow-hidden">
            {/* Ember top accent line handled by border-ember-top */}
            <div className="absolute top-0 left-12 right-12 h-px bg-[var(--scalo-ember)]" />

            <div className="space-y-10">
              {/* Revenue input */}
              <div>
                <label className="text-xs uppercase tracking-widest text-[var(--scalo-fg-3)] block mb-4">
                  Your Monthly Revenue
                </label>
                <div className="flex items-baseline gap-2 border-b border-[var(--scalo-border-strong)] pb-3 focus-within:border-[var(--scalo-ember)] transition-colors">
                  <span className="text-3xl text-[var(--scalo-fg-3)]">$</span>
                  <input
                    type="number"
                    value={revenue}
                    onChange={(e) => setRevenue(Number(e.target.value) || 0)}
                    className="bg-transparent text-3xl font-medium text-[var(--scalo-cream)] outline-none flex-1 tnum"
                    placeholder="100,000"
                  />
                </div>
              </div>

              {/* Uplift slider */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <label className="text-xs uppercase tracking-widest text-[var(--scalo-fg-3)]">
                    Expected Uplift
                  </label>
                  <span className="tnum text-sm text-[var(--scalo-ember)] font-medium bg-[var(--scalo-ember)]/10 border border-[var(--scalo-ember)]/25 px-3 py-1 rounded-full">
                    {uplift}%
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={20}
                  value={uplift}
                  onChange={(e) => setUplift(Number(e.target.value))}
                  className="w-full accent-[var(--scalo-ember)] cursor-pointer"
                />
                <div className="flex justify-between mt-2 text-[10px] text-[var(--scalo-fg-3)] tracking-wide">
                  <span>1%</span>
                  <span>10%</span>
                  <span>20%</span>
                </div>
              </div>

              {/* Output — ember number with subtle glow */}
              <div className="pt-8 border-t border-[var(--scalo-border-ghost)] text-center relative">
                <div className="pointer-events-none absolute inset-0"
                  style={{ background: "radial-gradient(ellipse 60% 60% at 50% 80%, rgba(139,28,28,0.08) 0%, transparent 100%)" }} />
                <div className="text-xs uppercase tracking-widest text-[var(--scalo-fg-3)] mb-4">
                  Additional Revenue / Year
                </div>
                <div className="tnum text-[clamp(48px,8vw,88px)] leading-none font-medium text-[var(--scalo-ember)] tracking-tight">
                  {formatted}
                </div>
                <div className="text-xs text-[var(--scalo-fg-3)] mt-4">
                  based on ${Math.round(revenue / 1000)}K/mo × {uplift}% uplift × 12 months
                </div>
              </div>

              <a
                href="#book"
                className="flex items-center justify-center gap-1.5 w-full bg-[var(--scalo-ember)] hover:bg-[var(--scalo-ember)]/90 text-[var(--scalo-bg-0)] rounded-full h-12 text-sm font-medium transition-colors btn-press"
              >
                Ready? Book a teardown <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
