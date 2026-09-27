import { d as offLabel } from "./catalog-lAiNO47P.mjs";
import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as ShoppingBag, v as Heart } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { a as PriceTag, c as Stars, l as cn, m as useShop, r as IconButton } from "./shell-x-XvApxv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/product-card-4yWADkmF.js
var import_jsx_runtime = require_jsx_runtime();
function ProductCard({ product, dense = false, className }) {
	const wished = useShop((s) => s.wishlist.includes(product.id));
	const toggleWish = useShop((s) => s.toggleWish);
	const addLine = useShop((s) => s.addLine);
	const setDrawer = useShop((s) => s.setDrawer);
	const badge = offLabel(product.price, product.compareAt);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: cn("group relative flex flex-col rounded-3xl border border-line bg-paper p-3 transition duration-200 hover:-translate-y-0.5 lift", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/product/$slug",
				params: { slug: product.slug },
				className: "block overflow-hidden rounded-2xl bg-ivory",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-square",
					children: [badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "absolute left-3 top-3 z-10 rounded-full bg-blush px-2.5 py-1 text-xs font-medium text-bark",
						children: badge
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: product.name,
						className: "img-zoom h-full w-full object-contain p-3"
					})]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
				label: wished ? `Remove ${product.name} from wishlist` : `Save ${product.name}`,
				"aria-pressed": wished,
				onClick: () => {
					toggleWish(product.id);
					toast(wished ? "Removed from wishlist" : "Saved to wishlist");
				},
				className: "absolute right-2 top-2 z-10 size-10 border-transparent bg-paper/90",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("size-4", wished && "fill-bark text-bark") })
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-end justify-between gap-2 px-1 pt-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/product/$slug",
				params: { slug: product.slug },
				className: "min-w-0 flex-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "line-clamp-2 text-sm text-bark",
						children: product.name
					}),
					!dense && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
							value: product.rating,
							count: product.reviews
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PriceTag, {
							price: product.price,
							compare: product.compareAt
						})
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
				label: `Add ${product.name} to bag`,
				className: "size-10 shrink-0",
				onClick: () => {
					addLine({
						productId: product.id,
						color: product.colors[0]?.name ?? "",
						size: product.sizes[0] ?? ""
					});
					toast(`${product.name} added to bag`, { action: {
						label: "View",
						onClick: () => setDrawer(true)
					} });
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-4" })
			})]
		})]
	});
}
//#endregion
export { ProductCard as t };
