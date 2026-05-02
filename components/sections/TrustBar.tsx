const logos = [
  { name: "Y Studios", sub: "+$340K recovered" },
  { name: "Fit Tribe", sub: "+23% RPV" },
  { name: "Marble & Co", sub: "+18% CVR" },
  { name: "Peak Form", sub: "+$120K/mo" },
  { name: "Craft Supply Co", sub: "+31% AOV" },
  { name: "The Mod Collective", sub: "+$67K recovered" },
];

const track = [...logos, ...logos];

function LogoItem({ name, sub }: { name: string; sub: string }) {
  return (
    <div className="flex items-center gap-3 mx-8 shrink-0">
      <span className="text-lg font-medium tracking-tight text-white/55 whitespace-nowrap">
        {name}
      </span>
      <span className="text-[10px] text-[var(--scalo-accent)] tnum bg-[var(--scalo-accent)]/10 border border-[var(--scalo-accent)]/25 px-2 py-0.5 rounded-full font-medium whitespace-nowrap">
        {sub}
      </span>
    </div>
  );
}

export default function TrustBar() {
  return (
    <section
      id="trust"
      className="relative py-5 border-y border-white/[0.07] overflow-hidden"
      style={{ background: "#0C0C09" }}
    >
      <div className="flex items-center">
        {/* Label */}
        <div className="shrink-0 pl-6 lg:pl-12 pr-6 border-r border-white/[0.07] z-10">
          <span className="text-[10px] uppercase tracking-widest text-white/35 whitespace-nowrap">
            Trusted by
            <br className="hidden sm:block" />
            Shopify brands
          </span>
        </div>

        {/* Marquee wrapper */}
        <div className="flex-1 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#0C0C09] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0C0C09] to-transparent z-10 pointer-events-none" />

          <div className="flex animate-marquee">
            {track.map((l, i) => (
              <LogoItem key={`${l.name}-${i}`} name={l.name} sub={l.sub} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
