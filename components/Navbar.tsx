import Link from "next/link";
import { Button } from "./Button";

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/5 bg-brand-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold text-brand-green">
          LeadNia
        </Link>
        <div className="hidden items-center gap-6 text-sm font-medium text-brand-muted md:flex">
          <Link href="/pricing">Pricing</Link>
          <Link href="/login">Login</Link>
          <Link href="/signup">
            <Button>Start creating</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
