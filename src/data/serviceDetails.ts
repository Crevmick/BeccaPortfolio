export type ServiceDetail = {
  slug: string;
  number: string;
  title: string;
  tag: string;
  summary: string;
  idealFor: string[];
  includes: string[];
  process: string[];
  outcomes: string[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "smm", number: "01", title: "Social Media Management", tag: "Full account management",
    summary: "Consistent, strategic management of your social channels—from planning and publishing to audience care and performance review.",
    idealFor: ["Busy founders who need reliable day-to-day support", "Schools and service brands ready to build visibility", "Teams that want one clear system for their content"],
    includes: ["Monthly content direction and calendar", "Content scheduling and publishing", "Caption and hashtag support", "Comment and message monitoring", "Monthly performance review"],
    process: ["Audit your current presence and priorities", "Build a practical monthly plan", "Create, approve, and schedule content", "Engage, review results, and refine"],
    outcomes: ["A more consistent and professional presence", "Clearer communication with your audience", "More time to focus on running your business"],
  },
  {
    slug: "strategy", number: "02", title: "Content Strategy", tag: "Tailored roadmap",
    summary: "A focused content roadmap that connects your audience, message, content pillars, and business goals.",
    idealFor: ["Brands posting without a clear direction", "Teams with ideas but no repeatable plan", "New pages preparing to launch or reposition"],
    includes: ["Audience and competitor review", "Content pillars and brand themes", "Messaging and content angles", "Format and channel recommendations", "A practical content calendar framework"],
    process: ["Clarify your goals and audience", "Review your current content and positioning", "Develop the strategic direction", "Deliver and walk through your roadmap"],
    outcomes: ["Less guesswork when creating content", "A stronger and more recognisable message", "Content ideas tied to real brand goals"],
  },
  {
    slug: "creation", number: "03", title: "Content Creation", tag: "Visuals and copy",
    summary: "On-brand content that turns your ideas, offers, and everyday brand moments into posts people can understand and engage with.",
    idealFor: ["Brands that need a dependable content partner", "Teams with raw footage but limited editing time", "Businesses refreshing their visual presence"],
    includes: ["Post and campaign concepts", "Short-form video editing", "Captions and calls to action", "Branded social graphics", "Platform-ready content formatting"],
    process: ["Agree on the brief and content goals", "Gather brand assets and source material", "Create and share content for review", "Refine and prepare final deliverables"],
    outcomes: ["Polished content that feels true to your brand", "A healthy mix of educational, promotional, and engaging posts", "Content prepared for consistent publishing"],
  },
  {
    slug: "page-optimization", number: "04", title: "IG Page Optimization", tag: "Profile and conversion",
    summary: "A strategic Instagram refresh that makes it easier for the right visitor to understand your value, trust your brand, and take action.",
    idealFor: ["Pages that look active but do not convert visitors", "New brands setting up Instagram properly", "Businesses repositioning an existing account"],
    includes: ["Profile and bio audit", "Name-field and keyword recommendations", "Call-to-action and link guidance", "Highlight structure and cover direction", "Feed presentation recommendations"],
    process: ["Review the page through a visitor's eyes", "Identify clarity and conversion gaps", "Rewrite and reorganise key profile elements", "Deliver recommendations and next steps"],
    outcomes: ["A clearer first impression", "Improved profile discoverability", "A smoother path from profile visit to enquiry"],
  },
  {
    slug: "graphic-design", number: "05", title: "Basic Graphic Design", tag: "Brand consistency",
    summary: "Clean, practical social graphics that keep your communication polished, consistent, and easy to recognise.",
    idealFor: ["Small brands needing regular social graphics", "Schools promoting events and announcements", "Teams without an in-house designer"],
    includes: ["Social media post designs", "Campaign and announcement graphics", "Simple carousel layouts", "Story graphics", "Brand-aligned typography and colours"],
    process: ["Confirm the message, format, and visual direction", "Create the first design concept", "Apply agreed revisions", "Supply platform-ready final files"],
    outcomes: ["A more cohesive social feed", "Clearer visual communication", "Reusable direction for future brand content"],
  },
  {
    slug: "community", number: "06", title: "Community Management", tag: "Audience care",
    summary: "Thoughtful, timely engagement that helps your audience feel heard and turns passive followers into a stronger community.",
    idealFor: ["Growing pages receiving more comments and messages", "Brands that want warmer customer relationships", "Teams that struggle to respond consistently"],
    includes: ["Comment and direct-message responses", "Proactive audience engagement", "Frequently asked question guidance", "Lead and enquiry flagging", "Audience feedback reporting"],
    process: ["Agree on your tone and response guidelines", "Organise common questions and escalation points", "Manage daily audience conversations", "Share useful feedback and recurring themes"],
    outcomes: ["More consistent audience care", "Stronger trust and brand loyalty", "Better visibility into audience questions and needs"],
  },
  {
    slug: "analytics-reporting", number: "07", title: "Analytics and Reporting", tag: "Performance and audit",
    summary: "Straightforward reporting that shows what is working, what needs attention, and how to make your next content decisions smarter.",
    idealFor: ["Brands that want decisions backed by performance data", "Teams unsure which content deserves more investment", "Accounts preparing for a new campaign or growth phase"],
    includes: ["Reach and engagement review", "Content and format comparison", "Audience discovery insights", "Top-performing content breakdown", "Clear recommendations for the next period"],
    process: ["Confirm the reporting period and goals", "Collect and organise platform insights", "Interpret patterns against your objectives", "Present findings and practical next actions"],
    outcomes: ["A clearer view of content performance", "Better-informed planning decisions", "A practical direction for future content"],
  },
];

export function getServiceDetail(slug: string) {
  return serviceDetails.find((service) => service.slug === slug);
}
