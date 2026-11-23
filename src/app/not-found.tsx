import Link from "next/link";

export default function NotFound() {
  return (
    <main className="shell detail-state">
      <h1>Course not found</h1>
      <p>This course is not in the published catalogue.</p>
      <Link className="text-link" href="/#courses">Back to courses</Link>
    </main>
  );
}
