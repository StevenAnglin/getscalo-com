import { Check, Minus } from "lucide-react";

const cols = ["", "Scalo", "In-House", "Generic Agency", "Freelancer"];
const rows: [string, string, string, string, string][] = [
  ["Revenue lift guarantee", "✓", "—", "—", "—"],
  ["Shopify-only specialism", "✓", "varies", "rarely", "varies"],
  ["In-house dev shipped tests", "✓", "✓", "hand-off", "—"],
  ["4–8 tests monthly", "✓", "1–2", "2–4", "1"],
  ["Founder personally audits", "✓", "n/a", "—", "sometimes"],
  ["Transparent test attribution", "✓", "varies", "—", "—"],
  ["No long-term lock-in", "✓", "n/a", "12-mo", "varies"],
  ["Time to first test live", "<2 wks", "months", "4–8 wks", "3–6 wks"],
];

function Cell({ value, highlighted }: { value: string; highlighted?: boolean }) {
  if (value === "✓") {
    return (
      <div className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${highlighted ? "bg-[var(--scalo-ember)] text-[var(--scalo-ink)]" : "bg-[var(--scalo-bg-3)] text-[var(--scalo-fg-2)]"}`}>
        <Check className="w-4 h-4" strokeWidth={2.5} />
      </div>
    );
  }
  if (value === "—") {
    return <Minus className="w-4 h-4 text-[var(--scalo-fg-3)]" strokeWidth={1.5} />;
  }
  return <span className={`text-sm ${highlighted ? "text-[var(--scalo-ink)] font-medium" : "text-[var(--scalo-fg-3)]"}`}>{value}</span>;
}

export default function Comparison() {
  return (
    <section id="compare" className="py-24 lg:py-32 bg-grid-fade">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-20 max-w-[800px]" data-reveal>
          <h2 className="display-lg text-[var(--scalo-ink)]">
            Scalo vs.{" "}
            <span className="italic-editorial text-[var(--scalo-ember)]">the alternatives.</span>
          </h2>
        </div>

        <div className="relative overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0" data-reveal data-delay="100">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="border-b border-[var(--scalo-border-strong)]">
                {cols.map((c, i) => (
                  <th
                    key={i}
                    className={`py-4 text-xs uppercase tracking-widest font-normal
                      ${i === 0 ? "text-left w-[36%]" : "text-center w-[16%]"}
                      ${i === 1 ? "text-[var(--scalo-ember)] font-medium" : "text-[var(--scalo-fg-3)]"}
                      ${i === 1 ? "relative" : ""}`}
                  >
                    {i === 1 && (
                      <span className="absolute inset-x-0 -bottom-px h-px bg-[var(--scalo-ember)]" />
                    )}
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri} className="border-b border-[var(--scalo-border-hairline)] last:border-b-0 hover:bg-[var(--scalo-bg-2)]/40 transition-colors">
                  <td className="py-5 text-sm text-[var(--scalo-fg-2)] text-left pr-6">{r[0]}</td>
                  {r.slice(1).map((val, ci) => (
                    <td
                      key={ci}
                      className={`py-5 text-center ${ci === 0 ? "bg-[var(--scalo-ember)]/[0.04]" : ""}`}
                    >
                      <div className="flex items-center justify-center">
                        <Cell value={val} highlighted={ci === 0} />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <a href="#book" className="inline-flex items-center gap-1.5 text-sm text-[var(--scalo-fg-2)] hover:text-[var(--scalo-ink)] mt-12 border-b border-[var(--scalo-border-ghost)] hover:border-[var(--scalo-ember)] pb-1 transition-colors" data-reveal data-delay="200">
          Book a 30-min audit call →
        </a>
      </div>
    </section>
  );
}
