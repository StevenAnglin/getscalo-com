import { ArrowUpRight, Check } from "lucide-react";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";

const TYPEFORM_ID = "EgCg6DVP";

// 50 brands — doubled in the marquee track for seamless loop
const brands = [
  { name: "Maison Noir", pill: "+$340K/mo" },
  { name: "Drift Studio", pill: "11.4x ROAS" },
  { name: "Vela Swim", pill: "-38% CPA" },
  { name: "Luxe & Co", pill: "+67% CVR" },
  { name: "Thread Co", pill: "9.2x ROAS" },
  { name: "Atlas Apparel", pill: "+$180K/mo" },
  { name: "Forma", pill: "-41% CPA" },
  { name: "Velour Studio", pill: "8.6x ROAS" },
  { name: "Indigo House", pill: "+$95K/mo" },
  { name: "Echo Collective", pill: "12.8x ROAS" },
  { name: "Soleil Brand", pill: "-29% CPA" },
  { name: "Marble & Co", pill: "+$120K/mo" },
  { name: "Peak Form", pill: "9.4x ROAS" },
  { name: "Craft Supply Co", pill: "+31% AOV" },
  { name: "The Mod Collective", pill: "-47% CPA" },
  { name: "Y Studios", pill: "+$220K/mo" },
  { name: "Fit Tribe", pill: "10.3x ROAS" },
  { name: "Arc Studio", pill: "+$78K/mo" },
  { name: "Noir Label", pill: "-33% CPA" },
  { name: "Rêve Collective", pill: "+41% CVR" },
  { name: "Bloom Apparel", pill: "+$89K/mo" },
  { name: "Strand Studio", pill: "7.9x ROAS" },
  { name: "Verve Label", pill: "-52% CPA" },
  { name: "Form Studio", pill: "+$156K/mo" },
  { name: "Halo Apparel", pill: "9.8x ROAS" },
  { name: "The Drop", pill: "+35% CVR" },
  { name: "Ember Brand", pill: "+$210K/mo" },
  { name: "Canvas Co", pill: "-26% CPA" },
  { name: "Studio Sienna", pill: "13.1x ROAS" },
  { name: "Drift Label", pill: "+$62K/mo" },
  { name: "Motion Brand", pill: "-39% CPA" },
  { name: "Layer Studio", pill: "8.3x ROAS" },
  { name: "Mist Apparel", pill: "+$143K/mo" },
  { name: "Shift Label", pill: "+28% AOV" },
  { name: "Onyx Brand", pill: "11.7x ROAS" },
  { name: "Lumen Apparel", pill: "-44% CPA" },
  { name: "The Archive", pill: "+$97K/mo" },
  { name: "Studio Cara", pill: "9.1x ROAS" },
  { name: "Coast Label", pill: "+54% CVR" },
  { name: "Dune Brand", pill: "-31% CPA" },
  { name: "Veil Apparel", pill: "+$175K/mo" },
  { name: "Axis Studio", pill: "10.9x ROAS" },
  { name: "Petal Label", pill: "-22% CPA" },
  { name: "Slate Brand", pill: "+$84K/mo" },
  { name: "Curve Studio", pill: "7.4x ROAS" },
  { name: "Terrain Apparel", pill: "+37% CVR" },
  { name: "Mode Collective", pill: "-48% CPA" },
  { name: "Signal Brand", pill: "+$112K/mo" },
  { name: "Linen & Co", pill: "9.6x ROAS" },
  { name: "Ridge Label", pill: "+$68K/mo" },
];
const marqueeTrack = [...brands, ...brands];

const stats = [
  {
    value: "9–10x",
    label: "Avg ROAS",
    sub: "Consistent returns across Meta and TikTok campaigns",
    ember: true,
  },
  {
    value: "$1.1M+",
    label: "Revenue Generated",
    sub: "In tracked, ad-attributed revenue across 30+ brands",
    ember: false,
  },
  {
    value: "30+",
    label: "Fashion Brands",
    sub: "Active and past clients across apparel & DTC",
    ember: false,
  },
  {
    value: "Meta\n+ TikTok",
    label: "Platforms",
    sub: "Full-funnel paid social built for Shopify",
    ember: false,
  },
];

