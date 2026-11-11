import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { SectionHeading } from "@/components/section";
import { retail } from "@/content/site";

export const metadata: Metadata = { title: "Work With Us", description: retail.hero.body };

export default function RetailPage() {
  const { hero, trackRecord, cost, ai } = retail;
  return (
    <>
      <section className="bg-mist px-4 py-16">
        <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">Retail Partnership</p>
            <h1 className="mt-2 text-4xl font-extrabold text-navy md:text-5xl">{hero.title}</h1>
            <p className="mt-5 text-lg text-muted">{hero.body}</p>
            <Link href="/contact" className="mt-8 inline-block rounded-full bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-600">Become a partner</Link>
          </div>
          <Image src={hero.image} alt="" width={540} height={524} priority className="mx-auto w-full max-w-md" />
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-2xl font-bold text-navy">{trackRecord.title}</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {trackRecord.stats.map((s) => (
              <div key={s.label} className="min-w-56 rounded-2xl bg-mist px-10 py-8">
                <p className="font-display text-5xl font-extrabold text-brand">{s.value}</p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-navy">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-semibold text-white/80">{cost.title}</h2>
          <p className="mt-3 font-display text-5xl font-extrabold text-brand md:text-6xl">{cost.answer}</p>
          <p className="mt-6 text-lg text-white/80">{cost.body}</p>
        </div>
      </section>

      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading center title={ai.title} body={ai.body} />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ai.items.map((it) => (
              <article key={it.title} className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                <div className="flex h-32 items-center justify-center">
                  <Image src={it.image} alt="" width={180} height={130} className="h-full w-auto object-contain" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy">{it.title}</h3>
                <p className="mt-2 text-muted">{it.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
