"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { CalendarDays, FileText, Home, LogOut, Settings, Sparkles, UserRound } from "lucide-react";
import { createClient } from "@/lib/supabaseClient";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: Home },
  { href: "/profile", label: "Authority Profile", icon: UserRound },
  { href: "/generator", label: "Post Generator", icon: Sparkles },
  { href: "/saved-posts", label: "Saved Posts", icon: FileText },
  { href: "/calendar", label: "Calendar", icon: CalendarDays },
  { href: "/settings", label: "Settings", icon: Settings }
];

export function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await createClient().auth.signOut();
    router.push("/login");
  }

  return (
    <aside className="border-b border-black/5 bg-white lg:min-h-screen lg:w-72 lg:border-b-0 lg:border-r">
      <div className="flex items-center justify-between px-4 py-4 lg:block">
        <Link href="/dashboard" className="text-xl font-bold text-brand-green">
          LeadNia
        </Link>
        <button onClick={logout} className="inline-flex items-center gap-2 text-sm font-medium text-brand-muted lg:hidden">
          <LogOut size={16} /> Logout
        </button>
      </div>
      <nav className="flex gap-2 overflow-x-auto px-3 pb-4 lg:grid lg:overflow-visible">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex min-w-fit items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-brand-muted",
                pathname === item.href && "bg-brand-green text-white"
              )}
            >
              <Icon size={18} />
              {item.label}
            </Link>
          );
        })}
        <button
          onClick={logout}
          className="mt-4 hidden items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-medium text-brand-muted hover:bg-brand-green/5 lg:flex"
        >
          <LogOut size={18} />
          Logout
        </button>
      </nav>
    </aside>
  );
}
