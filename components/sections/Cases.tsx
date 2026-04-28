import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowUpRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

type CaseCardProps = {
  index: string;
  client: string;
  category: string;
  tag: string;
  metric: string;
  metricLabel: string;
  goal: string;
  approach: string;
  quote: string;
  attribution: string;
  videoUrl?: string;
};

const caseData: CaseCardProps[] = [
  {
    index: "CASE 01",
    client: "Y Studios",
    category: "Shopify Plus · Fashion",
    tag: "Fashion",
    metric: "+$340K",
    metricLabel: "Revenue recovered · 90-day window",
    goal: "Reduce cart abandonment and lift PDP conversion on their hero SKU.",
    approach: "Tested 6 PDP variants targeting trust signals, urgency, and image hierarchy.",
    quote: "We were leaving money on the table and didn't know how much. Scalo found it in 48 hours.",
    attribution: "Sarah Chen, Head of Ecommerce",
    videoUrl: "https://www.youtube.com",
  },
  {
    index: "CASE 02",
    client: "Fit Tribe",
    category: "Shopify · Health & Wellness",
    tag: "Wellness",
    metric: "+23% RPV",
    metricLabel: "Revenue per visitor · 90-day window",
    goal: "Improve checkout completion rate on a 3-step funnel losing 68% of sessions.",
    approach: "Stripped friction from step 2, tested social proof placement and CTA copy.",
    quote: "Three weeks in, we had our best month ever. The data was undeniable.",
    attribution: "Marcus Webb, Founder",
  },
  {
    index: "CASE 03",
    client: "Bloom Beauty",
    category: "Shopify Plus · Beauty",
    tag: "Beauty",
    metric: "+$89K",
    metricLabel: "Revenue · First 60 days",
    goal: "Increase add-to-cart rate on their bestselling serum bundle.",
    approach: "Tested 4 PDP layouts focusing on ingredient storytelling and social proof proximity.",
    quote: "We had never done CRO properly. Scalo changed that in a month.",
    attribution: "Priya Patel, CMO",
  },
  {
    index: "CASE 04",
    client: "Drift Athletics",
    category: "Shopify Plus · Sports",
    tag: "Sports",
    metric: "+41% CVR",
    metricLabel: "Conversion rate · 60-day window",
    goal: "Lift collection page CVR which was 2.1% against a 3.8% industry benchmark.",
    approach: "Rebuilt filter UX, tested product card layouts, and added inline social proof.",
    quote: "Our collection pages were invisible. Now they're our highest-converting entry point.",
    attribution: "Jordan Lee, VP Growth",
  },
  {
    index: "CASE 05",
    client: "Verve Coffee",
    category: "Shopify · Food & Beverage",
    tag: "F&B",
    metric: "+$180K",
    metricLabel: "Subscription revenue · 90 days",
    goal: "Increase subscription attach rate on their single-origin roast line.",
    approach: "Tested 5 subscription offer frames, rewrote PDP copy, restructured the bundle CTA.",
    quote: "We didn't think copy changes could move numbers this fast. We were wrong.",
    attribution: "Elena Torres, DTC Lead",
  },
  {
    index: "CASE 06",
    client: "The Mod Collective",
    category: "Shopify · Home & Living",
    tag: "Home",
    metric: "+$95K",
    metricLabel: "Revenue · First 45 days",
    goal: "Fix a leaking checkout — 71% drop-off at the shipping step.",
    approach: "Simplified shipping options, tested trust badge placement, rewrote shipping copy.",
    quote: "One page. Three tests. $95K. The ROI math here is embarrassing.",
    attribution: "Cam Rivera, Founder",
  },
];

function VideoThumbnail({ videoUrl }: { videoUrl: string }) {
  return (
    <a
      href={videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-center w-full aspect-video bg-[var(--scalo-bg-3)] rounded-xl overflow-hidden border border-[var(--scalo-border-ghost)] hover:border-[var(--scalo-ember)]/50 transition-colors cursor-pointer"
      aria-label="Watch video testimonial"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--scalo-bg-3)] to-[var(--scalo-bg-2)]" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
        style={{ background: "radial-gradient(ellipse 60% 60% at 50% 60%, rgba(255,107,53,0.1) 0%, transparent 100%)" }} />
      <div className="relative flex flex-col items-center gap-3">
        <div className="w-14 h-14 rounded-full bg-[var(--scalo-cream)]/10 border border-[var(--scalo-cream)]/20 flex items-center justify-center group-hover:bg-[var(--scalo-ember)]/20 group-hover:border-[var(--scalo-ember)]/50 transition-colors">
          <Play className="w-5 h-5 text-[var(--scalo-cream)] translate-x-0.5" fill="currentColor" />
        </div>
        <span className="text-xs uppercase tracking-widest text-[var(--scalo-fg-3)]">Video testimonial</span>
      </div>
    </a>
  );
}

