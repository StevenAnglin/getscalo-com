import ResourceCard from "@/components/value/ResourceCard";
import { valueResources } from "@/lib/value-resources";

export default function Resources() {
  const resources = valueResources.slice(0, 3);

  return (
    <section id="resources" className="py-24 lg:py-32 bg-[var(--scalo-bg-1)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-20 max-w-[800px]" data-reveal>
          <h2 className="display-lg text-[var(--scalo-cream)]">
            Free{" "}
            <span className="italic-editorial text-[var(--scalo-ember)]">teardowns</span>{" "}
            and frameworks.
          </h2>
          <p className="body-lg text-[var(--scalo-fg-2)] mt-6 max-w-[560px]">
            The actual tools we use in audits. No email required.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {resources.map((resource, index) => (
            <div key={resource.slug} data-reveal data-delay={`${index * 100}`}>
              <ResourceCard resource={resource} index={index + 1} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
