import Image from "next/image";

type ImgItem = { src: string; alt: string; aspect: string };

const col1: ImgItem[] = [
  { src: "/images/case-studies/fit-tribe/new/ft-01.png",  alt: "Fit Tribe homepage",          aspect: "16/9"  },
  { src: "/images/case-studies/y-studios/new/ys-01.png",  alt: "Y Studios homepage",          aspect: "9/16"  },
  { src: "/images/case-studies/fit-tribe/new/ft-05.png",  alt: "Fit Tribe collections",       aspect: "16/9"  },
  { src: "/images/case-studies/y-studios/new/ys-05.png",  alt: "Y Studios drop page",         aspect: "9/16"  },
  { src: "/images/case-studies/tet/new/tet-01.png",       alt: "TET learning platform",       aspect: "16/9"  },
];

const col2: ImgItem[] = [
  { src: "/images/case-studies/y-studios/new/ys-02.png",  alt: "Y Studios product page",     aspect: "9/16"  },
  { src: "/images/case-studies/fit-tribe/new/ft-09.png",  alt: "Fit Tribe lookbook",          aspect: "4/3"   },
  { src: "/images/case-studies/y-studios/new/ys-04.png",  alt: "Y Studios navigation",        aspect: "16/9"  },
  { src: "/images/case-studies/fit-tribe/new/ft-06.png",  alt: "Fit Tribe product detail",    aspect: "9/16"  },
  { src: "/images/case-studies/fit-tribe/new/ft-12.png",  alt: "Fit Tribe new arrivals",      aspect: "9/16"  },
];

const col3: ImgItem[] = [
  { src: "/images/case-studies/y-studios/new/ys-07.png",  alt: "Y Studios search",            aspect: "16/9"  },
  { src: "/images/case-studies/fit-tribe/new/ft-03.png",  alt: "Fit Tribe homepage",          aspect: "9/16"  },
  { src: "/images/case-studies/fit-tribe/new/ft-07.png",  alt: "Fit Tribe cart",              aspect: "16/9"  },
  { src: "/images/case-studies/y-studios/new/ys-03.png",  alt: "Y Studios collections",       aspect: "9/16"  },
  { src: "/images/case-studies/fit-tribe/new/ft-10.png",  alt: "Fit Tribe checkout",          aspect: "9/16"  },
];

const col4: ImgItem[] = [
  { src: "/images/case-studies/fit-tribe/new/ft-08.png",  alt: "Fit Tribe product",           aspect: "9/16"  },
  { src: "/images/case-studies/y-studios/new/ys-08.png",  alt: "Y Studios PDP",               aspect: "16/9"  },
  { src: "/images/case-studies/fit-tribe/new/ft-11.png",  alt: "Fit Tribe model shot",        aspect: "9/16"  },
  { src: "/images/case-studies/y-studios/new/ys-06.png",  alt: "Y Studios cart",              aspect: "9/16"  },
  { src: "/images/case-studies/fit-tribe/new/ft-04.png",  alt: "Fit Tribe navigation",        aspect: "4/3"   },
];

const col5: ImgItem[] = [
  { src: "/images/case-studies/fit-tribe/new/ft-02.png",  alt: "Fit Tribe PDP",               aspect: "9/16"  },
  { src: "/images/case-studies/y-studios/new/ys-04.png",  alt: "Y Studios nav desktop",       aspect: "16/9"  },
  { src: "/images/case-studies/fit-tribe/new/ft-13.png",  alt: "Fit Tribe collections",       aspect: "9/16"  },
  { src: "/images/case-studies/tet/new/tet-01.png",       alt: "TET platform desktop",        aspect: "16/9"  },
  { src: "/images/case-studies/fit-tribe/new/ft-12.png",  alt: "Fit Tribe new arrivals",      aspect: "9/16"  },
];

function GalleryImage({ src, alt, aspect }: ImgItem) {
  return (
    <div className="relative w-full overflow-hidden rounded-xl glass-card shrink-0" style={{ aspectRatio: aspect }}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top"
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
