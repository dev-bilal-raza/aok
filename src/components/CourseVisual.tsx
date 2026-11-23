import Image from "next/image";
import { validateLocalImagePath } from "@/lib/courses";

type Props = { slug: string; title: string; coverPath: string | null; coverAlt: string | null; large?: boolean };

export function CourseVisual({ slug, title, coverPath, coverAlt, large = false }: Props) {
  const validPath = validateLocalImagePath(coverPath);
  if (validPath) {
    return (
      <div className={large ? "course-visual course-visual-large" : "course-visual"}>
        <Image src={validPath} alt={coverAlt || title} fill sizes={large ? "(max-width: 800px) 100vw, 50vw" : "(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"} />
      </div>
    );
  }

  return (
    <div className={`course-cover motif-${slug} ${large ? "course-visual-large" : ""}`} aria-hidden="true">
      <span className="motif-grid" />
      <span className="motif-panel">
        <b>{title}</b>
        <i />
        <i />
        <i />
      </span>
    </div>
  );
}
