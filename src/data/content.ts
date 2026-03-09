// ============================================================
//  SITE CONTENT
//  Edit this file to update text and images across the site.
// ============================================================

// ── Shared ──────────────────────────────────────────────────

export const site = {
  name:     'Kyle Gladwin',
  initials: 'KG',
  email:    'ktgladwin@gmail.com',
  title:    'Kyle Gladwin — Product Manager',
  cvHref:       'https://drive.google.com/file/d/1UETNSn0OAURQLkaqXNGo5LxVu_CCXrJB/view?usp=sharing',
  linkedInHref: 'https://www.linkedin.com/in/kyle-gladwin-ab75a975/',
};

// ── Footer ───────────────────────────────────────────────────

export const footer = {
  text:      'Created by Kyle Gladwin using Claude Code. See my GitHub',
  linkLabel: 'here',
  linkHref:  'https://github.com/kyle-gladwin/',
};

// ── Navbar ──────────────────────────────────────────────────

export const vibeCodingLinks = [
  { label: 'Gozleme Finder',        href: 'https://gozleme-finder.kyleglad.win' },
  { label: 'Chess Openings Explorer', href: 'https://chess-openings-explorer.kyleglad.win' },
];

// ── Homepage ─────────────────────────────────────────────────

export const hero = {
  badge:      'Open to new opportunities',
  // {name}, {years}, {role} are highlighted automatically
  headline:   "I'm {name}, with {years} of experience shipping digital products as a {role}.",
  years:      '10+ years',
  role:       'Product Manager',

  // Wrap words in <em> to make them bold/highlighted
  summary:    `Most recently, I've been leading Product strategy at <a href="https://libraryofthings.co.uk/" target="_blank" rel="noopener noreferrer">Library of Things</a>. You can find some of the stuff I've helped build <a href="/case-studies">here</a>.<br><br>I've been working on some AI/Claude Code projects too — you can see them <a href="https://chess-openings-explorer.kyleglad.win/" target="_blank" rel="noopener noreferrer">here</a> and <a href="https://gozleme-finder.kyleglad.win/" target="_blank" rel="noopener noreferrer">here</a>.`,

  stats: [
    { num: '10+',  label: 'Years in PM' },
    { num: '4',    label: 'Years senior leadership' },
    { num: '500%', label: 'Best conversion lift' },
  ],

  primaryCta:   { label: 'View Case Studies', href: '/case-studies' },
  secondaryCta: { label: 'Email me',           href: `mailto:ktgladwin@gmail.com` },
};

export const terminalCard = {
  role:       'Product Manager',
  experience: '10+ years',
  focus:      ['data-driven development', 'stakeholder alignment', 'social impact'],
  available:  true,
};

// ── Case Studies page ────────────────────────────────────────

export const caseStudiesPage = {
  title:    'Case Studies',
  subtitle: 'Projects that I´ve led recently and the stories behind them',
};

