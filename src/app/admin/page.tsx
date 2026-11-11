import { desc } from "drizzle-orm";
import { db } from "@/db";
import { inquiry } from "@/db/schema";
import { setInquiryStatus } from "./actions";

export const dynamic = "force-dynamic";

const badge: Record<string, string> = {
  new: "bg-brand/10 text-brand",
  contacted: "bg-amber-100 text-amber-800",
  closed: "bg-green-100 text-green-800",
};

export default async function AdminPage() {
  const rows = await db.select().from(inquiry).orderBy(desc(inquiry.createdAt)).limit(200);

  return (
    <>
      <h1 className="text-2xl font-bold text-navy">Inquiries</h1>
      <p className="mt-1 text-muted">Messages sent through the contact form.</p>
      {rows.length === 0 ? (
        <p className="mt-8 rounded-2xl bg-white p-8 text-center text-muted">No inquiries yet.</p>
      ) : (
        <ul className="mt-8 space-y-4">
          {rows.map((r) => (
            <li key={r.id} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-semibold text-navy">{r.name}{r.company && <span className="font-normal text-muted"> · {r.company}</span>}</p>
                  <a href={`mailto:${r.email}`} className="text-sm text-brand hover:underline">{r.email}</a>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <span className={`rounded-full px-2.5 py-1 font-semibold ${badge[r.status] ?? ""}`}>{r.status}</span>
                  <time className="text-muted">{r.createdAt.toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" })}</time>
                </div>
              </div>
              {r.interest && <p className="mt-3 text-sm text-muted">Interested in: {r.interest}</p>}
              <p className="mt-2 whitespace-pre-wrap">{r.message}</p>
              <div className="mt-4 flex gap-2 text-sm">
                {(["new", "contacted", "closed"] as const).filter((s) => s !== r.status).map((s) => (
                  <form key={s} action={setInquiryStatus.bind(null, r.id, s)}>
                    <button className="rounded-full border border-black/10 px-3 py-1 hover:border-navy">Mark {s}</button>
                  </form>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
