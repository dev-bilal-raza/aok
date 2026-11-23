import "server-only";
import { isWhatsAppNumberValid } from "./config";

export const CAMPUS_INSTAGRAM = "https://www.instagram.com/aofkarachicampus/";

export function getWhatsAppLink(title: string): string | null {
  const number = process.env.AOF_WHATSAPP_NUMBER?.trim();
  if (!isWhatsAppNumberValid(number)) return null;
  const message = `Assalam o Alaikum AOF Karachi! Mujhe ${title} join karna hai. Kya aap next batch, timings, fees aur admission process bata sakte hain?`;
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