function CaseCard({ index, client, category, tag, metric, metricLabel, goal, approach, quote, attribution, videoUrl }: CaseCardProps) {
  return (
    <Card className="bg-[var(--scalo-bg-2)] border-[var(--scalo-border-ghost)] ring-0 rounded-2xl overflow-hidden">
      <CardHeader className="px-8 pt-8 pb-0 relative">
        <div className="absolute top-4 right-6 tnum text-[80px] font-medium leading-none text-[var(--scalo-cream)]/[0.04] select-none pointer-events-none tracking-tight">
          {index.replace("CASE ", "")}
        </div>
        <div className="flex items-center justify-between relative">
          <span className="text-[11px] uppercase tracking-widest text-[var(--scalo-ember)] font-medium">{index}</span>
          <Badge variant="outline" className="border-[var(--scalo-border-ghost)] text-[var(--scalo-fg-3)] bg-[var(--scalo-bg-3)] rounded-full text-[10px] tracking-widest uppercase">
            {tag}
          </Badge>
        </div>
        <CardTitle className="text-2xl sm:text-3xl font-medium text-[var(--scalo-cream)] tracking-tight mt-4">{client}</CardTitle>
        <CardDescription className="text-[var(--scalo-fg-3)] text-sm mt-1">{category}</CardDescription>
      </CardHeader>

      <CardContent className="px-8 py-6 space-y-6">
        <div className="border-y border-[var(--scalo-border-hairline)] py-6">
          <div className="tnum text-6xl sm:text-7xl font-medium text-[var(--scalo-ember)] leading-none tracking-tight">{metric}</div>
          <div className="text-[11px] uppercase tracking-widest text-[var(--scalo-fg-3)] mt-3">{metricLabel}</div>
        </div>
        <div className="space-y-3">
          <p className="text-sm text-[var(--scalo-fg-2)] leading-relaxed">
            <span className="text-[var(--scalo-fg-3)] font-medium">Goal — </span>{goal}
          </p>
          <p className="text-sm text-[var(--scalo-fg-2)] leading-relaxed">
            <span className="text-[var(--scalo-fg-3)] font-medium">Approach — </span>{approach}
          </p>
        </div>
        {videoUrl && <VideoThumbnail videoUrl={videoUrl} />}
        <blockquote className="border-l-2 border-[var(--scalo-ember)] pl-5 italic-editorial text-base leading-relaxed text-[var(--scalo-cream)]">
          &ldquo;{quote}&rdquo;
          <footer className="text-xs not-italic text-[var(--scalo-fg-3)] mt-3 tracking-wide font-sans">— {attribution}</footer>
        </blockquote>
      </CardContent>

      <CardFooter className="px-8 pb-8 pt-0 border-none bg-transparent">
        <a href="#" className="inline-flex items-center gap-1.5 text-sm text-[var(--scalo-cream)] border-b border-[var(--scalo-border-strong)] pb-1 hover:border-[var(--scalo-ember)] transition-colors">
          Read case study <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </CardFooter>
    </Card>
  );
}

export default function Cases() {
  const [current, setCurrent] = useState(0);
  const total = caseData.length;
  const trackRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const scrollToCard = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.children[index] as HTMLElement | undefined;
    if (!card) return;
    track.scrollTo({ left: card.offsetLeft, behavior: "smooth" });
  }, []);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent(c => {
        const next = (c + 1) % total;
        if (next === 0) {
          // Wrap: jump to start without animation, then let next tick scroll smoothly
          const track = trackRef.current;
          if (track) {
            track.style.scrollBehavior = "auto";
            track.scrollLeft = 0;
            track.style.scrollBehavior = "";
          }
        } else {
          scrollToCard(next);
        }
        return next;
      });
    }, 4500);
  }, [total, scrollToCard]);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [startTimer]);

  const go = useCallback((index: number) => {
    const next = ((index % total) + total) % total;
    setCurrent(next);
    scrollToCard(next);
    startTimer();
  }, [total, scrollToCard, startTimer]);

  const prev = () => go(current - 1);
  const next = () => go(current + 1);

  return (
    <section id="results" className="bg-[var(--scalo-bg-1)] py-20 sm:py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex items-end justify-between mb-12 lg:mb-16" data-reveal>
          <h2 className="display-lg text-[var(--scalo-cream)] max-w-[620px]">
            Results that don&rsquo;t{" "}
            <span className="italic-editorial text-[var(--scalo-ember)]">need a footnote.</span>
          </h2>

          <div className="hidden sm:flex items-center gap-4 shrink-0 mb-2">
            <span className="tnum text-xs text-[var(--scalo-fg-3)] tracking-widest">
              {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <button onClick={prev} aria-label="Previous"
                className="w-10 h-10 rounded-full border border-[var(--scalo-border-strong)] flex items-center justify-center text-[var(--scalo-fg-2)] hover:text-[var(--scalo-cream)] hover:border-[var(--scalo-cream)] transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={next} aria-label="Next"
                className="w-10 h-10 rounded-full border border-[var(--scalo-border-strong)] flex items-center justify-center text-[var(--scalo-fg-2)] hover:text-[var(--scalo-cream)] hover:border-[var(--scalo-cream)] transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Unified carousel — 1 card mobile, 2 tablet, 3 desktop */}
        <div
          ref={trackRef}
          className="flex items-start gap-5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          data-reveal
          data-delay="100"
        >
          {caseData.map((card, i) => (
            <div
              key={i}
              className="min-w-full sm:min-w-[calc(50%-10px)] lg:min-w-[calc(33.33%-14px)] flex-shrink-0"
            >
              <CaseCard {...card} />
            </div>
          ))}
        </div>

        {/* Bottom controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Progress pills */}
          <div className="flex items-center gap-2">
            {caseData.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to case ${i + 1}`}
                className={`h-0.5 rounded-full transition-all duration-400 ${
                  i === current ? "w-10 bg-[var(--scalo-ember)]" : "w-3 bg-[var(--scalo-border-strong)]"
                }`}
              />
            ))}
          </div>

          {/* Mobile nav */}
          <div className="flex sm:hidden items-center gap-2">
            <button onClick={prev} aria-label="Previous"
              className="w-9 h-9 rounded-full border border-[var(--scalo-border-ghost)] flex items-center justify-center text-[var(--scalo-fg-2)] transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={next} aria-label="Next"
              className="w-9 h-9 rounded-full border border-[var(--scalo-border-ghost)] flex items-center justify-center text-[var(--scalo-fg-2)] transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
