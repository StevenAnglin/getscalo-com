import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const featured = {
  tag: "CASE 01",
  client: "Y Studios",
  category: "Streetwear · Cairo, Egypt",
  metric: "+183%",
  metricSub: "Revenue · E£4.6M → E£13M ($124K → $351K)",
  result: "4 of 7 drops broke E£1M (~$27K). Drop CVR averaged 6%. Ongoing in-stock CVR hit 2.3% across 197.7K sessions — revenue flowing between drops too.",
  quote: "Every drop now converts harder than the last.",
  attribution: "Y Studios, Founder",
  href: "/value/y-studios-case-study",
  image: "/images/case-studies/y-studios/homepage-after-desktop.png",
  floats: [
    { pos: "top left", label: "Revenue growth", value: "+183%", trend: "E£4.6M → E£13M" },
    { pos: "top right", label: "Drop CVR avg", value: "6%", trend: "Per drop" },
    { pos: "bottom left", label: "Ongoing CVR", value: "2.3%", trend: "197.7K sessions" },
    { pos: "bottom right", label: "Peak drop", value: "E£1M+", trend: "4 of 7 drops" },
  ],
};

const secondary = [
  {
    tag: "CASE 02",
    client: "Fit Tribe",
    category: "Activewear · Egypt",
    metric: "+16%",
    sub: "Revenue while TikTok traffic 21%↑",
    image: "/images/case-studies/fit-tribe/collections-after-desktop.png",
    href: "/value/fit-tribe-case-study",
  },
  {
    tag: "CASE 03",
    client: "TET",
    category: "EdTech · Learning Platform",
    metric: "Full Migration",
    sub: "Teachable → Shopify",
    image: null as string | null,
    href: "/value/tet-case-study",
  },
];

function FloatCard({ label, value, trend }: { label: string; value: string; trend: string }) {
  return (
    <div className="glass-card rounded-xl px-3.5 py-3 min-w-[130px] pointer-events-none">
      <div className="text-[9px] uppercase tracking-widest text-white/35 mb-1.5 font-medium">{label}</div>
      <div className="tnum text-lg font-bold text-white leading-none tracking-tight">{value}</div>
      <div className="text-[9px] text-[var(--scalo-accent)] mt-1.5 flex items-center gap-1">
        <span>↑</span>{trend}
      </div>
    </div>
  );
}

