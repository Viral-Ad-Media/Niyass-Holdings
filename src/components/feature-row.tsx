import Image from "next/image";
import { SectionHeading } from "./section";

export function FeatureRow({ title, body, image, flip = false, eyebrow }: { title: string; body: string; image: string; flip?: boolean; eyebrow?: string }) {
  return (
    <div className="grid items-center gap-12 md:grid-cols-2">
      <div className={flip ? "md:order-2" : ""}>
        <SectionHeading eyebrow={eyebrow} title={title} body={body} />
      </div>
      <Image src={image} alt="" width={600} height={420} className="mx-auto w-full max-w-lg" />
    </div>
  );
}
