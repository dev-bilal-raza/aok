import "server-only";
import { createClient } from "@supabase/supabase-js";
import { isDemoEnabled } from "./config";
import { previewCourses } from "./preview-fixture";
import type { CatalogueResult, Course } from "./types";

export function validateLocalImagePath(path: string | null): string | null {
  if (!path) return null;
  if (!/^\/images\/[A-Za-z0-9._/-]+\.(?:png|jpe?g|webp|avif)$/.test(path)) return null;
  if (path.includes("..")) return null;
  return path;
}

export async function getCatalogue(): Promise<CatalogueResult> {
  if (isDemoEnabled()) return { status: "ok", courses: previewCourses, isDemo: true };

  const url = process.env.SUPABASE_URL?.trim();
  const key = process.env.SUPABASE_PUBLISHABLE_KEY?.trim();
  if (!url || !key) {
    if (!process.env.VERCEL_ENV) return { status: "ok", courses: previewCourses, isDemo: false };
    return { status: "missing_config", courses: [], isDemo: false };
  }

  try {
    const supabase = createClient(url, key, { auth: { persistSession: false } });
    const { data, error } = await supabase
      .from("courses")
      .select("id,slug,title,summary,sort_order,published,cover_path,cover_alt,outcomes,syllabus,duration,mode,fee_pkr,next_batch")
      .eq("published", true)
      .order("sort_order", { ascending: true })
      .order("title", { ascending: true });
    if (error) return { status: "database_error", courses: [], isDemo: false };
    if (!data || data.length === 0) {
      if (!process.env.VERCEL_ENV) return { status: "ok", courses: previewCourses, isDemo: false };
      return { status: "empty", courses: [], isDemo: false };
    }
    const liveCourses = data as Course[];
    if (!process.env.VERCEL_ENV) {
      const courses = liveCourses.map((course) => {
        const preview = previewCourses.find((item) => item.slug === course.slug);
        if (!preview) return course;
        return {
          ...course,
          summary: course.summary.startsWith("Explore ") ? preview.summary : course.summary,
          outcomes: course.outcomes?.length ? course.outcomes : preview.outcomes,
          syllabus: course.syllabus?.length ? course.syllabus : preview.syllabus,
        };
      });
      return { status: "ok", courses, isDemo: false };
    }
    return { status: "ok", courses: liveCourses, isDemo: false };
  } catch {
    return { status: "database_error", courses: [], isDemo: false };
  }
}

export async function getCourse(slug: string): Promise<{ status: "ok"; course: Course; isDemo: boolean } | { status: "not_found" } | { status: "database_error" } | { status: "missing_config" } | { status: "empty" }> {
  const catalogue = await getCatalogue();
  if (catalogue.status === "database_error") return { status: "database_error" };
  if (catalogue.status === "missing_config") return { status: "missing_config" };
  if (catalogue.status === "empty") return { status: "empty" };
  const course = catalogue.courses.find((item) => item.slug === slug);
  if (!course) return { status: "not_found" };
  return { status: "ok", course, isDemo: catalogue.isDemo };
}
