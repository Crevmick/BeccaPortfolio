import {
  ProfileData,
  ServiceItem,
  ToolCategory,
  ExperienceItem,
  OptimizationCase,
  MetricStat,
  ReelItem
} from "@/types/portfolio";

export const profileData: ProfileData = {
  name: "Rebecca Adewumi",
  role: "Social Media Manager | Content Strategist | Content Creator",
  bio: "I’m a social media manager, content strategist and content creator passionate about helping brands build a stronger online presence and connect with the right audience. I’ve worked with schools and business owners, helping them show up online more intentionally through content planning, content creation and social media management.",
  approach:
    "My approach is simple: I believe social media should be more than just posting consistently. A brand needs to understand who it wants to reach, what it wants to communicate and how to turn its online presence into meaningful connections and business opportunities.",
  pitch:
    "That’s where I come in: I help brands manage their online presence from planning, creating strategic content, engaging their audience and working towards their overall goals.",
  email: "Ariksbeccah@gmail.com",
  phone: "09067392367",
  accentColor: "#492A86"
};

export const servicesData: ServiceItem[] = [
  {
    id: "smm",
    number: "1",
    title: "Social Media Management",
    description:
      "Full account management, content scheduling, engagement and community management that grow your brand while you focus on scaling your business.",
    tag: "Core Service"
  },
  {
    id: "strategy",
    number: "2",
    title: "Content Strategy",
    description:
      "A tailored content roadmap that defines your content pillars, develops engaging ideas, and establishes a clear content calendar and messaging framework.",
    tag: "Roadmap"
  },
  {
    id: "creation",
    number: "3",
    title: "Content Creation",
    description:
      "Creating compelling visuals and engaging copy that communicate your brand’s value, capture attention, and turn ideas into impactful posts.",
    tag: "Production"
  },
  {
    id: "page-optimization",
    number: "4",
    title: "IG Page Optimization",
    description:
      "Optimizing your profile, bio, highlights, and overall page layout to communicate value clearly, improve discoverability, and convert visitors.",
    tag: "Conversion"
  },
  {
    id: "graphic-design",
    number: "5",
    title: "Basic Graphic Design",
    description:
      "Basic graphic design with clean, on-brand visuals that support your content and keep your page looking polished, coherent, and trustworthy.",
    tag: "Branding"
  },
  {
    id: "community",
    number: "6",
    title: "Community Management",
    description:
      "Daily engagement, replying to comments and direct messages, and building authentic connections that keep your audience active and coming back.",
    tag: "Engagement"
  },
  {
    id: "analytics-reporting",
    number: "7",
    title: "Analytics and Reporting",
    description:
      "Clear performance reporting that shows what your audience responds to and turns platform insights into practical next steps.",
    tag: "Performance"
  }
];

export const keyMetrics: MetricStat[] = [
  {
    label: "Reach & Views",
    value: "319,411",
    change: "+48.2%",
    subtext: "Total Impressions Generated"
  },
  {
    label: "TikTok Growth (Havilah)",
    value: "226 → 900+",
    change: "+300%",
    subtext: "Organic Student Engagement"
  },
  {
    label: "Instagram Growth (Havilah)",
    value: "0 → 100+",
    change: "Enrolments",
    subtext: "Student admissions began at ~60 followers"
  },
  {
    label: "Non-Follower Reach",
    value: "84.3%",
    change: "Viral Reach",
    subtext: "High-discovery algorithmic traction"
  }
];

export const reelsShowcase: ReelItem[] = [
  {
    id: "reel-1",
    title: "School Activity & Students Showcase",
    views: "142.5K",
    likes: "12.8K",
    caption: "Showcasing student learning experiences, creativity, and school programmes.",
    thumbnailUrl: "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=600&auto=format&fit=crop&q=80",
    category: "Havilah Schools"
  },
  {
    id: "reel-2",
    title: "Behind-The-Scenes African Cuisine",
    views: "89.2K",
    likes: "7.4K",
    caption: "Authentic food prep, catering orders, and storytelling in Germany.",
    thumbnailUrl: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&auto=format&fit=crop&q=80",
    category: "Forthright Kitchen"
  },
  {
    id: "reel-3",
    title: "Wig Styling & Hair Transformation",
    views: "98.7K",
    likes: "9.1K",
    caption: "Product texture highlights, install guides, and customer transformations.",
    thumbnailUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&auto=format&fit=crop&q=80",
    category: "Ecstatic Beauty Hub"
  }
];

export const creativeGridPosts = [
  {
    id: "post-1",
    title: "Parenting Tips & Guidance",
    tag: "Havilah Schools",
    color: "bg-amber-100",
    accent: "text-amber-900"
  },
  {
    id: "post-2",
    title: "Student Admissions Campaign",
    tag: "Admissions 2024",
    color: "bg-[#090d24]",
    accent: "text-yellow-300"
  },
  {
    id: "post-3",
    title: "International Day Celebrations",
    tag: "Special Events",
    color: "bg-[#492A86]",
    accent: "text-white"
  },
  {
    id: "post-4",
    title: "Artisanal African Pastries & Cakes",
    tag: "Forthright Germany",
    color: "bg-orange-500",
    accent: "text-white"
  },
  {
    id: "post-5",
    title: "Luxury Wig Collection Showcase",
    tag: "Ecstatic Beauty",
    color: "bg-slate-900",
    accent: "text-purple-300"
  },
  {
    id: "post-6",
    title: "Community Outreach & Advocacy",
    tag: "RelFond Nigeria",
    color: "bg-blue-600",
    accent: "text-white"
  }
];

