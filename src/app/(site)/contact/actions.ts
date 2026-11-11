"use server";

import { z } from "zod";
import { db, hasDatabase } from "@/db";
import { inquiry } from "@/db/schema";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(120),
  email: z.string().trim().email("Please enter a valid email").max(200),
  company: z.string().trim().max(160).optional(),
  interest: z.string().trim().max(80).optional(),
  message: z.string().trim().min(10, "Please add a few more details").max(5000),
  website: z.string().max(0).optional(), // honeypot
});

export type ContactState = { ok: boolean; message: string; errors?: Record<string, string> };

export async function submitInquiry(_prev: ContactState, formData: FormData): Promise<ContactState> {
  const parsed = schema.safeParse(Object.fromEntries(formData));
  if (!parsed.success) {
    const errors: Record<string, string> = {};
    for (const issue of parsed.error.issues) errors[String(issue.path[0])] ??= issue.message;
    return { ok: false, message: "Please fix the highlighted fields.", errors };
  }
  if (!hasDatabase) {
    return { ok: false, message: "The contact form isn't connected yet. Please try again later." };
  }
  const { website: _hp, ...data } = parsed.data;
  void _hp;
  await db.insert(inquiry).values({ ...data, company: data.company || null, interest: data.interest || null });
  return { ok: true, message: "Thanks! Your message has been sent. We'll be in touch soon." };
}
