import type { Metadata } from "next";
import Link from "next/link";
import { getCatalogue } from "@/lib/courses";
import { isDemoEnabled } from "@/lib/config";
import { CatalogueState } from "@/components/States";
import { CourseVisual } from "@/components/CourseVisual";

export function generateMetadata(): Metadata {
  return {
    title: "Courses",
    description: "Browse course information at Art of Freelancing Karachi.",
    robots: isDemoEnabled() ? { index: false, follow: false } : undefined,
  };
}

export default async function Home() {
  const catalogue = await getCatalogue();
  const demo = isDemoEnabled();

  return (
    <main>
      {demo && (
        <div className="preview-notice" role="status">
          <div className="shell">Preview only: sample courses are shown. This page is not indexed.</div>
        </div>
      )}
      <section className="hero shell" aria-labelledby="hero-title">
        <p className="eyebrow">Karachi campus</p>
        <h1 id="hero-title">Explore courses at Art of Freelancing Karachi</h1>
        <p>Browse course summaries and ask the campus for approved intake details.</p>
        <Link className="button" href="#courses">Browse courses</Link>
      </section>

      <section className="course-section shell" id="courses" aria-labelledby="courses-title">
        <div className="section-heading">
          <p className="eyebrow">Course catalogue</p>
          <h2 id="courses-title">Available courses</h2>
        </div>
        {catalogue.status === "ok" && (
          <div className="course-grid">
            {catalogue.courses.map((course) => (
              <article className="course-card" key={course.id}>
                <CourseVisual slug={course.slug} title={course.title} coverPath={course.cover_path} coverAlt={course.cover_alt} />
                <div className="course-card-body">
                  <h3>{course.title}</h3>
                  <p>{course.summary}</p>
                  <Link className="text-link" href={`/courses/${course.slug}`} aria-label={`View details for ${course.title}`}>
                    View course details
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
        {catalogue.status === "empty" && <CatalogueState type="empty" />}
        {catalogue.status === "missing_config" && <CatalogueState type="missing_config" />}
        {catalogue.status === "database_error" && <CatalogueState type="database_error" />}
      </section>

      <section className="campus shell" id="campus" aria-labelledby="campus-title">
        <div>
          <p className="eyebrow">Campus</p>
          <h2 id="campus-title">Art of Freelancing Karachi</h2>
        </div>
        <div className="campus-contact">
          {process.env.AOF_CAMPUS_ADDRESS?.trim() && (
            <p><strong>Address</strong><br />{process.env.AOF_CAMPUS_ADDRESS.trim()}</p>
          )}
          <p><strong>Course enquiries</strong><br /><a href="https://www.instagram.com/aofkarachicampus/" target="_blank" rel="noreferrer">Contact on Instagram</a></p>
        </div>
      </section>
    </main>
  );
}
