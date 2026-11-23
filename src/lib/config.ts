import "server-only";

export function isDemoEnabled(): boolean {
  return process.env.AOF_DEMO_MODE === "true" && process.env.VERCEL_ENV !== "production";
}

export function isWhatsAppNumberValid(value?: string): value is string {
  return typeof value === "string" && /^[1-9]\d{7,14}$/.test(value.trim());
}
