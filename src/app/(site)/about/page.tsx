import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { FeatureRow } from "@/components/feature-row";
import { SectionHeading } from "@/components/section";
import { about } from "@/content/site";

export const metadata: Metadata = { title: "About", description: about.hero.body };

export default function AboutPage() {
  const { hero, story, mission, values } = about;
  return (
    <>
      <section className="bg-mist px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand">Who We Are</p>
          <h1 className="mt-2 text-4xl font-extrabold text-navy md:text-5xl">{hero.title}</h1>
          <p className="mt-5 text-lg text-muted">{hero.body}</p>
        </div>
      </section>
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl space-y-20">
          <FeatureRow {...story} />
          <FeatureRow {...mission} flip />
        </div>
      </section>
      <section className="bg-mist px-4 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading title={values.title} body={values.body} />
            <Link href="/contact" className="mt-6 inline-block rounded-full bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-600">Join the team</Link>
          </div>
          <ul className="space-y-4">
            {values.items.map((v) => (
              <li key={v.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-lg font-bold text-navy">{v.title}</h3>
                <p className="mt-1 text-muted">{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
