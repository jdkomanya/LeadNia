import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function FormField({ label, ...props }: Props) {
  return (
    <label className="grid gap-2 text-sm font-medium text-brand-text">
      {label}
      <input
        className="min-h-11 rounded-lg border border-gray-200 bg-white px-3 text-sm outline-none ring-brand-gold/30 transition focus:border-brand-gold focus:ring-4"
        {...props}
      />
    </label>
  );
}
