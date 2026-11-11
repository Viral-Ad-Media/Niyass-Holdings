"use client";

import { useActionState } from "react";
import { interests } from "@/content/site";
import { submitInquiry, type ContactState } from "./actions";

const initial: ContactState = { ok: false, message: "" };
const input = "mt-1 w-full rounded-lg border border-black/15 px-4 py-3 outline-none focus:border-navy focus:ring-2 focus:ring-navy/10";

export function ContactForm() {
  const [state, action, pending] = useActionState(submitInquiry, initial);

  if (state.ok) {
    return <p role="status" className="rounded-2xl bg-green-50 p-6 font-medium text-green-800">{state.message}</p>;
  }

  const err = (k: string) => state.errors?.[k] && <span className="mt-1 block text-sm text-brand">{state.errors[k]}</span>;

  return (
    <form action={action} className="grid gap-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-navy">Name<input name="name" required className={input} />{err("name")}</label>
        <label className="block text-sm font-medium text-navy">Email<input name="email" type="email" required className={input} />{err("email")}</label>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block text-sm font-medium text-navy">Company <span className="text-muted">(optional)</span><input name="company" className={input} /></label>
        <label className="block text-sm font-medium text-navy">I&apos;m interested in
          <select name="interest" className={input} defaultValue={interests[0]}>
            {interests.map((i) => <option key={i}>{i}</option>)}
          </select>
        </label>
      </div>
      <label className="block text-sm font-medium text-navy">Message<textarea name="message" rows={6} required className={input} />{err("message")}</label>
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden />
      {state.message && !state.ok && <p role="alert" className="text-sm text-brand">{state.message}</p>}
      <button disabled={pending} className="justify-self-start rounded-full bg-brand px-8 py-3 font-semibold text-white hover:bg-brand-600 disabled:opacity-60">
        {pending ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
