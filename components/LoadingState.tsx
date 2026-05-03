export function LoadingState({ label = "Working..." }: { label?: string }) {
  return <span className="inline-flex items-center text-sm font-medium text-brand-muted">{label}</span>;
}
