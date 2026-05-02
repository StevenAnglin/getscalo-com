import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Cases", href: "#results" },
  { label: "Method", href: "#method" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#calculator" },
  { label: "Resources", href: "/value" },
  { label: "Ads", href: "/ads" },
] as const;

function resolveHref(href: string, isHomePage: boolean) {
  if (!href.startsWith("#")) {
    return href;
  }
  return isHomePage ? href : `/${href}`;
}

export default function Nav() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isHomePage = router.pathname === "/";

  // Hero is ~100vh tall — switch nav style after scrolling past it
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.7);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[var(--scalo-bg-0)]/95 border-b border-[var(--scalo-border-ghost)] shadow-[0_1px_0_rgba(255,255,255,0.04),0_4px_16px_rgba(0,0,0,0.4)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <a
            href={resolveHref("#home", isHomePage)}
            className={`text-2xl font-medium tracking-tight z-10 transition-colors duration-500 ${scrolled ? "text-white" : "text-white"}`}
            style={{ fontFamily: 'var(--font-serif)', fontStyle: "italic" }}
          >
            scalo.
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-sm text-white/55">
            {links.map((l) => (
              <a
                key={l.href}
                href={resolveHref(l.href, isHomePage)}
                className="relative py-1 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-[var(--scalo-accent)] after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100 hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={resolveHref("#book", isHomePage)}
              className="hidden md:inline-flex items-center gap-1.5 bg-[var(--scalo-accent)] hover:bg-[var(--scalo-accent-dim)] text-[var(--scalo-ink)] rounded-full font-semibold h-10 px-5 text-sm transition-colors btn-press"
            >
              Book an audit <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden w-10 h-10 flex items-center justify-center transition-colors text-white/55 hover:text-white"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-400 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-[var(--scalo-bg-0)]/70"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-16 left-0 right-0 bg-[var(--scalo-bg-0)] border-b border-[var(--scalo-border-ghost)] transition-transform duration-400 ${
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <nav className="px-6 py-8 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={resolveHref(l.href, isHomePage)}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-white/55 hover:text-white py-3 border-b border-[var(--scalo-border-hairline)] last:border-b-0 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={resolveHref("#book", isHomePage)}
              onClick={() => setMobileOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-1.5 bg-[var(--scalo-accent)] hover:bg-[var(--scalo-accent-dim)] text-[var(--scalo-ink)] rounded-full h-12 px-6 text-sm font-semibold transition-colors"
            >
              Book an audit <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
