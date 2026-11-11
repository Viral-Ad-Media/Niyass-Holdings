import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section";
import { services } from "@/content/site";

export const metadata: Metadata = { title: "What We Do", description: services.hero.body };

export default function ServicesPage() {
  const { hero, heading, items, results } = services;
  return (
    <>
      <section className="bg-mist px-4 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">What We Do</p>
            <h1 className="mt-2 text-4xl font-extrabold text-navy md:text-5xl">{hero.title}</h1>
            <p className="mt-5 text-lg text-muted">{hero.body}</p>
          </div>
          <Image src={hero.image} alt="" width={560} height={440} priority className="mx-auto w-full max-w-md" />
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading center title={heading} />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {items.map((s) => (
              <article id={s.slug} key={s.slug} className="scroll-mt-20 rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-3 text-muted">{s.body}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.list.map((l) => <li key={l} className="rounded-full bg-mist px-3 py-1 text-sm font-medium text-navy">{l}</li>)}
                </ul>
              </article>
            ))}
            <article id="results" className="scroll-mt-20 rounded-2xl bg-navy p-8 text-white">
              <h3 className="text-xl font-bold">{results.title}</h3>
              <p className="mt-3 text-white/80">{results.body}</p>
              <a href="/contact" className="mt-5 inline-block font-semibold text-brand hover:underline">Ask for case studies →</a>
            </article>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
