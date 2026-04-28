import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const items = [
  {
    q: "How do you prove a test actually moved revenue?",
    a: "Every test runs with a statistically valid holdout group. We measure revenue per visitor (RPV) as the primary signal and only declare a winner at 95%+ statistical significance. You get the raw data and the lift number — not a dashboard rounded up to make us look good.",
  },
  {
    q: "What does the 90-day guarantee actually cover?",
    a: "If we don't hit a minimum 5% RPV lift within 90 days of your first test going live, we keep working for free until we do. No renegotiation, no timeline extension excuses, no revised scope. It's written into the agreement.",
  },
  {
    q: "How do you ship so much faster than traditional agencies?",
    a: "We run AI-powered build systems purpose-built for Shopify. What takes a traditional dev team weeks, we compress into days — without cutting corners on QA. It's not just speed for its own sake. It means more tests per month, faster learnings, and compounding results that agencies running 1–2 tests a month can't match.",
  },
  {
    q: "We don't have a dev team. Can we still work together?",
    a: "Yes. We've built AI systems that match the output of a 6-person dev team — every variation is built, QA'd, and shipped without you looping in a single engineer. You never need to touch the implementation. We're fully self-contained from hypothesis to result.",
  },
  {
    q: "What's the minimum revenue to qualify?",
    a: "We work with Shopify stores doing $50K–$1M+ per month. Below $50K, there isn't enough traffic to reach statistical significance at the speed we operate. We'd rather tell you that upfront than waste your time.",
  },
  {
    q: "How long before we see the first completed test?",
    a: "The audit is delivered within 48–72 hours of kickoff. Your first test typically goes live 5–7 days after that. First results with statistical significance usually land 3–4 weeks in. Speed is a feature, not a coincidence.",
  },
  {
    q: "How is this different from a CRO agency or hiring in-house?",
    a: "Most agencies present a strategy deck and hand execution back to your team. We don't. We run the audit, write the hypotheses, build the variants, run the tests, and report the results — powered by AI systems that make a team of two operate like a team of ten. One number to hold accountable.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-[var(--scalo-bg-1)] py-24 lg:py-32 bg-cross-fade">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sticky heading */}
          <div className="lg:col-span-4" data-reveal>
            <h2 className="display-md text-[var(--scalo-cream)] lg:sticky lg:top-24">
              Straight{" "}
              <span className="italic-editorial text-[var(--scalo-ember)]">answers.</span>
            </h2>
            <p className="text-sm text-[var(--scalo-fg-3)] mt-6 leading-relaxed max-w-[280px] lg:sticky lg:top-48">
              No marketing language. If we can&rsquo;t answer a question plainly, we probably can&rsquo;t serve you well.
            </p>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-8" data-reveal data-delay="100">
            <Accordion multiple={false} defaultValue={["q-0"]}>
              {items.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`q-${i}`}
                  className="border-none border-b border-[var(--scalo-border-hairline)] last:border-b-0"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6 gap-4 group data-[state=open]:text-[var(--scalo-cream)] transition-colors [&>svg]:text-[var(--scalo-fg-3)] [&>svg]:shrink-0">
                    <div className="flex items-start gap-4 flex-1">
                      {/* Decorative question number */}
                      <span className="tnum text-[11px] text-[var(--scalo-ember)] font-medium tracking-widest mt-0.5 shrink-0 opacity-70 group-data-[state=open]:opacity-100 transition-opacity">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base lg:text-lg text-[var(--scalo-fg-2)] group-hover:text-[var(--scalo-cream)] group-data-[state=open]:text-[var(--scalo-cream)] transition-colors">
                        {item.q}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pl-8">
                    <div className="border-l-2 border-[var(--scalo-ember)]/40 pl-4 text-sm text-[var(--scalo-fg-2)] leading-relaxed max-w-[560px]">
                      {item.a}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
