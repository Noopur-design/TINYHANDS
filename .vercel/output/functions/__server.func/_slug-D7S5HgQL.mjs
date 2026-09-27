import { a as getArticle } from "./_ssr/catalog-lAiNO47P.mjs";
import { w as require_jsx_runtime, x as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { r as Route$1 } from "./_ssr/router-1Zgt3MMD.mjs";
import { s as Shell } from "./_ssr/shell-x-XvApxv.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-D7S5HgQL.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = function ArticlePage() {
	const { slug } = Route$1.useParams();
	const article = getArticle(slug);
	if (!article) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mx-auto max-w-lg px-4 py-24 text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "text-3xl font-semibold",
			children: "That note isn’t here"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
			to: "/journal",
			className: "mt-6 inline-flex h-11 items-center rounded-full bg-bark px-5 text-sm text-ivory",
			children: "All notes"
		})]
	}) });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "mx-auto max-w-3xl px-4 py-10 sm:px-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/journal",
				className: "text-sm text-cocoa",
				children: "Journal"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mt-3 text-4xl font-semibold tracking-tight",
				children: article.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-mist",
				children: [
					article.date,
					" · ",
					article.minutes,
					" min read"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: article.image,
				alt: "",
				className: "mt-6 aspect-[16/9] w-full rounded-panel object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-4 text-base leading-relaxed text-bark",
				children: article.paragraphs.map((paragraph) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: paragraph }, paragraph))
			})
		]
	}) });
};
//#endregion
export { SplitComponent as component };
