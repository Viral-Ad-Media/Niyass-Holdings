"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { signIn, signUp } from "@/lib/auth-client";

const input = "mt-1 w-full rounded-lg border border-black/15 px-4 py-3 outline-none focus:border-navy";

export function SignInForm() {
  const router = useRouter();
  const next = useSearchParams().get("next") ?? "/admin";
  const [mode, setMode] = useState<"in" | "up">("in");
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setPending(true);
    const f = new FormData(e.currentTarget);
    const email = String(f.get("email"));
    const password = String(f.get("password"));
    const res =
      mode === "in"
        ? await signIn.email({ email, password })
        : await signUp.email({ email, password, name: String(f.get("name") || email) });
    setPending(false);
    if (res.error) return setError(res.error.message ?? "Something went wrong");
    router.push(next.startsWith("/") ? next : "/admin");
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="mt-6 grid gap-4">
      {mode === "up" && <label className="text-sm font-medium text-navy">Name<input name="name" className={input} /></label>}
      <label className="text-sm font-medium text-navy">Email<input name="email" type="email" required className={input} /></label>
      <label className="text-sm font-medium text-navy">Password<input name="password" type="password" required minLength={10} className={input} /></label>
      {error && <p role="alert" className="text-sm text-brand">{error}</p>}
      <button disabled={pending} className="rounded-full bg-brand py-3 font-semibold text-white hover:bg-brand-600 disabled:opacity-60">
        {pending ? "Please wait…" : mode === "in" ? "Sign in" : "Create admin account"}
      </button>
      <button type="button" onClick={() => setMode(mode === "in" ? "up" : "in")} className="text-sm text-muted hover:text-navy">
        {mode === "in" ? "First time? Create the admin account" : "Have an account? Sign in"}
      </button>
    </form>
  );
}
