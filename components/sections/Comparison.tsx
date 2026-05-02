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
      <div className={`inline-flex items-center justify-center w-7 h-7 rounded-full ${highlighted ? "bg-[var(--scalo-accent)] text-[#0C0C09]" : "bg-white/[0.06] text-white/50"}`}>
        <Check className="w-4 h-4" strokeWidth={2.5} />
      </div>
    );
  }
  if (value === "—") {
    return <Minus className="w-4 h-4 text-white/20" strokeWidth={1.5} />;
  }
  return <span className={`text-sm ${highlighted ? "text-white font-medium" : "text-white/30"}`}>{value}</span>;
}

export default function Comparison() {
  return (
    <section id="compare" className="py-24 lg:py-32" style={{ background: "#0C0C09" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-20 max-w-[800px]" data-reveal>
          <h2 className="display-lg text-white">
            Scalo vs.{" "}
            <span className="italic-editorial text-[var(--scalo-accent)]">the alternatives.</span>
          </h2>
        </div>

        <div className="relative overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0" data-reveal data-delay="100">
          <table className="w-full min-w-[640px]">
            <thead>
              <tr className="border-b border-white/[0.10]">
                {cols.map((c, i) => (
                  <th
                    key={i}
                    className={`py-4 text-xs uppercase tracking-widest font-normal
                      ${i === 0 ? "text-left w-[36%]" : "text-center w-[16%]"}
                      ${i === 1 ? "text-[var(--scalo-accent)] font-medium" : "text-white/30"}
                      ${i === 1 ? "relative" : ""}`}
                  >
                    {i === 1 && (
                      <span className="absolute inset-x-0 -bottom-px h-px bg-[var(--scalo-accent)]" />
                    )}
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, ri) => (
                <tr key={ri} className="border-b border-white/[0.06] last:border-b-0 hover:bg-white/[0.02] transition-colors">
                  <td className="py-5 text-sm text-white/55 text-left pr-6">{r[0]}</td>
                  {r.slice(1).map((val, ci) => (
                    <td
                      key={ci}
                      className={`py-5 text-center ${ci === 0 ? "bg-[var(--scalo-accent)]/[0.04]" : ""}`}
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

        <a href="#book" className="inline-flex items-center gap-1.5 text-sm text-white/45 hover:text-white mt-12 border-b border-white/[0.10] hover:border-[var(--scalo-accent)] pb-1 transition-colors" data-reveal data-delay="200">
          Book a 30-min audit call →
        </a>
      </div>
    </section>
  );
}
