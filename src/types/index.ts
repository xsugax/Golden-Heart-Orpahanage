export interface DonationTier {
  id: string;
  name: string;
  amount: number;
  description: string;
  frequency: "one-time" | "weekly" | "monthly";
}

export interface Story {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: string;
}

export interface ImpactMetric {
  childrenSupported: number;
  programsActive: number;
  mealsServed: number;
  communitiesReached: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  recaptchaToken: string;
}

export interface DonationFormData {
  amount: number;
  frequency: "one-time" | "weekly" | "monthly";
  tier: string;
  donorName: string;
  donorEmail: string;
}
