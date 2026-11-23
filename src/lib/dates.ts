export function isNextBatchCurrent(date: string | null): boolean {
  if (!date) return false;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) return false;
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Karachi",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.filter((part) => part.type !== "literal").map((part) => [part.type, part.value]));
  const today = `${values.year}-${values.month}-${values.day}`;
  return date >= today;
}
