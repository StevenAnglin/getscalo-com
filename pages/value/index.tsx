import Head from "next/head";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import ResourceCard from "@/components/value/ResourceCard";
import { valueResources } from "@/lib/value-resources";

export default function ValueIndexPage() {
  return (
    <>
      <Head>
        <title>Free Teardowns and Frameworks | Scalo</title>
        <meta
          name="description"
          content="The actual tools we use in audits. Explore Scalo's free teardowns and frameworks with no email gate."
        />
        <meta property="og:title" content="Free Teardowns and Frameworks | Scalo" />
        <meta
          property="og:description"
          content="The actual tools we use in audits. Explore Scalo's free teardowns and frameworks with no email gate."
        />
        <meta property="og:type" content="website" />
      </Head>

      <Nav />
      <main className="bg-[var(--scalo-bg-0)]">
        <section className="bg-grid-fade pt-40 pb-24 lg:pt-48 lg:pb-32">
          <div className="mx-auto max-w-[1440px] px-6 lg:px-12">
            <div className="max-w-[900px]" data-reveal>
              <div className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--scalo-ember)]" />
                Resource Library
              </div>
              <h1 className="display-xl mt-6 text-[var(--scalo-cream)]">
                Free <span className="italic-editorial text-[var(--scalo-ember)]">teardowns</span> and frameworks.
              </h1>
              <p className="body-lg mt-8 max-w-[620px] text-[var(--scalo-fg-2)]">
                The actual tools we use in audits. No email required.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-5 md:grid-cols-2">
              {valueResources.map((resource, index) => (
                <div key={resource.slug} data-reveal data-delay={`${index * 100}`}>
                  <ResourceCard resource={resource} index={index + 1} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
