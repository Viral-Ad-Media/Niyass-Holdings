import Image from "next/image";
import Link from "next/link";
import { discover, site } from "@/content/site";

export function CtaBand() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 overflow-hidden rounded-3xl bg-navy px-8 py-12 text-white md:grid-cols-[1.4fr_1fr] md:px-14">
        <div>
          <h2 className="text-3xl font-bold">{discover.title}</h2>
          <p className="mt-4 text-white/80">{discover.body}</p>
          <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-semibold">
            <a href={site.phoneHref} className="hover:text-brand">{site.phone}</a>
            <a href={`mailto:${site.email}`} className="hover:text-brand">{site.email}</a>
          </p>
          <Link href={discover.button.href} className="mt-7 inline-block rounded-full bg-brand px-6 py-3 font-semibold hover:bg-brand-600">
            {discover.button.label}
          </Link>
        </div>
        <div className="rounded-2xl bg-white p-4">
          <Image src={discover.image} alt="" width={420} height={320} className="mx-auto w-full max-w-xs" />
        </div>
      </div>
    </section>
  );
}
