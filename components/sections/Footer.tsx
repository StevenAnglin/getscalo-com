import { useRouter } from "next/router";

function resolveFooterHref(href: string, isHomePage: boolean) {
  if (!href.startsWith("#")) {
    return href;
  }

  return isHomePage ? href : `/${href}`;
}

export default function Footer() {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <footer className="relative py-16 lg:py-20" style={{ background: "#0C0C09" }}>
      {/* Volt green gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--scalo-accent)]/25 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
          {/* Wordmark + tagline */}
          <div className="col-span-2 lg:col-span-5">
            <div
              className="text-2xl font-medium text-[var(--scalo-cream)] tracking-tight"
              style={{ fontFamily: 'var(--font-serif)', fontStyle: "italic" }}
            >
              scalo.
            </div>
            <p className="text-[11px] uppercase tracking-widest text-[var(--scalo-cream)]/30 mt-3">
              Website Optimization Agency
            </p>
            <p className="text-sm text-[var(--scalo-cream)]/50 mt-5 max-w-[300px] leading-relaxed">
              Working exclusively with Shopify brands doing $50K&ndash;$1M+/month. We find leaking revenue and fix it.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--scalo-accent)] pulse-dot" />
              <span className="text-xs text-[var(--scalo-cream)]/35 tracking-wide">Accepting new clients</span>
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-widest text-[var(--scalo-cream)]/30 font-medium mb-5">Services</h4>
            <ul className="space-y-3 text-sm text-[var(--scalo-cream)]/50">
              <li><a href={resolveFooterHref("#services", isHomePage)} className="hover:text-[var(--scalo-cream)] transition-colors">Full Store Audit</a></li>
              <li><a href={resolveFooterHref("#services", isHomePage)} className="hover:text-[var(--scalo-cream)] transition-colors">A/B Testing Program</a></li>
              <li><a href={resolveFooterHref("#book", isHomePage)} className="hover:text-[var(--scalo-cream)] transition-colors">Book an Audit</a></li>
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] uppercase tracking-widest text-[var(--scalo-cream)]/30 font-medium mb-5">Company</h4>
            <ul className="space-y-3 text-sm text-[var(--scalo-cream)]/50">
              <li><a href={resolveFooterHref("#method", isHomePage)} className="hover:text-[var(--scalo-cream)] transition-colors">Method</a></li>
              <li><a href={resolveFooterHref("#results", isHomePage)} className="hover:text-[var(--scalo-cream)] transition-colors">Case Studies</a></li>
              <li><a href={resolveFooterHref("#team", isHomePage)} className="hover:text-[var(--scalo-cream)] transition-colors">About</a></li>
            </ul>
          </div>

          {/* CTA + social */}
          <div className="col-span-2 lg:col-span-3">
            <h4 className="text-[10px] uppercase tracking-widest text-[var(--scalo-cream)]/30 font-medium mb-5">Get Started</h4>
            <a
              href={resolveFooterHref("#book", isHomePage)}
              className="inline-flex items-center gap-1.5 bg-[var(--scalo-accent)] hover:bg-[var(--scalo-accent-dim)] text-[var(--scalo-ink)] rounded-full px-5 h-10 text-sm font-semibold transition-colors btn-press"
            >
              Book an audit ↗
            </a>
            <div className="flex gap-3 mt-6">
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full border border-[var(--scalo-cream)]/10 hover:border-[var(--scalo-cream)]/40 flex items-center justify-center text-[var(--scalo-cream)]/40 hover:text-[var(--scalo-cream)] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.339 18.337V9.928H5.547v8.409h2.792zM6.943 8.78a1.62 1.62 0 1 0 0-3.24 1.62 1.62 0 0 0 0 3.24zm11.394 9.557v-4.605c0-2.42-1.291-3.546-3.013-3.546-1.39 0-2.013.764-2.36 1.301V9.928h-2.792c.037.789 0 8.409 0 8.409h2.792v-4.696c0-.251.018-.502.092-.681.2-.502.66-1.022 1.43-1.022 1.009 0 1.412.769 1.412 1.896v4.503h2.439z"/></svg>
              </a>
              <a href="#" aria-label="X (Twitter)" className="w-9 h-9 rounded-full border border-[var(--scalo-cream)]/10 hover:border-[var(--scalo-cream)]/40 flex items-center justify-center text-[var(--scalo-cream)]/40 hover:text-[var(--scalo-cream)] transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[var(--scalo-cream)]/[0.06] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-xs text-[var(--scalo-cream)]/30">
          <span>© 2026 Scalo. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="mailto:steven@getscalo.com" className="hover:text-[var(--scalo-cream)]/60 transition-colors">
              steven@getscalo.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
