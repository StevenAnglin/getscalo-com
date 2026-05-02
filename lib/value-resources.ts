export interface ValueStep {
  number: string;
  title: string;
  body: string;
}

export type ValueTableRow = [string, string];

export interface ValueBriefField {
  key: string;
  value: string;
}

export interface ValueBriefSection {
  label: string;
  fields: ValueBriefField[];
}

export interface ValueExampleRow {
  key: string;
  value: string;
}

export interface ValueFlowNode {
  label: string;
  value: string;
}

export interface ValueReadsGridItem {
  title: string;
  body: string;
}

export interface ValueParagraphBlock {
  type: "paragraph";
  text: string;
}

export interface ValueCalloutBlock {
  type: "callout";
  text: string;
}

export interface ValueStepGridBlock {
  type: "stepGrid";
  steps: ValueStep[];
}

export interface ValueCodeBlock {
  type: "codeBlock";
  label?: string;
  code: string;
}

export interface ValueTableBlock {
  type: "table";
  label?: string;
  headers: [string, string];
  rows: ValueTableRow[];
  footnote?: string;
}

export interface ValueBriefBlock {
  type: "briefBlock";
  sections: ValueBriefSection[];
}

export interface ValueExampleFilledBlock {
  type: "exampleFilled";
  label: string;
  rows: ValueExampleRow[];
}

export interface ValueHandoffFlowBlock {
  type: "handoffFlow";
  nodes: ValueFlowNode[];
}

export interface ValueWorkflowStripBlock {
  type: "workflowStrip";
  steps: string[];
}

export interface ValuePromptBlock {
  type: "promptBlock";
  label: string;
  code: string;
}

export interface ValueReadsGridBlock {
  type: "readsGrid";
  items: ValueReadsGridItem[];
}

export type ValueContentBlock =
  | ValueParagraphBlock
  | ValueCalloutBlock
  | ValueStepGridBlock
  | ValueCodeBlock
  | ValueTableBlock
  | ValueBriefBlock
  | ValueExampleFilledBlock
  | ValueHandoffFlowBlock
  | ValueWorkflowStripBlock
  | ValuePromptBlock
  | ValueReadsGridBlock;

export interface ValueSection {
  number: string;
  eyebrow: string;
  title: string;
  body: ValueContentBlock[];
}

export interface ValueResource {
  slug: string;
  title: string;
  subtitle: string;
  eyebrow: string;
  description: string;
  tool: string;
  audience: string[];
  password?: string;
  docPath?: string;
  resultPill?: string;
  caseStudyHeadline?: string;
  niche?: string;
  sections: ValueSection[];
}

