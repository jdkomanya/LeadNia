export type Platform = "LinkedIn" | "Facebook" | "Instagram" | "Multi-platform";

export type GeneratedContent = {
  linkedin_post: string;
  facebook_post: string;
  instagram_caption: string;
  dm_followup: string;
  canva_carousel_outline: Array<{
    slide: number;
    title: string;
    text: string;
  }>;
};

export type GeneratedImage = {
  image_base64: string;
  image_prompt: string;
  alt_text: string;
};

export type CalendarItem = {
  day: number;
  post_topic: string;
  post_angle: string;
  suggested_hook: string;
  platform: string;
  cta: string;
  content_type: string;
};
