import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getValueResourceHref, type ValueResource } from "@/lib/value-resources";

interface ResourceCardProps {
  resource: ValueResource;
  index: number;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  const isCaseStudy = Boolean(resource.caseStudyHeadline);
  const headline = isCaseStudy ? resource.caseStudyHeadline! : resource.title;
  const ctaText = isCaseStudy ? "Read case study" : "Read guide";

  return (
    <Link
      href={getValueResourceHref(resource.slug)}
      className="card-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--scalo-border-ghost)] bg-[var(--scalo-bg-2)] transition-colors hover:border-[var(--scalo-border-strong)]"
      style={{ minHeight: "320px" }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between border-b border-[var(--scalo-border-hairline)] px-6 py-4 lg:px-7">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-[var(--scalo-fg-2)]">
            {resource.subtitle || resource.niche || resource.eyebrow}
          </span>
          {resource.resultPill && (
            <span className="inline-flex items-center rounded-full border border-[var(--scalo-ember)]/30 bg-[var(--scalo-ember)]/10 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-[var(--scalo-ember)]">
              {resource.resultPill}
            </span>
          )}
          {resource.password && (
            <span className="flex h-6 items-center gap-1 rounded-full border border-[var(--scalo-border-ghost)] bg-[var(--scalo-bg-3)] px-2 text-[10px] font-medium tracking-wide text-[var(--scalo-fg-3)]">
              🔒 Private
            </span>
          )}
        </div>
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--scalo-border-ghost)] text-[var(--scalo-fg-3)] transition-colors group-hover:border-[var(--scalo-ember)]/50 group-hover:text-[var(--scalo-ember)]">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-5 px-6 py-7 lg:px-7">
        <h3 className="text-xl font-medium leading-snug tracking-tight text-[var(--scalo-ink)] lg:text-2xl">
          {headline}
        </h3>
        <p className="flex-1 text-sm leading-relaxed text-[var(--scalo-fg-2)]">
          {resource.description}
        </p>
        <div>
          <span className="inline-flex items-center gap-1.5 border-b border-[var(--scalo-border-ghost)] pb-1 text-sm text-[var(--scalo-fg-2)] transition-colors group-hover:border-[var(--scalo-ember)]">
            {ctaText} <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
