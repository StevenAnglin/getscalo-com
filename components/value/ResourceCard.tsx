import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getValueResourceHref, type ValueResource } from "@/lib/value-resources";

const accentAngles = ["135deg", "160deg", "110deg"] as const;

interface ResourceCardProps {
  resource: ValueResource;
  index: number;
}

export default function ResourceCard({ resource, index }: ResourceCardProps) {
  const accentAngle = accentAngles[(index - 1) % accentAngles.length];
  const indexLabel = String(index).padStart(2, "0");

  return (
    <Link
      href={getValueResourceHref(resource.slug)}
      className="card-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-[var(--scalo-border-ghost)] bg-[var(--scalo-bg-2)] transition-colors hover:border-[var(--scalo-border-strong)]"
    >
      <div className="relative aspect-[16/9] overflow-hidden bg-[var(--scalo-bg-3)]">
        <div className="absolute inset-0 bg-grid-fade opacity-80" />
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(${accentAngle}, rgba(255,107,53,0.18) 0%, transparent 55%)`,
          }}
        />
        <div className="absolute bottom-2 right-4 select-none text-[96px] font-medium leading-none text-[var(--scalo-cream)]/[0.06] pointer-events-none tnum">
          {indexLabel}
        </div>
        <div className="absolute left-4 top-4">
          <span className="inline-flex items-center rounded-full border border-[var(--scalo-ember)]/40 bg-[var(--scalo-bg-0)]/60 px-2.5 py-1 text-[10px] font-medium tracking-widest text-[var(--scalo-ember)] uppercase backdrop-blur-sm">
            {resource.eyebrow}
          </span>
        </div>
        <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--scalo-border-ghost)] text-[var(--scalo-fg-3)] transition-colors group-hover:border-[var(--scalo-ember)]/50 group-hover:text-[var(--scalo-ember)]">
          <ArrowUpRight className="h-3.5 w-3.5" />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 px-6 py-6 lg:px-7">
        <div className="space-y-2">
          <p className="text-[11px] font-medium tracking-[0.18em] text-[var(--scalo-fg-3)] uppercase">
            Free Guide
          </p>
          <h3 className="text-base leading-snug font-medium tracking-tight text-[var(--scalo-cream)] lg:text-lg">
            {resource.title}
          </h3>
          <p className="text-sm text-[var(--scalo-fg-3)]">{resource.subtitle}</p>
        </div>

        <p className="flex-1 text-sm leading-relaxed text-[var(--scalo-fg-2)]">{resource.description}</p>

        <div className="mt-1 border-t border-[var(--scalo-border-hairline)] pt-3">
          <span className="inline-flex items-center gap-1.5 border-b border-[var(--scalo-border-ghost)] pb-1 text-sm text-[var(--scalo-cream)] transition-colors group-hover:border-[var(--scalo-ember)]">
            Read guide <ArrowUpRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
