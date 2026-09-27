import { i as __toESM } from "../_runtime.mjs";
import { i as filterProducts, l as isSort, m as shopSearch, n as categoryMeta } from "./catalog-lAiNO47P.mjs";
import { S as useNavigate, X as require_react, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as SlidersHorizontal } from "../_libs/lucide-react.mjs";
import { i as Route$4 } from "./router-1Zgt3MMD.mjs";
import { l as cn, s as Shell } from "./shell-x-XvApxv.mjs";
import { t as ProductCard } from "./product-card-4yWADkmF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shop-C_JBECJ6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var prices = [
	{
		id: "all",
		label: "Any price"
	},
	{
		id: "25",
		label: "Under ₹2,000"
	},
	{
		id: "50",
		label: "₹2,000 – ₹4,000"
	},
	{
		id: "100",
		label: "₹4,000 – ₹8,000"
	},
	{
		id: "100plus",
		label: "₹8,000 and up"
	}
];
var sortLabels = [
	{
		id: "featured",
		label: "Featured"
	},
	{
		id: "new",
		label: "Newest"
	},
	{
		id: "price-asc",
		label: "Price, low to high"
	},
	{
		id: "price-desc",
		label: "Price, high to low"
	},
	{
		id: "rating",
		label: "Top rated"
	}
];
function ShopPage() {
	const search = Route$4.useSearch();
	const navigate = useNavigate({ from: "/shop" });
	const [open, setOpen] = (0, import_react.useState)(false);
	const list = filterProducts(search);
	const title = search.q.trim().length > 0 ? `Results for “${search.q.trim()}”` : search.cat !== "all" && search.cat in categoryMeta ? categoryMeta[search.cat].name : "The shop";
	function update(partial) {
		navigate({ search: {
			...search,
			...partial
		} });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-mist uppercase",
				children: "TinyHands"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-1 text-3xl font-semibold tracking-tight md:text-4xl",
				children: title
			}),
			search.cat !== "all" && search.cat in categoryMeta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-xl text-sm text-mist",
				children: categoryMeta[search.cat].blurb
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-8 lg:grid-cols-[240px_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("lg:block", open ? "block" : "hidden"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Filters, {
						search,
						onChange: update
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-4 flex flex-wrap items-center justify-between gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-sm text-mist",
						children: [
							list.length,
							" ",
							list.length === 1 ? "piece" : "pieces"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								className: "inline-flex h-11 items-center gap-2 rounded-full border border-line bg-paper px-4 text-sm lg:hidden",
								onClick: () => setOpen((v) => !v),
								"aria-expanded": open,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-4" }), "Filters"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "sr-only",
								htmlFor: "sort",
								children: "Sort"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								id: "sort",
								value: search.sort,
								onChange: (e) => update({ sort: isSort(e.target.value) ? e.target.value : "featured" }),
								className: "h-11 rounded-full border border-line bg-paper px-4 text-sm",
								children: sortLabels.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: option.id,
									children: option.label
								}, option.id))
							})
						]
					})]
				}), list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-panel border border-dashed border-taupe bg-paper px-6 py-16 text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-lg font-medium",
							children: "Nothing matches that."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-mist",
							children: "Try another word, or clear the filters."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => update(shopSearch()),
							className: "mt-5 inline-flex h-11 items-center rounded-full bg-bark px-5 text-sm text-ivory",
							children: "Clear filters"
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4",
					children: list.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.id))
				})] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-8 text-sm text-mist",
				children: [
					"Looking for a story instead? ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/journal",
						className: "text-cocoa underline-offset-4 hover:underline",
						children: "Read the journal"
					}),
					"."
				]
			})
		]
	}) });
}
function Filters({ search, onChange }) {
	const cats = [{
		id: "all",
		label: "Everything"
	}, ...Object.entries(categoryMeta).map(([id, meta]) => ({
		id,
		label: meta.name
	}))];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "rounded-panel border border-line bg-paper p-5",
		"aria-label": "Filters",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-sm font-semibold",
					children: "Filters"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-xs text-cocoa",
					onClick: () => onChange(shopSearch({ q: search.q })),
					children: "Reset"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
				className: "mt-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "text-xs tracking-widest text-mist uppercase",
					children: "Category"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex flex-col gap-1",
					children: cats.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex cursor-pointer items-center gap-2 rounded-xl px-2 py-2 text-sm hover:bg-sand",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "radio",
							name: "cat",
							checked: search.cat === cat.id,
							onChange: () => onChange({ cat: cat.id }),
							className: "accent-bark"
						}), cat.label]
					}, cat.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("fieldset", {
				className: "mt-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("legend", {
					className: "text-xs tracking-widest text-mist uppercase",
					children: "Price"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-2 flex flex-col gap-1",
					children: prices.map((price) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex cursor-pointer items-center gap-2 rounded-xl px-2 py-2 text-sm hover:bg-sand",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "radio",
							name: "price",
							checked: search.price === price.id,
							onChange: () => onChange({ price: price.id }),
							className: "accent-bark"
						}), price.label]
					}, price.id))
				})]
			})
		]
	});
}
//#endregion
export { ShopPage as component };
