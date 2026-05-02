import ResourceCard from "@/components/value/ResourceCard";
import { valueResources } from "@/lib/value-resources";

const CASE_STUDY_SLUGS = ["fit-tribe-case-study", "y-studios-case-study"];

export default function Resources() {
  const resources = valueResources.filter(r => CASE_STUDY_SLUGS.includes(r.slug));

  return (
    <section id="resources" className="py-24 lg:py-32" style={{ background: "#0C0C09" }}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-20 max-w-[800px]" data-reveal>
          <h2 className="display-lg text-white">
            Real results,{" "}
            <span className="italic-editorial text-[var(--scalo-accent)]">documented.</span>
          </h2>
          <p className="body-lg text-white/55 mt-6 max-w-[560px]">
            Read the teardowns.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {resources.map((resource, index) => (
            <div key={resource.slug} data-reveal data-delay={`${index * 100}`}>
              <ResourceCard resource={resource} index={index + 1} dark />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
