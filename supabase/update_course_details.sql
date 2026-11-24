update public.courses
set
  outcomes = array[
    'Understand an Amazon seller account and common virtual assistant responsibilities.',
    'Practice product and keyword research using structured spreadsheets.',
    'Support listing management, inventory tasks and seller reports.',
    'Prepare professional seller communication and task updates.'
  ],
  syllabus = array[
    'Amazon marketplace and Seller Central overview',
    'Product, niche and competitor research',
    'Keywords, listings and catalogue support',
    'Inventory, order and shipment workflows',
    'Customer communication and case handling',
    'Reports, PPC basics and task organization',
    'Client pitch and portfolio preparation'
  ]
where slug = 'amazon-va'
  and (outcomes is null or syllabus is null);

update public.courses
set
  outcomes = array[
    'Build a clear campaign objective and audience profile.',
    'Create channel-specific content and advertising plans.',
    'Understand organic reach, search and paid campaign basics.',
    'Read campaign reports and recommend practical improvements.'
  ],
  syllabus = array[
    'Digital marketing foundations and funnels',
    'Audience research and buyer personas',
    'Content planning and copywriting',
    'Search engine optimization fundamentals',
    'Social media and Meta Ads basics',
    'Google Ads and campaign structure',
    'Analytics, reporting and optimization'
  ]
where slug = 'digital-marketing'
  and (outcomes is null or syllabus is null);

update public.courses
set
  outcomes = array[
    'Set up a sample company chart of accounts.',
    'Record sales, purchases and everyday banking transactions.',
    'Create invoices and track receivables and payables.',
    'Prepare and review standard financial reports.'
  ],
  syllabus = array[
    'Bookkeeping principles and the accounting cycle',
    'QuickBooks Online company setup',
    'Chart of accounts and transaction categories',
    'Customers, invoices and sales receipts',
    'Vendors, bills and expense tracking',
    'Bank feeds and reconciliation',
    'Profit and loss, balance sheet and basic reports'
  ]
where slug = 'quickbooks-online-bookkeeping'
  and (outcomes is null or syllabus is null);

update public.courses
set
  outcomes = array[
    'Organize and clean data accurately in spreadsheets.',
    'Use common formulas, filters and formatting tools.',
    'Create professional documents and routine reports.',
    'Manage files, deadlines and clear client communication.'
  ],
  syllabus = array[
    'Virtual assistant workflow and professionalism',
    'Data entry standards and quality checking',
    'Spreadsheet formatting and navigation',
    'Common formulas, sorting and filtering',
    'Data cleaning and duplicate management',
    'Document, email and file organization',
    'Time tracking and task reporting'
  ]
where slug = 'data-entry-va'
  and (outcomes is null or syllabus is null);

update public.courses
set
  outcomes = array[
    'Create a focused freelancer profile and service offer.',
    'Build a portfolio that demonstrates relevant work.',
    'Write tailored proposals instead of generic applications.',
    'Plan project delivery, milestones and professional communication.'
  ],
  syllabus = array[
    'Freelancing fundamentals and service selection',
    'Upwork account and profile setup',
    'Job categories, search filters and project evaluation',
    'Portfolio, samples and professional positioning',
    'Proposal structure and tailored cover letters',
    'Interview questions and client communication',
    'Contracts, milestones, revisions and delivery'
  ]
where slug = 'upwork-freelancing'
  and (outcomes is null or syllabus is null);
