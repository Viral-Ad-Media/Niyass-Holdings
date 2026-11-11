/**
 * All site copy lives here so it can be edited in one place.
 *
 * Source: the original WordPress database export (Elementor data for pages
 * Home #10, What We Do #12, Work With Us / Retail #44, About #64, plus footer
 * widgets). Copy is verbatim except where marked "EDITED" below.
 */

export const site = {
  name: "Niyass Holdings",
  tagline: "E-commerce services for online marketplaces",
  description:
    "Niyass Holdings is the premier e-commerce services provider for emerging and Fortune 500 brands. Our end-to-end services span the supply chain, marketing, and brand protection.",
  url: "https://niyassholdings.com",
  phone: "1-(877)-646-4339",
  phoneHref: "tel:+18776464339",
  email: "support@niyassholdings.com",
};

/** Main menu (original order: HOME, ABOUT, WHAT WE DO, WORK WITH US). */
export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "What We Do", href: "/services" },
  { label: "Work With Us", href: "/retail" },
];

/**
 * Footer menus. On the old site every item here linked to "#" (no page
 * existed), so they point at the closest existing page for now.
 */
export const footerMenus = [
  {
    title: "Company",
    links: [
      { label: "What We Do", href: "/services" },
      { label: "Who We Are", href: "/about" },
      { label: "Investor Relations", href: "/contact" },
      { label: "Career Opportunities", href: "/contact" },
    ],
  },
  {
    title: "Partners",
    links: [
      { label: "Retail Partnership", href: "/retail" },
      { label: "Success Stories", href: "/services#results" },
      { label: "Resources", href: "/#resources" },
    ],
  },
];

/* ------------------------------ Home ------------------------------ */

export const home = {
  hero: {
    title: "We Partner with Brands to Sell on Amazon, Walmart, Target & Costco",
    image: "/images/art/buildings.svg",
    background: "/images/art/hero-bg.svg",
    primaryCta: { label: "Work With Us", href: "/retail" },
    secondaryCta: { label: "What We Do", href: "/services" },
  },
  resources: [
    {
      type: "eBook",
      title: "100+ Tips for Mastering Amazon Marketing",
      image: "/images/illustrations/ebook-100-tips.webp",
    },
    {
      type: "Webinar",
      // EDITED: original read "with Ottoman outlet", a leftover from a template.
      title: "Creating Sustainable Growth with Niyass Holdings",
      image: "/images/illustrations/growth.webp",
    },
    {
      type: "eBook",
      title: "How to Conduct an Amazon Competitor Analysis",
      image: "/images/illustrations/ebook-competitor-analysis.webp",
    },
  ],
  features: [
    {
      title: "Empower Your Business with Our Tech-Enabled Services",
      body: "From inventory management systems leveraging machine learning to AI-powered ad management software, our iterative technology suite provides industry-leading tools for protecting, positioning, and growing your brand across online marketplaces.",
      image: "/images/illustrations/ecosystem.webp",
    },
    {
      title: "Scale Globally with a Proven Partner",
      body: "Our data operations are designed to scale with volume, marketplaces, and markets. Since 2008, we’ve been developing world-class strategies backed by years of testing and billions of historic data points, all of which we use to strategically expand your brand around the world.",
      image: "/images/illustrations/global.webp",
    },
  ],
  press: {
    title: "As Featured In",
    logos: [
      { name: "Forbes", src: "/images/press/forbes-ar21.svg" },
      { name: "CNBC", src: "/images/press/cnbc-ar21.svg" },
      { name: "The Wall Street Journal", src: "/images/press/wsj-icon.svg" },
      { name: "GeekWire", src: "/images/press/icon-geek-wire-2.svg" },
      { name: "Business Insider", src: "/images/press/business-insider-logo-vector.svg" },
      { name: "MSN Money", src: "/images/press/msn-money.svg" },
    ],
  },
};

/** "Discover How We Help" band, used on several pages. */
export const discover = {
  title: "Discover How We Help",
  // EDITED: original read "how ottoman outlet can help".
  body: "Schedule a call with our friendly and knowledgeable team to discuss your company’s unique ecommerce needs. We’ll define challenges, goals, and how Niyass Holdings can help. Also, call or email us directly:",
  button: { label: "Schedule a call", href: "/contact" },
  image: "/images/art/consultation.svg",
};

/* --------------------------- What We Do --------------------------- */

export const services = {
  hero: {
    title: "E-Commerce Services that Make a Difference",
    body: "Your brand is unique and your solutions should be, too. Our e-commerce services bridge gaps in your existing resources and empower your next-level marketplace strategy.",
    image: "/images/art/services.svg",
  },
  heading: "Achieve the Results You Care About with Our E-Commerce Services",
  items: [
    {
      slug: "traffic",
      title: "Increase The Right Traffic",
      body: "You cannot sell what cannot be found. We improve your organic and paid placement on the search results and beyond, driving more traffic and sales.",
      list: ["Amazon Advertising", "Amazon DSP Advertising", "Amazon Coupons & Deals", "Amazon Listing Optimization"],
    },
    {
      slug: "conversions",
      title: "Boost Conversions to Maximize ROI",
      body: "Once shoppers reach your product pages, you need to persuade them to purchase. We boost conversion rates through high-quality images and videos, compelling copy, A+ Content, and Brand Stores.",
      list: ["Photography", "Videos", "Design & Copywriting Services", "Amazon A+ Content", "Amazon Brand Stores"],
    },
    {
      slug: "logistics",
      title: "Optimize Logistics",
      body: "From the first mile to the last, we provide the infrastructure and knowledge needed to operate a lean and diversified supply chain at scale.",
      list: ["Inventory Management", "Supply Chain Management", "FBA Product Preparation", "Dropship Optimization", "Seller Reimbursements", "New Product Launch"],
    },
    {
      slug: "protection",
      title: "Protect Your Brand",
      body: "Proactively protect your brand from IPR violations, counterfeits, unauthorized sellers, pricing violations, listing suppression, and account shutdowns.",
      list: ["Unauthorized Seller Removal", "Seller Account Recovery", "Amazon Listing Reinstatement", "Marketplace Compliance"],
    },
    {
      slug: "data",
      title: "Harness Better Data",
      body: "Good business decisions rely on great data. We provide unique, comprehensive, easy-to-understand reports for marketing, sales, inventory, and overall competitiveness.",
      list: ["Performance Reporting"],
    },
  ],
  results: {
    title: "Explore Our Results",
    body: "Our e-commerce services deliver meaningful results. Explore our case studies for seller and vendors across multiple categories.",
  },
};

