import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";

const audiences = [
  "Healthcare professionals",
  "Researchers",
  "Educators",
  "Consultants",
  "Founders",
  "NGO and public health professionals",
  "Professional service providers"
];

const features = [
  "Authority profile",
  "SLAY-based post generation",
  "Collaboration post mode",
  "Social platform adaptation",
  "Saved posts",
  "Content calendar",
  "Voice note placeholder",
  "Anti-generic writing guardrails"
];

export default function LandingPage() {
  return (
    <main>
      <Navbar />
      <section className="bg-brand-bg">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 font-semibold text-brand-gold">LeadNia means lead with purpose.</p>
            <h1 className="max-w-3xl text-5xl font-bold leading-tight text-brand-green md:text-6xl">
              Lead with purpose. Write with clarity.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-muted">
              LeadNia helps African professionals turn community work, research insights, field experience, and local innovation into credible LinkedIn and social media content.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/signup">
                <Button>
                  Start creating <ArrowRight size={18} />
                </Button>
              </Link>
              <Link href="#how">
                <Button variant="secondary">See how it works</Button>
              </Link>
            </div>
          </div>
          <div className="relative min-h-[520px] overflow-hidden rounded-[26px] bg-brand-green shadow-[0_30px_80px_rgba(15,61,46,0.2)]">
            <img
              src="https://images.pexels.com/photos/30677713/pexels-photo-30677713.jpeg?auto=compress&cs=tinysrgb&w=1400"
              alt="Professionals in Lagos discussing work with a laptop"
              className="h-full min-h-[520px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-brand-green/5 to-brand-green/70" />
            <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/25 bg-white/90 p-5 shadow-2xl backdrop-blur">
              <p className="font-bold text-brand-green">A community insight becomes a credible post.</p>
              <p className="mt-2 text-sm text-brand-muted">Built for African health, research, education, NGO, founder, and consulting realities.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-12 md:grid-cols-2">
        <Card>
          <h2 className="text-2xl font-bold text-brand-text">The problem</h2>
          <p className="mt-3 text-brand-muted">Most professionals have useful knowledge but struggle to communicate it consistently online.</p>
        </Card>
        <Card>
          <h2 className="text-2xl font-bold text-brand-text">The solution</h2>
          <p className="mt-3 text-brand-muted">LeadNia turns real stories, ideas, and professional context into thoughtful posts.</p>
        </Card>
      </section>

      <section id="how" className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-3xl font-bold text-brand-text">How it works</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {["Create your authority profile", "Add a topic or real experience", "Choose your goal", "Generate posts for LinkedIn, Facebook, Instagram, and DM follow-up"].map((step, index) => (
            <Card key={step}>
              <span className="text-sm font-bold text-brand-gold">0{index + 1}</span>
              <p className="mt-3 font-semibold text-brand-text">{step}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl shadow-soft">
          <img
            src="https://images.pexels.com/photos/8248290/pexels-photo-8248290.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Doctor giving a health lecture to women in Nigeria"
            className="h-full min-h-[420px] w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-bold text-brand-text">Who it is for</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {audiences.map((person) => (
              <p key={person} className="flex items-center gap-2 text-brand-muted">
                <CheckCircle2 className="text-brand-leaf" size={18} /> {person}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold text-brand-text">Key features</h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {features.map((feature) => (
              <p key={feature} className="flex items-center gap-2 text-brand-muted">
                <CheckCircle2 className="text-brand-leaf" size={18} /> {feature}
              </p>
            ))}
          </div>
        </div>
        <Card className="overflow-hidden p-0">
          <img
            src="https://images.pexels.com/photos/18788957/pexels-photo-18788957.jpeg?auto=compress&cs=tinysrgb&w=900"
            alt="African medical professional"
            className="h-72 w-full object-cover"
          />
          <div className="p-5">
            <h2 className="text-2xl font-bold text-brand-green">Visuals that match the message</h2>
            <p className="mt-2 text-brand-muted">Generate posts, captions, DM follow-ups, carousel outlines, and professional image prompts from the same real context.</p>
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12">
        <h2 className="text-3xl font-bold text-brand-text">Pricing preview</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {["Free", "Starter", "Professional", "Agency"].map((plan) => (
            <Card key={plan}>
              <h3 className="text-xl font-bold text-brand-green">{plan}</h3>
              <Link href="/pricing" className="mt-4 inline-flex text-sm font-semibold text-brand-leaf">View plan</Link>
            </Card>
          ))}
        </div>
      </section>

      <footer className="border-t border-black/5 bg-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-8 text-sm text-brand-muted">
          <p>&copy; 2026 LeadNia</p>
          <div className="flex gap-4">
            <Link href="/">Home</Link>
            <Link href="/pricing">Pricing</Link>
            <Link href="/login">Login</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
