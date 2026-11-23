insert into public.courses (
  slug, title, summary, sort_order, published,
  cover_path, cover_alt, outcomes, syllabus,
  duration, mode, fee_pkr, next_batch
) values
  ('amazon-va', 'Amazon VA', 'Explore virtual assistant work for Amazon sellers.', 1, false, null, null, null, null, null, null, null, null),
  ('digital-marketing', 'Digital Marketing', 'Explore how businesses plan and manage digital campaigns.', 2, false, null, null, null, null, null, null, null, null),
  ('quickbooks-online-bookkeeping', 'QuickBooks Online & Bookkeeping', 'Explore how business transactions are recorded and organized.', 3, false, null, null, null, null, null, null, null, null),
  ('data-entry-va', 'Data Entry & VA', 'Explore spreadsheet and administrative work for clients.', 4, false, null, null, null, null, null, null, null, null),
  ('upwork-freelancing', 'Upwork Freelancing', 'Explore how freelancers present services and approach projects on Upwork.', 5, false, null, null, null, null, null, null, null, null)
on conflict (slug) do nothing;