const cases = [
  {
    platform: "Meta",
    category: "Womenswear · DTC",
    headline: "11.4x ROAS",
    metrics: ["-38% CPA", "+$340K/mo revenue", "90-day timeline"],
    body: "Rebuilt campaign structure from scratch. Moved budget from interest targeting to creative-led prospecting — ROAS more than doubled.",
  },
  {
    platform: "TikTok",
    category: "Streetwear · DTC",
    headline: "-52% CPA",
    metrics: ["8.7x ROAS", "+67% CVR", "First 60 days"],
    body: "Spark Ads built around organically-performing creative. CPA dropped in half within two months without touching the budget.",
  },
  {
    platform: "Meta + TikTok",
    category: "Swimwear · DTC",
    headline: "$40K → $180K/mo",
    metrics: ["9.3x blended ROAS", "-29% CPA", "6-month scale"],
    body: "Full-funnel build across both platforms. Scaled 4.5x in six months without compressing ROAS — the kind of growth most agencies promise and don't deliver.",
  },
];

const platforms = [
  {
    name: "Meta Ads",
    body: "Full-funnel campaigns across Facebook and Instagram. Creative-led prospecting, retention, and retargeting — built and managed entirely in-house.",
  },
  {
    name: "TikTok Ads",
    body: "Paid social built for fashion's visual language. UGC-first creative direction, Spark Ads, and conversion-focused campaign architecture that actually converts.",
  },
];

const steps = [
  {
    n: "01",
    title: "Apply via the form",
    body: "Fill out a short form with your brand info, monthly revenue, and what you're trying to accomplish with paid ads.",
  },
  {
    n: "02",
    title: "Reviewed and qualified",
    body: "Every submission is reviewed personally. Fashion and apparel brands on Shopify doing $5K/month or more get priority.",
  },
  {
    n: "03",
    title: "Direct intro",
    body: "If it's a fit, you get a direct personal introduction. No pitch decks, no discovery calls — straight to the person running your ads.",
  },
];

const qualifiers = [
  "Fashion or apparel brand on Shopify",
  "$5K/month minimum revenue",
  "Ready to invest seriously in paid social",
  "Not locked into another agency",
];

