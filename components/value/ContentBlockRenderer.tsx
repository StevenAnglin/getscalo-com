import { Fragment, type ReactNode } from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import type { ValueContentBlock } from "@/lib/value-resources";

interface ContentBlockRendererProps {
  block: ValueContentBlock;
}

function formatInlineText(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).filter(Boolean).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-medium text-[var(--scalo-cream)]">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return <Fragment key={index}>{part}</Fragment>;
  });
}

export default function ContentBlockRenderer({ block }: ContentBlockRendererProps) {
  switch (block.type) {
    case "paragraph":
      return <p className="body-lg leading-relaxed text-[var(--scalo-fg-2)]">{formatInlineText(block.text)}</p>;

    case "callout":
      return (
        <div className="rounded-2xl border border-[var(--scalo-ember)]/25 bg-[var(--scalo-bg-2)]/70 p-6 shadow-[inset_0_1px_0_rgba(255,107,53,0.08)]">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--scalo-ember)]/30 text-[var(--scalo-ember)]">
              <ArrowRight className="h-4 w-4" />
            </div>
            <p className="text-base leading-relaxed text-[var(--scalo-fg-2)]">{formatInlineText(block.text)}</p>
          </div>
        </div>
      );

    case "stepGrid":
      return (
        <div className="grid gap-4 md:grid-cols-2">
          {block.steps.map((step) => (
            <div
              key={`${step.number}-${step.title}`}
              className="rounded-2xl border border-[var(--scalo-border-ghost)] bg-[var(--scalo-bg-2)] p-6"
            >
              <div className="text-4xl italic-editorial text-[var(--scalo-ember)]">{step.number}</div>
              <h4 className="mt-4 text-lg font-medium tracking-tight text-[var(--scalo-cream)]">{step.title}</h4>
              <p className="mt-3 text-sm leading-relaxed text-[var(--scalo-fg-2)]">{step.body}</p>
            </div>
          ))}
        </div>
      );

    case "codeBlock":
      return (
        <div className="overflow-hidden rounded-2xl border border-[var(--scalo-border-ghost)] bg-[var(--scalo-bg-2)]">
          {block.label ? (
            <div className="border-b border-[var(--scalo-border-hairline)] px-5 py-3 text-[11px] font-medium tracking-[0.18em] text-[var(--scalo-fg-3)] uppercase">
              {block.label}
            </div>
          ) : null}
          <div className="border-l-2 border-[var(--scalo-ember)] p-5">
            <pre className="overflow-x-auto whitespace-pre text-sm leading-relaxed text-[var(--scalo-cream)]">
              <code>{block.code}</code>
            </pre>
          </div>
        </div>
      );

    case "table":
      return (
        <div className="overflow-hidden rounded-2xl border border-[var(--scalo-border-ghost)] bg-[var(--scalo-bg-2)]">
          {block.label ? (
            <div className="border-b border-[var(--scalo-border-hairline)] px-5 py-3 text-[11px] font-medium tracking-[0.18em] text-[var(--scalo-fg-3)] uppercase">
              {block.label}
            </div>
          ) : null}
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-[var(--scalo-border-hairline)]">
                  {block.headers.map((header) => (
                    <th
                      key={header}
                      className="px-5 py-4 text-[11px] font-medium tracking-[0.16em] text-[var(--scalo-fg-3)] uppercase"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map(([left, right]) => (
                  <tr key={left} className="border-b border-[var(--scalo-border-hairline)] last:border-b-0">
                    <td className="px-5 py-4 text-sm font-medium text-[var(--scalo-cream)]">{left}</td>
                    <td className="px-5 py-4 text-sm leading-relaxed text-[var(--scalo-fg-2)]">{right}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {block.footnote ? <p className="border-t border-[var(--scalo-border-hairline)] px-5 py-3 text-xs text-[var(--scalo-fg-3)]">{block.footnote}</p> : null}
        </div>
      );

    case "briefBlock":
      return (
        <div className="grid gap-4">
          {block.sections.map((section) => (
            <div
              key={section.label}
              className="rounded-2xl border border-[var(--scalo-border-ghost)] bg-[var(--scalo-bg-2)] p-6"
            >
              <h4 className="text-sm font-medium tracking-[0.16em] text-[var(--scalo-ember)] uppercase">
                {section.label}
              </h4>
              <div className="mt-5 grid gap-3">
                {section.fields.map((field) => (
                  <div
                    key={`${section.label}-${field.key}`}
                    className="grid gap-2 border-b border-[var(--scalo-border-hairline)] pb-3 last:border-b-0 last:pb-0 md:grid-cols-[220px_minmax(0,1fr)]"
                  >
                    <div className="text-sm font-medium text-[var(--scalo-cream)]">{field.key}</div>
                    <div className="text-sm leading-relaxed text-[var(--scalo-fg-2)]">{field.value}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      );

    case "exampleFilled":
      return (
        <div className="rounded-2xl border border-[var(--scalo-ember)]/25 bg-[var(--scalo-bg-2)]/80 p-6">
          <div className="border-l-2 border-[var(--scalo-ember)] pl-4">
            <h4 className="text-sm font-medium tracking-[0.18em] text-[var(--scalo-ember)] uppercase">
              {block.label}
            </h4>
          </div>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {block.rows.map((row) => (
              <div
                key={`${block.label}-${row.key}`}
                className="rounded-xl border border-[var(--scalo-border-hairline)] bg-[var(--scalo-bg-1)]/70 p-4"
              >
                <div className="text-xs font-medium tracking-[0.16em] text-[var(--scalo-fg-3)] uppercase">{row.key}</div>
                <div className="mt-2 text-sm leading-relaxed text-[var(--scalo-fg-2)]">{row.value}</div>
              </div>
            ))}
          </div>
        </div>
      );

    case "handoffFlow":
      return (
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          {block.nodes.map((node, index) => (
            <Fragment key={`${node.label}-${node.value}`}>
              <div className="flex-1 rounded-2xl border border-[var(--scalo-border-ghost)] bg-[var(--scalo-bg-2)] p-5">
                <div className="text-[11px] font-medium tracking-[0.18em] text-[var(--scalo-fg-3)] uppercase">
                  {node.label}
                </div>
                <div className="mt-3 text-base leading-relaxed font-medium text-[var(--scalo-cream)]">{node.value}</div>
              </div>
              {index < block.nodes.length - 1 ? (
                <div className="flex justify-center text-[var(--scalo-ember)] lg:w-8">
                  <ChevronRight className="h-5 w-5" />
                </div>
              ) : null}
            </Fragment>
          ))}
        </div>
      );

    case "workflowStrip":
      return (
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
          {block.steps.map((step, index) => (
            <Fragment key={step}>
              <div className="flex-1 rounded-full border border-[var(--scalo-border-ghost)] bg-[var(--scalo-bg-2)] px-5 py-4 text-sm font-medium text-[var(--scalo-cream)]">
                <span className="mr-3 text-[var(--scalo-ember)] tnum">{String(index + 1).padStart(2, "0")}</span>
                {step}
              </div>
              {index < block.steps.length - 1 ? (
                <div className="flex justify-center text-[var(--scalo-ember)] lg:w-6">
                  <ChevronRight className="h-4 w-4" />
                </div>
              ) : null}
            </Fragment>
          ))}
        </div>
      );

    case "promptBlock":
      return (
        <div className="overflow-hidden rounded-2xl border border-[var(--scalo-ember)]/25 bg-[var(--scalo-bg-2)]">
          <div className="flex items-center gap-3 border-b border-[var(--scalo-border-hairline)] px-5 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[var(--scalo-ember)]" />
            <span className="text-[11px] font-medium tracking-[0.18em] text-[var(--scalo-fg-3)] uppercase">
              {block.label}
            </span>
          </div>
          <pre className="overflow-x-auto whitespace-pre p-5 text-sm leading-relaxed text-[var(--scalo-cream)]">
            <code>{block.code}</code>
          </pre>
        </div>
      );

    case "readsGrid":
      return (
        <div className="grid gap-4 md:grid-cols-2">
          {block.items.map((item) => (
            <div
              key={`${item.title}-${item.body}`}
              className="rounded-2xl border border-[var(--scalo-border-ghost)] bg-[var(--scalo-bg-2)] p-5"
            >
              <div className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--scalo-ember)]" />
                <div>
                  <h4 className="text-base font-medium tracking-tight text-[var(--scalo-cream)]">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--scalo-fg-2)]">{item.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      );

    default: {
      const exhaustiveCheck: never = block;
      return exhaustiveCheck;
    }
  }
}
