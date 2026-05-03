export type AuthorityProfile = {
  id: string;
  user_id: string;
  full_name: string | null;
  profession: string | null;
  country: string | null;
  city: string | null;
  niche: string | null;
  target_audience: string | null;
  topics_to_be_known_for: string | null;
  preferred_tone: string | null;
  phrases_to_avoid: string | null;
  desired_opportunities: string | null;
  local_context_rules: string | null;
  created_at: string;
  updated_at: string;
};

export type GeneratedPost = {
  id: string;
  user_id: string;
  platform: string | null;
  post_goal: string | null;
  topic: string | null;
  context_story: string | null;
  generated_linkedin_post: string | null;
  generated_facebook_post: string | null;
  generated_instagram_caption: string | null;
  generated_dm_followup: string | null;
  generated_canva_carousel_outline: Array<{ slide: number; title: string; text: string }> | null;
  status: "draft" | "ready" | "posted";
  created_at: string;
  updated_at: string;
};

export type UsageLimit = {
  id: string;
  user_id: string;
  plan_name: string;
  monthly_generation_limit: number;
  generations_used: number;
  reset_date: string | null;
  created_at: string;
  updated_at: string;
};
