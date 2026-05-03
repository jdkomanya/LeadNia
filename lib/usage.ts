import type { SupabaseClient } from "@supabase/supabase-js";

export async function getOrCreateUsageLimit(supabase: SupabaseClient, userId: string) {
  const { data, error } = await supabase.from("usage_limits").select("*").eq("user_id", userId).maybeSingle();
  if (error) throw error;
  if (data) return data;

  const resetDate = new Date();
  resetDate.setMonth(resetDate.getMonth() + 1);

  const { data: created, error: createError } = await supabase
    .from("usage_limits")
    .insert({
      user_id: userId,
      plan_name: "free",
      monthly_generation_limit: 10,
      generations_used: 0,
      reset_date: resetDate.toISOString().slice(0, 10)
    })
    .select("*")
    .single();

  if (createError) throw createError;
  return created;
}

export async function incrementUsage(supabase: SupabaseClient, userId: string, current: number) {
  const { error } = await supabase.from("usage_limits").update({ generations_used: current + 1 }).eq("user_id", userId);
  if (error) throw error;
}
