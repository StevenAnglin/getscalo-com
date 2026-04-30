import Head from "next/head";
import Link from "next/link";
import type { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Footer from "@/components/sections/Footer";
import Nav from "@/components/sections/Nav";
import ContentBlockRenderer from "@/components/value/ContentBlockRenderer";
import { getValueResourceBySlug, valueResources, type ValueResource } from "@/lib/value-resources";

interface ValueResourcePageProps {
  resource: ValueResource;
}

export const getStaticPaths = (async () => {
  return {
    paths: valueResources.map((resource) => ({
      params: { slug: resource.slug },
    })),
    fallback: false,
  };
}) satisfies GetStaticPaths<{ slug: string }>;

export const getStaticProps = (async ({ params }) => {
  const slug = params?.slug;

  if (!slug) {
    return { notFound: true };
  }

  const resource = getValueResourceBySlug(slug);

  if (!resource) {
    return { notFound: true };
  }

  return {
    props: {
      resource,
    },
  };
}) satisfies GetStaticProps<ValueResourcePageProps, { slug: string }>;

export default function ValueResourcePage({
  resource,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{`${resource.title} — ${resource.subtitle} | Scalo`}</title>
        <meta name="description" content={resource.description} />
        <meta property="og:title" content={`${resource.title} — ${resource.subtitle} | Scalo`} />
        <meta property="og:description" content={resource.description} />
        <meta property="og:type" content="article" />
      </Head>

      <Nav />
      <main className="bg-[var(--scalo-bg-0)]">
        <section className="bg-grid-fade pt-40 pb-16 lg:pt-48 lg:pb-20">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            <div className="max-w-[960px]" data-reveal>
              <span className="inline-flex items-center rounded-full border border-[var(--scalo-ember)]/30 bg-[var(--scalo-bg-2)]/70 px-3 py-1 text-xs font-medium tracking-[0.16em] text-[var(--scalo-ember)] uppercase backdrop-blur-sm">
                {resource.eyebrow}
              </span>
              <h1 className="display-xl mt-8 text-[var(--scalo-cream)]">
                {resource.title}
                <span className="mt-3 block italic-editorial text-[var(--scalo-ember)]">{resource.subtitle}</span>
              </h1>
              <p className="body-lg mt-8 max-w-[720px] text-[var(--scalo-fg-2)]">{resource.description}</p>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-3" data-reveal data-delay="100">
              <div className="rounded-2xl border border-[var(--scalo-border-ghost)] bg-[var(--scalo-bg-2)] p-5">
                <div className="text-[11px] font-medium tracking-[0.18em] text-[var(--scalo-fg-3)] uppercase">Tool</div>
                <div className="mt-3 text-lg font-medium tracking-tight text-[var(--scalo-cream)]">{resource.tool}</div>
              </div>
              <div className="rounded-2xl border border-[var(--scalo-border-ghost)] bg-[var(--scalo-bg-2)] p-5 md:col-span-2">
                <div className="text-[11px] font-medium tracking-[0.18em] text-[var(--scalo-fg-3)] uppercase">Audience</div>
                <div className="mt-3 text-lg font-medium tracking-tight text-[var(--scalo-cream)]">
                  {resource.audience.join(" · ")}
                </div>
                <div className="mt-4 border-t border-[var(--scalo-border-hairline)] pt-4 text-sm text-[var(--scalo-fg-3)]">
                  Type · Free Guide
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24 lg:pb-32">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            {resource.sections.map((section, index) => (
              <div
                key={`${section.number}-${section.title}`}
                className={`grid gap-8 py-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12 ${index === 0 ? "" : "border-t border-[var(--scalo-border-hairline)]"}`}
              >
                <div data-reveal>
                  <div className="text-[72px] leading-none italic-editorial text-[var(--scalo-ember)]">
                    {section.number}
                  </div>
                  <div className="mt-6 text-[11px] font-medium tracking-[0.18em] text-[var(--scalo-fg-3)] uppercase">
                    {section.eyebrow}
                  </div>
                  <h2 className="display-md mt-3 text-[var(--scalo-cream)]">{section.title}</h2>
                </div>

                <div className="space-y-6" data-reveal data-delay="100">
                  {section.body.map((block, blockIndex) => (
                    <ContentBlockRenderer key={`${section.number}-${block.type}-${blockIndex}`} block={block} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[var(--scalo-border-hairline)] py-16 lg:py-20">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-6 lg:flex-row lg:items-end lg:justify-between lg:px-12">
            <div data-reveal>
              <div className="text-2xl font-medium tracking-tight text-[var(--scalo-cream)]">scalo.</div>
              <p className="mt-3 text-sm leading-relaxed text-[var(--scalo-fg-2)]">
                More practical frameworks, teardown systems, and working specs at getscalo.com/value.
              </p>
            </div>
            <Link
              href="/value"
              data-reveal
              data-delay="100"
              className="inline-flex items-center gap-2 text-base font-medium text-[var(--scalo-cream)] transition-colors hover:text-[var(--scalo-ember)]"
            >
              Explore more resources <span aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
