// ============================================================
//  SITE CONTENT
//  Edit this file to update text and images across the site.
// ============================================================

// ── Shared ──────────────────────────────────────────────────

export const site = {
  name:     'Kyle Gladwin',
  initials: 'KG',
  email:    'ktgladwin@gmail.com',
  title:    'Kyle Gladwin | Product Manager',
  cvHref:       'https://drive.google.com/file/d/1G55vIIqyPzO9YxE_9CJT_RvRbonORs-_/view?usp=sharing',
  linkedInHref: 'https://www.linkedin.com/in/kyle-gladwin-ab75a975/',
};

// ── Footer ───────────────────────────────────────────────────

export const footer = {
  text:      'Created by Kyle Gladwin using Claude Code. See my GitHub',
  linkLabel: 'here',
  linkHref:  'https://github.com/kyle-gladwin/',
};

// ── Navbar ──────────────────────────────────────────────────

export const nav = {
  recentWork:   { label: 'Recent PM work', href: '/case-studies' },
  aiProjects:   { label: 'Personal AI projects' },
  linkedIn:     { label: 'LinkedIn' },
  cv:           { label: 'My CV' },
  cta:          { label: 'Email me' },
};

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
  summary:    `Most recently, I've been leading the Product function at <a href="https://libraryofthings.co.uk/" target="_blank" rel="noopener noreferrer">Library of Things</a>. You can find some of the stuff I've helped build <a href="/case-studies">here</a>.<br><br>I've been working on AI/Claude Code projects too - you can see them <a href="https://chess-openings-explorer.kyleglad.win/" target="_blank" rel="noopener noreferrer">here</a> and <a href="https://gozleme-finder.kyleglad.win/" target="_blank" rel="noopener noreferrer">here</a>.`,

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
  keySkills:  ['scaling & growth', 'data-driven development', 'stakeholder alignment','b2b & b2c products'],
  available:  true,
};

// ── Case Studies page ────────────────────────────────────────

export const caseStudiesPage = {
  title:    'Recent Product Management work',
  subtitle: 'Case studies of professional projects that I´ve led recently and the stories behind them',
};

