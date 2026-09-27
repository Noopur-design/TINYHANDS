import { m as shopSearch } from "./catalog-BuNK_tRO.mjs";
import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as Shell } from "./shell-CPOhcLFv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-OXbZ_9Dz.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = function AboutPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-4xl font-semibold tracking-tight",
				children: "The house"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "story",
				className: "mt-8 scroll-mt-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-semibold",
					children: "Our story"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-bark leading-relaxed",
					children: "Lullora started as a short list: a bear that sits, a bag that closes, a knit that doesn’t itch. We still buy that way. The palette stays warm, the hardware stays quiet, and nothing in the shop needs a character license to be wanted."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "shipping",
				className: "mt-10 scroll-mt-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-semibold",
					children: "Shipping"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-bark leading-relaxed",
					children: "Orders of $75 and over ship free inside the demo. Under that, shipping is a flat $8. This storefront doesn’t dispatch parcels — checkout saves an order on your device so you can see the full path."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "returns",
				className: "mt-10 scroll-mt-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-semibold",
					children: "Returns"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-bark leading-relaxed",
					children: "Unworn pieces with tags come back within 30 days in the real version of a shop like this. Here, you can remove anything from the bag before you place a demo order."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				search: shopSearch(),
				className: "mt-10 inline-flex h-11 items-center rounded-full bg-bark px-5 text-sm text-ivory",
				children: "Shop the collection"
			})
		]
	}) });
};
//#endregion
export { SplitComponent as component };
