import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { money } from "@/data/catalog";
import { shopSearch } from "@/data/search";
import { fieldClass } from "@/components/site/ui";
import { Shell } from "@/components/site/shell";
import { shippingFor, subtotalOf, useHasHydrated, useShop } from "@/store/shop";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — TinyHands" }] }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const hydrated = useHasHydrated();
  const lines = useShop((s) => s.lines);
  const orders = useShop((s) => s.orders);
  const placeOrder = useShop((s) => s.placeOrder);
  const [done, setDone] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", address: "", city: "", notes: "" });
  const subtotal = subtotalOf(lines);
  const shipping = shippingFor(subtotal);
  const order = orders.find((item) => item.id === done);

  function set<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    if (!form.name.trim() || !form.address.trim() || !form.city.trim()) {
      setError("Name, address and city are required.");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Enter a valid email.");
      return;
    }
    const id = placeOrder({
      name: form.name.trim(),
      email: form.email.trim(),
      address: form.address.trim(),
      city: form.city.trim(),
    });
    if (!id) {
      setError("Your bag is empty.");
      return;
    }
    setError("");
    setDone(id);
  }

  return (
    <Shell>
      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
        <h1 className="text-3xl font-semibold tracking-tight">Checkout</h1>
        <p className="mt-2 text-sm text-mist">A demo checkout. Nothing is charged, and the order stays on this device.</p>
        {!hydrated ? (
          <p className="mt-8 text-sm text-mist">Loading your bag…</p>
        ) : done && order ? (
          <div className="mt-8 rounded-panel border border-line bg-paper p-6">
            <p className="text-xs tracking-widest text-cocoa uppercase">Order placed</p>
            <h2 className="mt-2 text-2xl font-semibold">{order.id}</h2>
            <p className="mt-2 text-sm text-bark">
              Thank you, {order.name}. We’ll pretend to pack this for {order.city}. Total {money(order.total)}.
            </p>
            <ul className="mt-4 space-y-1 text-sm text-mist">
              {order.lines.map((line) => (
                <li key={line.key}>
                  {line.qty} × {line.name}
                </li>
              ))}
            </ul>
            <Link to="/shop" search={shopSearch()} className="mt-6 inline-flex h-11 items-center rounded-full bg-bark px-5 text-sm text-ivory">
              Back to the shop
            </Link>
          </div>
        ) : lines.length === 0 ? (
          <div className="mt-10">
            <p>Your bag is empty.</p>
            <Link to="/shop" search={shopSearch()} className="mt-4 inline-flex h-11 items-center rounded-full bg-bark px-5 text-sm text-ivory">
              Browse the shop
            </Link>
          </div>
        ) : (
          <form onSubmit={submit} className="mt-8 grid gap-6 md:grid-cols-5">
            <div className="grid gap-4 md:col-span-3">
              <Field label="Full name" value={form.name} onChange={(v) => set("name", v)} />
              <Field label="Email" type="email" value={form.email} onChange={(v) => set("email", v)} />
              <Field label="Address" value={form.address} onChange={(v) => set("address", v)} />
              <Field label="City" value={form.city} onChange={(v) => set("city", v)} />
              <label className="block text-sm">
                Notes
                <textarea
                  value={form.notes}
                  onChange={(e) => set("notes", e.target.value)}
                  className="mt-1 min-h-24 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-base outline-none focus:border-cocoa"
                />
              </label>
              {error && <p className="text-sm text-bark">{error}</p>}
              <button type="submit" className="h-12 rounded-full bg-bark text-sm font-medium text-ivory hover:bg-ink">
                Place order · {money(subtotal + shipping)}
              </button>
            </div>
            <aside className="rounded-panel bg-sand p-5 text-sm md:col-span-2">
              <p className="font-medium">{lines.length} {lines.length === 1 ? "item" : "items"}</p>
              <p className="mt-3 flex justify-between"><span>Subtotal</span><span>{money(subtotal)}</span></p>
              <p className="mt-1 flex justify-between"><span>Shipping</span><span>{shipping ? money(shipping) : "Free"}</span></p>
              <p className="mt-2 flex justify-between font-semibold"><span>Total</span><span>{money(subtotal + shipping)}</span></p>
            </aside>
          </form>
        )}
      </div>
    </Shell>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
}) {
  return (
    <label className="block text-sm">
      {label}
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} className={`mt-1 ${fieldClass}`} required />
    </label>
  );
}
