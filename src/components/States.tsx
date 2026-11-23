export function CatalogueState({ type }: { type: "missing_config" | "database_error" | "empty" }) {
  const copy = {
    missing_config: "Course details are not available yet. Contact the campus for the current course list.",
    database_error: "We could not load the course list right now. Please retry shortly or contact the campus.",
    empty: "Contact the campus for the next course list.",
  };
  return (
    <section className="state-panel" aria-live="polite">
      <h2>{type === "empty" ? "Course list" : "We could not load courses"}</h2>
      <p>{copy[type]}</p>
      <a className="text-link" href="https://www.instagram.com/aofkarachicampus/" target="_blank" rel="noreferrer">Contact the Karachi campus on Instagram</a>
    </section>
  );
}
