import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function Calculator() {
  const [revenue, setRevenue] = useState(100000);
  const [uplift, setUplift] = useState(5);
  const annual = Math.round(revenue * (uplift / 100) * 12);
  const formatted = `$${annual.toLocaleString()}`;

  return (
    <section id="calculator" className="py-24 lg:py-32" style={{ background: "#0C0C09" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="mb-12 lg:mb-16 max-w-[760px] mx-auto text-center" data-reveal>
          <h2 className="display-md text-white">
            See what 1% looks like{" "}
            <span className="italic-editorial text-[var(--scalo-accent)]">for your store.</span>
          </h2>
        </div>

        <div className="max-w-[760px] mx-auto" data-reveal data-delay="100">
          <div className="bg-white/[0.04] rounded-3xl p-10 lg:p-14 border border-white/[0.09] relative overflow-hidden">
            <div className="absolute top-0 left-12 right-12 h-px bg-[var(--scalo-accent)]" />

            <div className="space-y-10">
              <div>
                <label className="text-xs uppercase tracking-widest text-white/35 block mb-4">
                  Your Monthly Revenue
                </label>
                <div className="flex items-baseline gap-2 border-b border-white/[0.15] pb-3 focus-within:border-[var(--scalo-accent)] transition-colors">
                  <span className="text-3xl text-white/30">$</span>
                  <input
                    type="number"
                    value={revenue}
                    onChange={(e) => setRevenue(Number(e.target.value) || 0)}
                    className="bg-transparent text-3xl font-medium text-white outline-none flex-1 tnum"
                    placeholder="100,000"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-5">
                  <label className="text-xs uppercase tracking-widest text-white/35">
                    Expected Uplift
                  </label>
                  <span className="tnum text-sm text-[var(--scalo-accent)] font-medium bg-[var(--scalo-accent)]/10 border border-[var(--scalo-accent)]/25 px-3 py-1 rounded-full">
                    {uplift}%
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={20}
                  value={uplift}
                  onChange={(e) => setUplift(Number(e.target.value))}
                  className="w-full accent-[var(--scalo-accent)] cursor-pointer"
                />
                <div className="flex justify-between mt-2 text-[10px] text-white/30 tracking-wide">
                  <span>1%</span>
                  <span>10%</span>
                  <span>20%</span>
                </div>
              </div>

              <div className="pt-8 border-t border-white/[0.08] text-center relative">
                <div className="pointer-events-none absolute inset-0"
                  style={{ background: "radial-gradient(ellipse 60% 60% at 50% 80%, rgba(170,255,0,0.10) 0%, transparent 100%)" }} />
                <div className="text-xs uppercase tracking-widest text-white/35 mb-4">
                  Additional Revenue / Year
                </div>
                <div className="tnum text-[clamp(48px,8vw,88px)] leading-none font-medium text-[var(--scalo-accent)] tracking-tight">
                  {formatted}
                </div>
                <div className="text-xs text-white/30 mt-4">
                  based on ${Math.round(revenue / 1000)}K/mo × {uplift}% uplift × 12 months
                </div>
              </div>

              <a
                href="#book"
                className="flex items-center justify-center gap-1.5 w-full bg-[var(--scalo-accent)] hover:bg-[var(--scalo-accent-dim)] text-[#0C0C09] rounded-full h-12 text-sm font-medium transition-colors btn-press"
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
