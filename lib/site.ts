export const site = {
  name: "Nazmul Hoque",
  title: "Nazmul Hoque | AI-Powered Web Developer (Next.js & WordPress) and SEO Specialist",
  description:
    "I build fast Next.js and WordPress websites that rank on Google and show up in AI answers. SEO, AEO, GEO, Google Ads and Meta Ads for local businesses and growing brands.",
  url: "https://nazmuls-portfolio.vercel.app",
  email: "webnazmul2001@gmail.com",
  location: "Dhaka, Bangladesh",
  linkedin: "https://www.linkedin.com/in/nazmul-sujon/",
  github: "https://github.com/nazmulsujon",
  facebook: "https://www.facebook.com/nazmulsujon404",
  resume: "https://drive.google.com/uc?export=download&id=1F9igog-LXWl4_hmmChyvSYcB9Dgk60BD",
};

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Case study", href: "#case-study" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
];

export const stats = [
  { value: "7.21K", label: "organic clicks", note: "last 12 months" },
  { value: "415K", label: "search impressions", note: "last 12 months" },
  { value: "9.8", label: "average position", note: "Google Search Console" },
  { value: "7x", label: "more clicks", note: "Feb-May 2026 vs 2025" },
];

export const services = [
  {
    title: "Next.js websites",
    text: "Fast, mobile-first, server-rendered websites built with Next.js, React and TypeScript, ready to be crawled and ready to convert.",
    points: ["Core Web Vitals focused", "Clean, scalable code", "RTL and Arabic-ready builds"],
  },
  {
    title: "WordPress development",
    text: "Custom themes, Elementor or Gutenberg builds, speed optimization and WooCommerce stores that you can manage yourself.",
    points: ["Custom themes and layouts", "WooCommerce stores", "Speed and security tuning"],
  },
  {
    title: "SEO",
    text: "Technical, on-page and local SEO for any website, whether it runs on Next.js, WordPress or custom code.",
    points: ["Keyword research and mapping", "Schema, sitemaps, Core Web Vitals", "Local SEO and Search Console"],
  },
  {
    title: "AEO",
    text: "Answer Engine Optimization: content structured so search engines can pull it into featured snippets and voice answers.",
    points: ["Answer-first content", "FAQ and how-to structure", "Featured snippet targeting"],
  },
  {
    title: "GEO",
    text: "Generative Engine Optimization: clear content and structured data that AI tools like ChatGPT, Gemini and Perplexity can understand and cite.",
    points: ["Structured data (JSON-LD)", "Entity and brand clarity", "llms.txt and crawlable content"],
  },
  {
    title: "Google and Meta Ads",
    text: "Search, social and retargeting campaigns with conversion tracking, plus landing pages that turn clicks into enquiries.",
    points: ["Campaign setup and tracking", "Landing page optimization", "Monthly reporting"],
  },
];

export const caseStudy = {
  tag: "Case study",
  title: "Arabic local SEO: 7x more organic clicks, no ads",
  intro:
    "dammamusedfurniture.com buys used furniture, air conditioners and appliances in Dammam, Khobar, Qatif and Jubail. It started with a brand-new website and almost no search visibility. The goal: get found by nearby customers on Google, without paying for ads.",
  liveUrl: "https://www.dammamusedfurniture.com/",
  liveLabel: "Visit dammamusedfurniture.com",
  did: [
    "Built a fast, mobile-first Arabic (RTL) website with Next.js and Tailwind CSS.",
    "Mapped keywords to each service page, targeting the searches customers actually make.",
    "Optimized page content, titles, headings and internal links, one page at a time.",
    "Ran a local SEO strategy and tracked progress in Google Search Console.",
    "Kept improving based on what the data showed, month after month.",
  ],
  results: [
    { value: "7.21K", label: "organic clicks in 12 months" },
    { value: "415K", label: "impressions in 12 months" },
    { value: "9.8", label: "average position" },
    { value: "232 → 1.64K", label: "clicks, same 3 months a year apart" },
    { value: "8.98K → 105K", label: "impressions, same 3 months a year apart" },
    { value: "100%", label: "organic. No paid ads" },
  ],
  note: "Screenshots are from Google Search Console. Comparison period: Feb-May 2026 vs the same period in 2025.",
};

