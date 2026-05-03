import { redirect } from "next/navigation";
import { Sidebar } from "@/components/Sidebar";
import { getCurrentUser } from "@/lib/supabaseServer";

export default async function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const { user } = await getCurrentUser();
  if (!user) redirect("/login");

  return (
    <div className="min-h-screen bg-brand-bg lg:flex">
      <Sidebar />
      <main className="flex-1 px-4 py-6 lg:px-8">{children}</main>
    </div>
  );
}
