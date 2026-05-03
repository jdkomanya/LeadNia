"use client";

import { useState } from "react";
import { Copy, Save, RefreshCw } from "lucide-react";
import { Button } from "./Button";
import { Card } from "./Card";
import { TextArea } from "./TextArea";
import { copyText } from "@/lib/utils";

export function OutputCard({
  title,
  value,
  onChange,
  onSave,
  onRegenerate
}: {
  title: string;
  value: string;
  onChange: (value: string) => void;
  onSave: () => void;
  onRegenerate: () => void;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await copyText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  }

  return (
    <Card className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="font-semibold text-brand-text">{title}</h3>
        <div className="flex gap-2">
          <Button variant="ghost" onClick={handleCopy} type="button" title="Copy">
            <Copy size={16} /> {copied ? "Copied" : "Copy"}
          </Button>
          <Button variant="secondary" onClick={onSave} type="button" title="Save">
            <Save size={16} /> Save
          </Button>
          <Button variant="ghost" onClick={onRegenerate} type="button" title="Regenerate">
            <RefreshCw size={16} /> Regenerate
          </Button>
        </div>
      </div>
      <TextArea label="Edit output" value={value} onChange={(event) => onChange(event.target.value)} rows={9} />
    </Card>
  );
}
