import Link from "next/link";
import { footerMenus, site } from "@/content/site";

export function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <p className="font-display text-xl font-bold text-white">
            Niyass <span className="text-brand">Holdings</span>
          </p>
          <p className="mt-3 text-sm">{site.tagline}.</p>
        </div>
        {footerMenus.map((menu) => (
          <div key={menu.title}>
            <p className="text-sm font-semibold uppercase tracking-wider text-white">{menu.title}</p>
            <ul className="mt-3 space-y-2 text-sm">
              {menu.links.map((l) => (
                <li key={l.label}><Link href={l.href} className="hover:text-white">{l.label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">Contact Us Today!</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={site.phoneHref} className="hover:text-white">{site.phone}</a></li>
            <li><a href={`mailto:${site.email}`} className="break-all hover:text-white">{site.email}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
