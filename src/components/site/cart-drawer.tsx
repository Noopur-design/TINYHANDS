import { Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useEffect } from "react";
import { getProduct, money } from "@/data/catalog";
import { shopSearch } from "@/data/search";
import { FREE_SHIPPING_OVER, shippingFor, subtotalOf, useHasHydrated, useShop } from "@/store/shop";
import { IconButton } from "@/components/site/ui";

export function CartContents({ onNavigate }: { onNavigate?: () => void }) {
  const hydrated = useHasHydrated();
  const lines = useShop((s) => s.lines);
  const setQty = useShop((s) => s.setQty);
  const removeLine = useShop((s) => s.removeLine);
  const subtotal = subtotalOf(lines);
  const shipping = shippingFor(subtotal);

  if (!hydrated) {
    return <p className="py-10 text-center text-sm text-mist">Opening your bag…</p>;
  }

  if (!lines.length) {
    return (
      <div className="flex flex-col items-center gap-3 py-12 text-center">
        <ShoppingBag className="size-8 text-cocoa" />
        <p className="text-lg font-medium">Your bag is empty</p>
        <p className="max-w-xs text-sm text-mist">Knits, bears and carriers are waiting whenever you are.</p>
        <Link
          to="/shop"
          search={shopSearch()}
          onClick={onNavigate}
          className="mt-2 inline-flex h-11 items-center rounded-full bg-bark px-5 text-sm text-ivory"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <ul className="flex flex-col gap-3">
        {lines.map((line) => {
          const product = getProduct(line.productId);
          if (!product) return null;
          return (
            <li key={line.key} className="flex gap-3 rounded-2xl border border-line bg-paper p-3">
              <Link
                to="/product/$slug"
                params={{ slug: product.slug }}
                onClick={onNavigate}
                className="size-20 shrink-0 overflow-hidden rounded-xl bg-ivory"
              >
                <img src={product.image} alt="" className="h-full w-full object-contain p-1" />
              </Link>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-2">
                  <Link
                    to="/product/$slug"
                    params={{ slug: product.slug }}
                    onClick={onNavigate}
                    className="text-sm font-medium text-ink"
                  >
                    {product.name}
                  </Link>
                  <button
                    type="button"
                    aria-label={`Remove ${product.name}`}
                    onClick={() => removeLine(line.key)}
                    className="text-mist hover:text-bark"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
                <p className="mt-0.5 text-xs text-mist">
                  {[line.color, line.size].filter(Boolean).join(" · ") || categoryFallback(product.category)}
                </p>
                <div className="mt-2 flex items-center justify-between">
                  <div className="inline-flex items-center rounded-full border border-line">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      disabled={line.qty <= 1}
                      onClick={() => setQty(line.key, line.qty - 1)}
                      className="inline-flex size-9 items-center justify-center disabled:opacity-40"
                    >
                      <Minus className="size-3.5" />
                    </button>
                    <span className="w-6 text-center text-sm">{line.qty}</span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      disabled={line.qty >= 8}
                      onClick={() => setQty(line.key, line.qty + 1)}
                      className="inline-flex size-9 items-center justify-center disabled:opacity-40"
                    >
                      <Plus className="size-3.5" />
                    </button>
                  </div>
                  <p className="text-sm font-medium">{money(product.price * line.qty)}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      <div className="rounded-2xl bg-sand/70 p-4 text-sm">
        <Row label="Subtotal" value={money(subtotal)} />
        <Row label="Shipping" value={shipping === 0 ? "Free" : money(shipping)} />
        <Row label="Total" value={money(subtotal + shipping)} strong />
        <p className="mt-2 text-xs text-mist">
          {subtotal >= FREE_SHIPPING_OVER
            ? "You’ve got complimentary shipping."
            : `Add ${money(FREE_SHIPPING_OVER - subtotal)} for complimentary shipping.`}
        </p>
      </div>
      <Link
        to="/checkout"
        onClick={onNavigate}
        className="inline-flex h-12 items-center justify-center rounded-full bg-bark text-sm font-medium text-ivory hover:bg-ink"
      >
        Checkout
      </Link>
      <Link to="/cart" onClick={onNavigate} className="text-center text-sm text-cocoa underline-offset-4 hover:underline">
        Review bag
      </Link>
    </div>
  );
}

function categoryFallback(category: string) {
  return category;
}

function Row({ label, value, strong }: { label: string; value: string; strong?: boolean }) {
  return (
    <p className={`flex justify-between py-1 ${strong ? "text-base font-semibold text-ink" : "text-bark"}`}>
      <span>{label}</span>
      <span>{value}</span>
    </p>
  );
}

export function CartDrawer() {
  const open = useShop((s) => s.drawer);
  const setDrawer = useShop((s) => s.setDrawer);
  const count = useShop((s) => s.lines.reduce((n, l) => n + l.qty, 0));

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDrawer(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, setDrawer]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <button
        type="button"
        aria-label="Close bag"
        className="absolute inset-0 bg-ink/40"
        onClick={() => setDrawer(false)}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-labelledby="bag-title"
        className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-ivory shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <h2 id="bag-title" className="text-lg font-semibold">
            Your bag{count ? ` (${count})` : ""}
          </h2>
          <IconButton label="Close bag" onClick={() => setDrawer(false)}>
            <X className="size-4" />
          </IconButton>
        </div>
        <div className="flex-1 overflow-y-auto px-5 py-4">
          <CartContents onNavigate={() => setDrawer(false)} />
        </div>
      </aside>
    </div>
  );
}
