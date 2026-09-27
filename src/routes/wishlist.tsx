import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { products } from "@/data/catalog";
import { shopSearch } from "@/data/search";
import { ProductCard } from "@/components/site/product-card";
import { Shell } from "@/components/site/shell";
import { useHasHydrated, useShop } from "@/store/shop";

export const Route = createFileRoute("/wishlist")({
  head: () => ({ meta: [{ title: "Wishlist — TinyHands" }] }),
  component: function WishlistPage() {
    const hydrated = useHasHydrated();
    const ids = useShop((s) => s.wishlist);
    const saved = products.filter((p) => ids.includes(p.id));
    return (
      <Shell>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <h1 className="text-3xl font-semibold tracking-tight">Wishlist</h1>
          <p className="mt-2 text-sm text-mist">Kept on this device, next to your bag.</p>
          {!hydrated ? (
            <p className="mt-10 text-sm text-mist">Loading saved pieces…</p>
          ) : saved.length === 0 ? (
            <div className="mt-12 flex flex-col items-center text-center">
              <Heart className="size-8 text-cocoa" />
              <p className="mt-3 text-lg font-medium">Nothing saved yet</p>
              <Link to="/shop" search={shopSearch()} className="mt-5 inline-flex h-11 items-center rounded-full bg-bark px-5 text-sm text-ivory">
                Browse the shop
              </Link>
            </div>
          ) : (
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
              {saved.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </Shell>
    );
  },
});
