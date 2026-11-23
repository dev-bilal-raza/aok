import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCourse } from "@/lib/courses";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { isNextBatchCurrent } from "@/lib/dates";
import { isDemoEnabled } from "@/lib/config";
import { CourseVisual } from "@/components/CourseVisual";
import { ContactLink } from "@/components/ContactLink";
import { CatalogueState } from "@/components/States";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const result = await getCourse(slug);
  if (result.status !== "ok") return { title: "Course details", description: "Course information at Art of Freelancing Karachi." };
  return {
    title: result.course.title,
    description: result.course.summary,
    robots: isDemoEnabled() ? { index: false, follow: false } : undefined,
  };
}

export default async function CoursePage({ params }: Props) {
  const { slug } = await params;
  const result = await getCourse(slug);
  const demo = isDemoEnabled();

  if (result.status === "not_found") notFound();
  if (result.status === "empty") return <main className="shell detail-state"><CatalogueState type="empty" /></main>;
  if (result.status === "missing_config") return <main className="shell detail-state"><CatalogueState type="missing_config" /></main>;
  if (result.status === "database_error") return <main className="shell detail-state"><CatalogueState type="database_error" /></main>;

  const course = result.course;
  const whatsapp = getWhatsAppLink(course.title);
  const nextBatch = isNextBatchCurrent(course.next_batch) ? course.next_batch : null;
  const phone = process.env.AOF_WHATSAPP_NUMBER?.trim();

  return (
    <main>
      {demo && (
        <div className="preview-notice" role="status">
          <div className="shell">Preview only: sample course. This page is not indexed.</div>
        </div>
      )}
      <article className="shell course-detail">
        <Link className="back-link" href="/#courses">← Back to courses</Link>
        <div className="detail-layout">
          <div>
            <p className="eyebrow">Course</p>
            <h1>{course.title}</h1>
            <p className="summary">{course.summary}</p>
            <CourseVisual slug={course.slug} title={course.title} coverPath={course.cover_path} coverAlt={course.cover_alt} large />
          </div>
          <aside className="course-facts" aria-label="Course facts">
            <h2>Course information</h2>
            {course.duration && <p><strong>Duration</strong><span>{course.duration}</span></p>}
            {course.mode && <p><strong>Mode</strong><span>{course.mode}</span></p>}
            {typeof course.fee_pkr === "number" && course.fee_pkr >= 0 && <p><strong>Fee</strong><span>PKR {course.fee_pkr.toLocaleString("en-PK")}</span></p>}
            {nextBatch && <p><strong>Next batch</strong><span>{new Date(`${nextBatch}T12:00:00+05:00`).toLocaleDateString("en-PK", { timeZone: "Asia/Karachi", day: "numeric", month: "long", year: "numeric" })}</span></p>}
            <ContactLink href={whatsapp} />
            {phone && whatsapp && <p className="official-phone"><strong>Official phone</strong><br /><span>{phone}</span></p>}
          </aside>
        </div>
        {(course.outcomes?.length || course.syllabus?.length) ? (
          <div className="detail-sections">
            {course.outcomes?.length ? (
              <section>
                <h2>Outcomes</h2>
                <ul>{course.outcomes.map((item) => <li key={item}>{item}</li>)}</ul>
              </section>
            ) : null}
            {course.syllabus?.length ? (
              <section>
                <h2>Syllabus</h2>
                <ol>{course.syllabus.map((item) => <li key={item}>{item}</li>)}</ol>
              </section>
            ) : null}
          </div>
        ) : null}
      </article>
      <div className="mobile-contact-bar" aria-label="Course enquiry">
        <ContactLink href={whatsapp} compact />
      </div>
    </main>
  );
}
