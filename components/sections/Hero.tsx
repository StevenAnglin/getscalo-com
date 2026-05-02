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
    >
      {/* Ember headline glow — left quadrant */}
      <div className="pointer-events-none absolute -top-32 -left-28 w-[1200px] h-[1100px] glow-ember-headline" />

      {/* Decorative concentric rings — top-right corner */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-[860px] h-[860px]">
        <div className="absolute inset-0 rounded-full border border-[var(--scalo-cream)]/[0.035]" />
        <div className="absolute inset-[100px] rounded-full border border-[var(--scalo-cream)]/[0.05]" />
        <div className="absolute inset-[200px] rounded-full border border-[var(--scalo-cream)]/[0.07]" />
        <div className="absolute inset-[300px] rounded-full border border-[var(--scalo-ember)]/[0.18] shadow-[inset_0_0_60px_rgba(139,28,28,0.04)]" />
        <div className="absolute inset-[400px] rounded-full border border-[var(--scalo-ember)]/[0.12] bg-[var(--scalo-ember)]/[0.03]" />
      </div>

      {/* Main content — staggered load animations */}
      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 w-full text-center lg:text-left">

        {/* Pill badge */}
        <div className="hero-animate" style={{ animationDelay: "0ms" }}>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-[var(--scalo-border-strong)] bg-[var(--scalo-bg-2)]/70 backdrop-blur-sm px-4 py-2 mb-10">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--scalo-ember)] shrink-0 pulse-dot" />
            <span className="text-xs font-medium tracking-widest text-[var(--scalo-fg-2)] uppercase">
              For 6–9 figure Shopify brands
            </span>
          </div>
        </div>

        {/* Headline */}
        <div className="hero-animate" style={{ animationDelay: "90ms" }}>
          <h1 className="display-xl text-[var(--scalo-cream)] max-w-[1060px] mx-auto lg:mx-0">
            Your store loses{" "}
            <span className="italic-editorial text-[var(--scalo-ember)]">revenue</span>{" "}
            every day.
            <br />
            We find it in 48 hours.
          </h1>
        </div>

        {/* Proof card — replaces plain subhead */}
        <div className="hero-animate" style={{ animationDelay: "180ms" }}>
          <div className="mt-8 sm:mt-10 max-w-[560px] mx-auto lg:mx-0 rounded-2xl border border-[var(--scalo-border-strong)] bg-[var(--scalo-bg-1)]/60 backdrop-blur-sm overflow-hidden shadow-[0_0_48px_rgba(139,28,28,0.05)]">
            {/* Card header */}
            <div className="flex items-center justify-between px-5 pt-5 pb-4 border-b border-[var(--scalo-border-hairline)]">
              <span className="text-[10px] uppercase tracking-widest text-[var(--scalo-fg-3)] font-medium">
                Track record
              </span>
              <span className="text-[10px] text-[var(--scalo-fg-3)]">Last updated: March, 2026</span>
            </div>
            {/* Single-row metric strip */}
            <div className="flex divide-x divide-[var(--scalo-border-hairline)] px-1">
              {proofStats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-2.5 flex-1 px-4 py-3.5">
                  <Icon className="w-3.5 h-3.5 text-[var(--scalo-ember)] shrink-0" />
                  <div>
                    <div className="tnum text-sm font-semibold text-[var(--scalo-cream)] leading-none">{value}</div>
                    <div className="text-[10px] text-[var(--scalo-fg-3)] leading-snug mt-0.5 whitespace-nowrap">{label}</div>
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
              className="inline-flex items-center gap-1.5 bg-[var(--scalo-cream)] hover:bg-[var(--scalo-cream)]/90 text-[var(--scalo-bg-0)] rounded-full h-12 px-7 text-base font-medium transition-colors btn-press shadow-[0_0_32px_rgba(255,253,232,0.18),0_0_0_1px_rgba(255,253,232,0.12)]"
            >
              Start with a teardown <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#results"
              className="inline-flex items-center gap-1.5 text-[var(--scalo-fg-2)] hover:text-[var(--scalo-cream)] h-12 px-3 text-base transition-colors btn-press"
            >
              See results <ArrowDown className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Minimum revenue requirement */}
        <div className="hero-animate" style={{ animationDelay: "360ms" }}>
          <p className="text-[11px] text-[var(--scalo-fg-3)]/60 mt-6 text-center lg:text-left tracking-wide">
            We work exclusively with Shopify brands doing $50K+/month.
          </p>
        </div>
      </div>

      {/* Stat strip — bottom anchor */}
      <div className="hero-animate relative max-w-[1440px] mx-auto px-6 lg:px-12 w-full mt-24" style={{ animationDelay: "440ms" }}>
        <div className="border-t border-[var(--scalo-border-ghost)] pt-8">
          <div className="grid grid-cols-3 gap-0 divide-x divide-[var(--scalo-border-hairline)]">
            <div className="pr-8 lg:pr-16">
              <div className="tnum text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--scalo-cream)] tracking-tight">
                $2.4M+
              </div>
              <div className="text-[11px] uppercase tracking-widest text-[var(--scalo-fg-3)] mt-2 leading-snug">
                Revenue Recovered
              </div>
            </div>
            <div className="px-8 lg:px-16">
              <div className="tnum text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--scalo-cream)] tracking-tight">
                48
              </div>
              <div className="text-[11px] uppercase tracking-widest text-[var(--scalo-fg-3)] mt-2 leading-snug">
                Stores Audited
              </div>
            </div>
            <div className="pl-8 lg:pl-16">
              <div className="tnum text-3xl sm:text-4xl lg:text-5xl font-medium text-[var(--scalo-ember)] tracking-tight">
                +18%
              </div>
              <div className="text-[11px] uppercase tracking-widest text-[var(--scalo-fg-3)] mt-2 leading-snug">
                Avg RPV Lift
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