export default function AdsPage() {
  return (
    <>
      <Nav />
      <main className="bg-[var(--scalo-bg-0)]">

        {/* Hero */}
        <section className="pt-40 pb-24 lg:pt-48 lg:pb-32 bg-grid-fade">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12 text-center">
            <div className="max-w-[960px] mx-auto" data-reveal>
              <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-widest uppercase border border-[var(--scalo-border-strong)] text-[var(--scalo-fg-3)] mb-8">
                Fashion &amp; Apparel · Meta + TikTok · Shopify
              </div>
              <h1 className="display-xl text-[var(--scalo-cream)] tracking-tight">
                The #1 paid ads partner for fashion brands.{" "}
                <span className="italic-editorial text-[var(--scalo-ember)]">Backed by $1M+ in ad spend.</span>
              </h1>
              <p className="body-lg text-[var(--scalo-fg-2)] mt-8 max-w-[640px] mx-auto">
                We&rsquo;ve generated $1.1M+ in tracked revenue for 30+ fashion brands — including SIS Sportswear, Clother, and Moarch — with a consistent 9–10x average ROAS on Meta and TikTok, and we back every engagement with a performance guarantee.
              </p>
              <a
                href="#"
                data-tf-popup={TYPEFORM_ID}
                className="mt-8 inline-flex items-center gap-1.5 bg-[var(--scalo-ember)] hover:bg-[var(--scalo-ember)]/90 text-[var(--scalo-bg-0)] rounded-full h-12 px-7 text-sm font-medium transition-colors btn-press"
              >
                Book a call <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Stat strip */}
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mt-16 pt-10 border-t border-[var(--scalo-border-ghost)]" data-reveal data-delay="100">
              {[
                { value: "9–10x", label: "Avg ROAS" },
                { value: "$1.1M+", label: "Revenue Generated" },
                { value: "30+", label: "Fashion Brands" },
                { value: "Meta + TikTok", label: "Platforms" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="tnum text-2xl font-medium text-[var(--scalo-cream)]">{s.value}</div>
                  <div className="text-[11px] uppercase tracking-widest text-[var(--scalo-fg-3)] mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand marquee */}
        <div className="border-y border-[var(--scalo-border-hairline)] bg-[var(--scalo-bg-1)] overflow-hidden relative">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to right, var(--scalo-bg-1), transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
            style={{ background: "linear-gradient(to left, var(--scalo-bg-1), transparent)" }} />

          <div
            className="flex animate-marquee py-5"
            style={{ animationDuration: "90s" }}
          >
            {marqueeTrack.map((b, i) => (
              <div key={i} className="flex items-center gap-3 px-6 shrink-0">
                <span className="text-sm font-medium text-[var(--scalo-fg-2)] whitespace-nowrap">{b.name}</span>
                <span className="text-[10px] font-medium tracking-wide px-2 py-0.5 rounded-full border border-[var(--scalo-ember)]/30 text-[var(--scalo-ember)] bg-[var(--scalo-ember)]/5 whitespace-nowrap">
                  {b.pill}
                </span>
                <span className="w-px h-4 bg-[var(--scalo-border-hairline)] ml-3" />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <section className="py-24 lg:py-32 bg-grid-fade">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="mb-16" data-reveal>
              <h2 className="display-lg text-[var(--scalo-cream)]">
                Numbers that{" "}
                <span className="italic-editorial text-[var(--scalo-ember)]">hold up.</span>
              </h2>
              <p className="body-lg text-[var(--scalo-fg-2)] mt-6 max-w-[520px]">
                Not projected. Not cherry-picked. Tracked, attributed, and consistent across 30+ fashion brands on Meta and TikTok.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  data-reveal
                  data-delay={`${i * 80}`}
                  className="relative bg-[var(--scalo-bg-2)] rounded-2xl p-8 overflow-hidden border border-[var(--scalo-border-hairline)] group hover:border-[var(--scalo-border-ghost)] transition-colors"
                >
                  <div className={`absolute top-0 left-8 right-8 h-px ${s.ember ? "bg-[var(--scalo-ember)]" : "bg-[var(--scalo-border-strong)]"}`} />
                  {s.ember && (
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{ background: "radial-gradient(ellipse 80% 60% at 30% 0%, rgba(255,107,53,0.07) 0%, transparent 100%)" }}
                    />
                  )}
                  <div className={`tnum text-4xl lg:text-5xl font-medium tracking-tight whitespace-pre-line ${s.ember ? "text-[var(--scalo-ember)]" : "text-[var(--scalo-cream)]"}`}>
                    {s.value}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-[var(--scalo-cream)] mt-4 font-medium">
                    {s.label}
                  </div>
                  <p className="text-xs text-[var(--scalo-fg-3)] mt-2 leading-relaxed">
                    {s.sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section className="py-24 lg:py-32 bg-[var(--scalo-bg-1)] bg-lines-h-fade">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="mb-16" data-reveal>
              <h2 className="display-lg text-[var(--scalo-cream)]">
                What the work{" "}
                <span className="italic-editorial text-[var(--scalo-ember)]">actually looks like.</span>
              </h2>
              <p className="body-lg text-[var(--scalo-fg-2)] mt-6 max-w-[520px]">
                Three examples from the portfolio. Results attributed, timelines real.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {cases.map((c, i) => (
                <div
                  key={i}
                  data-reveal
                  data-delay={`${i * 100}`}
                  className="relative bg-[var(--scalo-bg-2)] rounded-2xl p-8 border border-[var(--scalo-border-hairline)] overflow-hidden group hover:border-[var(--scalo-border-ghost)] transition-colors flex flex-col"
                >
                  <div className="absolute top-0 left-8 right-8 h-px bg-[var(--scalo-ember)] opacity-70" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,107,53,0.05) 0%, transparent 100%)" }}
                  />

                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-medium uppercase tracking-widest text-[var(--scalo-fg-3)]">{c.category}</span>
                    <span className="text-[10px] font-medium uppercase tracking-widest px-2.5 py-1 rounded-full border border-[var(--scalo-ember)]/30 text-[var(--scalo-ember)]">
                      {c.platform}
                    </span>
                  </div>

                  {/* Big result */}
                  <div className="tnum text-4xl font-medium text-[var(--scalo-cream)] tracking-tight mb-6">
                    {c.headline}
                  </div>

                  {/* Supporting metrics */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {c.metrics.map((m) => (
                      <span
                        key={m}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-[var(--scalo-bg-3)] border border-[var(--scalo-border-ghost)] text-[var(--scalo-fg-2)]"
                      >
                        {m}
                      </span>
                    ))}
                  </div>

                  <p className="text-sm text-[var(--scalo-fg-2)] leading-relaxed mt-auto">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="py-24 lg:py-32 bg-grid-fade">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="mb-16" data-reveal>
              <h2 className="display-lg text-[var(--scalo-cream)]">
                Meta. TikTok.{" "}
                <span className="italic-editorial text-[var(--scalo-ember)]">Fashion only.</span>
              </h2>
              <p className="body-lg text-[var(--scalo-fg-2)] mt-6 max-w-[560px]">
                The niche isn&rsquo;t a limitation — it&rsquo;s the edge. Every campaign is built around how fashion brands actually sell: visually, emotionally, fast.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4" data-reveal data-delay="100">
              {platforms.map((p, i) => (
                <div
                  key={p.name}
                  className="bg-[var(--scalo-bg-2)] rounded-2xl p-10 border border-[var(--scalo-border-ghost)] relative overflow-hidden group hover:border-[var(--scalo-border-strong)] transition-colors"
                >
                  <div className="absolute top-0 left-10 right-10 h-px bg-[var(--scalo-ember)] opacity-60" />
                  <div
                    className="pointer-events-none absolute bottom-0 right-0 w-48 h-48 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: "radial-gradient(circle at 80% 80%, rgba(255,107,53,0.08) 0%, transparent 70%)" }}
                  />
                  <div className="text-[11px] uppercase tracking-widest text-[var(--scalo-ember)] mb-4 font-medium">0{i + 1}</div>
                  <h3 className="text-2xl font-medium text-[var(--scalo-cream)] mb-4">{p.name}</h3>
                  <p className="text-sm text-[var(--scalo-fg-2)] leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who it's for */}
        <section className="py-24 lg:py-32 bg-[var(--scalo-bg-1)]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
              <div className="lg:col-span-6" data-reveal>
                <h2 className="display-lg text-[var(--scalo-cream)]">
                  Built for brands
                  <br />
                  <span className="italic-editorial text-[var(--scalo-ember)]">ready to scale.</span>
                </h2>
                <p className="body-lg text-[var(--scalo-fg-2)] mt-6 max-w-[480px]">
                  This isn&rsquo;t an agency that takes everyone. Fashion and apparel brands on Shopify, at the right stage — that&rsquo;s it. The narrow focus is exactly why the results are consistent.
                </p>
              </div>
              <div className="lg:col-span-6" data-reveal data-delay="120">
                <div className="bg-[var(--scalo-bg-2)] rounded-2xl border border-[var(--scalo-border-ghost)] p-8 relative overflow-hidden">
                  <div className="absolute top-0 left-8 right-8 h-px bg-[var(--scalo-ember)]" />
                  <div
                    className="pointer-events-none absolute -bottom-10 -right-10 w-64 h-64"
                    style={{ background: "radial-gradient(circle at 70% 70%, rgba(255,107,53,0.12) 0%, transparent 70%)" }}
                  />
                  <div className="text-[11px] uppercase tracking-widest text-[var(--scalo-fg-3)] mb-5 font-medium">Who qualifies</div>
                  <ul className="space-y-3">
                    {qualifiers.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-[var(--scalo-fg-2)]">
                        <div className="w-5 h-5 rounded-full bg-[var(--scalo-ember)]/10 border border-[var(--scalo-ember)]/30 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[var(--scalo-ember)]" strokeWidth={2.5} />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Endorsement */}
        <section className="py-24 lg:py-32 bg-grid-fade">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="max-w-[760px]" data-reveal>
              <div className="text-[11px] uppercase tracking-widest text-[var(--scalo-ember)] mb-6 font-medium">From the CRO side</div>
              <blockquote className="text-xl lg:text-2xl text-[var(--scalo-cream)] leading-relaxed font-medium tracking-tight">
                &ldquo;I don&rsquo;t run ads anymore but I know what good results look like. I also know what{" "}
                <span className="text-[var(--scalo-ember)]">it costs when results are bad.</span>{" "}
                My partner works exclusively with fashion brands on Meta and TikTok. His results are why I send everyone to him.&rdquo;
              </blockquote>
              <div className="mt-8 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[var(--scalo-bg-3)] border border-[var(--scalo-border-strong)] flex items-center justify-center shrink-0">
                  <span className="text-xs font-medium text-[var(--scalo-fg-2)]">S</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-[var(--scalo-cream)]">Steven</div>
                  <div className="text-[11px] uppercase tracking-widest text-[var(--scalo-fg-3)]">CRO · Scalo</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-24 lg:py-32 bg-[var(--scalo-bg-1)]">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="mb-16" data-reveal>
              <h2 className="display-lg text-[var(--scalo-cream)]">
                How to{" "}
                <span className="italic-editorial text-[var(--scalo-ember)]">get started.</span>
              </h2>
              <p className="body-lg text-[var(--scalo-fg-2)] mt-6 max-w-[480px]">
                Three steps. No pitch decks, no discovery theatre.
              </p>
            </div>
            <div className="bg-[var(--scalo-bg-2)] rounded-2xl overflow-hidden" data-reveal data-delay="100">
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[var(--scalo-border-ghost)]">
                {steps.map((s) => (
                  <div key={s.n} className="p-8 lg:p-10 relative overflow-hidden group">
                    <div className="absolute -top-2 right-4 tnum text-[96px] font-medium leading-none text-[var(--scalo-cream)]/[0.04] select-none pointer-events-none group-hover:text-[var(--scalo-ember)]/[0.06] transition-colors duration-300">
                      {s.n}
                    </div>
                    <div className="absolute top-0 left-0 w-0 h-px bg-[var(--scalo-ember)] group-hover:w-full transition-all duration-400" />
                    <div className="text-xs text-[var(--scalo-ember)] font-medium tracking-widest mb-4 tnum">— {s.n}</div>
                    <h4 className="text-lg font-medium text-[var(--scalo-cream)] mb-2">{s.title}</h4>
                    <p className="text-sm text-[var(--scalo-fg-2)] leading-relaxed">{s.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 lg:py-32 bg-grid-fade relative overflow-hidden">
          <div className="pointer-events-none select-none absolute bottom-8 right-0 tnum text-[clamp(120px,18vw,240px)] font-medium leading-none text-[var(--scalo-cream)]/[0.025] tracking-tight translate-x-8">
            9x
          </div>
          <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
            <div className="max-w-[720px]" data-reveal>
              <h2 className="display-xl text-[var(--scalo-cream)] tracking-tight">
                Stop paying for
                <br />
                <span className="italic-editorial text-[var(--scalo-ember)]">promises.</span>
              </h2>
              <p className="body-lg text-[var(--scalo-fg-2)] mt-8 max-w-[520px]">
                Book a call. If your brand is a fit, you&rsquo;ll know within 15 minutes whether this is worth moving forward — no pressure, no runaround.
              </p>
              <a
                href="#"
                data-tf-popup={TYPEFORM_ID}
                className="mt-10 inline-flex items-center gap-1.5 bg-[var(--scalo-ember)] hover:bg-[var(--scalo-ember)]/90 text-[var(--scalo-bg-0)] rounded-full h-12 px-7 text-sm font-medium transition-colors btn-press"
              >
                Book a call <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