export const projects = [
  {
    name: "StayEase",
    kind: "Hotel booking website",
    text: "A boutique hotel website with room search by dates and guests, a rooms listing with filters, and user accounts.",
    image: "/projects/stayease.png",
    tech: ["Next.js", "Responsive UI"],
    live: "https://stayease-project.vercel.app/",
    code: "",
  },
  {
    name: "Dammam Used Furniture",
    kind: "Arabic local SEO website",
    text: "A fast Arabic (RTL) website for a used furniture and appliance buyer, built with Next.js and optimized for local search in Dammam, Khobar, Qatif and Jubail. See the case study above for the Search Console results.",
    image: "/projects/dammam-used-furniture.png",
    tech: ["Next.js", "Tailwind CSS", "Shadcn UI", "Framer Motion", "Arabic RTL", "Local SEO", "LocalBusiness schema"],
    live: "https://www.dammamusedfurniture.com/",
    code: "",
    featured: true,
  },
  {
    name: "Horizon Travels",
    kind: "Travel agency website",
    text: "A travel agency website with tour packages, destinations, travel services (air tickets, hotels, visa, Umrah and Hajj), client testimonials, an FAQ, and WhatsApp and free-quote calls to action.",
    image: "/projects/horizon-travels.png",
    tech: ["Next.js", "Responsive UI"],
    live: "https://horizon-travelss.vercel.app/",
    code: "",
  },
  {
    name: "Outeq",
    kind: "E-commerce platform",
    text: "A full-stack, responsive e-commerce website with separate dashboards for admin and buyer.",
    image: "/projects/outeq.jpg",
    tech: ["React", "Tailwind CSS", "Shadcn UI", "Node.js", "Express", "MongoDB", "Firebase"],
    live: "https://shop.digitalsolutions.ltd",
    code: "",
  },
  {
    name: "Your Meals",
    kind: "Food service and reviews",
    text: "A full-stack food service website where users can request a service and leave reviews.",
    image: "/projects/your-meals.png",
    tech: ["React", "Tailwind CSS", "DaisyUI", "Node.js", "Express", "MongoDB", "Firebase"],
    live: "https://your-meals-2d0c3.firebaseapp.com/",
    code: "https://github.com/nazmul68/your-meals-client",
  },
  {
    name: "Hero Coders",
    kind: "Learning platform",
    text: "An online learning application with courses and premium course access.",
    image: "/projects/hero-coders.png",
    tech: ["React", "React Bootstrap", "Firebase"],
    live: "https://hero-coders-auth.firebaseapp.com/",
    code: "https://github.com/nazmul68/hero-coders-client",
  },
  {
    name: "Quiz Station",
    kind: "Programming quiz practice",
    text: "A quiz practice app where users practice programming topics and get results instantly.",
    image: "/projects/quiz-station.png",
    tech: ["React", "React Bootstrap", "SweetAlert2"],
    live: "https://quiz-station09.netlify.app/",
    code: "https://github.com/nazmulsujon/quiz-station",
  },
];

export const skillGroups = [
  {
    title: "Development",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS", "WordPress", "Node.js", "Express", "MongoDB", "Firebase"],
  },
  {
    title: "SEO and answer engines",
    items: ["Technical SEO", "On-page SEO", "Local SEO", "Keyword research", "AEO", "GEO", "Schema markup", "Core Web Vitals"],
  },
  {
    title: "Ads and analytics",
    items: ["Google Ads", "Meta Ads", "Google Search Console", "Google Analytics"],
  },
  {
    title: "Workflow",
    items: ["AI-assisted development", "Prompt engineering", "Git and GitHub", "Figma", "Vercel"],
  },
];

export const steps = [
  { step: "01", title: "Audit", text: "I look at your site, your market and your competitors, and tell you honestly what is holding you back." },
  { step: "02", title: "Plan", text: "A clear scope: pages, keywords, structure, timeline and what we will measure." },
  { step: "03", title: "Build", text: "A fast, clean website with SEO built in from the first line, not added at the end." },
  { step: "04", title: "Grow", text: "Track clicks, impressions and rankings in Search Console, then keep improving." },
];

export const experience = [
  {
    role: "Frontend Developer",
    org: "Kalbela",
    period: "Sep 2024 - Sep 2025",
    text: "Website creation and maintenance, plus work on Kalbela Jobs.",
  },
  {
    role: "Frontend Engineer (Intern)",
    org: "Expatal",
    period: "Dec 2023 - Apr 2024",
    text: "Remote. TypeScript and Next.js.",
  },
  {
    role: "MERN Stack Developer (Intern)",
    org: "Bright Future",
    period: "May 2023 - Oct 2023",
    text: "Built user interfaces and integrated back-end services and databases.",
  },
];

export const faqs = [
  {
    q: "What kind of websites do you build?",
    a: "I build business and e-commerce websites with Next.js and WordPress: service sites, landing pages, WooCommerce stores and custom web apps. Every site is mobile-first, fast and structured for search from day one.",
  },
  {
    q: "How long does SEO take to show results?",
    a: "SEO is gradual. You can often see early movement within a few months, and results compound over 6 to 12 months. I do not promise rankings. I track clicks, impressions and average position in Google Search Console and report them to you.",
  },
  {
    q: "What are AEO and GEO?",
    a: "AEO (Answer Engine Optimization) structures your content so search engines can pull direct answers, such as featured snippets and voice results. GEO (Generative Engine Optimization) makes your content and structured data clear enough for AI tools like ChatGPT, Gemini and Perplexity to understand and cite.",
  },
  {
    q: "Can you add SEO to my existing WordPress or custom website?",
    a: "Yes. I run SEO work on any site, whether it is WordPress, Next.js or custom code. We start with an audit, fix technical issues first, then work on content and local visibility.",
  },
  {
    q: "Do you run Google Ads and Meta Ads?",
    a: "Yes. I set up Google Ads and Meta Ads campaigns with proper conversion tracking, and I pair them with landing pages built to convert. Ads can bring quick traffic while SEO builds up.",
  },
  {
    q: "How do we get started, and how is pricing decided?",
    a: "Send me a short message about your business and goals. I reply with questions, then a scope and quote. Pricing depends on the number of pages, languages and the work involved, so there is no one-size-fits-all number.",
  },
  {
    q: "Do you work with clients outside Bangladesh?",
    a: "Yes. I work remotely with clients worldwide and communicate by email and video calls.",
  },
];
