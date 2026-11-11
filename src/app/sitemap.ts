import type { MetadataRoute } from "next";
import { nav, site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [...nav, { href: "/contact" }].map((n) => ({ url: `${site.url}${n.href === "/" ? "" : n.href}`, lastModified: new Date() }));
}
