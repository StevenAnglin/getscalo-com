import { useState, useEffect, useRef, useCallback } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";

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
  href?: string;
};

const caseData: CaseCardProps[] = [
  {
    index: "CASE 01",
    client: "Fit Tribe",
    category: "Activewear · Egypt",
    tag: "CRO",
    metric: "+16%",
    metricLabel: "Revenue · Q4 2025 → Q1 2026",
    goal: "Blended CVR rose from 1.16% to 1.24% while TikTok traffic grew 21%.",
    approach: "30-day sprint: rebuilt nav, search, collection filters, PDPs, and cart.",
    quote: "The TikTok traffic was killing our CVR. After Scalo, the numbers went the other way.",
    attribution: "Fit Tribe, Founder",
    href: "/value/fit-tribe-case-study",
  },
  {
    index: "CASE 02",
    client: "Y Studios",
    category: "Streetwear · Egypt",
    tag: "CRO",
    metric: "+183%",
    metricLabel: "Revenue · $124K → $351K",
    goal: "4 out of 7 drops broke E£1M. CVR held at 2% across all drops at scale.",
    approach: "Full storefront rebuild, premium redesign, and drop-by-drop site management.",
    quote: "Every drop now converts harder than the last.",
    attribution: "Y Studios, Founder",
    href: "/value/y-studios-case-study",
  },
  {
    index: "CASE 03",
    client: "TET",
    category: "EdTech · Learning Platform",
    tag: "Dev",
    metric: "Teachable → Shopify",
    metricLabel: "Platform migration · Custom build",
    goal: "Migrate a growing course business off Teachable without disrupting revenue.",
    approach: "Full custom Figma-to-Shopify build: new theme, blog, product pages, mobile-optimized.",
    quote: "We finally have a platform we can actually control.",
    attribution: "TET, Founder",
    href: "/value/tet-case-study",
  },
];

function CaseCard({ index, client, category, tag, metric, metricLabel, goal, approach, quote, attribution, href }: CaseCardProps) {
  return (
    <Card className="bg-[var(--scalo-bg-2)] border-[var(--scalo-border-ghost)] ring-0 rounded-2xl overflow-hidden">
      <CardHeader className="px-8 pt-8 pb-0 relative">
        <div className="absolute top-4 right-6 tnum text-[80px] font-medium leading-none text-[var(--scalo-ink)]/[0.04] select-none pointer-events-none tracking-tight">
          {index.replace("CASE ", "")}
        </div>
        <div className="flex items-center justify-between relative">
          <span className="text-[11px] uppercase tracking-widest text-[var(--scalo-ember)] font-medium">{index}</span>
          <Badge variant="outline" className="border-[var(--scalo-border-ghost)] text-[var(--scalo-fg-3)] bg-[var(--scalo-bg-3)] rounded-full text-[10px] tracking-widest uppercase">
            {tag}
          </Badge>
        </div>
        <CardTitle className="text-2xl sm:text-3xl font-medium text-[var(--scalo-ink)] tracking-tight mt-4">{client}</CardTitle>
        <CardDescription className="text-[var(--scalo-fg-3)] text-sm mt-1">{category}</CardDescription>
      </CardHeader>

      <CardContent className="px-8 py-6 space-y-6">
        <div className="border-y border-[var(--scalo-border-hairline)] py-6">
          <div className="tnum text-5xl sm:text-6xl font-medium text-[var(--scalo-ember)] leading-none tracking-tight">{metric}</div>
          <div className="text-[11px] uppercase tracking-widest text-[var(--scalo-fg-3)] mt-3">{metricLabel}</div>
        </div>
        <div className="space-y-3">
          <p className="text-sm text-[var(--scalo-fg-2)] leading-relaxed">
            <span className="text-[var(--scalo-fg-3)] font-medium">Result — </span>{goal}
          </p>
          <p className="text-sm text-[var(--scalo-fg-2)] leading-relaxed">
            <span className="text-[var(--scalo-fg-3)] font-medium">Approach — </span>{approach}
          </p>
        </div>
        <blockquote className="border-l-2 border-[var(--scalo-ember)] pl-5 italic-editorial text-base leading-relaxed text-[var(--scalo-ink)]">
          &ldquo;{quote}&rdquo;
          <footer className="text-xs not-italic text-[var(--scalo-fg-3)] mt-3 tracking-wide font-sans">— {attribution}</footer>
        </blockquote>
      </CardContent>

      <CardFooter className="px-8 pb-8 pt-0 border-none bg-transparent">
        {href ? (
          <Link href={href} className="inline-flex items-center gap-1.5 text-sm text-[var(--scalo-ink)] border-b border-[var(--scalo-border-strong)] pb-1 hover:border-[var(--scalo-ember)] transition-colors">
            Read case study <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-sm text-[var(--scalo-ink)] border-b border-[var(--scalo-border-strong)] pb-1">
            Read case study <ArrowUpRight className="w-3.5 h-3.5" />
          </span>
        )}
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
          <h2 className="display-lg text-[var(--scalo-ink)] max-w-[620px]">
            Real clients.{" "}
            <span className="italic-editorial text-[var(--scalo-ember)]">Real numbers.</span>
          </h2>

          <div className="hidden sm:flex items-center gap-4 shrink-0 mb-2">
            <span className="tnum text-xs text-[var(--scalo-fg-3)] tracking-widest">
              {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <button onClick={prev} aria-label="Previous"
                className="w-10 h-10 rounded-full border border-[var(--scalo-border-strong)] flex items-center justify-center text-[var(--scalo-fg-2)] hover:text-[var(--scalo-ink)] hover:border-[var(--scalo-ink)] transition-colors">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={next} aria-label="Next"
                className="w-10 h-10 rounded-full border border-[var(--scalo-border-strong)] flex items-center justify-center text-[var(--scalo-fg-2)] hover:text-[var(--scalo-ink)] hover:border-[var(--scalo-ink)] transition-colors">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel — 1 card mobile, 2 tablet, 3 desktop */}
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
