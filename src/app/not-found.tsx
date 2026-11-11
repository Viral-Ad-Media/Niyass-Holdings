import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-mist px-4 text-center">
      <h1 className="text-4xl font-bold text-navy">Page not found</h1>
      <Link href="/" className="rounded-full bg-brand px-6 py-3 font-semibold text-white">Back home</Link>
    </main>
  );
}
