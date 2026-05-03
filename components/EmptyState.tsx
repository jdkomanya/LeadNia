import { Card } from "./Card";

export function EmptyState({ title, message }: { title: string; message: string }) {
  return (
    <Card className="text-center">
      <h3 className="text-lg font-semibold text-brand-text">{title}</h3>
      <p className="mt-2 text-sm text-brand-muted">{message}</p>
    </Card>
  );
}