export const caseStudies = [
  {
    slug:       'licensing-scale-up',
    tags:       ['Growth', 'B2B', 'Scale-up'],
    heading:    'Scaling up rental platform to be licensed internationally',
    subheading: 'How Library of Things\' internal software became a licensed SaaS platform now used by operators across the UK, Spain, Ireland, and the Netherlands.',
    image:      '/images/benthyguserstorymapping.jpg',
    imageAlt:   'Benthyg user story mapping',
    post: {
      overview: `Library of Things had built custom internal software to run its London lending locations — but the vision was always bigger. After winning a competitive Innovate UK grant, we set out to transform that internal tool into a licensable SaaS platform with global reach, giving other community rental networks the infrastructure to operate at scale.`,
      challenge: {
        text: `The software had been purpose-built for our own operations and made assumptions that only held in a London context — payment methods, self-service collection and return, centralised location management. To license it elsewhere, we needed to understand what was genuinely universal and what needed to be rearchitected. We had an 18-month grant window and our first pilot partner already signed: Benthyg, a lending network in Wales.`,
        screenshots: [
          { caption: 'User story mapping session with Benthyg', image: '/images/benthyguserstorymapping.jpg' },
        ],
      },
      approach: {
        text: `We ran two rounds of user story mapping with the Benthyg team to surface and prioritise their needs quickly — they required delivery options, cash payment support, and Welsh-language localisation on top of our existing feature set. From there we did a structured gap analysis between what we had and what needed building, then planned the development across the first six months.\n\nBefore launch we defined clear success criteria: internal team feedback and borrower satisfaction surveys. Post-launch, I held regular cadence calls with Benthyg to capture what we'd missed and what needed fixing, folding them into our existing product planning process as a formal user group.\n\nAs new pilots came online in Barcelona and Walthamstow, we applied the same process — and deliberately prioritised features that were shared across multiple licensees (like translation to local language), so every build increased value for the whole network rather than serving one partner in isolation.`,
        screenshots: [
          { caption: 'Localised catalogue page for Dutch licensee in Amersfoort', image: '/images/amersfoortcatalogue.png' },
        ],
      },
      outcomesSubtitle: ``,
      outcomes: [
        { num: '7',    label: 'Licensed operators' },
        { num: '4',    label: 'Countries' },
        { num: '£350k', label: 'Innovate UK grant' },
      ],
    },
  },
  {
    slug:       'sign-up-flow-refresh',
    tags:       ['Acquisition', 'Funnel Optimisation'],
    heading:    'Streamlining sign-up flow to reduce cost-per-acquisition',
    subheading: 'Targeting the most cost-effective marketing channel by increasing sign-up flow conversion to 70%.',
    image:      '/images/signupflowdesigns.png',
    imageAlt:   'Sign-up flow designs',
    post: {
      overview: `Library of Things was spending heavily across paid social, paid search, and print advertising to acquire users — but the data showed email was by far the cheapest conversion channel. The problem was that our sign-up flow was working against us: a clunky five-step process that didn't ask for an email address until the very end, after postcode and password. Conversion sat at just 40%.`,
      challenge: {
        text: `The hypothesis was simple: if we could collect name and email address in the first step — before asking for anything else — we'd capture more email sign-ups even from users who dropped off, and bring down the cost of acquisition through our most efficient channel.\n\nThe existing flow had accumulated years of incremental decisions and was never designed with conversion in mind. Changing it meant getting alignment across marketing, engineering, and the wider product team on what "minimum required" actually looked like.`,
        screenshots: [
          { caption: 'Original five-step sign-up flow', image: '/images/signup-flow.gif' },
        ],
      },
      approach: {
        text: `I briefed our designer to concept a two-step flow: step one capturing just name and email (the minimum needed for marketing), step two handling postcode and password. The goal was to reduce friction at the point where most users were dropping off.\n\nAfter iterating internally with the marketing and dev team, we built and launched the new flow in four weeks. We shipped it behind a feature flag so it could be rolled back immediately if conversion dropped — a deliberate risk mitigation given the flow touched every new user's first experience of the product.`,
        screenshots: [
          { caption: 'Revised two-step sign-up flow', image: '/images/kiosk-code-flow.gif' },
        ],
      },
      outcomesSubtitle: `Conversion rate jumped to 78% at launch and has remained above 70% ever since. The improved capture rate meant we could dial back more expensive acquisition channels, reducing marketing spend by around 50p per conversion. In the three years since it shipped, that unit economic saving has compounded significantly across the business.`,
      outcomes: [
        { num: '78%',  label: 'Launch conversion rate' },
        { num: '↓50p', label: 'Cost per acquisition' },
        { num: '4wks', label: 'Concept to launch' },
      ],
    },
  },
  {
    slug:       'six-digit-kiosk-code',
    tags:       ['User-research', 'UX'],
    heading:    'Listening to customers to improve UX',
    subheading: 'Introducing a six-digit code at collection and return to meaningfully improve the user journey and reduce customer service calls',
    image:      '/images/dalston-kiosk-visual.jpg',
    imageAlt:   'Dalston Library of Things',
    post: {
      overview: `Library of Things' borrowing journey ran through in-store kiosk touchscreens where users authenticated themselves to collect and return items. Shortly after joining, I started hearing a consistent signal from the Customer Support team: users were regularly getting stuck during collection and return, leading to frustrated calls and longer kiosk queues.`,
      challenge: {
        text: `Speaking to Customer Support, reviewing user feedback forms, and analysing Google Analytics page timings all pointed to the same bottleneck: the email address entry screen. Typing a full email address on a horizontal touchscreen is slow and error-prone, and it was clearly where users were losing confidence and abandoning the journey.\n\nThe hypothesis was that replacing email entry with a short, memorable code would reduce friction at the kiosk, cut support calls tagged as 'collection/return issue', and meaningfully speed up the borrowing experience.`,
        screenshots: [
          { caption: 'Six-digit-code functionality at kiosk and screenshot', image: '/images/sixdigitcode.png' },
        ],
      },
      approach: {
        text: `We decided to silently attribute a unique six-digit code to each borrower at sign-up, backfilling codes for all existing users. Crucially, the code would remain the same throughout a borrower's entire lifecycle — no rotating codes per transaction. We considered and rejected unique per-collection codes as overengineering: it would be a very long time before we approached 999,999 borrowers, so duplication simply wasn't a risk worth designing around.\n\nTo make the code easy to find at the point of need, we introduced SMS messaging alongside the existing email confirmation, so borrowers received their code through both channels and could pull it up quickly in-store.\n\nRather than rolling out site-wide immediately, we ran a two-month pilot at our Dalston location to catch any edge cases and gather early feedback before releasing to all locations.`,
        screenshots: [],
      },
      outcomesSubtitle: `Support calls tagged as 'collection/return issue' dropped noticeably after launch, and average time spent at the kiosk fell by around 30 seconds per transaction. A small change in the user journey — replacing a long email field with a six-digit code — had a measurable effect on both operational costs and the borrower experience.`,
      outcomes: [
        { num: '↓30s',  label: 'Avg. kiosk time' },
        { num: '↓',     label: 'Collection/return support calls' },
        { num: '2mo',   label: 'Pilot before full rollout' },
      ],
    },
  },
];
