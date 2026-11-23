# Build the Art of Freelancing Karachi course website

Work in this repository and implement the complete runnable project. Inspect the existing files first. For an empty repository scaffold Next.js App Router, TypeScript, Tailwind CSS, ESLint and npm. Use mutually compatible stable versions and commit a lockfile to the deliverable. Keep all frontend and server-side data access in one Next.js application. The project must run locally, build without credentials and deploy using Vercel's Next.js preset.

## Visitor experience

Build two responsive page templates. At /, use a short hero headed “Explore courses at Art of Freelancing Karachi”, a “Browse courses” anchor, a complete course grid at #courses and a compact campus/contact section at #campus. Header links on every page return to those anchors. Each card shows a visual, course title, one-line summary and a clearly named detail link. Use one column on small phones, two on tablets, three on wider screens. Avoid filters, carousels and repeated promotional copy.

At /courses/[slug], support direct visits, a back-to-courses link, title, summary, relevant visual, optional outcomes and syllabus, and compact approved facts (duration, mode, PKR fee, next batch). Hide absent fields and expired dates using Karachi time. Use “Ask about this course on WhatsApp” as the primary action near the facts. Repeat it in a mobile bottom bar on long pages with enough space for focus, content and safe areas. Include a copyable official phone number when configured. Use clear English for visible copy and this Roman Urdu message:
“Assalam o Alaikum AOF Karachi! Mujhe [course title] join karna hai. Kya aap next batch, timings, fees aur admission process bata sakte hain?”
Build https://wa.me/<international-digits>?text=<encoded-message> server-side with encodeURIComponent. Accept an international number of 8–15 digits starting with a nonzero digit. A click opens a draft, and the visitor chooses whether to send. For an absent or invalid number show the campus Instagram contact link in its place. Never mark a visitor as enrolled. Avoid tracking personal data.

## Visuals and content

Use a restrained editorial layout, light background, dark text, one configurable accent, system sans typography and visible focus. Make the wordmark usable as text. Support locally supplied logo, classroom photo and course covers under public/images. Use next/image with dimensions, appropriate sizes and descriptive alt text for meaningful photos. Build attractive original CSS compositions as the default covers, without external requests. Suggested motifs in course order are a product inventory, campaign planner, balanced ledger, spreadsheet and proposal draft. Decorative covers should be hidden from assistive technology. Never fabricate campus photography, testimonials, accreditations or earnings. Show the following user-supplied links in the footer:
- https://www.facebook.com/Artoffreelancing/
- https://www.instagram.com/artoffreelancing/
- https://www.instagram.com/aofkarachicampus/

Seed these historically advertised titles, each as an unpublished draft. Provide a separate typed local preview fixture using the same titles and short descriptive draft summaries. Keep current intake, price, duration and trainer blank until approved.
1. Amazon VA — amazon-va — Explore virtual assistant work for Amazon sellers.
2. Digital Marketing — digital-marketing — Explore how businesses plan and manage digital campaigns.
3. QuickBooks Online & Bookkeeping — quickbooks-online-bookkeeping — Explore how business transactions are recorded and organized.
4. Data Entry & VA — data-entry-va — Explore spreadsheet and administrative work for clients.
5. Upwork Freelancing — upwork-freelancing — Explore how freelancers present services and approach projects on Upwork.
Historical contact candidate for README verification only: 0318 2361219; 183D, Siraj Road, PECHS Block 2, Tariq Road, Karachi. Set live contact and street address only from owner-confirmed configuration.

## Data and operations

Use one public.courses table. Supply SQL migration with UUID primary key, unique stable slug, required title and summary, sort_order, published default false, nullable cover_path and cover_alt, outcomes and syllabus text arrays, optional duration, mode, fee_pkr (nonnegative) and next_batch (date). Store only local image paths inside /images. Seed SQL must be safe to rerun without overwriting campus edits (ON CONFLICT (slug) DO NOTHING). Enable RLS, explicitly grant public API roles only SELECT, implement a published-only SELECT policy and remove public writes. Edit and publish via Supabase Table Editor. Never ship a service-role key.

Use server-only Supabase access with SUPABASE_URL and SUPABASE_PUBLISHABLE_KEY. Use Server Components calling a shared server-only data module directly; no separate API, accounts, dashboard, payment, enrollment form or bot. Fetch published rows only, sorted by sort_order then title. Render dynamically so edits appear on refresh and builds do not need database access. Validate image paths. For real slugs missing from a successful read return 404; a database failure should show a friendly retry/contact state, not 404. An empty live catalogue should say “Contact the campus for the next course list.”

Create .env.example with blank credentials, AOF_WHATSAPP_NUMBER, AOF_CAMPUS_ADDRESS and AOF_DEMO_MODE. Enable sample catalogue only via explicit demo flag outside Vercel Production, with a visible preview notice and noindex. In production ignore the demo flag, never fall back to fixtures, never connect to a guessed contact. Missing configuration in live mode should render a friendly contact state. Avoid build-time external assets or font downloads. Add page titles, descriptions, responsive spacing, semantic navigation, sufficient contrast and 44px touch targets.

## Delivery checks

Write all source, migration, seed, fixture, environment template and README. Include exact commands for npm ci, local demo, lint, type check, build and production start. Document SQL setup and publishing in Table Editor, configuring contact, replacing photos, importing the GitHub repo into Vercel, preview vs production environment values and redeploying. Do not deploy or create external resources. Run lint, type check and production build, fixing failures. Smoke-check mobile and desktop navigation, valid and unknown slugs, draft isolation, encoded messages with ampersands, missing contact, empty catalogue, database failures and demo isolation. Report exactly which checks ran and any that require live credentials. Finish with a brief handoff and the minimum settings required to go live.
