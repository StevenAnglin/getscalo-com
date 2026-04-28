import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { label: "Cases", href: "#results" },
  { label: "Method", href: "#method" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#calculator" },
  { label: "Ads", href: "/ads" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
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
            ? "backdrop-blur-xl bg-[var(--scalo-bg-0)]/88 border-b border-[var(--scalo-border-hairline)] shadow-[0_1px_24px_rgba(0,0,0,0.4)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <a
            href="#home"
            className="text-2xl font-medium tracking-tight text-[var(--scalo-cream)] z-10"
          >
            scalo.
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8 text-sm text-[var(--scalo-fg-2)]">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative py-1 hover:text-[var(--scalo-cream)] transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px after:bg-[var(--scalo-ember)] after:scale-x-0 after:origin-left after:transition-transform after:duration-200 hover:after:scale-x-100"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#book"
              className="hidden md:inline-flex items-center gap-1.5 bg-[var(--scalo-ember)] hover:bg-[var(--scalo-ember)]/90 text-[var(--scalo-bg-0)] rounded-full font-medium h-10 px-5 text-sm transition-colors btn-press"
            >
              Book an audit <ArrowUpRight className="w-4 h-4" />
            </a>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="md:hidden w-10 h-10 flex items-center justify-center text-[var(--scalo-fg-2)] hover:text-[var(--scalo-cream)] transition-colors"
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
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-[var(--scalo-bg-0)]/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        {/* Drawer */}
        <div
          className={`absolute top-16 left-0 right-0 bg-[var(--scalo-bg-1)] border-b border-[var(--scalo-border-ghost)] transition-transform duration-400 ${
            mobileOpen ? "translate-y-0" : "-translate-y-4"
          }`}
        >
          <nav className="px-6 py-8 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-[var(--scalo-fg-2)] hover:text-[var(--scalo-cream)] py-3 border-b border-[var(--scalo-border-hairline)] last:border-b-0 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#book"
              onClick={() => setMobileOpen(false)}
              className="mt-6 inline-flex items-center justify-center gap-1.5 bg-[var(--scalo-ember)] hover:bg-[var(--scalo-ember)]/90 text-[var(--scalo-bg-0)] rounded-full h-12 px-6 text-sm font-medium transition-colors"
            >
              Book an audit <ArrowUpRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