/* --------------------- Work With Us (Retail) ---------------------- */

export const retail = {
  hero: {
    title: "Sell More on Amazon with Our Tech-Driven Retail Platform",
    body: "Grow sales, prevent out-of-stocks, and protect brand integrity. Through unrivaled expertise and proprietary technology, we grow brands across today’s leading online marketplaces.",
    image: "/images/illustrations/retail-hero.webp",
  },
  trackRecord: {
    title: "Our Track Record of Success",
    // The old page only had a value for the first stat; the other two were blank.
    stats: [{ value: "$1B+", label: "In retail sales" }],
  },
  cost: {
    title: "What Does it Cost?",
    answer: "NOT A DIME.",
    body: "As your retailer, we’ll purchase your products, manage the sales tax nexus, pay warehousing fees, and handle the logistics from the first mile to the last.",
  },
  ai: {
    title: "Retail Enhanced by AI Technology",
    body: "Scaling your business online requires sophisticated automation. We solve that problem with world-class software and services for online marketplaces.",
    items: [
      {
        title: "AI-Driven Inventory Forecasting",
        body: "Efficient cashflow management and strategic planning relies on accurate inventory and sales forecasts. For each of our Retail partners we combine their API-collected report data, proprietary algorithms, and human expertise to ensure optimal inventory coverage.",
        image: "/images/illustrations/trajectory.webp",
      },
      {
        title: "Dropship Optimization",
        body: "Offer more of your catalog, protect against out-of-stocks, and rapidly respond to unseasonal demand. Our dropship order management system enables automated repricing, SKU creation, and dynamic shipping cost analysis.",
        image: "/images/illustrations/dropship.webp",
      },
      {
        title: "Marketing Automation",
        body: "Maximize your Amazon advertising revenue through our proven marketing strategies. Powered by leading tools and guided by human expertise, our marketing increases sales 30% with a 10% ACOS, on average.",
        image: "/images/illustrations/ad-management.webp",
      },
      {
        title: "Inventory Reconciliation",
        body: "Amazon’s FBA centers regularly mishandle inventory without reimbursing sellers, and many sellers pass these costs onto brands. We protect your margins by using our inventory reconciliation software to correct the issue at its source.",
        image: "/images/illustrations/seller-alert.webp",
      },
      {
        title: "Risk Mitigation",
        body: "We’ll use our proprietary algorithm to assess product listings for legal and marketplace compliance, mitigating risks before they harm your business.",
        image: "/images/illustrations/security.webp",
      },
      {
        // EDITED: the old page repeated "Dropship Optimization" as this title.
        title: "Performance Reporting",
        body: "Good decisions rely on good data. We’ll provide regular reports for inbound inventory levels, sales, marketing, competitive pricing, Buy Box percentage, and more.",
        image: "/images/illustrations/reporting.webp",
      },
    ],
  },
};

/* ------------------------------ About ----------------------------- */

export const about = {
  hero: {
    title: "Your One-Stop-Shop for Online Marketplaces",
    body: "Niyass Holdings is the premier e-commerce services provider for emerging and Fortune 500 brands. Our end-to-end services span the supply chain, marketing, and brand protection.",
  },
  story: {
    title: "Our Story",
    body: "We broke into e-commerce in 2008 and quickly grew into a top FBA seller on Amazon, developing strategies and tech that have driven over $1 billion in sales. Today, we partner with leading brands across online marketplaces as their retailer.",
    image: "/images/art/buildings.svg",
  },
  mission: {
    title: "Our Mission & Vision",
    body: "Our mission is to accelerate brands’ growth on today’s leading online marketplaces. Our vision is to be the global leader in the Brand Accelerator industry.",
    image: "/images/illustrations/summit.webp",
  },
  values: {
    title: "We Are Niyass Holdings",
    body: "Our values define the behaviors that permeate our culture. Do these values resonate with you? Apply to join the team!",
    items: [
      { title: "We Are Partner Obsessed", body: "Our customers are our partners. Every decision is focused on building mutually beneficial relationships that deliver results." },
      { title: "We Are Insights Driven", body: "We make data actionable. Our curiosity drives us to discover opportunities early and often." },
      { title: "We Create Simplicity", body: "We challenge the status quo. We take the complicated and simplify it." },
      { title: "We Take Ownership", body: "We make things happen. We hold ourselves accountable and have a bias for action." },
      { title: "We Empower Each Other", body: "We welcome and learn from diverse experiences. Our empathy ignites innovation and empowers meaningful change." },
    ],
  },
};

/* ----------------------------- Contact ---------------------------- */

export const interests = [
  "Retail partnership",
  "Advertising & traffic",
  "Conversion & creative",
  "Logistics & inventory",
  "Brand protection",
  "Reporting & data",
  "Careers",
  "Investor relations",
  "Something else",
];
