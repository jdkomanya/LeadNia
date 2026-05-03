import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/supabaseServer";

export default async function AuthLayout({ children }: { children: React.ReactNode }) {
  const { user } = await getCurrentUser();
  if (user) redirect("/dashboard");

  return <main className="flex min-h-screen items-center justify-center bg-brand-bg px-4 py-10">{children}</main>;
}
