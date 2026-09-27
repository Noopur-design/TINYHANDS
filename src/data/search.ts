export const sorts = ["featured", "new", "price-asc", "price-desc", "rating"] as const;
export type SortKey = (typeof sorts)[number];

export type ShopSearch = {
  q: string;
  cat: string;
  sort: SortKey;
  price: string;
};

const sortSet = new Set<string>(sorts);

export function isSort(value: unknown): value is SortKey {
  return typeof value === "string" && sortSet.has(value);
}

export function shopSearch(partial: Partial<ShopSearch> = {}): ShopSearch {
  return { q: "", cat: "all", sort: "featured", price: "all", ...partial };
}
