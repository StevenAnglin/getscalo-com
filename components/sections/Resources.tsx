import { ArrowUpRight } from "lucide-react";

const cards = [
  {
    tag: "GUIDE",
    index: "01",
    title: "The PDP Teardown Framework",
    desc: "The exact 47-point checklist we run on every product page audit.",
    cta: "Download Now",
    featured: true,
    accentAngle: "135deg",
  },
  {
    tag: "TEARDOWN",
    index: "02",
    title: "Checkout Friction: 12 Fixes That Work",
    desc: "Real checkout tests, real data. What moved RPV and what didn't.",
    cta: "Download Now",
    featured: false,
    accentAngle: "160deg",
  },
  {
    tag: "CASE STUDY",
    index: "03",
    title: "How Y Studios Recovered $340K in 90 Days",
    desc: "Full breakdown of the test sequence that moved the needle.",
    cta: "Read Now",
    featured: false,
    accentAngle: "110deg",
  },
];

function ResourceCard({ tag, index, title, desc, cta, accentAngle }: typeof cards[0]) {
  return (
    <div className="card-lift group bg-[var(--scalo-bg-2)] border border-[var(--scalo-border-ghost)] rounded-2xl overflow-hidden hover:border-[var(--scalo-border-strong)] cursor-pointer flex flex-col">
      {/* Cover area — designed placeholder */}
      <div className="relative w-full aspect-[16/9] bg-[var(--scalo-bg-3)] overflow-hidden">
        {/* Dot grid pattern */}
        <div className="absolute inset-0 bg-grid-fade opacity-80" />

        {/* Directional ember wash */}
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(${accentAngle}, rgba(255,107,53,0.18) 0%, transparent 55%)` }}
        />

        {/* Decorative large index number */}
        <div className="absolute bottom-2 right-4 tnum text-[96px] font-medium leading-none text-[var(--scalo-cream)]/[0.06] select-none pointer-events-none">
          {index}
        </div>

        {/* Tag chip — top left */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium tracking-widest uppercase border border-[var(--scalo-ember)]/40 text-[var(--scalo-ember)] bg-[var(--scalo-bg-0)]/60 backdrop-blur-sm">
            {tag}
          </span>
        </div>

        {/* Arrow — top right */}
        <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-[var(--scalo-border-ghost)] flex items-center justify-center text-[var(--scalo-fg-3)] group-hover:border-[var(--scalo-ember)]/50 group-hover:text-[var(--scalo-ember)] transition-colors">
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 lg:px-7 flex flex-col flex-1 gap-3">
        <h3 className="text-base lg:text-lg font-medium text-[var(--scalo-cream)] tracking-tight leading-snug">
          {title}
        </h3>
        <p className="text-sm text-[var(--scalo-fg-2)] leading-relaxed flex-1">{desc}</p>

        <div className="pt-3 border-t border-[var(--scalo-border-hairline)] mt-1">
          <a href="#" className="inline-flex items-center gap-1.5 text-sm text-[var(--scalo-cream)] border-b border-[var(--scalo-border-ghost)] group-hover:border-[var(--scalo-ember)] pb-1 transition-colors">
            {cta} <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Resources() {
  return (
    <section id="resources" className="py-24 lg:py-32 bg-[var(--scalo-bg-1)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-20 max-w-[800px]" data-reveal>
          <h2 className="display-lg text-[var(--scalo-cream)]">
            Free{" "}
            <span className="italic-editorial text-[var(--scalo-ember)]">teardowns</span>{" "}
            and frameworks.
          </h2>
          <p className="body-lg text-[var(--scalo-fg-2)] mt-6 max-w-[560px]">
            The actual tools we use in audits. No email required.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <div key={c.tag} data-reveal data-delay={`${i * 100}`}>
              <ResourceCard {...c} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
