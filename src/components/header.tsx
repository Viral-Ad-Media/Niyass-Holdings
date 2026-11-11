"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { nav, site } from "@/content/site";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link href="/" aria-label={site.name} onClick={() => setOpen(false)}>
          <Image src="/images/brand/logo-wordmark.png" alt={site.name} width={200} height={34} priority />
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition hover:text-brand ${
                pathname === item.href ? "text-brand" : "text-navy"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white hover:bg-brand-600">
            Contact us
          </Link>
        </nav>
        <button
          type="button"
          className="rounded p-2 text-navy md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="border-t border-black/5 bg-white px-4 py-3 md:hidden">
          {[...nav, { label: "Contact", href: "/contact" }].map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="block py-2 font-medium text-navy">
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
