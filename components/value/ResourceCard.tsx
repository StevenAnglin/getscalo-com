import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getValueResourceHref, type ValueResource } from "@/lib/value-resources";

interface ResourceCardProps {
  resource: ValueResource;
  index: number;
  dark?: boolean;
}

export default function ResourceCard({ resource, dark }: ResourceCardProps) {
  const isCaseStudy = Boolean(resource.caseStudyHeadline);
  const headline = isCaseStudy ? resource.caseStudyHeadline! : resource.title;
  const ctaText = isCaseStudy ? "Read case study" : "Read guide";

  const cardBg = dark ? "glass-card glass-card-hover" : "bg-[var(--scalo-bg-2)] border-[var(--scalo-border-ghost)] hover:border-[var(--scalo-border-strong)]";
  const topBorder = dark ? "border-white/[0.06]" : "border-[var(--scalo-border-hairline)]";
  const subtitleText = dark ? "text-white/55" : "text-[var(--scalo-fg-2)]";
  const arrowBtn = dark ? "border-white/[0.10] text-white/35 group-hover:border-[var(--scalo-accent)]/50 group-hover:text-[var(--scalo-accent)]" : "border-[var(--scalo-border-ghost)] text-[var(--scalo-fg-3)] group-hover:border-[var(--scalo-ember)]/50 group-hover:text-[var(--scalo-ember)]";
  const privatePill = dark ? "border-white/[0.10] bg-white/[0.04] text-white/35" : "border-[var(--scalo-border-ghost)] bg-[var(--scalo-bg-3)] text-[var(--scalo-fg-3)]";
  const headlineText = dark ? "text-white" : "text-[var(--scalo-ink)]";
  const bodyText = dark ? "text-white/55" : "text-[var(--scalo-fg-2)]";
  const ctaLink = dark ? "border-white/[0.15] text-white/55 group-hover:border-[var(--scalo-accent)]" : "border-[var(--scalo-border-ghost)] text-[var(--scalo-fg-2)] group-hover:border-[var(--scalo-ember)]";

  return (
    <Link
      href={getValueResourceHref(resource.slug)}
      className={`card-lift group flex h-full flex-col overflow-hidden rounded-2xl border transition-colors ${cardBg}`}
      style={{ minHeight: "320px" }}
    >
      {/* Top bar */}
      <div className={`flex items-center justify-between border-b ${topBorder} px-6 py-4 lg:px-7`}>
        <div className="flex items-center gap-3">
          {resource.logo ? (
            <Image
              src={resource.logo}
              alt={resource.subtitle}
              width={100}
              height={24}
              className="h-5 w-auto object-contain"
              style={{ filter: "brightness(0) invert(1)", opacity: 0.7 }}
              unoptimized
            />
          ) : (
            <span className={`text-sm font-medium ${subtitleText}`}>
              {resource.subtitle || resource.niche || resource.eyebrow}
            </span>
          )}
          {resource.resultPill && (
            <span className="inline-flex items-center rounded-full border border-[var(--scalo-accent)]/30 bg-[var(--scalo-accent)]/10 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-[var(--scalo-accent)]">
              {resource.resultPill}
            </span>
          )}
          {resource.password && (
            <span className={`flex h-6 items-center gap-1 rounded-full border px-2 text-[10px] font-medium tracking-wide ${privatePill}`}>
              🔒 Private
            </span>
          )}
        </div>
        <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${arrowBtn}`}>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-5 px-6 py-7 lg:px-7">
        <h3 className={`text-xl font-medium leading-snug tracking-tight lg:text-2xl ${headlineText}`}>
          {headline}
        </h3>
        <p className={`flex-1 text-sm leading-relaxed ${bodyText}`}>
          {resource.description}
        </p>
        <div>
          <span className={`inline-flex items-center gap-1.5 border-b pb-1 text-sm transition-colors ${ctaLink}`}>
            {ctaText} <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
