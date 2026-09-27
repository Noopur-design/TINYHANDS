import { createFileRoute, Link } from "@tanstack/react-router";
import { money } from "@/data/catalog";
import { Shell } from "@/components/site/shell";
import { useHasHydrated, useShop } from "@/store/shop";

export const Route = createFileRoute("/account")({
  head: () => ({ meta: [{ title: "Account — Lullora" }] }),
  component: function AccountPage() {
    const hydrated = useHasHydrated();
    const wishes = useShop((s) => s.wishlist.length);
    const count = useShop((s) => s.lines.reduce((n, l) => n + l.qty, 0));
    const orders = useShop((s) => s.orders);
    return (
      <Shell>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <p className="text-xs tracking-widest text-cocoa uppercase">This device</p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight">Your Lullora</h1>
          <p className="mt-3 max-w-prose text-sm text-bark">
            You’re browsing as a guest. Your bag, wishlist and demo orders stay in this browser — there’s no account to sign into.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <Link to="/wishlist" className="rounded-panel border border-line bg-paper p-5 hover:-translate-y-0.5">
              <p className="text-sm text-mist">Wishlist</p>
              <p className="mt-1 text-2xl font-semibold">{hydrated ? wishes : "—"}</p>
            </Link>
            <Link to="/cart" className="rounded-panel border border-line bg-paper p-5 hover:-translate-y-0.5">
              <p className="text-sm text-mist">In your bag</p>
              <p className="mt-1 text-2xl font-semibold">{hydrated ? count : "—"}</p>
            </Link>
          </div>
          <h2 className="mt-10 text-xl font-semibold">Orders on this device</h2>
          {!hydrated ? (
            <p className="mt-3 text-sm text-mist">Loading…</p>
          ) : orders.length === 0 ? (
            <p className="mt-3 text-sm text-mist">No demo orders yet.</p>
          ) : (
            <ul className="mt-4 space-y-3">
              {orders.map((order) => (
                <li key={order.id} className="rounded-2xl border border-line bg-paper p-4">
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-medium">{order.id}</p>
                    <p className="text-sm">{money(order.total)}</p>
                  </div>
                  <p className="mt-1 text-xs text-mist">
                    {new Date(order.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })} · {order.city}
                  </p>
                  <p className="mt-2 text-sm text-bark">{order.lines.map((l) => `${l.qty}× ${l.name}`).join(", ")}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Shell>
    );
  },
});
