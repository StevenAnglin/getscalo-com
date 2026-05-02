import { ArrowUpRight, ArrowDown, ShoppingBag, TrendingUp, BarChart2, Clock } from "lucide-react";

const proofStats = [
  { icon: ShoppingBag, value: "48", label: "Shopify brands audited" },
  { icon: TrendingUp, value: "$2.4M+", label: "Revenue recovered" },
  { icon: BarChart2, value: "+18%", label: "Avg RPV lift" },
  { icon: Clock, value: "48hr", label: "Audit turnaround" },
] as const;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-32 sm:pt-36 pb-16 overflow-hidden"
      style={{ background: "#0C0C09" }}
    >
      {/* Volt green glow — left quadrant ambient */}
      <div className="pointer-events-none absolute -top-32 -left-28 w-[1200px] h-[1100px] glow-volt-headline" />
      {/* Strong centered glow under headline */}
      <div className="pointer-events-none absolute inset-0 glow-ember-cta" />

      {/* Main content */}
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 w-full text-center lg:text-left">

        {/* Pill badge */}
        <div className="hero-animate" style={{ animationDelay: "0ms" }}>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--scalo-accent)] shrink-0 pulse-dot" />
            <span className="text-xs font-medium tracking-widest text-white/50 uppercase">
              For 6–9 figure Shopify brands
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="hero-animate" style={{ animationDelay: "90ms" }}>
          <h1 className="display-xl text-white max-w-[1060px] mx-auto lg:mx-0">
            <span style={{ background: "var(--scalo-accent)", color: "#0C0C09", padding: "0 8px 4px", display: "inline", boxDecorationBreak: "clone", WebkitBoxDecorationBreak: "clone" }}>Your store loses</span>{" "}
            <span className="italic-editorial text-[var(--scalo-accent)]">revenue</span>{" "}
            every day.
            <br />
            We find it in 48 hours.
          </h1>
        </div>

        {/* Proof card */}
        <div className="hero-animate" style={{ animationDelay: "180ms" }}>
          <div className="mt-8 sm:mt-10 max-w-[580px] mx-auto lg:mx-0 rounded-2xl overflow-hidden glass-card">
            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-4 pb-3.5 border-b border-white/[0.07]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--scalo-accent)] pulse-dot" />
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-medium">Track record</span>
              </div>
              <span className="text-[10px] text-white/20 font-mono tracking-wide">Updated Mar 2026</span>
            </div>
            {/* Stats grid */}
            <div className="grid grid-cols-4 divide-x divide-white/[0.07]">
              {proofStats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex flex-col px-4 py-4 gap-2">
                  <Icon className="w-4 h-4 text-[var(--scalo-accent)]" strokeWidth={1.5} />
                  <div>
                    <div className="tnum text-base font-bold text-white leading-none tracking-tight">{value}</div>
                    <div className="text-[9.5px] text-white/35 leading-snug mt-1 uppercase tracking-wide">{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="hero-animate" style={{ animationDelay: "270ms" }}>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-10">
            <a
              href="#"
              data-tf-popup="EgCg6DVP"
              className="inline-flex items-center gap-1.5 bg-[var(--scalo-accent)] hover:bg-[var(--scalo-accent-dim)] text-[var(--scalo-ink)] rounded-full h-12 px-7 text-base font-semibold transition-colors btn-press shadow-[0_0_32px_rgba(170,255,0,0.30)]"
            >
              Start with a teardown <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#results"
              className="inline-flex items-center gap-1.5 text-white/45 hover:text-white h-12 px-3 text-base transition-colors btn-press"
            >
              See results <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Qualifier */}
        <div className="hero-animate" style={{ animationDelay: "360ms" }}>
          <p className="text-[11px] text-white/25 mt-6 text-center lg:text-left tracking-wide">
            We work exclusively with Shopify brands doing $50K+/month.
          </p>
        </div>
      </div>

      {/* Stat strip — bottom anchor */}
      <div className="hero-animate relative max-w-[1440px] mx-auto px-6 lg:px-12 w-full mt-24" style={{ animationDelay: "440ms" }}>
        <div className="border-t border-white/[0.08] pt-8">
          <div className="grid grid-cols-3 gap-0 divide-x divide-white/[0.08]">
            <div className="pr-8 lg:pr-16">
              <div className="tnum text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                $2.4M+
              </div>
              <div className="text-[11px] uppercase tracking-widest text-white/35 mt-2 leading-snug">
                Revenue Recovered
              </div>
            </div>
            <div className="px-8 lg:px-16">
              <div className="tnum text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                48
              </div>
              <div className="text-[11px] uppercase tracking-widest text-white/35 mt-2 leading-snug">
                Stores Audited
              </div>
            </div>
            <div className="pl-8 lg:pl-16">
              <div className="tnum text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--scalo-accent)] tracking-tight">
                +18%
              </div>
              <div className="text-[11px] uppercase tracking-widest text-white/35 mt-2 leading-snug">
                Avg RPV Lift
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
