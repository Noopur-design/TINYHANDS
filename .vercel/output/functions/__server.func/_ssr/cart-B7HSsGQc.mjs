import { m as shopSearch } from "./catalog-lAiNO47P.mjs";
import { w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as Shell, t as CartContents } from "./shell-x-XvApxv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cart-B7HSsGQc.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = function CartPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-3xl font-semibold tracking-tight",
				children: "Your bag"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-mist",
				children: [
					"Saved on this device.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/shop",
						search: shopSearch(),
						className: "text-cocoa underline-offset-4 hover:underline",
						children: "Keep browsing"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartContents, {})
			})
		]
	}) });
};
//#endregion
export { SplitComponent as component };
