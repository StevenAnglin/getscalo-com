import Image from "next/image";

type ImgItem = { src: string; alt: string; w: number; h: number };

const col1: ImgItem[] = [
  { src: "/images/case-studies/fit-tribe/new/ft-01.png",  alt: "Fit Tribe homepage",        w: 1866, h: 931  },
  { src: "/images/case-studies/y-studios/new/ys-01.png",  alt: "Y Studios homepage",        w: 391,  h: 848  },
  { src: "/images/case-studies/fit-tribe/new/ft-05.png",  alt: "Fit Tribe collections",     w: 1860, h: 926  },
  { src: "/images/case-studies/y-studios/new/ys-05.png",  alt: "Y Studios drop page",       w: 476,  h: 933  },
  { src: "/images/case-studies/tet/new/tet-01.png",       alt: "TET learning platform",     w: 1866, h: 935  },
];

const col2: ImgItem[] = [
  { src: "/images/case-studies/y-studios/new/ys-02.png",  alt: "Y Studios product page",    w: 391,  h: 833  },
  { src: "/images/case-studies/fit-tribe/new/ft-09.png",  alt: "Fit Tribe lookbook",        w: 1860, h: 1535 },
  { src: "/images/case-studies/y-studios/new/ys-04.png",  alt: "Y Studios navigation",      w: 1866, h: 933  },
  { src: "/images/case-studies/fit-tribe/new/ft-06.png",  alt: "Fit Tribe product detail",  w: 391,  h: 1635 },
  { src: "/images/case-studies/fit-tribe/new/ft-12.png",  alt: "Fit Tribe new arrivals",    w: 411,  h: 926  },
];

const col3: ImgItem[] = [
  { src: "/images/case-studies/y-studios/new/ys-07.png",  alt: "Y Studios search",          w: 1860, h: 1661 },
  { src: "/images/case-studies/fit-tribe/new/ft-03.png",  alt: "Fit Tribe homepage",        w: 396,  h: 851  },
  { src: "/images/case-studies/fit-tribe/new/ft-07.png",  alt: "Fit Tribe cart",            w: 1860, h: 832  },
  { src: "/images/case-studies/y-studios/new/ys-03.png",  alt: "Y Studios collections",     w: 391,  h: 713  },
  { src: "/images/case-studies/fit-tribe/new/ft-10.png",  alt: "Fit Tribe checkout",        w: 389,  h: 854  },
];

const col4: ImgItem[] = [
  { src: "/images/case-studies/fit-tribe/new/ft-08.png",  alt: "Fit Tribe product",         w: 390,  h: 870  },
  { src: "/images/case-studies/y-studios/new/ys-08.png",  alt: "Y Studios PDP",             w: 1860, h: 1068 },
  { src: "/images/case-studies/fit-tribe/new/ft-11.png",  alt: "Fit Tribe model shot",      w: 466,  h: 933  },
  { src: "/images/case-studies/y-studios/new/ys-06.png",  alt: "Y Studios cart",            w: 391,  h: 1001 },
  { src: "/images/case-studies/fit-tribe/new/ft-04.png",  alt: "Fit Tribe navigation",      w: 393,  h: 576  },
];

const col5: ImgItem[] = [
  { src: "/images/case-studies/fit-tribe/new/ft-02.png",  alt: "Fit Tribe PDP",             w: 395,  h: 852  },
  { src: "/images/case-studies/y-studios/new/ys-04.png",  alt: "Y Studios nav desktop",     w: 1866, h: 933  },
  { src: "/images/case-studies/fit-tribe/new/ft-13.png",  alt: "Fit Tribe collections",     w: 396,  h: 851  },
  { src: "/images/case-studies/tet/new/tet-01.png",       alt: "TET platform desktop",      w: 1866, h: 935  },
  { src: "/images/case-studies/fit-tribe/new/ft-12.png",  alt: "Fit Tribe new arrivals",    w: 411,  h: 926  },
];

function GalleryImage({ src, alt, w, h }: ImgItem) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl glass-card shrink-0" style={{ aspectRatio: `${w}/${h}` }}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="400px"
      />
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
      <div className="max-w-[1680px] mx-auto px-6 lg:px-10">

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

        {/* 5-column scrolling gallery — 2 cols on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 h-[520px] lg:h-[660px]" data-reveal data-delay="100">
          <GalleryColumn items={col1} direction="up" />
          <GalleryColumn items={col2} direction="down" />
          <GalleryColumn items={col3} direction="up" />
          <GalleryColumn items={col4} direction="down" />
          <GalleryColumn items={col5} direction="up" />
        </div>

      </div>
    </section>
  );
}