export default function Cases() {
  return (
    <section id="results" className="py-20 sm:py-24 lg:py-32" style={{ background: "#0C0C09" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex items-end justify-between mb-14 lg:mb-20" data-reveal>
          <div>
            <div className="text-[11px] uppercase tracking-widest text-[var(--scalo-accent)] mb-4 font-medium">Case Studies</div>
            <h2 className="display-lg text-white">
              Real clients.{" "}
              <span className="italic-editorial text-[var(--scalo-accent)]">Real numbers.</span>
            </h2>
          </div>
          <Link href="/value" className="hidden sm:inline-flex items-center gap-1.5 text-sm text-white/40 hover:text-white border-b border-white/[0.10] hover:border-[var(--scalo-accent)] pb-1 transition-colors mb-2">
            All case studies <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Featured hero case */}
        <div className="relative rounded-3xl overflow-hidden glass-card" data-reveal>
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left: copy */}
            <div className="flex flex-col justify-between p-10 lg:p-14 xl:p-16">
              <div>
                <div className="text-[11px] uppercase tracking-widest text-[var(--scalo-accent)] font-medium mb-5">
                  {featured.tag} · {featured.category}
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-white tracking-tight leading-none">
                  {featured.client}
                </h3>
                <div className="mt-8">
                  <div className="tnum text-[clamp(72px,10vw,108px)] font-bold leading-none text-[var(--scalo-accent)] tracking-tight">
                    {featured.metric}
                  </div>
                  <div className="text-sm text-white/35 mt-2 uppercase tracking-widest">
                    {featured.metricSub}
                  </div>
                </div>
                <p className="text-white/55 mt-8 leading-relaxed max-w-[420px] text-base">
                  {featured.result}
                </p>
                <blockquote className="border-l-2 border-[var(--scalo-accent)]/60 pl-5 mt-7 italic-editorial text-white/65 text-base leading-relaxed">
                  &ldquo;{featured.quote}&rdquo;
                  <footer className="not-italic text-xs text-white/30 mt-2.5 font-sans tracking-wide">
                    — {featured.attribution}
                  </footer>
                </blockquote>
              </div>
              <Link
                href={featured.href}
                className="mt-10 inline-flex items-center gap-1.5 bg-[var(--scalo-accent)] hover:bg-[var(--scalo-accent-dim)] text-[#0C0C09] rounded-full h-11 px-6 text-sm font-semibold transition-colors btn-press w-fit"
              >
                Read case study <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Right: screenshot + floating result cards */}
            <div className="relative hidden lg:flex items-center justify-center p-10 border-l border-white/[0.07] overflow-hidden min-h-[520px]">
              {/* Ambient glow */}
              <div className="pointer-events-none absolute inset-0"
                style={{ background: "radial-gradient(ellipse 70% 60% at 65% 50%, rgba(170,255,0,0.07) 0%, transparent 70%)" }} />

              {/* Browser mockup + screenshot */}
              <div
                className="relative w-full max-w-[460px] z-10"
                style={{ transform: "perspective(1400px) rotateY(-5deg) rotateX(2deg)" }}
              >
                {/* Browser chrome */}
                <div className="rounded-t-xl bg-white/[0.07] border border-white/[0.10] border-b-0 px-3 py-2.5 flex items-center gap-2">
                  <div className="flex gap-1.5 shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  </div>
                  <div className="flex-1 mx-2 h-4 rounded-md bg-white/[0.07] flex items-center px-2">
                    <span className="text-[9px] text-white/20 tracking-wide">ystudios.com</span>
                  </div>
                </div>
                {/* Screenshot */}
                <div className="relative overflow-hidden rounded-b-xl border border-white/[0.10] border-t-0" style={{ aspectRatio: "16/10" }}>
                  <Image
                    src={featured.image}
                    alt="Y Studios homepage"
                    fill
                    className="object-cover object-top"
                    sizes="460px"
                    priority
                  />
                  {/* Subtle bottom fade */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0C0C09]/40 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating result cards — positioned around the mockup */}
              <div className="absolute top-8 left-4 z-20">
                <FloatCard label="Revenue growth" value="+183%" trend="E£4.6M → E£13M" />
              </div>
              <div className="absolute top-8 right-4 z-20">
                <FloatCard label="Drop CVR avg" value="6%" trend="Per drop" />
              </div>
              <div className="absolute bottom-8 left-4 z-20">
                <FloatCard label="Ongoing CVR" value="2.3%" trend="197.7K sessions" />
              </div>
              <div className="absolute bottom-8 right-4 z-20">
                <FloatCard label="Peak drop" value="E£1M+" trend="4 of 7 drops" />
              </div>
            </div>
          </div>
        </div>

        {/* Secondary cases — 2 smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4" data-reveal data-delay="100">
          {secondary.map((c) => (
            <Link
              key={c.tag}
              href={c.href}
              className="group relative rounded-2xl overflow-hidden glass-card glass-card-hover"
            >
              {c.image ? (
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16/7" }}>
                  <Image
                    src={c.image}
                    alt={c.client}
                    fill
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                    sizes="800px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C09]/85 via-[#0C0C09]/30 to-transparent" />
                </div>
              ) : (
                <div className="w-full flex items-center justify-center bg-white/[0.02]" style={{ aspectRatio: "16/7" }}>
                  <span className="text-white/15 text-xs uppercase tracking-widest">Screenshot coming soon</span>
                </div>
              )}

              {/* Overlay info */}
              <div className="absolute bottom-0 inset-x-0 p-6 flex items-end justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[var(--scalo-accent)] mb-1 font-medium">{c.tag}</div>
                  <div className="text-xl font-bold text-white leading-none">{c.client}</div>
                  <div className="text-xs text-white/35 mt-1">{c.category}</div>
                </div>
                <div className="text-right">
                  <div className="tnum text-2xl font-bold text-white">{c.metric}</div>
                  <div className="text-[10px] text-white/30 uppercase tracking-wide mt-0.5">{c.sub}</div>
                </div>
              </div>

              {/* Hover arrow */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full glass-card flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <ArrowUpRight className="w-3.5 h-3.5 text-[var(--scalo-accent)]" />
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
