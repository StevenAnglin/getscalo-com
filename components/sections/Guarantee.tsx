import { ArrowUpRight, Check } from "lucide-react";

const items = [
  "Minimum 5% RPV lift in 90 days",
  "Transparent reporting on every test",
  "Free continuation if targets missed",
  "No long-term lock-in",
];

export default function Guarantee() {
  return (
    <section id="guarantee" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative large background text */}
      <div className="pointer-events-none select-none absolute bottom-8 right-0 tnum text-[clamp(120px,18vw,240px)] font-medium leading-none text-[var(--scalo-ink)]/[0.025] tracking-tight translate-x-8">
        5%
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="max-w-[900px]" data-reveal>
          <h2 className="display-xl text-[var(--scalo-ink)] tracking-tight">
            Skin in the game.
            <br />
            <span className="italic-editorial text-[var(--scalo-ember)]">Or we work free.</span>
          </h2>
          <p className="body-lg text-[var(--scalo-fg-2)] mt-8 sm:mt-10 max-w-[640px]">
            If your store doesn&rsquo;t see at least a 5% RPV lift within 90 days, we keep working at no charge until it does. No asterisks. No exceptions.
          </p>
          <a
            href="#book"
            className="mt-10 inline-flex items-center gap-1.5 bg-[var(--scalo-ember)] hover:bg-[var(--scalo-ember)]/90 text-[var(--scalo-ink)] rounded-full h-12 px-7 text-sm font-medium transition-colors btn-press"
          >
            Apply now <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-16 pt-10 border-t border-[var(--scalo-border-ghost)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8" data-reveal data-delay="150">
            {items.map((item, i) => (
              <div key={i} className="group">
                <div className="w-8 h-8 rounded-full bg-[var(--scalo-ember)]/10 border border-[var(--scalo-ember)]/35 flex items-center justify-center mb-4 group-hover:bg-[var(--scalo-ember)]/20 group-hover:border-[var(--scalo-ember)]/60 transition-colors">
                  <Check className="w-4 h-4 text-[var(--scalo-ember)]" strokeWidth={2.5} />
                </div>
                <span className="text-sm text-[var(--scalo-fg-2)] leading-snug block group-hover:text-[var(--scalo-ink)] transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
