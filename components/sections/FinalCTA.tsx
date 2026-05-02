import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section id="book" className="bg-[var(--scalo-bg-1)] py-32 lg:py-48 relative overflow-hidden">
      {/* Strong centered ember glow */}
      <div className="pointer-events-none absolute inset-0 glow-ember-cta" />

      {/* Decorative large quotation mark */}
      <div className="pointer-events-none select-none absolute top-12 left-1/2 -translate-x-1/2 text-[240px] font-serif leading-none text-[var(--scalo-cream)]/[0.025] -mt-8">
        &ldquo;
      </div>

      <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12 text-center" data-reveal>
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 mb-10">
          <div className="h-px w-8 bg-[var(--scalo-ember)]/50" />
          <span className="text-[11px] uppercase tracking-widest text-[var(--scalo-ember)] font-medium">
            No long-term contract
          </span>
          <div className="h-px w-8 bg-[var(--scalo-ember)]/50" />
        </div>

        <h2 className="display-xl text-[var(--scalo-cream)] max-w-[1100px] mx-auto tracking-tight">
          Your store is leaving money on the table.{" "}
          <span className="italic-editorial text-[var(--scalo-ember)]">We find it in 48 hours.</span>
        </h2>

        <p className="body-lg text-[var(--scalo-fg-2)] mt-10 max-w-[560px] mx-auto">
          No commitment. 30 minutes. You leave with at least one actionable fix.
        </p>

        <a
          href="#"
          data-tf-popup="EgCg6DVP"
          className="mt-12 inline-flex items-center gap-2 bg-[var(--scalo-ember)] hover:bg-[var(--scalo-ember)]/90 text-[var(--scalo-bg-0)] rounded-full h-14 px-8 text-base font-medium transition-colors btn-press shadow-[0_0_40px_rgba(139,28,28,0.35)]"
        >
          Book a free teardown call <ArrowUpRight className="w-5 h-5" />
        </a>

        <p className="text-xs text-[var(--scalo-fg-3)] mt-8 tracking-wide">
          $50K+/month stores only · Results guaranteed
        </p>
      </div>
    </section>
  );
}
