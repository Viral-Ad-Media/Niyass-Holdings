export function SectionHeading({ eyebrow, title, body, center = false }: { eyebrow?: string; title: string; body?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-widest text-brand">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl font-bold text-navy md:text-4xl">{title}</h2>
      {body && <p className="mt-4 text-lg text-muted">{body}</p>}
    </div>
  );
}
