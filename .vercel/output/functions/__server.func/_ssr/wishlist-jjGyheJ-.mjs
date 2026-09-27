import { f as products, m as shopSearch } from "./catalog-BuNK_tRO.mjs";
import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { v as Heart } from "../_libs/lucide-react.mjs";
import { m as useShop, p as useHasHydrated, s as Shell } from "./shell-CPOhcLFv.mjs";
import { t as ProductCard } from "./product-card-DpZLLu1n.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/wishlist-jjGyheJ-.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = function WishlistPage() {
	const hydrated = useHasHydrated();
	const ids = useShop((s) => s.wishlist);
	const saved = products.filter((p) => ids.includes(p.id));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-semibold tracking-tight",
				children: "Wishlist"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-mist",
				children: "Kept on this device, next to your bag."
			}),
			!hydrated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 text-sm text-mist",
				children: "Loading saved pieces…"
			}) : saved.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-12 flex flex-col items-center text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-8 text-cocoa" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-lg font-medium",
						children: "Nothing saved yet"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						search: shopSearch(),
						className: "mt-5 inline-flex h-11 items-center rounded-full bg-bark px-5 text-sm text-ivory",
						children: "Browse the shop"
					})
				]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4",
				children: saved.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.id))
			})
		]
	}) });
};
//#endregion
export { SplitComponent as component };
