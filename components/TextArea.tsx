import { TextareaHTMLAttributes } from "react";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

export function TextArea({ label, ...props }: Props) {
  return (
    <label className="grid gap-2 text-sm font-medium text-brand-text">
      {label}
      <textarea
        className="min-h-28 rounded-lg border border-gray-200 bg-white px-3 py-3 text-sm outline-none ring-brand-gold/30 transition focus:border-brand-gold focus:ring-4"
        {...props}
      />
    </label>
  );
}
