export type Course = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  sort_order: number;
  published: boolean;
  cover_path: string | null;
  cover_alt: string | null;
  outcomes: string[] | null;
  syllabus: string[] | null;
  duration: string | null;
  mode: string | null;
  fee_pkr: number | null;
  next_batch: string | null;
};

export type CatalogueResult =
  | { status: "ok"; courses: Course[]; isDemo: boolean }
  | { status: "empty"; courses: []; isDemo: boolean }
  | { status: "missing_config"; courses: []; isDemo: false }
  | { status: "database_error"; courses: []; isDemo: false };
