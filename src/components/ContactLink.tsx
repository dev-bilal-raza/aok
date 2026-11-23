import { CAMPUS_INSTAGRAM } from "@/lib/whatsapp";

export function ContactLink({ href, label = "Ask about this course on WhatsApp", compact = false }: { href: string | null; label?: string; compact?: boolean }) {
  if (href) return <a className={compact ? "button button-small" : "button"} href={href} target="_blank" rel="noreferrer">{label}</a>;
  return <a className={compact ? "button button-small" : "button"} href={CAMPUS_INSTAGRAM} target="_blank" rel="noreferrer">Ask about this course on Instagram</a>;
}
