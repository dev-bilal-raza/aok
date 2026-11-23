create extension if not exists "pgcrypto";

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  title text not null,
  summary text not null,
  sort_order integer not null default 0,
  published boolean not null default false,
  cover_path text null,
  cover_alt text null,
  outcomes text[] null,
  syllabus text[] null,
  duration text null,
  mode text null,
  fee_pkr numeric null check (fee_pkr >= 0),
  next_batch date null
);

alter table public.courses enable row level security;

do $$
begin
  if not exists (
    select 1
    from pg_constraint
    where conname = 'courses_cover_path_local_images'
      and conrelid = 'public.courses'::regclass
  ) then
    alter table public.courses
      add constraint courses_cover_path_local_images
      check (
        cover_path is null
        or (
          cover_path ~ '^/images/[A-Za-z0-9._/-]+\.(png|jpe?g|webp|avif)$'
          and cover_path !~ '(^|/)\.{2}(/|$)'
        )
      );
  end if;
end $$;

revoke all on table public.courses from anon, authenticated;
grant select on table public.courses to anon, authenticated;

drop policy if exists "published courses are publicly readable" on public.courses;
create policy "published courses are publicly readable"
  on public.courses
  for select
  to anon, authenticated
  using (published = true);
