import { useEffect, useState } from "react";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getProduct } from "@/data/catalog";

export type CartLine = {
  key: string;
  productId: string;
  qty: number;
  color: string;
  size: string;
};

export type OrderLine = CartLine & { price: number; name: string; image: string };

export type Order = {
  id: string;
  name: string;
  email: string;
  city: string;
  address: string;
  total: number;
  shipping: number;
  createdAt: string;
  lines: OrderLine[];
};

type AddInput = {
  productId: string;
  color?: string;
  size?: string;
  qty?: number;
};

type ShopState = {
  lines: CartLine[];
  wishlist: string[];
  orders: Order[];
  drawer: boolean;
  addLine: (input: AddInput) => void;
  setQty: (key: string, qty: number) => void;
  removeLine: (key: string) => void;
  toggleWish: (id: string) => void;
  setDrawer: (open: boolean) => void;
  placeOrder: (info: { name: string; email: string; city: string; address: string }) => string | null;
};

// Amounts are in the catalog's base units; money() renders them in INR.
// FREE_OVER 60 → ≈ ₹4,999 free-shipping threshold shown in the footer.
const SHIPPING_FLAT = 8;
const FREE_OVER = 60;

export function shippingFor(subtotal: number) {
  if (subtotal <= 0) return 0;
  return subtotal >= FREE_OVER ? 0 : SHIPPING_FLAT;
}

export function subtotalOf(lines: CartLine[]) {
  return lines.reduce((sum, line) => sum + (getProduct(line.productId)?.price ?? 0) * line.qty, 0);
}

export const useShop = create<ShopState>()(
  persist(
    (set, get) => ({
      lines: [],
      wishlist: [],
      orders: [],
      drawer: false,
      addLine: (input) => {
        const color = input.color ?? "";
        const size = input.size ?? "";
        const key = `${input.productId}|${color}|${size}`;
        const qty = input.qty ?? 1;
        const existing = get().lines.find((line) => line.key === key);
        if (existing) {
          set({
            lines: get().lines.map((line) =>
              line.key === key ? { ...line, qty: Math.min(8, line.qty + qty) } : line,
            ),
          });
          return;
        }
        set({
          lines: [...get().lines, { key, productId: input.productId, color, size, qty: Math.min(8, qty) }],
        });
      },
      setQty: (key, qty) => {
        if (qty <= 0) {
          set({ lines: get().lines.filter((line) => line.key !== key) });
          return;
        }
        set({
          lines: get().lines.map((line) => (line.key === key ? { ...line, qty: Math.min(8, qty) } : line)),
        });
      },
      removeLine: (key) => set({ lines: get().lines.filter((line) => line.key !== key) }),
      toggleWish: (id) => {
        const has = get().wishlist.includes(id);
        set({ wishlist: has ? get().wishlist.filter((item) => item !== id) : [...get().wishlist, id] });
      },
      setDrawer: (open) => set({ drawer: open }),
      placeOrder: (info) => {
        const lines = get().lines;
        if (!lines.length) return null;
        const detailed: OrderLine[] = lines.map((line) => {
          const product = getProduct(line.productId);
          return {
            ...line,
            price: product?.price ?? 0,
            name: product?.name ?? "Item",
            image: product?.image ?? "",
          };
        });
        const subtotal = detailed.reduce((sum, line) => sum + line.price * line.qty, 0);
        const shipping = shippingFor(subtotal);
        const id = `LL-${Math.floor(100000 + Math.random() * 900000)}`;
        const order: Order = {
          id,
          ...info,
          total: subtotal + shipping,
          shipping,
          createdAt: new Date().toISOString(),
          lines: detailed,
        };
        set({ orders: [order, ...get().orders].slice(0, 12), lines: [] });
        return id;
      },
    }),
    {
      name: "tinyhands-shop",
      partialize: (state) => ({
        lines: state.lines,
        wishlist: state.wishlist,
        orders: state.orders,
      }),
    },
  ),
);

export function useHasHydrated() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    if (useShop.persist.hasHydrated()) setHydrated(true);
    return useShop.persist.onFinishHydration(() => setHydrated(true));
  }, []);
  return hydrated;
}

export const FREE_SHIPPING_OVER = FREE_OVER;