export const valueResources: ValueResource[] = [
  {
    slug: "design-before-code",
    title: "Design Before Code",
    subtitle: "The Claude Workflow for Shopify Product Pages",
    eyebrow: "Claude Design · Shopify",
    description:
      "How to use Claude Design to produce a complete Shopify product page design — before writing a single line of Liquid.",
    tool: "Claude Design",
    audience: ["Store owners", "Agencies", "Developers"],
    sections: [
      {
        number: "1",
        eyebrow: "Section One",
        title: "Build the Design System",
        body: [
          {
            type: "paragraph",
            text: "The quality of your output is directly proportional to the completeness of your inputs. Before Claude Design generates a single element, it needs to understand who you are.",
          },
          {
            type: "callout",
            text: "**Fill order matters.** Do Input 4 (brand brief) first — it's the hardest and most valuable. Then assets, then the GitHub URL. Write Input 1 (name + blurb) last.",
          },
          {
            type: "stepGrid",
            steps: [
              {
                number: "1",
                title: "Company name & blurb",
                body: "One sentence: who you are, who you serve, what you are and are NOT. This frames everything Claude generates.",
              },
              {
                number: "2",
                title: "GitHub repo URL",
                body: "Your production theme repo. Claude reads existing tokens, class patterns, and section structure directly from the code.",
              },
              {
                number: "3",
                title: "Assets to upload",
                body: "Primary logo, reversed logo, font files (custom only — skip Google/CDN fonts), homepage screenshot, key page screenshots.",
              },
              {
                number: "4",
                title: "Brand system brief",
                body: "The complete token specification: color, typography, spacing, radii, motion, imagery, components, and anti-patterns. Delete what you don't know — don't guess.",
              },
            ],
          },
          {
            type: "paragraph",
            text: "**Input 1 — Name & Blurb template:**",
          },
          {
            type: "codeBlock",
            label: "Input 1 — Name & Blurb",
            code: `[Brand Name] Design System

[Brand Name] is a [industry] brand for [target audience].
[1–2 sentences: what makes it distinctive, what it stands for, what it is NOT.]`,
          },
          {
            type: "codeBlock",
            label: "Input 2 — GitHub Repo",
            code: `https://github.com/[your-org]/[your-repo]

// Point this at your production codebase.
// Claude reads component files, tokens, and stylesheets directly.
// Works with private repos — authenticate when prompted.`,
          },
          {
            type: "table",
            label: "Input 3 — Assets to Upload",
            headers: ["Asset", "What to upload"],
            rows: [
              ["Logo — primary", "Main brand mark (PNG or SVG, on its native background)"],
              ["Logo — reversed", "White/light version for dark backgrounds (if exists)"],
              ["Logo — monogram", "Icon-only or lettermark (if exists)"],
              [
                "Fonts",
                ".ttf / .otf / .woff2 for custom typefaces. Skip Google/CDN — they're read from code.",
              ],
              ["Homepage screenshot", "Full-page PNG of your live site. Used to verify and calibrate tokens."],
              ["Key page screenshots", "PDP, collection, editorial — whichever surfaces matter most."],
            ],
            footnote: "Minimum viable upload: primary logo + homepage screenshot.",
          },
          {
            type: "paragraph",
            text: "**Input 4 — Brand System Brief** is the most important input. Fill every section you can. Delete lines you genuinely don't know — Claude will flag them for review rather than guessing.",
          },
          {
            type: "briefBlock",
            sections: [
              {
                label: "Brand Overview",
                fields: [
                  { key: "Industry / category:", value: "[e.g. menswear, SaaS, food & beverage, fintech]" },
                  { key: "Target audience:", value: "[age range, psychographic, 1 sentence]" },
                  { key: "Brand positioning:", value: "[what it IS and what it is NOT]" },
                  { key: "Closest references:", value: "[2–3 brands the aesthetic is close to]" },
                  { key: "Avoid looking like:", value: "[1–2 brands]" },
                ],
              },
              {
                label: "Voice & Copy",
                fields: [
                  { key: "Tone:", value: "[understated / confident / warm / clinical / playful]" },
                  { key: "Casing:", value: "[sentence case / title case / uppercase headlines?]" },
                  { key: "Never say:", value: "[hype words, filler phrases, banned vocab]" },
                  { key: "Example headline:", value: `["..."]` },
                  { key: "Example CTA:", value: `["..."]` },
                ],
              },
              {
                label: "Color",
                fields: [
                  { key: "Primary background:", value: "[hex]" },
                  { key: "Primary text:", value: "[hex]" },
                  { key: "CTA / button fill:", value: "[hex]" },
                  { key: "Brand accent(s):", value: "[hex + name]" },
                  { key: "Dark section bg:", value: "[hex]" },
                  { key: "Color rules:", value: `[e.g. "no gradients", "green for authority only"]` },
                ],
              },
              {
                label: "Typography",
                fields: [
                  { key: "Display / heading:", value: "[name, weight, style]" },
                  { key: "Body / UI:", value: "[name, weight]" },
                  { key: "Heading weight:", value: "[e.g. 400 — never bold]" },
                  { key: "Tracking:", value: "[e.g. 0.015em headings, 0.02em buttons]" },
                  { key: "Scale:", value: "[H1 size/line-height, H2, body, small, badge]" },
                ],
              },
              {
                label: "Spacing & Layout",
                fields: [
                  { key: "Page max-width:", value: "[px]" },
                  { key: "Section padding:", value: "[desktop px / mobile px]" },
                  { key: "Grid gap:", value: "[desktop px / mobile px]" },
                ],
              },
              {
                label: "Radii · Borders · Motion · Imagery",
                fields: [
                  { key: "Button radius:", value: "[px or 999px for pill]" },
                  { key: "Card / image radius:", value: "[px — usually 0 or small]" },
                  { key: "Motion default:", value: "[e.g. 160ms ease-out]" },
                  { key: "Hover behavior:", value: `[e.g. "lift -1px on buttons"]` },
                  { key: "Imagery style:", value: "[studio / lifestyle / editorial / abstract]" },
                  { key: "Aspect ratio:", value: "[e.g. 4:5 portrait]" },
                ],
              },
              {
                label: "Components & Anti-Patterns",
                fields: [
                  { key: "Include:", value: "[list key UI surfaces: nav, hero, PDP, editorial band, footer, etc.]" },
                  {
                    key: "Never include:",
                    value: `[explicit exclusions: "no gradients", "no emoji", "no exclamation marks"]`,
                  },
                ],
              },
            ],
          },
          {
            type: "exampleFilled",
            label: "Y Studios — Filled Example",
            rows: [
              { key: "Industry:", value: "Refined menswear, heritage × modern" },
              { key: "Audience:", value: "Urban men 20–35, style-conscious, boardroom-to-street" },
              { key: "Positioning:", value: "Understated, never loud. Not fast fashion, not heritage costume." },
              { key: "References:", value: "Loro Piana, A.P.C., COS" },
              { key: "Avoid:", value: "Zara, ASOS, streetwear-hype aesthetic" },
              { key: "Tone:", value: "Understated, confident, sophisticated" },
              { key: "Never say:", value: `"fire", "drop", "hype", exclamation marks` },
              { key: "Background:", value: "#FAF8F4 (warm off-white)" },
              { key: "Primary text:", value: "#111111 (near-black)" },
              { key: "CTA fill:", value: "#0F2E22 (Poly Green)" },
              { key: "Display font:", value: "Vicenza, weight 500 — never bold" },
              { key: "Body font:", value: "Switzer, weight 400" },
              { key: "H1:", value: "56px / 64 desktop · 40px / 48 mobile" },
              { key: "Page max-width:", value: "1280px · section padding 96px desktop / 56px mobile" },
              { key: "Button radius:", value: "12px · card/image radius: 0px (sharp edges)" },
              { key: "Motion:", value: "160ms ease-out · button hover lift -1px" },
              { key: "Imagery:", value: "Editorial studio, 4:5 portrait, sharp lighting, no filters" },
              { key: "Never include:", value: "Uppercase (except badges), gradients, bold headings" },
            ],
          },
        ],
      },
      {
        number: "2",
        eyebrow: "Section Two",
        title: "Connect Claude Design to Your Theme",
        body: [
          {
            type: "paragraph",
            text: "Connecting Claude Design to your production theme is the step most people skip. It's the difference between a design that fits your codebase and one that requires a rewrite to implement.",
          },
          {
            type: "readsGrid",
            items: [
              { title: "CSS custom properties", body: "Any --variable-name patterns in your stylesheets" },
              { title: "Section structure", body: "Liquid file organization, class naming patterns" },
              { title: "Typography references", body: "@font-face declarations, font stack variables" },
              { title: "Layout tokens", body: "Grid definitions, max-width constraints, padding patterns" },
            ],
          },
          {
            type: "callout",
            text: "If your theme already uses **--color-primary** for buttons, Claude Design uses that exact variable in the HTML output. Your developer agent drops it into a new section with zero token remapping.",
          },
          {
            type: "paragraph",
            text: "**If you don't have an existing theme:** Claude Design falls back to deriving a consistent system from your brand brief and uploaded assets. The output includes CSS custom property definitions — ready for a developer to implement as the base design system.",
          },
          {
            type: "paragraph",
            text: "**The handoff: HTML output → Claude Code.** Claude Design's output is full HTML with embedded CSS. Instead of handing a developer a Figma file or a written description, you hand them working HTML.",
          },
          {
            type: "handoffFlow",
            nodes: [
              { label: "Claude Design", value: "Brand brief + repo + assets" },
              { label: "Output", value: "Full HTML / CSS design" },
              { label: "Claude Code", value: "Liquid section implementation" },
            ],
          },
          {
            type: "callout",
            text: "**The HTML is the spec.** Implementation becomes a translation task, not an interpretation task. This eliminates the ambiguity gap between what you described and what gets built.",
          },
          {
            type: "paragraph",
            text: "**Handoff prompt to Claude Code:**",
          },
          {
            type: "codeBlock",
            label: "Claude Code Handoff Prompt",
            code: `Here is the full HTML/CSS design for the [page name].
Implement this as a Shopify Liquid section.

The design system tokens are already defined in
claude/brand-assets/brand-guidelines.md — use those
rather than hardcoding any values from the HTML.

Translate the HTML component structure into a Liquid section
with a schema that makes all key content editable
(text, images, URLs, visibility toggles).

Start with the [hero / first section name] and
confirm before moving to the next.`,
          },
        ],
      },
      {
        number: "3",
        eyebrow: "Section Three",
        title: "The Page Prompting System",
        body: [
          {
            type: "paragraph",
            text: "Once your design system is loaded and your repo is connected, you're ready to generate. Here's the exact prompt used to produce the SULB product page — and how to adapt it for any store.",
          },
          {
            type: "workflowStrip",
            steps: [
              "Design system loaded",
              "Token preview reviewed",
              "Page prompt sent",
              "Review + iterate",
              "HTML → Claude Code",
            ],
          },
          {
            type: "callout",
            text: "**Review the design system preview first.** Claude Design produces a token preview before generating pages. Correct mismatches here — it's much easier to fix a token than to regenerate a full page.",
          },
          {
            type: "promptBlock",
            label: "Claude Design — Page Generation Prompt",
            code: `Design a premium ecommerce product detail page (PDP) for a luxury furniture brand.

Build a single-page HTML prototype with React + Babel (inline JSX). Use two fonts: one luxury serif for headings (e.g. Italiana, Cormorant Garamond, or Playfair Display) and one clean sans-serif for body text (e.g. Montserrat). All buttons should be fully rounded (pill style), solid black. Background: warm off-white. No more than 5 sections.

Sections:

Hero — split layout: large product gallery left (with thumbnail strip + prev/next nav), sticky product info column right. Info column includes: product title, price, ships-in note, short description, a Height variant picker (native pill buttons, price changes per variant), a Preset combinations grid (2×2 thumbnails — clicking a preset opens a backrest color picker modal before applying), a "Your design" card (appears only after the builder completes), a "Build your own" trigger, quantity stepper, add-to-cart button, wishlist icon, and a short reassurance list.

Craft & Materials — two-column: copy + material spec list on left, two staggered image placeholders on right.

Presets / Configure — full-width section with a 4-column preset grid and a "Build your own" CTA.

Specs accordion — collapsible panels for Dimensions, Care, Delivery & Returns, Warranty.

Related products — 4-column grid.

Builder modal — full-screen 5-step guided flow: Height, Frame color, Cushion color, Backrest color, Review. Back/Continue navigation.

Design rules:
- All imagery = striped SVG placeholder blocks with monospace captions
- Color swatches = circular dot buttons with selected ring
- Tokens: --ink (deep black), --bg (warm off-white), --muted (taupe), --accent (terracotta)
- Typography: display headings 40–72px, eyebrows all-caps 11px + 0.2em tracking, body 14–16px
- Spacing: generous (clamp() for padding), CSS Grid for all multi-column layouts
- Sticky header: blurred background, breadcrumb below nav row
- Footer: dark background, logo large in display font, 3-column link grid`,
          },
          {
            type: "paragraph",
            text: "**How to adapt this for your store:** Replace the brand description with your category and positioning. List only the sections you need — not every PDP needs a builder modal. Keep the design rules block — the tokens, typography, and grid rules are what enforce your brand system. Iterate section by section, not as full regeneration.",
          },
        ],
      },
    ],
  },
  {
    slug: "vital-collagen-optimization-plan",
    title: "Vital Collagen Optimization Plan",
    subtitle: "Backlog Review & Structural Roadmap",
    eyebrow: "CRO · Strategy",
    description:
      "How we structure a Shopify CRO backlog — distinguishing direct changes from A/B tests, organizing by page, and identifying what's missing before synthesis.",
    tool: "CRO Framework",
    audience: ["Internal"],
    password: "godandmoney",
    sections: [],
  },
  {
    slug: "fit-tribe-case-study",
    title: "How Fit Tribe held 1.24% CVR while scaling TikTok traffic by 21%.",
    subtitle: "Fit Tribe",
    eyebrow: "CRO · Brand Redesign",
    description:
      "352K to 424K sessions. TikTok converted at 0.1%. Blended CVR still rose from 1.16% to 1.24% — and reached 1.86% after TikTok was removed.",
    tool: "CRO + Design",
    audience: ["Brands", "Agencies"],
    docPath: "/docs/fit-tribe-case-study.html",
    resultPill: "+16% Revenue",
    caseStudyHeadline: "How Fit Tribe held 1.24% CVR while scaling TikTok traffic by 21%.",
    niche: "Activewear",
    sections: [],
  },
  {
    slug: "y-studios-case-study",
    title: "How Y Studios went from $124K to $351K, with 4/7 drops breaking E£1M.",
    subtitle: "Y Studios",
    eyebrow: "CRO · Full Storefront",
    description:
      "Full storefront rebuild and ongoing drop management. Revenue grew 183% — $124K to $351K. 4 out of 7 drops broke E£1M. CVR held at 2% at scale.",
    tool: "CRO + Design + Management",
    audience: ["Brands", "Agencies"],
    docPath: "/docs/y-studios-case-study.html",
    resultPill: "+183% Revenue",
    caseStudyHeadline: "How Y Studios went from $124K to $351K, with 4/7 drops breaking E£1M.",
    niche: "Streetwear",
    sections: [],
  },
  {
    slug: "tet-case-study",
    title: "Learning Courses Platform Migration",
    subtitle: "TET / Trusted English Trainers",
    eyebrow: "Platform Migration · Custom Build",
    description:
      "Migrated from Teachable to Shopify. Custom Figma-to-Shopify build: new theme, blog, product pages, mobile-optimized components.",
    tool: "Custom Theme Dev",
    audience: ["Internal"],
    password: "godandmoney",
    docPath: "/docs/tet-case-study.html",
    sections: [],
  },
];

export function getValueResourceBySlug(slug: string): ValueResource | undefined {
  return valueResources.find((resource) => resource.slug === slug);
}

export function getValueResourceHref(slug: string): string {
  return `/value/${slug}`;
}
