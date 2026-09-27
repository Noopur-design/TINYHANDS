import { i as __toESM } from "../_runtime.mjs";
import { m as shopSearch, s as getProduct, u as money } from "./catalog-lAiNO47P.mjs";
import { S as useNavigate, X as require_react, m as useRouterState, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { _ as Mail, a as Trash2, c as ShoppingBag, d as RotateCcw, f as Plus, g as MapPin, h as Menu, l as ShieldCheck, m as Minus, n as User, o as Star, p as Phone, r as Truck, t as X, u as Search, v as Heart } from "../_libs/lucide-react.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
import { n as create, t as persist } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-x-XvApxv.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var SHIPPING_FLAT = 8;
var FREE_OVER = 60;
function shippingFor(subtotal) {
	if (subtotal <= 0) return 0;
	return subtotal >= FREE_OVER ? 0 : SHIPPING_FLAT;
}
function subtotalOf(lines) {
	return lines.reduce((sum, line) => sum + (getProduct(line.productId)?.price ?? 0) * line.qty, 0);
}
var useShop = create()(persist((set, get) => ({
	lines: [],
	wishlist: [],
	orders: [],
	drawer: false,
	addLine: (input) => {
		const color = input.color ?? "";
		const size = input.size ?? "";
		const key = `${input.productId}|${color}|${size}`;
		const qty = input.qty ?? 1;
		if (get().lines.find((line) => line.key === key)) {
			set({ lines: get().lines.map((line) => line.key === key ? {
				...line,
				qty: Math.min(8, line.qty + qty)
			} : line) });
			return;
		}
		set({ lines: [...get().lines, {
			key,
			productId: input.productId,
			color,
			size,
			qty: Math.min(8, qty)
		}] });
	},
	setQty: (key, qty) => {
		if (qty <= 0) {
			set({ lines: get().lines.filter((line) => line.key !== key) });
			return;
		}
		set({ lines: get().lines.map((line) => line.key === key ? {
			...line,
			qty: Math.min(8, qty)
		} : line) });
	},
	removeLine: (key) => set({ lines: get().lines.filter((line) => line.key !== key) }),
	toggleWish: (id) => {
		set({ wishlist: get().wishlist.includes(id) ? get().wishlist.filter((item) => item !== id) : [...get().wishlist, id] });
	},
	setDrawer: (open) => set({ drawer: open }),
	placeOrder: (info) => {
		const lines = get().lines;
		if (!lines.length) return null;
		const detailed = lines.map((line) => {
			const product = getProduct(line.productId);
			return {
				...line,
				price: product?.price ?? 0,
				name: product?.name ?? "Item",
				image: product?.image ?? ""
			};
		});
		const subtotal = detailed.reduce((sum, line) => sum + line.price * line.qty, 0);
		const shipping = shippingFor(subtotal);
		const id = `LL-${Math.floor(1e5 + Math.random() * 9e5)}`;
		set({
			orders: [{
				id,
				...info,
				total: subtotal + shipping,
				shipping,
				createdAt: (/* @__PURE__ */ new Date()).toISOString(),
				lines: detailed
			}, ...get().orders].slice(0, 12),
			lines: []
		});
		return id;
	}
}), {
	name: "tinyhands-shop",
	partialize: (state) => ({
		lines: state.lines,
		wishlist: state.wishlist,
		orders: state.orders
	})
}));
function useHasHydrated() {
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (useShop.persist.hasHydrated()) setHydrated(true);
		return useShop.persist.onFinishHydration(() => setHydrated(true));
	}, []);
	return hydrated;
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function Stars({ value, count }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "inline-flex items-center gap-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "inline-flex",
			"aria-label": `${value} out of 5 stars`,
			children: Array.from({ length: 5 }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, {
				className: cn("size-3.5", i < Math.round(value) ? "fill-cocoa text-cocoa" : "text-line"),
				"aria-hidden": "true"
			}, i))
		}), typeof count === "number" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-xs text-mist",
			children: [
				"(",
				count,
				")"
			]
		})]
	});
}
function PriceTag({ price, compare }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: "flex flex-wrap items-baseline gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-medium text-ink",
			children: money(price)
		}), compare && compare > price && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm text-mist line-through",
			children: money(compare)
		})]
	});
}
function IconButton({ label, className, children, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		className: cn("inline-flex size-11 items-center justify-center rounded-2xl border border-line bg-paper text-bark transition hover:border-taupe hover:bg-sand", className),
		...props,
		children
	});
}
function SectionTitle({ title, subtitle, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6 flex flex-wrap items-end justify-between gap-3 text-center sm:text-left",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto sm:mx-0",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-2xl font-semibold tracking-tight text-ink md:text-3xl",
				children: title
			}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-mist",
				children: subtitle
			})]
		}), action]
	});
}
function Dots({ pages, page, onChange }) {
	if (pages < 2) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex items-center gap-1",
		children: Array.from({ length: pages }, (_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": `Show group ${i + 1} of ${pages}`,
			"aria-current": i === page,
			onClick: () => onChange(i),
			className: "inline-flex size-8 items-center justify-center",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block size-2 rounded-full", i === page ? "bg-bark" : "bg-taupe") })
		}, i))
	});
}
var fieldClass = "h-12 w-full rounded-2xl border border-line bg-paper px-4 text-base text-ink outline-none transition placeholder:text-mist focus:border-cocoa";
function CartContents({ onNavigate }) {
	const hydrated = useHasHydrated();
	const lines = useShop((s) => s.lines);
	const setQty = useShop((s) => s.setQty);
	const removeLine = useShop((s) => s.removeLine);
	const subtotal = subtotalOf(lines);
	const shipping = shippingFor(subtotal);
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "py-10 text-center text-sm text-mist",
		children: "Opening your bag…"
	});
	if (!lines.length) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col items-center gap-3 py-12 text-center",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-8 text-cocoa" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-lg font-medium",
				children: "Your bag is empty"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "max-w-xs text-sm text-mist",
				children: "Knits, bears and carriers are waiting whenever you are."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/shop",
				search: shopSearch(),
				onClick: onNavigate,
				className: "mt-2 inline-flex h-11 items-center rounded-full bg-bark px-5 text-sm text-ivory",
				children: "Continue shopping"
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "flex flex-col gap-3",
				children: lines.map((line) => {
					const product = getProduct(line.productId);
					if (!product) return null;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-3 rounded-2xl border border-line bg-paper p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/product/$slug",
							params: { slug: product.slug },
							onClick: onNavigate,
							className: "size-20 shrink-0 overflow-hidden rounded-xl bg-ivory",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: product.image,
								alt: "",
								className: "h-full w-full object-contain p-1"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
										to: "/product/$slug",
										params: { slug: product.slug },
										onClick: onNavigate,
										className: "text-sm font-medium text-ink",
										children: product.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										"aria-label": `Remove ${product.name}`,
										onClick: () => removeLine(line.key),
										className: "text-mist hover:text-bark",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-0.5 text-xs text-mist",
									children: [line.color, line.size].filter(Boolean).join(" · ") || categoryFallback(product.category)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-2 flex items-center justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "inline-flex items-center rounded-full border border-line",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-label": "Decrease quantity",
												disabled: line.qty <= 1,
												onClick: () => setQty(line.key, line.qty - 1),
												className: "inline-flex size-9 items-center justify-center disabled:opacity-40",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Minus, { className: "size-3.5" })
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "w-6 text-center text-sm",
												children: line.qty
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												"aria-label": "Increase quantity",
												disabled: line.qty >= 8,
												onClick: () => setQty(line.key, line.qty + 1),
												className: "inline-flex size-9 items-center justify-center disabled:opacity-40",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-3.5" })
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm font-medium",
										children: money(product.price * line.qty)
									})]
								})
							]
						})]
					}, line.key);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-sand/70 p-4 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Subtotal",
						value: money(subtotal)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Shipping",
						value: shipping === 0 ? "Free" : money(shipping)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						label: "Total",
						value: money(subtotal + shipping),
						strong: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-xs text-mist",
						children: subtotal >= 60 ? "You’ve got complimentary shipping." : `Add ${money(60 - subtotal)} for complimentary shipping.`
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/checkout",
				onClick: onNavigate,
				className: "inline-flex h-12 items-center justify-center rounded-full bg-bark text-sm font-medium text-ivory hover:bg-ink",
				children: "Checkout"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/cart",
				onClick: onNavigate,
				className: "text-center text-sm text-cocoa underline-offset-4 hover:underline",
				children: "Review bag"
			})
		]
	});
}
function categoryFallback(category) {
	return category;
}
function Row({ label, value, strong }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
		className: `flex justify-between py-1 ${strong ? "text-base font-semibold text-ink" : "text-bark"}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: value })]
	});
}
function CartDrawer() {
	const open = useShop((s) => s.drawer);
	const setDrawer = useShop((s) => s.setDrawer);
	const count = useShop((s) => s.lines.reduce((n, l) => n + l.qty, 0));
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const onKey = (event) => {
			if (event.key === "Escape") setDrawer(false);
		};
		document.addEventListener("keydown", onKey);
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = prev;
		};
	}, [open, setDrawer]);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-label": "Close bag",
			className: "absolute inset-0 bg-ink/40",
			onClick: () => setDrawer(false)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			role: "dialog",
			"aria-modal": "true",
			"aria-labelledby": "bag-title",
			className: "absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-ivory shadow-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b border-line px-5 py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					id: "bag-title",
					className: "text-lg font-semibold",
					children: ["Your bag", count ? ` (${count})` : ""]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
					label: "Close bag",
					onClick: () => setDrawer(false),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 overflow-y-auto px-5 py-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartContents, { onNavigate: () => setDrawer(false) })
			})]
		})]
	});
}
function Newsletter() {
	const [email, setEmail] = (0, import_react.useState)("");
	const [done, setDone] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)("");
	function submit(event) {
		event.preventDefault();
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			setError("Enter a real email so we know where to write.");
			return;
		}
		localStorage.setItem("tinyhands-news", email);
		setError("");
		setDone(true);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-4 py-8 sm:px-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "rounded-panel bg-sand px-6 py-10 md:px-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-xl text-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-2xl font-semibold tracking-tight md:text-3xl",
						children: "Notes from the nursery"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-bark/80",
						children: "A short letter when something new arrives. No weekly noise."
					}),
					done ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 text-sm font-medium text-ink",
						children: "You’re on the list. We’ll write when it’s worth it."
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: submit,
						className: "mt-6 flex flex-col gap-3 sm:flex-row",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "sr-only",
								htmlFor: "news-email",
								children: "Email"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "news-email",
								type: "email",
								value: email,
								onChange: (e) => setEmail(e.target.value),
								placeholder: "Email address",
								className: "h-12 flex-1 rounded-full border border-line bg-paper px-5 text-base outline-none focus:border-cocoa"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "submit",
								className: "h-12 rounded-full bg-bark px-6 text-sm font-medium text-ivory hover:bg-ink",
								children: "Join"
							})
						]
					}),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-bark",
						children: error
					})
				]
			})
		})
	});
}
function FooterPanel() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative rounded-panel bg-sand px-6 pt-16 pb-10 md:px-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute top-0 left-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-paper md:left-16 md:translate-x-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-center font-display text-xl leading-none text-bark",
				children: ["T", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-1 block font-sans text-xs tracking-widest text-mist",
					children: "TINYHANDS"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold tracking-wide text-ink",
					children: "Contact"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm text-bark",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-4 shrink-0" }), " hello@tinyhands.com"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-4 shrink-0" }), " +91 98200 40148"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-4 shrink-0" }), " Mon–Sat, 9 to 6"]
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold tracking-wide text-ink",
					children: "The house"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							hash: "story",
							className: "text-bark hover:text-ink",
							children: "Our story"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							hash: "shipping",
							className: "text-bark hover:text-ink",
							children: "Shipping"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/about",
							hash: "returns",
							className: "text-bark hover:text-ink",
							children: "Returns"
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/journal",
							className: "text-bark hover:text-ink",
							children: "Journal"
						}) })
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold tracking-wide text-ink",
					children: "Explore"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-2 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterShop, {
							label: "New arrivals",
							search: { sort: "new" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterShop, {
							label: "Clothing",
							search: { cat: "clothing" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterShop, {
							label: "Toys",
							search: { cat: "toys" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterShop, {
							label: "Strollers",
							search: { cat: "strollers" }
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterShop, {
							label: "Feeding",
							search: { cat: "feeding" }
						})
					]
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-sm font-semibold tracking-wide text-ink",
					children: "At ease"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-3 space-y-3 text-sm text-bark",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-4" }), " Secure demo checkout"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Truck, { className: "size-4" }), " Free shipping over ₹4,999"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }), " 30-day returns"]
						})
					]
				})] })
			]
		})]
	});
}
function FooterShop({ label, search }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/shop",
		search: shopSearch(search),
		className: "text-bark hover:text-ink",
		children: label
	}) });
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "mt-8 border-t border-transparent",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 pt-10 pb-8 sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FooterPanel, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 text-center text-xs text-mist",
				children: "© 2026 TinyHands. Quiet things for early days."
			})]
		})
	});
}
var NAV = [
	{
		label: "Home",
		to: "/",
		match: "home"
	},
	{
		label: "New arrivals",
		to: "/shop",
		search: shopSearch({ sort: "new" }),
		match: "new"
	},
	{
		label: "Clothing",
		to: "/shop",
		search: shopSearch({ cat: "clothing" }),
		match: "clothing"
	},
	{
		label: "Toys",
		to: "/shop",
		search: shopSearch({ cat: "toys" }),
		match: "toys"
	},
	{
		label: "Strollers",
		to: "/shop",
		search: shopSearch({ cat: "strollers" }),
		match: "strollers"
	},
	{
		label: "Feeding",
		to: "/shop",
		search: shopSearch({ cat: "feeding" }),
		match: "feeding"
	},
	{
		label: "Bags",
		to: "/shop",
		search: shopSearch({ cat: "bags" }),
		match: "bags"
	},
	{
		label: "Journal",
		to: "/journal",
		match: "journal"
	}
];
function Logo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/",
		className: "flex items-center gap-2 text-ink",
		"aria-label": "TinyHands home",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "flex size-9 items-center justify-center rounded-full border border-cocoa/50 font-display text-lg leading-none text-bark",
			children: "T"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "font-display text-2xl tracking-wide",
			children: "TinyHands"
		})]
	});
}
function Header() {
	const [menu, setMenu] = (0, import_react.useState)(false);
	const [query, setQuery] = (0, import_react.useState)("");
	const hydrated = useHasHydrated();
	const count = useShop((s) => s.lines.reduce((n, line) => n + line.qty, 0));
	const wishes = useShop((s) => s.wishlist.length);
	const setDrawer = useShop((s) => s.setDrawer);
	const navigate = useNavigate();
	const path = useRouterState({ select: (s) => s.location.pathname });
	const search = useRouterState({ select: (s) => s.location.search });
	(0, import_react.useEffect)(() => {
		setMenu(false);
	}, [path]);
	(0, import_react.useEffect)(() => {
		if (!menu) return;
		const prev = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = prev;
		};
	}, [menu]);
	function active(item) {
		if (item.match === "home") return path === "/";
		if (item.match === "journal") return path.startsWith("/journal");
		if (path !== "/shop") return false;
		if (item.match === "new") return search.sort === "new" && (!search.cat || search.cat === "all");
		return search.cat === item.match;
	}
	function onSearch(event) {
		event.preventDefault();
		const q = String(new FormData(event.currentTarget).get("q") ?? "");
		setMenu(false);
		navigate({
			to: "/shop",
			search: shopSearch({ q })
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-line/80 bg-ivory/90 backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-bark focus:px-4 focus:py-2 focus:text-ivory",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-7xl px-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid h-16 grid-cols-[auto_1fr_auto] items-center gap-3 md:h-20 md:grid-cols-[1fr_auto_1fr]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "inline-flex size-11 items-center justify-center rounded-2xl border border-line bg-paper md:hidden",
								"aria-label": "Open menu",
								"aria-expanded": menu,
								onClick: () => setMenu(true),
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
								onSubmit: onSearch,
								className: "hidden md:block md:max-w-sm",
								role: "search",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "relative block",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "sr-only",
											children: "Search products"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-mist" }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											name: "q",
											value: query,
											onChange: (e) => setQuery(e.target.value),
											placeholder: "Search clothing, toys, bags…",
											className: "h-11 w-full rounded-full border border-line bg-paper pr-4 pl-11 text-sm outline-none focus:border-cocoa"
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "justify-self-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-end gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/wishlist",
										"aria-label": "Wishlist",
										className: "relative hidden size-11 items-center justify-center rounded-2xl border border-line bg-paper sm:inline-flex",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-4" }), hydrated && wishes > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { n: wishes })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										"aria-label": `Open bag${hydrated && count ? `, ${count} items` : ""}`,
										onClick: () => setDrawer(true),
										className: "relative inline-flex size-11 items-center justify-center rounded-2xl border border-line bg-paper",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-4" }), hydrated && count > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { n: count })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/account",
										className: "hidden h-11 items-center gap-2 rounded-full bg-bark px-4 text-sm text-ivory sm:inline-flex",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-4" }), "Account"]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
						onSubmit: onSearch,
						className: "pb-3 md:hidden",
						role: "search",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "relative block",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "sr-only",
									children: "Search products"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-mist" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									name: "q",
									placeholder: "Search the shop",
									className: "h-12 w-full rounded-full border border-line bg-paper pr-4 pl-11 text-base outline-none focus:border-cocoa"
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden flex-wrap items-center justify-center gap-x-6 gap-y-2 pb-3 md:flex",
						"aria-label": "Primary",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
							item,
							active: active(item)
						}, item.label))
					})
				]
			}),
			menu && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-0 z-50 flex flex-col bg-ivory md:hidden",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between px-4 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Logo, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-label": "Close menu",
						onClick: () => setMenu(false),
						className: "inline-flex size-11 items-center justify-center rounded-2xl border border-line bg-paper",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "flex flex-1 flex-col gap-1 overflow-y-auto px-4 pb-8",
					"aria-label": "Mobile",
					children: [
						NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NavLink, {
							item,
							active: active(item),
							large: true
						}, item.label)),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/wishlist",
							className: "mt-4 inline-flex h-12 items-center gap-2 text-base",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-4" }), " Wishlist"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/account",
							className: "inline-flex h-12 items-center gap-2 text-base",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-4" }), " Account"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/cart",
							className: "inline-flex h-12 items-center gap-2 text-base",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingBag, { className: "size-4" }), " Bag"]
						})
					]
				})]
			})
		]
	});
}
function NavLink({ item, active, large }) {
	const className = cn("text-sm transition hover:text-ink", large && "flex h-12 items-center border-b border-line text-lg", active ? "font-medium text-ink" : "text-mist");
	if (item.to === "/shop") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/shop",
		search: item.search ?? shopSearch(),
		className,
		children: item.label
	});
	if (item.to === "/journal") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/journal",
		className,
		children: item.label
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		className,
		children: item.label
	});
}
function Badge({ n }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-cocoa px-1 text-xs font-semibold text-ivory",
		children: n
	});
}
function Shell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-ivory text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartDrawer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
				position: "bottom-center",
				toastOptions: { style: {
					background: "var(--color-ink)",
					color: "var(--color-ivory)",
					border: "none",
					borderRadius: "999px"
				} }
			})
		]
	});
}
//#endregion
export { PriceTag as a, Stars as c, shippingFor as d, subtotalOf as f, Newsletter as i, cn as l, useShop as m, Dots as n, SectionTitle as o, useHasHydrated as p, IconButton as r, Shell as s, CartContents as t, fieldClass as u };
