import { Link } from "@tanstack/react-router";
import { Heart, ShoppingBag } from "lucide-react";
import { toast } from "sonner";
import type { Product } from "@/data/catalog";
import { offLabel } from "@/data/catalog";
import { cn } from "@/lib/cn";
import { useShop } from "@/store/shop";
import { IconButton, PriceTag, Stars } from "@/components/site/ui";

export function ProductCard({
  product,
  dense = false,
  className,
}: {
  product: Product;
  dense?: boolean;
  className?: string;
}) {
  const wished = useShop((s) => s.wishlist.includes(product.id));
  const toggleWish = useShop((s) => s.toggleWish);
  const addLine = useShop((s) => s.addLine);
  const setDrawer = useShop((s) => s.setDrawer);
  const badge = offLabel(product.price, product.compareAt);

  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-3xl border border-line bg-paper p-3 transition duration-200 hover:-translate-y-0.5 lift",
        className,
      )}
    >
      <div className="relative">
        <Link
          to="/product/$slug"
          params={{ slug: product.slug }}
          className="block overflow-hidden rounded-2xl bg-ivory"
        >
          <div className="relative aspect-square">
            {badge && (
              <span className="absolute left-3 top-3 z-10 rounded-full bg-blush px-2.5 py-1 text-xs font-medium text-bark">
                {badge}
              </span>
            )}
            <img
              src={product.image}
              alt={product.name}
              className="img-zoom h-full w-full object-contain p-3"
            />
          </div>
        </Link>
        <IconButton
          label={wished ? `Remove ${product.name} from wishlist` : `Save ${product.name}`}
          aria-pressed={wished}
          onClick={() => {
            toggleWish(product.id);
            toast(wished ? "Removed from wishlist" : "Saved to wishlist");
          }}
          className="absolute right-2 top-2 z-10 size-10 border-transparent bg-paper/90"
        >
          <Heart className={cn("size-4", wished && "fill-bark text-bark")} />
        </IconButton>
      </div>
      <div className="flex items-end justify-between gap-2 px-1 pt-3">
        <Link to="/product/$slug" params={{ slug: product.slug }} className="min-w-0 flex-1">
          <h3 className="line-clamp-2 text-sm text-bark">{product.name}</h3>
          {!dense && (
            <div className="mt-1">
              <Stars value={product.rating} count={product.reviews} />
            </div>
          )}
          <div className="mt-1">
            <PriceTag price={product.price} compare={product.compareAt} />
          </div>
        </Link>
        <IconButton
          label={`Add ${product.name} to bag`}
          className="size-10 shrink-0"
          onClick={() => {
            addLine({
              productId: product.id,
              color: product.colors[0]?.name ?? "",
              size: product.sizes[0] ?? "",
            });
            toast(`${product.name} added to bag`, {
              action: { label: "View", onClick: () => setDrawer(true) },
            });
          }}
        >
          <ShoppingBag className="size-4" />
        </IconButton>
      </div>
    </article>
  );
}
