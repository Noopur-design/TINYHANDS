import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { shopSearch, type ShopSearch } from "@/data/search";
import { cn } from "@/lib/cn";
import { useHasHydrated, useShop } from "@/store/shop";

type NavItem = { label: string; to: "/" | "/shop" | "/journal"; search?: ShopSearch; match: string };

const NAV: NavItem[] = [
  { label: "Home", to: "/", match: "home" },
  { label: "New arrivals", to: "/shop", search: shopSearch({ sort: "new" }), match: "new" },
  { label: "Clothing", to: "/shop", search: shopSearch({ cat: "clothing" }), match: "clothing" },
  { label: "Toys", to: "/shop", search: shopSearch({ cat: "toys" }), match: "toys" },
  { label: "Strollers", to: "/shop", search: shopSearch({ cat: "strollers" }), match: "strollers" },
  { label: "Feeding", to: "/shop", search: shopSearch({ cat: "feeding" }), match: "feeding" },
  { label: "Bags", to: "/shop", search: shopSearch({ cat: "bags" }), match: "bags" },
  { label: "Journal", to: "/journal", match: "journal" },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2 text-ink" aria-label="TinyHands home">
      <span className="flex size-9 items-center justify-center rounded-full border border-cocoa/50 font-display text-lg leading-none text-bark">
        T
      </span>
      <span className="font-display text-2xl tracking-wide">TinyHands</span>
    </Link>
  );
}

export function Header() {
  const [menu, setMenu] = useState(false);
  const [query, setQuery] = useState("");
  const hydrated = useHasHydrated();
  const count = useShop((s) => s.lines.reduce((n, line) => n + line.qty, 0));
  const wishes = useShop((s) => s.wishlist.length);
  const setDrawer = useShop((s) => s.setDrawer);
  const navigate = useNavigate();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const search = useRouterState({ select: (s) => s.location.search }) as Partial<ShopSearch>;

  useEffect(() => {
    setMenu(false);
  }, [path]);

  useEffect(() => {
    if (!menu) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menu]);

  function active(item: NavItem) {
    if (item.match === "home") return path === "/";
    if (item.match === "journal") return path.startsWith("/journal");
    if (path !== "/shop") return false;
    if (item.match === "new") return search.sort === "new" && (!search.cat || search.cat === "all");
    return search.cat === item.match;
  }

  function onSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const q = String(new FormData(event.currentTarget).get("q") ?? "");
    setMenu(false);
    void navigate({ to: "/shop", search: shopSearch({ q }) });
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-ivory/90 backdrop-blur-md">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-bark focus:px-4 focus:py-2 focus:text-ivory"
      >
        Skip to content
      </a>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-3 md:h-20 md:grid-cols-[1fr_auto_1fr]">
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-2xl border border-line bg-paper md:hidden"
            aria-label="Open menu"
            aria-expanded={menu}
            onClick={() => setMenu(true)}
          >
            <Menu className="size-5" />
          </button>
          <form onSubmit={onSearch} className="hidden md:block md:max-w-sm" role="search">
            <label className="relative block">
              <span className="sr-only">Search products</span>
              <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-mist" />
              <input
                name="q"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search clothing, toys, bags…"
                className="h-11 w-full rounded-full border border-line bg-paper pr-4 pl-11 text-sm outline-none focus:border-cocoa"
              />
            </label>
          </form>
          <div className="justify-self-center">
            <Logo />
          </div>
          <div className="flex items-center justify-end gap-2">
            <Link
              to="/wishlist"
              aria-label="Wishlist"
              className="relative hidden size-11 items-center justify-center rounded-2xl border border-line bg-paper sm:inline-flex"
            >
              <Heart className="size-4" />
              {hydrated && wishes > 0 && <Badge n={wishes} />}
            </Link>
            <button
              type="button"
              aria-label={`Open bag${hydrated && count ? `, ${count} items` : ""}`}
              onClick={() => setDrawer(true)}
              className="relative inline-flex size-11 items-center justify-center rounded-2xl border border-line bg-paper"
            >
              <ShoppingBag className="size-4" />
              {hydrated && count > 0 && <Badge n={count} />}
            </button>
            <Link
              to="/account"
              className="hidden h-11 items-center gap-2 rounded-full bg-bark px-4 text-sm text-ivory sm:inline-flex"
            >
              <User className="size-4" />
              Account
            </Link>
          </div>
        </div>
        <form onSubmit={onSearch} className="pb-3 md:hidden" role="search">
          <label className="relative block">
            <span className="sr-only">Search products</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-mist" />
            <input
              name="q"
              placeholder="Search the shop"
              className="h-12 w-full rounded-full border border-line bg-paper pr-4 pl-11 text-base outline-none focus:border-cocoa"
            />
          </label>
        </form>
        <nav className="hidden flex-wrap items-center justify-center gap-x-6 gap-y-2 pb-3 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <NavLink key={item.label} item={item} active={active(item)} />
          ))}
        </nav>
      </div>
      {menu && (
        <div className="fixed inset-0 z-50 flex flex-col bg-ivory md:hidden">
          <div className="flex items-center justify-between px-4 py-4">
            <Logo />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMenu(false)}
              className="inline-flex size-11 items-center justify-center rounded-2xl border border-line bg-paper"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 pb-8" aria-label="Mobile">
            {NAV.map((item) => (
              <NavLink key={item.label} item={item} active={active(item)} large />
            ))}
            <Link to="/wishlist" className="mt-4 inline-flex h-12 items-center gap-2 text-base">
              <Heart className="size-4" /> Wishlist
            </Link>
            <Link to="/account" className="inline-flex h-12 items-center gap-2 text-base">
              <User className="size-4" /> Account
            </Link>
            <Link to="/cart" className="inline-flex h-12 items-center gap-2 text-base">
              <ShoppingBag className="size-4" /> Bag
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function NavLink({ item, active, large }: { item: NavItem; active: boolean; large?: boolean }) {
  const className = cn(
    "text-sm transition hover:text-ink",
    large && "flex h-12 items-center border-b border-line text-lg",
    active ? "font-medium text-ink" : "text-mist",
  );
  if (item.to === "/shop") {
    return (
      <Link to="/shop" search={item.search ?? shopSearch()} className={className}>
        {item.label}
      </Link>
    );
  }
  if (item.to === "/journal") {
    return (
      <Link to="/journal" className={className}>
        {item.label}
      </Link>
    );
  }
  return (
    <Link to="/" className={className}>
      {item.label}
    </Link>
  );
}

function Badge({ n }: { n: number }) {
  return (
    <span className="absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-cocoa px-1 text-xs font-semibold text-ivory">
      {n}
    </span>
  );
}
