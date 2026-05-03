export function UsageBadge({ used, limit, plan }: { used: number; limit: number; plan: string }) {
  return (
    <div className="rounded-lg border border-brand-gold/30 bg-brand-gold/10 px-3 py-2 text-sm text-brand-green">
      <strong>{plan}</strong> - {used}/{limit} generations used
    </div>
  );
}
