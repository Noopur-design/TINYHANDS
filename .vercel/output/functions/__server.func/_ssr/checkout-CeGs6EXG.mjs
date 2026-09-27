import { i as __toESM } from "../_runtime.mjs";
import { m as shopSearch, u as money } from "./catalog-lAiNO47P.mjs";
import { X as require_react, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as shippingFor, f as subtotalOf, m as useShop, p as useHasHydrated, s as Shell, u as fieldClass } from "./shell-BZPnyvtR.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/checkout-CeGs6EXG.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CheckoutPage() {
	const hydrated = useHasHydrated();
	const lines = useShop((s) => s.lines);
	const orders = useShop((s) => s.orders);
	const placeOrder = useShop((s) => s.placeOrder);
	const [done, setDone] = (0, import_react.useState)(null);
	const [error, setError] = (0, import_react.useState)("");
	const [form, setForm] = (0, import_react.useState)({
		name: "",
		email: "",
		address: "",
		city: "",
		notes: ""
	});
	const subtotal = subtotalOf(lines);
	const shipping = shippingFor(subtotal);
	const order = orders.find((item) => item.id === done);
	function set(key, value) {
		setForm((prev) => ({
			...prev,
			[key]: value
		}));
	}
	function submit(event) {
		event.preventDefault();
		if (!form.name.trim() || !form.address.trim() || !form.city.trim()) {
			setError("Name, address and city are required.");
			return;
		}
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
			setError("Enter a valid email.");
			return;
		}
		const id = placeOrder({
			name: form.name.trim(),
			email: form.email.trim(),
			address: form.address.trim(),
			city: form.city.trim()
		});
		if (!id) {
			setError("Your bag is empty.");
			return;
		}
		setError("");
		setDone(id);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-semibold tracking-tight",
				children: "Checkout"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm text-mist",
				children: "A demo checkout. Nothing is charged, and the order stays on this device."
			}),
			!hydrated ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 text-sm text-mist",
				children: "Loading your bag…"
			}) : done && order ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 rounded-panel border border-line bg-paper p-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-widest text-cocoa uppercase",
						children: "Order placed"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 text-2xl font-semibold",
						children: order.id
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 text-sm text-bark",
						children: [
							"Thank you, ",
							order.name,
							". We’ll pretend to pack this for ",
							order.city,
							". Total ",
							money(order.total),
							"."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-1 text-sm text-mist",
						children: order.lines.map((line) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
							line.qty,
							" × ",
							line.name
						] }, line.key))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						search: shopSearch(),
						className: "mt-6 inline-flex h-11 items-center rounded-full bg-bark px-5 text-sm text-ivory",
						children: "Back to the shop"
					})
				]
			}) : lines.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Your bag is empty." }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/shop",
					search: shopSearch(),
					className: "mt-4 inline-flex h-11 items-center rounded-full bg-bark px-5 text-sm text-ivory",
					children: "Browse the shop"
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: submit,
				className: "mt-8 grid gap-6 md:grid-cols-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 md:col-span-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Full name",
							value: form.name,
							onChange: (v) => set("name", v)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Email",
							type: "email",
							value: form.email,
							onChange: (v) => set("email", v)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Address",
							value: form.address,
							onChange: (v) => set("address", v)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "City",
							value: form.city,
							onChange: (v) => set("city", v)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "block text-sm",
							children: ["Notes", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								value: form.notes,
								onChange: (e) => set("notes", e.target.value),
								className: "mt-1 min-h-24 w-full rounded-2xl border border-line bg-paper px-4 py-3 text-base outline-none focus:border-cocoa"
							})]
						}),
						error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-bark",
							children: error
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "submit",
							className: "h-12 rounded-full bg-bark text-sm font-medium text-ivory hover:bg-ink",
							children: ["Place order · ", money(subtotal + shipping)]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "rounded-panel bg-sand p-5 text-sm md:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-medium",
							children: [
								lines.length,
								" ",
								lines.length === 1 ? "item" : "items"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Subtotal" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: money(subtotal) })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 flex justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Shipping" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: shipping ? money(shipping) : "Free" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-2 flex justify-between font-semibold",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: money(subtotal + shipping) })]
						})
					]
				})]
			})
		]
	}) });
}
function Field({ label, value, onChange, type = "text" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "block text-sm",
		children: [label, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
			type,
			value,
			onChange: (e) => onChange(e.target.value),
			className: `mt-1 ${fieldClass}`,
			required: true
		})]
	});
}
//#endregion
export { CheckoutPage as component };