export const caseStudies = [
  {
    slug:       'licensing-scale-up',
    tags:       ['Growth', 'B2B', 'Scale-up'],
    heading:    'Scaling up internal rental platform to be licensed internationally',
    subheading: 'How Library of Things\' internal software became a licensed SaaS platform now used by operators across the UK, Spain, Ireland, and the Netherlands.',
    image:      '/images/benthygstorymapping1.jpg',
    imageAlt:   'Benthyg user story mapping',
    post: {
      overview: `Library of Things built custom internal software to run its London lending locations, growing from 8 to 21 in my time at the business, but in order to make the widest impact, we wanted to grow more quickly. After winning a round of the competitive Innovate UK Smart grant, we set out to transform the internally-used tools into a licensable SaaS platform with global reach, giving other community rental networks the digital infrastructure to operate.`,
      challenge: {
        text: `The software had been purpose-built for our own operations and only drew on our requirements, such as card payments, self-service collection and return, and centralised multi-location management. To license it elsewhere, we needed to understand what was genuinely universal and what needed to be rearchitected. At the start of our 18-month grant window we signed with a pilot partner: Benthyg, a lending network in Wales.`,
        screenshots: [
          { caption: 'User story mapping session with Benthyg', image: '/images/benthyguserstorymapping.jpg' },
        ],
      },
      approach: {
        text: `We ran two rounds of user story mapping with the Benthyg team to surface and prioritise their needs quickly - they required things like delivery reservations, cash payment support, and PAT Testing tracking on top of our existing feature set. From there, we did a structured gap analysis between what we had and what needed building, then planned the development across the first six months of the pilot.\n\nBefore launch we defined clear success criteria and used Benthyg team feedback and borrower satisfaction surveys to track them. Post-launch, I held regular cadence calls with the operating staff to capture what we'd missed and what needed fixing, folding them into our existing product planning process as a formal user group.\n\nAs new pilots came online in Barcelona and Walthamstow, we applied the same process - and deliberately prioritised features that were shared across multiple licensees (like translation to local language), so every build increased value for the whole network rather than serving one partner in isolation.`,
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
      overview: `Library of Things was spending heavily across paid social, paid search, and print advertising to acquire users - but the data showed that email was by far the cheapest conversion channel. The problem was that our sign-up flow was working against us: a clunky five-step process that didn't ask for an email address until the very end, after postcode and password. Conversion sat at a respectable 40%.`,
      challenge: {
        text: `The hypothesis was simple: if we could collect name, postcode and email address in the first step and use this as an initial sign-up without needing to create an account, we'd capture more email sign-ups even from users who dropped off, and bring down the cost of acquisition for paid users.\n\nThe existing flow was old and clunky and was never designed with conversion in mind. Changing it meant getting alignment across marketing, engineering, and the wider product team on what "minimum required" actually looked like.`,
        screenshots: [
          { caption: 'Original five-step sign-up flow', image: '/images/signup-flow.gif' },
        ],
      },
      approach: {
        text: `I briefed our designer to concept a two-step flow: step one capturing just name, postcode and email (the minimum needed to market to users and understand if they lived in a serviceable area) and step two allowing users to enter a password to create an account with us.\n\nAfter iterating internally with the marketing and dev team, we built and launched the new flow in four weeks. We shipped it behind a feature flag so it could be rolled back immediately if conversion dropped, which thankfully didn't happen.`,
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
    heading:    'Digging into customer service feedback to improve UX',
    subheading: 'Introducing a six-digit code at collection and return to meaningfully improve the user journey and reduce customer service calls',
    image:      '/images/dalston-kiosk-visual.jpg',
    imageAlt:   'Dalston Library of Things',
    post: {
      overview: `Library of Things' collection and return journey ran through in-person kiosk touchscreens where users authenticated themselves with their email address before they could open the locker(s) containing the item(s). Shortly after joining, I started hearing a consistent signal from the Customer Support team: users were regularly getting stuck during collection and return, leading to frustrated calls and long collection/return times.`,
      challenge: {
        text: `Speaking to Customer Support, reviewing user feedback forms, and analysing Google Analytics page timings all pointed to the same bottleneck: the email address entry screen. Typing a full email address on a horizontal touchscreen is slow and error-prone, and it was clearly where users were being held up and resulting in calling Customer Support to assist them, making the self-service selling point redundant.\n\nThe hypothesis was that replacing email entry with a short, memorable code would reduce friction at the kiosk, cut support calls tagged as 'collection/return issue', and meaningfully speed up the borrowing experience.`,
        screenshots: [
          { caption: 'Six-digit-code functionality at kiosk and screenshot', image: '/images/sixdigitcode.png' },
        ],
      },
      approach: {
        text: `We decided to silently attribute a unique six-digit code to each borrower at sign-up, backfilling codes for all existing users. Crucially, the code would remain the same throughout a borrower's entire lifecycle, with no unique codes for each collection/return. We considered and rejected unique codes as overengineering, since it would be a very long time before we approached 999,999 borrowers, so duplication simply wasn't a risk worth designing around. As for code misuse concerns, users could only open a locker if they have a reservation on that day at that kiosk and have the number, meaning it would be almost impossible for someone to brute force their way into a locker. \n\nTo make the code easy to find at the point of need, we introduced SMS messaging functionality alongside the existing email confirmation, so borrowers received their code through both channels and could pull it up quickly at the location.\n\nRather than rolling out site-wide immediately, we ran a two-month pilot at our Dalston location to catch any edge cases and gather early feedback before releasing successfully to all locations.`,
        screenshots: [],
      },
      outcomesSubtitle: `Support calls tagged as 'collection/return issue' dropped noticeably after launch, and average time spent at the kiosk fell by around 30 seconds per transaction. A small change in the user journey - replacing a long email field with a six-digit code - had a measurable effect on both operational costs and the borrower experience.`,
      outcomes: [
        { num: '↓30s',  label: 'Avg. kiosk time' },
        { num: '↓',     label: 'Collection/return support calls' },
        { num: '2mo',   label: 'Pilot before full rollout' },
      ],
    },
  },
];
