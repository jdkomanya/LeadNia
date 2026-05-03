import type { User } from "@supabase/supabase-js";

export function isAdminUser(user: User | null) {
  if (!user) return false;
  if (user.app_metadata?.role === "admin") return true;

  const adminEmails = (process.env.ADMIN_EMAILS || "")
    .split(",")
    .map((email) => email.trim().toLowerCase())
    .filter(Boolean);

  return Boolean(user.email && adminEmails.includes(user.email.toLowerCase()));
}

export function getBackendFeatureStatus() {
  return {
    openai: Boolean(process.env.OPENAI_API_KEY),
    supabase: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
    imageGeneration: Boolean(process.env.OPENAI_API_KEY)
  };
}
