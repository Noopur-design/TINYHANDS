import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart, Minus, Plus, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { getBySlug, money, offLabel, relatedTo, categoryMeta, type Product } from "@/data/catalog";
import { shopSearch } from "@/data/search";
import { cn } from "@/lib/cn";
import { ProductCard } from "@/components/site/product-card";
import { Shell } from "@/components/site/shell";
import { Stars } from "@/components/site/ui";
import { useShop } from "@/store/shop";

export const Route = createFileRoute("/product/$slug")({
  head: ({ params }) => ({
    meta: [{ title: `${getBySlug(params.slug)?.name ?? "Product"} — Lullora` }],
  }),
  component: ProductPage,
});

function ProductPage() {
  const { slug } = Route.useParams();
  const product = getBySlug(slug);
  if (!product) {
    return (
      <Shell>
        <div className="mx-auto max-w-lg px-4 py-24 text-center">
          <h1 className="text-3xl font-semibold">We couldn’t find that piece</h1>
          <Link to="/shop" search={shopSearch()} className="mt-6 inline-flex h-11 items-center rounded-full bg-bark px-5 text-sm text-ivory">
            Back to the shop
          </Link>
        </div>
      </Shell>
    );
  }
  return (
    <Shell>
      <ProductDetail key={product.id} product={product} />
    </Shell>
  );
}

function ProductDetail({ product }: { product: Product }) {
  const [color, setColor] = useState(product.colors[0]?.name ?? "");
  const [size, setSize] = useState(product.sizes[0] ?? "");
  const [qty, setQty] = useState(1);
  const [active, setActive] = useState(product.image);
  const wished = useShop((s) => s.wishlist.includes(product.id));
  const toggleWish = useShop((s) => s.toggleWish);
  const addLine = useShop((s) => s.addLine);
  const setDrawer = useShop((s) => s.setDrawer);
  const badge = offLabel(product.price, product.compareAt);
  const related = relatedTo(product);
  const gallery = [product.image];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <p className="text-sm text-mist">
        <Link to="/" className="hover:text-ink">Home</Link>
        <span className="px-2">/</span>
        <Link to="/shop" search={shopSearch({ cat: product.category })} className="hover:text-ink">
          {categoryMeta[product.category].name}
        </Link>
      </p>
      <div className="mt-6 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <div className="overflow-hidden rounded-panel border border-line bg-paper">
            <div className="relative aspect-square">
              {badge && (
                <span className="absolute top-4 left-4 rounded-full bg-blush px-3 py-1 text-xs font-medium text-bark">
                  {badge}
                </span>
              )}
              <img src={active} alt={product.name} className="h-full w-full object-contain p-8" />
            </div>
          </div>
          {gallery.length > 1 && (
            <div className="mt-3 flex gap-2">
              {gallery.map((src) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActive(src)}
                  className={cn("size-16 overflow-hidden rounded-2xl border", active === src ? "border-cocoa" : "border-line")}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
        <div>
          <p className="text-xs tracking-widest text-cocoa uppercase">{categoryMeta[product.category].name}</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight">{product.name}</h1>
          <div className="mt-3">
            <Stars value={product.rating} count={product.reviews} />
          </div>
          <p className="mt-4 flex items-baseline gap-3">
            <span className="text-2xl font-medium">{money(product.price)}</span>
            {product.compareAt && product.compareAt > product.price && (
              <span className="text-lg text-mist line-through">{money(product.compareAt)}</span>
            )}
          </p>
          <p className="mt-4 max-w-prose text-bark">{product.description}</p>
          {product.colors.length > 0 && (
            <fieldset className="mt-6">
              <legend className="text-sm font-medium">Color · {color}</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.colors.map((swatch) => (
                  <button
                    key={swatch.name}
                    type="button"
                    aria-label={swatch.name}
                    aria-pressed={color === swatch.name}
                    onClick={() => setColor(swatch.name)}
                    className={cn(
                      "size-11 rounded-full border-2",
                      color === swatch.name ? "border-bark" : "border-line",
                    )}
                    style={{ background: swatch.hex }}
                  />
                ))}
              </div>
            </fieldset>
          )}
          {product.sizes.length > 0 && (
            <fieldset className="mt-6">
              <legend className="text-sm font-medium">Size</legend>
              <div className="mt-2 flex flex-wrap gap-2">
                {product.sizes.map((option) => (
                  <button
                    key={option}
                    type="button"
                    aria-pressed={size === option}
                    onClick={() => setSize(option)}
                    className={cn(
                      "h-11 rounded-full border px-4 text-sm",
                      size === option ? "border-bark bg-bark text-ivory" : "border-line bg-paper text-bark",
                    )}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </fieldset>
          )}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <div className="inline-flex h-12 items-center rounded-full border border-line bg-paper">
              <button type="button" aria-label="Decrease quantity" className="inline-flex size-12 items-center justify-center" onClick={() => setQty((n) => Math.max(1, n - 1))}>
                <Minus className="size-4" />
              </button>
              <span className="w-8 text-center text-sm">{qty}</span>
              <button type="button" aria-label="Increase quantity" className="inline-flex size-12 items-center justify-center" onClick={() => setQty((n) => Math.min(8, n + 1))}>
                <Plus className="size-4" />
              </button>
            </div>
            <button
              type="button"
              className="h-12 flex-1 rounded-full bg-bark px-6 text-sm font-medium text-ivory hover:bg-ink"
              onClick={() => {
                addLine({ productId: product.id, color, size, qty });
                toast(`${product.name} added to bag`, {
                  action: { label: "View", onClick: () => setDrawer(true) },
                });
              }}
            >
              Add to bag
            </button>
            <button
              type="button"
              aria-pressed={wished}
              aria-label={wished ? "Remove from wishlist" : "Save to wishlist"}
              onClick={() => {
                toggleWish(product.id);
                toast(wished ? "Removed from wishlist" : "Saved to wishlist");
              }}
              className="inline-flex size-12 items-center justify-center rounded-full border border-line bg-paper"
            >
              <Heart className={cn("size-4", wished && "fill-bark")} />
            </button>
          </div>
          <ul className="mt-8 grid gap-3 text-sm text-bark sm:grid-cols-3">
            <li className="flex items-center gap-2 rounded-2xl bg-sand/70 px-3 py-3">
              <Truck className="size-4 shrink-0" /> Free over $75
            </li>
            <li className="flex items-center gap-2 rounded-2xl bg-sand/70 px-3 py-3">
              <RotateCcw className="size-4 shrink-0" /> 30-day returns
            </li>
            <li className="flex items-center gap-2 rounded-2xl bg-sand/70 px-3 py-3">
              <ShieldCheck className="size-4 shrink-0" /> Packed with care
            </li>
          </ul>
        </div>
      </div>
      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight">You may also like</h2>
          <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
