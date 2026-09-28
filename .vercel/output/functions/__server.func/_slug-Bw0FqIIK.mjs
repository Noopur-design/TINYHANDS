import { i as __toESM } from "./_runtime.mjs";
import { d as offLabel, m as shopSearch, n as categoryMeta, o as getBySlug, p as relatedTo, u as money } from "./_ssr/catalog-lAiNO47P.mjs";
import { X as require_react, w as require_jsx_runtime, x as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { d as RotateCcw, f as Plus, l as ShieldCheck, m as Minus, r as Truck, v as Heart } from "./_libs/lucide-react.mjs";
import { n as Route } from "./_ssr/router-Cw25ER5x.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { c as Stars, l as cn, m as useShop, s as Shell } from "./_ssr/shell-x-XvApxv.mjs";
import { t as ProductCard } from "./_ssr/product-card-4yWADkmF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-Bw0FqIIK.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const { slug } = Route.useParams();
	const product = getBySlug(slug);
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg px-4 py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-3xl font-semibold",
			children: "We couldn’t find that piece"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/shop",
			search: shopSearch(),
			className: "mt-6 inline-flex h-11 items-center rounded-full bg-bark px-5 text-sm text-ivory",
			children: "Back to the shop"
		})]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductDetail, { product }, product.id) });
}
function ProductDetail({ product }) {
	const [color, setColor] = (0, import_react.useState)(product.colors[0]?.name ?? "");
	const [size, setSize] = (0, import_react.useState)(product.sizes[0] ?? "");
	const [qty, setQty] = (0, import_react.useState)(1);
	const [active, setActive] = (0, import_react.useState)(product.image);
	const wished = useShop((s) => s.wishlist.includes(product.id));
	const toggleWish = useShop((s) => s.toggleWish);
	const addLine = useShop((s) => s.addLine);
	const setDrawer = useShop((s) => s.setDrawer);
	const badge = offLabel(product.price, product.compareAt);
	const related = relatedTo(product);
	const gallery = [product.image];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-mist",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:text-ink",
						children: "Home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "px-2",
						children: "/"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						search: shopSearch({ cat: product.category }),
						className: "hover:text-ink",
						children: categoryMeta[product.category].name
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid items-start gap-8 lg:grid-cols-2 lg:gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "overflow-hidden rounded-panel border border-line bg-paper",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-square",
						children: [badge && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "absolute top-4 left-4 rounded-full bg-blush px-3 py-1 text-xs font-medium text-bark",
							children: badge
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: active,
							alt: product.name,
							className: "h-full w-full object-contain p-8"
						})]
					})
				}), gallery.length > 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-3 flex gap-2",
					children: gallery.map((src) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setActive(src),
						className: cn("size-16 overflow-hidden rounded-2xl border", active === src ? "border-cocoa" : "border-line"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src,
							alt: "",
							className: "h-full w-full object-cover"
						})
					}, src))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-cocoa uppercase",
						children: categoryMeta[product.category].name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-2 text-4xl font-semibold tracking-tight",
						children: product.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stars, {
							value: product.rating,
							count: product.reviews
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-4 flex items-baseline gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-2xl font-medium",
							children: money(product.price)
						}), product.compareAt && product.compareAt > product.price && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lg text-mist line-through",
							children: money(product.compareAt)
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-prose text-bark",
						children: product.description
					}),
					product.colors.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("legend", {
							className: "text-sm font-medium",
							children: ["Color · ", color]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-wrap gap-2",
							children: product.colors.map((swatch) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-label": swatch.name,
								"aria-pressed": color === swatch.name,
								onClick: () => setColor(swatch.name),
								className: cn("size-11 rounded-full border-2", color === swatch.name ? "border-bark" : "border-line"),
								style: { background: swatch.hex }
							}, swatch.name))
						})]
					}),
					product.sizes.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
						className: "mt-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
							className: "text-sm font-medium",
							children: "Size"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-2 flex flex-wrap gap-2",
							children: product.sizes.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": size === option,
								onClick: () => setSize(option),
								className: cn("h-11 rounded-full border px-4 text-sm", size === option ? "border-bark bg-bark text-ivory" : "border-line bg-paper text-bark"),
								children: option
							}, option))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap items-center gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex h-12 items-center rounded-full border border-line bg-paper",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "Decrease quantity",
										className: "inline-flex size-12 items-center justify-center",
										onClick: () => setQty((n) => Math.max(1, n - 1)),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-4" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "w-8 text-center text-sm",
										children: qty
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": "Increase quantity",
										className: "inline-flex size-12 items-center justify-center",
										onClick: () => setQty((n) => Math.min(8, n + 1)),
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" })
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "h-12 flex-1 rounded-full bg-bark px-6 text-sm font-medium text-ivory hover:bg-ink",
								onClick: () => {
									addLine({
										productId: product.id,
										color,
										size,
										qty
									});
									toast(`${product.name} added to bag`, { action: {
										label: "View",
										onClick: () => setDrawer(true)
									} });
								},
								children: "Add to bag"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"aria-pressed": wished,
								"aria-label": wished ? "Remove from wishlist" : "Save to wishlist",
								onClick: () => {
									toggleWish(product.id);
									toast(wished ? "Removed from wishlist" : "Saved to wishlist");
								},
								className: "inline-flex size-12 items-center justify-center rounded-full border border-line bg-paper",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: cn("size-4", wished && "fill-bark") })
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "mt-8 grid gap-3 text-sm text-bark sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2 rounded-2xl bg-sand/70 px-3 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "size-4 shrink-0" }), " Free over ₹4,999"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2 rounded-2xl bg-sand/70 px-3 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4 shrink-0" }), " 30-day returns"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2 rounded-2xl bg-sand/70 px-3 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4 shrink-0" }), " Packed with care"]
							})
						]
					})
				] })]
			}),
			related.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-semibold tracking-tight",
					children: "You may also like"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid grid-cols-2 gap-3 md:grid-cols-4",
					children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product: item }, item.id))
				})]
			})
		]
	});
}
//#endregion
export { ProductPage as component };
