import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";
import { FeatureRow } from "@/components/feature-row";
import { home } from "@/content/site";

export default function HomePage() {
  const { hero, resources, features, press } = home;
  return (
    <>
      <section className="relative overflow-hidden bg-mist">
        <Image src={hero.background} alt="" fill priority className="object-cover opacity-60" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight text-navy md:text-5xl">{hero.title}</h1>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={hero.primaryCta.href} className="rounded-full bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-600">{hero.primaryCta.label}</Link>
              <Link href={hero.secondaryCta.href} className="rounded-full border border-navy/20 bg-white/70 px-6 py-3 font-semibold text-navy hover:border-navy">{hero.secondaryCta.label}</Link>
            </div>
          </div>
          <Image src={hero.image} alt="" width={560} height={460} priority className="mx-auto w-full max-w-md" />
        </div>
      </section>

      <section id="resources" className="scroll-mt-20 px-4 py-16">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {resources.map((r) => (
            <Link key={r.title} href="/contact" className="group flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-brand">{r.type}</p>
                <h2 className="mt-2 text-lg font-bold leading-snug text-navy">{r.title}</h2>
                <span className="mt-3 inline-block text-sm font-semibold text-navy/70 group-hover:text-brand">Request access →</span>
              </div>
              <Image src={r.image} alt="" width={110} height={120} className="h-28 w-auto object-contain" />
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-mist px-4 py-20">
        <div className="mx-auto max-w-6xl space-y-20">
          {features.map((f, i) => <FeatureRow key={f.title} {...f} flip={i % 2 === 1} />)}
        </div>
      </section>

      <section className="border-y border-black/5 bg-white py-12">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-muted">{press.title}</h2>
          <div className="mt-8 grid grid-cols-3 items-center gap-8 md:grid-cols-6">
            {press.logos.map((p) => (
              <Image key={p.name} src={p.src} alt={p.name} width={120} height={40} className="mx-auto h-8 w-auto opacity-60 grayscale" />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
