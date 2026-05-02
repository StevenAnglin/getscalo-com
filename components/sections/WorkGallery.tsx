import Image from "next/image";

const col1 = [
  { src: "/images/case-studies/y-studios/new/ys-01.png", alt: "Y Studios homepage" },
  { src: "/images/case-studies/fit-tribe/new/ft-01.png", alt: "Fit Tribe homepage" },
  { src: "/images/case-studies/y-studios/new/ys-05.png", alt: "Y Studios collections" },
  { src: "/images/case-studies/fit-tribe/new/ft-05.png", alt: "Fit Tribe product" },
  { src: "/images/case-studies/tet/new/tet-01.png", alt: "TET learning platform" },
];

const col2 = [
  { src: "/images/case-studies/y-studios/new/ys-02.png", alt: "Y Studios product page" },
  { src: "/images/case-studies/fit-tribe/new/ft-02.png", alt: "Fit Tribe collections" },
  { src: "/images/case-studies/y-studios/new/ys-06.png", alt: "Y Studios cart" },
  { src: "/images/case-studies/fit-tribe/new/ft-06.png", alt: "Fit Tribe product detail" },
];

const col3 = [
  { src: "/images/case-studies/fit-tribe/new/ft-03.png", alt: "Fit Tribe homepage" },
  { src: "/images/case-studies/y-studios/new/ys-03.png", alt: "Y Studios drop page" },
  { src: "/images/case-studies/fit-tribe/new/ft-07.png", alt: "Fit Tribe cart" },
  { src: "/images/case-studies/y-studios/new/ys-07.png", alt: "Y Studios search" },
  { src: "/images/case-studies/fit-tribe/new/ft-10.png", alt: "Fit Tribe checkout" },
];

const col4 = [
  { src: "/images/case-studies/y-studios/new/ys-04.png", alt: "Y Studios navigation" },
  { src: "/images/case-studies/fit-tribe/new/ft-04.png", alt: "Fit Tribe navigation" },
  { src: "/images/case-studies/y-studios/new/ys-08.png", alt: "Y Studios PDP" },
  { src: "/images/case-studies/fit-tribe/new/ft-08.png", alt: "Fit Tribe lookbook" },
];

type ImgItem = { src: string; alt: string };

function GalleryImage({ src, alt }: ImgItem) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl glass-card shrink-0" style={{ aspectRatio: "4/3" }}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top"
        sizes="400px"
      />
      {/* Subtle inner border highlight */}
      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/[0.08] pointer-events-none" />
    </div>
  );
}

function GalleryColumn({ items, direction }: { items: ImgItem[]; direction: "up" | "down" }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden h-full" style={{ maskImage: "linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)" }}>
      <div className={`flex flex-col gap-3 ${direction === "up" ? "animate-scroll-up" : "animate-scroll-down"}`}>
        {doubled.map((img, i) => (
          <GalleryImage key={`${img.alt}-${i}`} {...img} />
        ))}
      </div>
    </div>
  );
}

export default function WorkGallery() {
  return (
    <section className="py-20 lg:py-28 overflow-hidden" style={{ background: "#0C0C09" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex items-end justify-between mb-12 lg:mb-16" data-reveal>
          <div>
            <div className="text-[11px] uppercase tracking-widest text-[var(--scalo-accent)] mb-4 font-medium">The work</div>
            <h2 className="display-lg text-white">
              Stores we&rsquo;ve{" "}
              <span className="italic-editorial text-[var(--scalo-accent)]">built.</span>
            </h2>
          </div>
          <p className="hidden sm:block text-sm text-white/35 max-w-[280px] text-right leading-relaxed mb-1">
            Every pixel crafted for conversion. These are the stores behind the numbers.
          </p>
        </div>

        {/* 4-column scrolling gallery */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 h-[520px] lg:h-[640px]" data-reveal data-delay="100">
          <GalleryColumn items={col1} direction="up" />
          <GalleryColumn items={col2} direction="down" />
          <GalleryColumn items={col3} direction="up" />
          <GalleryColumn items={col4} direction="down" />
        </div>

      </div>
    </section>
  );
}
