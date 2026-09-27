import { u as money } from "./catalog-BuNK_tRO.mjs";
import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { m as useShop, p as useHasHydrated, s as Shell } from "./shell-CPOhcLFv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/account-B1ErzqrA.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = function AccountPage() {
	const hydrated = useHasHydrated();
	const wishes = useShop((s) => s.wishlist.length);
	const count = useShop((s) => s.lines.reduce((n, l) => n + l.qty, 0));
	const orders = useShop((s) => s.orders);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs tracking-widest text-cocoa uppercase",
				children: "This device"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-2 text-3xl font-semibold tracking-tight",
				children: "Your Lullora"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 max-w-prose text-sm text-bark",
				children: "You’re browsing as a guest. Your bag, wishlist and demo orders stay in this browser — there’s no account to sign into."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/wishlist",
					className: "rounded-panel border border-line bg-paper p-5 hover:-translate-y-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-mist",
						children: "Wishlist"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-2xl font-semibold",
						children: hydrated ? wishes : "—"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/cart",
					className: "rounded-panel border border-line bg-paper p-5 hover:-translate-y-0.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-mist",
						children: "In your bag"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-2xl font-semibold",
						children: hydrated ? count : "—"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-10 text-xl font-semibold",
				children: "Orders on this device"
			}),
			!hydrated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-mist",
				children: "Loading…"
			}) : orders.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-mist",
				children: "No demo orders yet."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 space-y-3",
				children: orders.map((order) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "rounded-2xl border border-line bg-paper p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-baseline justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium",
								children: order.id
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm",
								children: money(order.total)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-xs text-mist",
							children: [
								new Date(order.createdAt).toLocaleDateString("en-US", {
									month: "long",
									day: "numeric",
									year: "numeric"
								}),
								" · ",
								order.city
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-bark",
							children: order.lines.map((l) => `${l.qty}× ${l.name}`).join(", ")
						})
					]
				}, order.id))
			})
		]
	}) });
};
//#endregion
export { SplitComponent as component };
