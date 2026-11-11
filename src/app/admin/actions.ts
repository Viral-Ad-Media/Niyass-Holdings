"use server";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { db } from "@/db";
import { inquiry } from "@/db/schema";
import { auth } from "@/lib/auth";

const statuses = ["new", "contacted", "closed"] as const;

export async function setInquiryStatus(id: number, status: (typeof statuses)[number]) {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) throw new Error("Unauthorized");
  if (!statuses.includes(status)) throw new Error("Invalid status");
  await db.update(inquiry).set({ status }).where(eq(inquiry.id, id));
  revalidatePath("/admin");
}
