# Art of Freelancing Karachi

A Next.js App Router course catalogue for Art of Freelancing Karachi. The live catalogue is read directly from Supabase by Server Components. There is no API route, account system, dashboard, payment flow, enrollment form, or tracking.

## Prerequisites

- Node.js 22
- npm

## Install

```bash
npm ci
```

## Local demo

Create `.env.local` or export variables in your shell:

```bash
AOF_DEMO_MODE=true
```

Run:

```bash
npm run dev
```

Open `http://localhost:3000`. Demo mode uses a typed local fixture only outside Vercel Production and adds a visible preview notice plus `noindex`.

## Commands

```bash
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm run start
```

`npm run start` serves the production build on port 3000.

## Supabase setup

1. Create a Supabase project.
2. In the SQL Editor, run `supabase/migrations/001_courses.sql`.
3. Run `supabase/seed.sql`.
4. For the existing five draft rows, run `supabase/update_course_details.sql` once to add only missing outcomes and syllabus.
4. The seed is rerunnable and never overwrites existing course rows.

The migration creates one `public.courses` table, a UUID key, unique slug, RLS, public `SELECT` grants, and a published-only select policy. Public insert, update, and delete privileges and policies are not granted.

## Publish and edit courses

Use Supabase Table Editor:

1. Open `Table Editor` → `courses`.
2. Edit approved title, summary, sort order, outcomes, syllabus, duration, mode, fee, next batch, cover fields, or published state.
3. Set `published` to true only after owner approval.
4. Refresh the Next.js page. The app is dynamically rendered and does not need a rebuild for catalogue edits.

Keep `next_batch` in `YYYY-MM-DD` date format. Expired dates are hidden using Asia/Karachi time.

## Environment values

Copy `.env.example` to `.env.local` and fill only owner-approved values:

```text
SUPABASE_URL=https://<project-ref>.supabase.co
SUPABASE_PUBLISHABLE_KEY=<publishable-key>
AOF_WHATSAPP_NUMBER=<digits-only>
AOF_CAMPUS_ADDRESS=<owner-confirmed street address>
AOF_DEMO_MODE=false
```

Use only the Supabase publishable key. Never add or ship a Supabase service-role key.

### WhatsApp number

`AOF_WHATSAPP_NUMBER` must contain 8–15 international digits, starting with a nonzero digit. Do not include `+`, spaces, or punctuation. Example format: `923001234567`.

The WhatsApp link is server-built and pre-fills a draft:

```text
Assalam o Alaikum AOF Karachi! Mujhe [course title] join karna hai. Kya aap next batch, timings, fees aur admission process bata sakte hain?
```

The visitor chooses whether to send. If the number is absent or invalid, the site links to the campus Instagram page instead. The historical candidate `0318 2361219` was not verified and is not configured anywhere in the live site.

## Images

Put campus or course photos in `public/images`.

- Supply an exact `/images/filename.jpg` style `cover_path` in Supabase.
- Supply a useful short `cover_alt`.
- Next.js validates that the path remains local to `/images`.
- Unsupplied covers use original CSS compositions and are decorative.
- Use `next/image` for meaningful supplied photos.
- Do not fabricate campus photography or add earnings, testimonials, or accreditation claims.

The one existing address in this README, `183D, Siraj Road, PECHS Block 2, Tariq Road, Karachi`, is an unverified historical contact candidate. It must not appear on the live site until owner-confirmed and placed in `AOF_CAMPUS_ADDRESS`.

## Vercel deployment

1. Push this project to GitHub.
2. In Vercel, choose **Add New → Project** and import the GitHub repository.
3. Keep the framework preset as **Next.js**.
4. Add Preview environment variables:
   - Live Supabase URL and publishable key
   - Owner-approved WhatsApp number
   - Owner-approved campus address
   - `AOF_DEMO_MODE=false` for a live catalogue preview
5. For local demo previews, set `AOF_DEMO_MODE=true` and do not add Supabase credentials if fixture-only rendering is desired.
6. Add the same live values to Production, and set `AOF_DEMO_MODE=false`.

Demo mode is ignored in Vercel Production. Production never falls back to fixtures or guessed contact details.

After changing environment variables, redeploy:

```bash
vercel --prod
```

The CLI is optional; Vercel normally redeploys after environment changes from **Deployments → Redeploy**.

## Behaviour

- Live mode with missing Supabase configuration shows a friendly contact state.
- Database failures show a retry/contact state, not a false 404.
- A real slug missing from a successful live read produces 404.
- An empty live catalogue says “Contact the campus for the next course list.”
- Production draft rows remain unpublished and are never rendered.
