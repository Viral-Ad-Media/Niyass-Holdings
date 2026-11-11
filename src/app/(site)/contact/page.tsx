import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/section";
import { discover, site } from "@/content/site";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = { title: "Contact", description: discover.body };

export default function ContactPage() {
  return (
    <section className="bg-mist px-4 py-16">
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.3fr]">
        <div>
          <SectionHeading eyebrow="Contact" title={discover.title} body={discover.body} />
          <ul className="mt-6 space-y-2 text-lg font-semibold text-navy">
            <li><a href={site.phoneHref} className="hover:text-brand">{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-brand">{site.email}</a></li>
          </ul>
          <Image src={discover.image} alt="" width={380} height={300} className="mt-10 hidden w-72 md:block" />
        </div>
        <div className="rounded-3xl bg-white p-6 shadow-sm md:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
