import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { categoryMeta, filterProducts, type CategoryId } from "@/data/catalog";
import { isSort, shopSearch, type ShopSearch, type SortKey } from "@/data/search";
import { cn } from "@/lib/cn";
import { ProductCard } from "@/components/site/product-card";
import { Shell } from "@/components/site/shell";

export const Route = createFileRoute("/shop")({
  validateSearch: (search: Record<string, unknown>): ShopSearch => ({
    q: typeof search.q === "string" ? search.q : "",
    cat: typeof search.cat === "string" ? search.cat : "all",
    sort: isSort(search.sort) ? search.sort : "featured",
    price: typeof search.price === "string" ? search.price : "all",
  }),
  head: () => ({ meta: [{ title: "Shop — TinyHands" }] }),
  component: ShopPage,
});

const prices = [
  { id: "all", label: "Any price" },
  { id: "25", label: "Under ₹2,000" },
  { id: "50", label: "₹2,000 – ₹4,000" },
  { id: "100", label: "₹4,000 – ₹8,000" },
  { id: "100plus", label: "₹8,000 and up" },
];

const sortLabels: { id: SortKey; label: string }[] = [
  { id: "featured", label: "Featured" },
  { id: "new", label: "Newest" },
  { id: "price-asc", label: "Price, low to high" },
  { id: "price-desc", label: "Price, high to low" },
  { id: "rating", label: "Top rated" },
];

function ShopPage() {
  const search = Route.useSearch();
  const navigate = useNavigate({ from: "/shop" });
  const [open, setOpen] = useState(false);
  const list = filterProducts(search);
  const title =
    search.q.trim().length > 0
      ? `Results for “${search.q.trim()}”`
      : search.cat !== "all" && search.cat in categoryMeta
        ? categoryMeta[search.cat as CategoryId].name
        : "The shop";

  function update(partial: Partial<ShopSearch>) {
    void navigate({ search: { ...search, ...partial } });
  }

  return (
    <Shell>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <p className="text-xs tracking-widest text-mist uppercase">TinyHands</p>
        <h1 className="mt-1 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h1>
        {search.cat !== "all" && search.cat in categoryMeta && (
          <p className="mt-2 max-w-xl text-sm text-mist">{categoryMeta[search.cat as CategoryId].blurb}</p>
        )}
        <div className="mt-8 grid gap-8 lg:grid-cols-[240px_1fr]">
          <div className={cn("lg:block", open ? "block" : "hidden")}>
            <Filters search={search} onChange={update} />
          </div>
          <div>
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm text-mist">
                {list.length} {list.length === 1 ? "piece" : "pieces"}
              </p>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  className="inline-flex h-11 items-center gap-2 rounded-full border border-line bg-paper px-4 text-sm lg:hidden"
                  onClick={() => setOpen((v) => !v)}
                  aria-expanded={open}
                >
                  <SlidersHorizontal className="size-4" />
                  Filters
                </button>
                <label className="sr-only" htmlFor="sort">
                  Sort
                </label>
                <select
                  id="sort"
                  value={search.sort}
                  onChange={(e) => update({ sort: isSort(e.target.value) ? e.target.value : "featured" })}
                  className="h-11 rounded-full border border-line bg-paper px-4 text-sm"
                >
                  {sortLabels.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {list.length === 0 ? (
              <div className="rounded-panel border border-dashed border-taupe bg-paper px-6 py-16 text-center">
                <p className="text-lg font-medium">Nothing matches that.</p>
                <p className="mt-2 text-sm text-mist">Try another word, or clear the filters.</p>
                <button
                  type="button"
                  onClick={() => update(shopSearch())}
                  className="mt-5 inline-flex h-11 items-center rounded-full bg-bark px-5 text-sm text-ivory"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
                {list.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
        <p className="mt-8 text-sm text-mist">
          Looking for a story instead? <Link to="/journal" className="text-cocoa underline-offset-4 hover:underline">Read the journal</Link>.
        </p>
      </div>
    </Shell>
  );
}

function Filters({
  search,
  onChange,
}: {
  search: ShopSearch;
  onChange: (partial: Partial<ShopSearch>) => void;
}) {
  const cats: { id: string; label: string }[] = [
    { id: "all", label: "Everything" },
    ...Object.entries(categoryMeta).map(([id, meta]) => ({ id, label: meta.name })),
  ];
  return (
    <aside className="rounded-panel border border-line bg-paper p-5" aria-label="Filters">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold">Filters</h2>
        <button type="button" className="text-xs text-cocoa" onClick={() => onChange(shopSearch({ q: search.q }))}>
          Reset
        </button>
      </div>
      <fieldset className="mt-4">
        <legend className="text-xs tracking-widest text-mist uppercase">Category</legend>
        <div className="mt-2 flex flex-col gap-1">
          {cats.map((cat) => (
            <label key={cat.id} className="flex cursor-pointer items-center gap-2 rounded-xl px-2 py-2 text-sm hover:bg-sand">
              <input
                type="radio"
                name="cat"
                checked={search.cat === cat.id}
                onChange={() => onChange({ cat: cat.id })}
                className="accent-bark"
              />
              {cat.label}
            </label>
          ))}
        </div>
      </fieldset>
      <fieldset className="mt-5">
        <legend className="text-xs tracking-widest text-mist uppercase">Price</legend>
        <div className="mt-2 flex flex-col gap-1">
          {prices.map((price) => (
            <label key={price.id} className="flex cursor-pointer items-center gap-2 rounded-xl px-2 py-2 text-sm hover:bg-sand">
              <input
                type="radio"
                name="price"
                checked={search.price === price.id}
                onChange={() => onChange({ price: price.id })}
                className="accent-bark"
              />
              {price.label}
            </label>
          ))}
        </div>
      </fieldset>
    </aside>
  );
}
