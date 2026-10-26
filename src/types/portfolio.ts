export interface MetricStat {
  label: string;
  value: string;
  change?: string;
  subtext?: string;
}

export interface ReelItem {
  id: string;
  title: string;
  views: string;
  likes: string;
  caption: string;
  thumbnailUrl: string;
  category: string;
}

export interface ProfileData {
  name: string;
  role: string;
  bio: string;
  approach: string;
  pitch: string;
  email: string;
  phone: string;
  accentColor: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tag?: string;
}

export interface ToolCategory {
  category: string;
  tools: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  location?: string;
  overview: string;
  results?: {
    platform: string;
    growth: string;
    highlight: string;
  }[];
  responsibilities: string[];
  valueDelivered: string;
  tag: string;
}

export interface OptimizationCase {
  title: string;
  client: string;
  description: string;
  beforePoints: string[];
  afterPoints: string[];
}
