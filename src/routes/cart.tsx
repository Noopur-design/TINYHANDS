import { createFileRoute, Link } from "@tanstack/react-router";
import { CartContents } from "@/components/site/cart-drawer";
import { Shell } from "@/components/site/shell";
import { shopSearch } from "@/data/search";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Your bag — TinyHands" }] }),
  component: function CartPage() {
    return (
      <Shell>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <h1 className="text-3xl font-semibold tracking-tight">Your bag</h1>
          <p className="mt-2 text-sm text-mist">
            Saved on this device.{" "}
            <Link to="/shop" search={shopSearch()} className="text-cocoa underline-offset-4 hover:underline">
              Keep browsing
            </Link>
          </p>
          <div className="mt-8">
            <CartContents />
          </div>
        </div>
      </Shell>
    );
  },
});
