insert into public.courses (
  slug, title, summary, sort_order, published,
  cover_path, cover_alt, outcomes, syllabus,
  duration, mode, fee_pkr, next_batch
) values
  (
    'amazon-va',
    'Amazon VA',
    'Learn the practical skills used to support Amazon sellers with research, listings, operations and customer communication.',
    1, false, null, null,
    array[
      'Understand an Amazon seller account and common virtual assistant responsibilities.',
      'Practice product and keyword research using structured spreadsheets.',
      'Support listing management, inventory tasks and seller reports.',
      'Prepare professional seller communication and task updates.'
    ],
    array[
      'Amazon marketplace and Seller Central overview',
      'Product, niche and competitor research',
      'Keywords, listings and catalogue support',
      'Inventory, order and shipment workflows',
      'Customer communication and case handling',
      'Reports, PPC basics and task organization',
      'Client pitch and portfolio preparation'
    ],
    null, null, null, null
  ),
  (
    'digital-marketing',
    'Digital Marketing',
    'Explore how businesses plan, create and measure digital campaigns across search, social media and content channels.',
    2, false, null, null,
    array[
      'Build a clear campaign objective and audience profile.',
      'Create channel-specific content and advertising plans.',
      'Understand organic reach, search and paid campaign basics.',
      'Read campaign reports and recommend practical improvements.'
    ],
    array[
      'Digital marketing foundations and funnels',
      'Audience research and buyer personas',
      'Content planning and copywriting',
      'Search engine optimization fundamentals',
      'Social media and Meta Ads basics',
      'Google Ads and campaign structure',
      'Analytics, reporting and optimization'
    ],
    null, null, null, null
  ),
  (
    'quickbooks-online-bookkeeping',
    'QuickBooks Online & Bookkeeping',
    'Explore how business income, expenses, invoices and reconciliations are organized with QuickBooks Online.',
    3, false, null, null,
    array[
      'Set up a sample company chart of accounts.',
      'Record sales, purchases and everyday banking transactions.',
      'Create invoices and track receivables and payables.',
      'Prepare and review standard financial reports.'
    ],
    array[
      'Bookkeeping principles and the accounting cycle',
      'QuickBooks Online company setup',
      'Chart of accounts and transaction categories',
      'Customers, invoices and sales receipts',
      'Vendors, bills and expense tracking',
      'Bank feeds and reconciliation',
      'Profit and loss, balance sheet and basic reports'
    ],
    null, null, null, null
  ),
  (
    'data-entry-va',
    'Data Entry & VA',
    'Build accurate spreadsheet, document and administrative skills for remote and client-based work.',
    4, false, null, null,
    array[
      'Organize and clean data accurately in spreadsheets.',
      'Use common formulas, filters and formatting tools.',
      'Create professional documents and routine reports.',
      'Manage files, deadlines and clear client communication.'
    ],
    array[
      'Virtual assistant workflow and professionalism',
      'Data entry standards and quality checking',
      'Spreadsheet formatting and navigation',
      'Common formulas, sorting and filtering',
      'Data cleaning and duplicate management',
      'Document, email and file organization',
      'Time tracking and task reporting'
    ],
    null, null, null, null
  ),
  (
    'upwork-freelancing',
    'Upwork Freelancing',
    'Learn how freelancers present services, find suitable projects and communicate professionally with clients on Upwork.',
    5, false, null, null,
    array[
      'Create a focused freelancer profile and service offer.',
      'Build a portfolio that demonstrates relevant work.',
      'Write tailored proposals instead of generic applications.',
      'Plan project delivery, milestones and professional communication.'
    ],
    array[
      'Freelancing fundamentals and service selection',
      'Upwork account and profile setup',
      'Job categories, search filters and project evaluation',
      'Portfolio, samples and professional positioning',
      'Proposal structure and tailored cover letters',
      'Interview questions and client communication',
      'Contracts, milestones, revisions and delivery'
    ],
    null, null, null, null
  )
on conflict (slug) do nothing;
