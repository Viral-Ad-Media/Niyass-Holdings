import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { SignInForm } from "./sign-in-form";

export const metadata: Metadata = { title: "Sign in", robots: { index: false } };

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-mist px-4">
      <div className="w-full max-w-sm rounded-3xl bg-white p-8 shadow-sm">
        <Link href="/"><Image src="/images/brand/logo-wordmark.png" alt="Niyass Holdings" width={180} height={31} /></Link>
        <h1 className="mt-6 text-2xl font-bold text-navy">Admin sign in</h1>
        <Suspense><SignInForm /></Suspense>
      </div>
    </main>
  );
}