export const toolsCategories: ToolCategory[] = [
  {
    category: "Scheduling & Management",
    tools: ["Buffer", "Notion", "Meta Business Suite"]
  },
  {
    category: "Communication",
    tools: ["Google Meet", "Discord", "WhatsApp"]
  },
  {
    category: "Design & Content",
    tools: ["Claude", "ChatGPT", "Canva"]
  },
  {
    category: "Video Editing",
    tools: ["CapCut", "InShot"]
  },
  {
    category: "Document Management",
    tools: ["Google Workspace"]
  }
];

export const experiencesData: ExperienceItem[] = [
  {
    id: "havilah-schools",
    company: "Havilah Schools",
    role: "Social Media Manager | Content Strategist | Content Creator",
    tag: "Education",
    overview:
      "Managed and grew Havilah Schools’ social media presence by developing content strategies, creating engaging content, and using social media to increase brand visibility, build trust with parents, and support student enrolment.",
    results: [
      {
        platform: "Instagram",
        growth: "0 → 100+ Followers",
        highlight: "Student enrolments began while page had ~60 followers"
      },
      {
        platform: "TikTok",
        growth: "226 → 900+ Followers",
        highlight: "Strategic student-centered content & consistent posting"
      },
      {
        platform: "Facebook",
        growth: "Established & Managed",
        highlight: "Expanded visibility beyond TikTok and Instagram"
      }
    ],
    responsibilities: [
      "Developed content strategies and content ideas aligned with the school’s educational values and admissions goals.",
      "Created educational videos, school activity highlights, promotional content, and engaging social media graphics.",
      "Planned and produced content showcasing students’ learning experiences, creativity, confidence, and school participation.",
      "Developed parent-focused content, including parenting tips and educational content designed to build trust with prospective parents.",
      "Created admission-focused content to support awareness and student enrolment efforts.",
      "Contributed to turning social media visibility into tangible business outcomes, with student enrolments recorded during the growth period."
    ],
    valueDelivered:
      "Helped transform the school’s social media presence from a limited platform presence into a broader digital visibility strategy focused on audience engagement, parent trust, and student enrolment."
  },
  {
    id: "forthright-kitchen",
    company: "Forthright Naija Kitchen & Pastries",
    role: "Social Media Manager | Content Strategist | Content Creator",
    location: "Germany",
    tag: "Food & Hospitality",
    overview:
      "Working with Forthright Naija Kitchen & Pastries, a food business based in Germany, to strengthen its online presence and showcase its Nigerian and African meals, pastries, snacks, custom cakes, and catering services through strategic social media content.",
    responsibilities: [
      "Content Strategy: Developed content ideas and plans tailored to the brand's offerings, target audience, and business goals.",
      "Content Creation: Created engaging content showcasing meals, pastries, custom cakes, and catering services.",
      "Brand Storytelling: Developed content around food preparation, customer experiences, catering events, and behind-the-scenes activities.",
      "Product Marketing: Created promotional content designed to increase product visibility, generate enquiries, and encourage orders."
    ],
    valueDelivered:
      "Established a strategic approach to presenting the brand online, using culinary storytelling and catering highlights to connect with potential customers across Germany."
  },
  {
    id: "ecstatic-beauty",
    company: "Ecstatic Beauty Hub",
    role: "Social Media Manager | Content Creator",
    tag: "Beauty & E-Commerce",
    overview:
      "Worked with Ecstatic Beauty Hub, a beauty brand specialising in hair and wigs, to revamp its Instagram page and improve how the brand presented itself online.",
    responsibilities: [
      "Instagram Page Revamp: Reviewed and refreshed the page to improve its overall presentation and create a more cohesive brand presence.",
      "Content Creation: Created social media content tailored to the brand’s products and target audience.",
      "Content Planning: Developed content ideas to showcase the brand’s hair products, attract potential customers, and improve product visibility."
    ],
    valueDelivered:
      "Helped improve the brand’s Instagram presence through page revamping and content creation, giving the business a stronger foundation for showcasing its products online."
  },
  {
    id: "relfond-nigeria",
    company: "RelFond Nigeria",
    role: "Communication Officer | Graphic Designer",
    tag: "Non-Profit / NGO",
    overview:
      "Supported RelFond Nigeria’s communication efforts by designing graphics and contributing to the organisation’s communication and online presence.",
    responsibilities: [
      "Graphic Design: Designed graphics to communicate the organisation’s activities, initiatives, announcements, and key messages effectively.",
      "Communication Support: Supported communication activities by presenting information clearly and professionally.",
      "Page Optimization: Optimized social media profiles to ensure the organisation’s digital identity reflected its mission."
    ],
    valueDelivered:
      "Contributed to RelFond Nigeria’s communication and brand presentation through graphic design, social media page optimization, and communication support."
  }
];

export const optimizationCases: OptimizationCase[] = [
  {
    title: "Instagram Page Optimization (Before & After)",
    client: "Ecstatic Beauty Hub & RelFond Nigeria",
    description:
      "Optimizing profile, bio hierarchy, highlights, and overall feed presentation to turn profile visitors into paying customers and engaged followers.",
    beforePoints: [
      "Bio lacked a clear value proposition or target audience hook",
      "No direct or trackable call-to-action link for orders & enquiries",
      "Inconsistent highlight covers with mixed visual styles",
      "Disjointed color palette making the brand look unestablished"
    ],
    afterPoints: [
      "Clear, high-converting bio stating exactly what the brand offers & how to order",
      "Branded custom highlight icons categorized by Services, Reviews & FAQs",
      "Streamlined WhatsApp & Enquiry button reducing customer friction",
      "Polished, coherent feed layout that immediately establishes authority"
    ]
  }
];
