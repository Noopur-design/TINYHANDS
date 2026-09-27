import { Star } from "lucide-react";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";
import { money } from "@/data/catalog";

export function Stars({ value, count }: { value: number; count?: number }) {
  return (
    <span className="inline-flex items-center gap-1">
      <span className="inline-flex" aria-label={`${value} out of 5 stars`}>
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className={cn("size-3.5", i < Math.round(value) ? "fill-cocoa text-cocoa" : "text-line")}
            aria-hidden="true"
          />
        ))}
      </span>
      {typeof count === "number" && <span className="text-xs text-mist">({count})</span>}
    </span>
  );
}

export function PriceTag({ price, compare }: { price: number; compare?: number }) {
  return (
    <p className="flex flex-wrap items-baseline gap-2">
      <span className="font-medium text-ink">{money(price)}</span>
      {compare && compare > price && (
        <span className="text-sm text-mist line-through">{money(compare)}</span>
      )}
    </p>
  );
}

export function IconButton({
  label,
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { label: string }) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "inline-flex size-11 items-center justify-center rounded-2xl border border-line bg-paper text-bark transition hover:border-taupe hover:bg-sand",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function PillButton({
  className,
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        "inline-flex h-11 items-center justify-center gap-2 rounded-full bg-bark px-5 text-sm font-medium text-ivory transition hover:bg-ink disabled:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function SectionTitle({
  title,
  subtitle,
  action,
}: {
  title: string;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-end justify-between gap-3 text-center sm:text-left">
      <div className="mx-auto sm:mx-0">
        <h2 className="text-2xl font-semibold tracking-tight text-ink md:text-3xl">{title}</h2>
        {subtitle && <p className="mt-1 text-sm text-mist">{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

export function Dots({
  pages,
  page,
  onChange,
}: {
  pages: number;
  page: number;
  onChange: (index: number) => void;
}) {
  if (pages < 2) return null;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: pages }, (_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Show group ${i + 1} of ${pages}`}
          aria-current={i === page}
          onClick={() => onChange(i)}
          className="inline-flex size-8 items-center justify-center"
        >
          <span className={cn("block size-2 rounded-full", i === page ? "bg-bark" : "bg-taupe")} />
        </button>
      ))}
    </div>
  );
}

export const fieldClass =
  "h-12 w-full rounded-2xl border border-line bg-paper px-4 text-base text-ink outline-none transition placeholder:text-mist focus:border-cocoa";
