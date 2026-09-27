import { i as __toESM } from "../_runtime.mjs";
import { c as heroSlides, f as products, m as shopSearch, n as categoryMeta, r as circleCategories, t as articles } from "./catalog-lAiNO47P.mjs";
import { X as require_react, w as require_jsx_runtime, x as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { b as ChevronLeft, x as ArrowRight, y as ChevronRight } from "../_libs/lucide-react.mjs";
import { i as Newsletter, l as cn, n as Dots, o as SectionTitle, s as Shell } from "./shell-BZPnyvtR.mjs";
import { t as ProductCard } from "./product-card-ctCPyAeA.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Y8i8hYFh.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function usePaged(items, size) {
	const [page, setPage] = (0, import_react.useState)(0);
	const pages = Math.max(1, Math.ceil(items.length / size));
	const safe = (page % pages + pages) % pages;
	return {
		slice: items.slice(safe * size, safe * size + size),
		page: safe,
		pages,
		setPage,
		next: () => setPage((safe + 1) % pages),
		prev: () => setPage((safe - 1 + pages) % pages)
	};
}
function HomeView() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryRail, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MostLoved, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spotlight, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToyAtelier, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JournalRow, {})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Newsletter, {})
	] });
}
function Hero() {
	const [index, setIndex] = (0, import_react.useState)(0);
	const startX = (0, import_react.useRef)(0);
	const slides = heroSlides;
	const slide = slides[index];
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		const id = window.setInterval(() => setIndex((n) => (n + 1) % slides.length), 7e3);
		return () => window.clearInterval(id);
	}, [slides.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "mx-auto max-w-7xl px-4 pt-6 sm:px-6",
		"aria-roledescription": "carousel",
		"aria-label": "Featured",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative overflow-hidden rounded-panel bg-beige",
			onTouchStart: (e) => {
				startX.current = e.changedTouches[0]?.clientX ?? 0;
			},
			onTouchEnd: (e) => {
				const dx = (e.changedTouches[0]?.clientX ?? 0) - startX.current;
				if (dx > 48) setIndex((n) => (n - 1 + slides.length) % slides.length);
				if (dx < -48) setIndex((n) => (n + 1) % slides.length);
			},
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid md:min-h-[460px] md:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "animate-rise relative z-10 flex flex-col justify-center px-6 py-10 md:px-12 md:py-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs tracking-widest text-cocoa uppercase",
							children: "TinyHands"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-3 max-w-md text-4xl font-semibold tracking-tight text-ink md:text-5xl",
							children: slide.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-sm text-base text-bark",
							children: slide.subtitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/shop",
							search: shopSearch(slide.search),
							className: "group/cta mt-6 inline-flex h-12 w-fit items-center gap-2 rounded-full bg-bark px-6 text-sm font-medium text-ivory shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-95",
							children: [slide.cta, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover/cta:translate-x-1" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dots, {
								pages: slides.length,
								page: index,
								onChange: setIndex
							})
						})
					]
				}, slide.title), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative min-h-64 md:min-h-full",
					children: slides.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: item.image,
						alt: i === index ? item.alt : "",
						className: cn("absolute inset-0 h-full w-full object-cover transition-opacity duration-700", i === index ? "opacity-100" : "opacity-0")
					}, item.image))
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute right-4 bottom-4 z-20 hidden gap-2 md:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Previous slide",
					onClick: () => setIndex((n) => (n - 1 + slides.length) % slides.length),
					className: "inline-flex size-11 items-center justify-center rounded-full bg-paper/90 text-bark shadow-sm backdrop-blur transition hover:bg-paper hover:-translate-y-0.5 active:scale-95",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Next slide",
					onClick: () => setIndex((n) => (n + 1) % slides.length),
					className: "inline-flex size-11 items-center justify-center rounded-full bg-paper/90 text-bark shadow-sm backdrop-blur transition hover:bg-paper hover:-translate-y-0.5 active:scale-95",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
				})]
			})]
		})
	});
}
function CategoryRail() {
	const scroller = (0, import_react.useRef)(null);
	const scrollBy = (dir) => scroller.current?.scrollBy({
		left: dir * 240,
		behavior: "smooth"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "py-12",
		"aria-label": "Shop by category",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
			title: "Shop by category",
			subtitle: "Six places to start, none of them loud."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Scroll categories back",
					onClick: () => scrollBy(-1),
					className: "absolute top-8 left-0 z-10 hidden size-11 items-center justify-center rounded-full border border-line bg-paper md:inline-flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-5" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: scroller,
					className: "no-scrollbar flex gap-5 overflow-x-auto scroll-smooth px-1 py-2 md:px-12",
					children: circleCategories.map((id) => {
						const cat = categoryMeta[id];
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/shop",
							search: shopSearch({ cat: id }),
							className: "flex w-24 shrink-0 snap-start flex-col items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex size-20 items-center justify-center overflow-hidden rounded-full border border-line bg-paper transition hover:-translate-y-0.5",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: cat.image,
									alt: "",
									className: "h-full w-full object-cover"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-sm text-bark",
								children: cat.name
							})]
						}, id);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-label": "Scroll categories forward",
					onClick: () => scrollBy(1),
					className: "absolute top-8 right-0 z-10 hidden size-11 items-center justify-center rounded-full border border-line bg-paper md:inline-flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "size-5" })
				})
			]
		})]
	});
}
function MostLoved() {
	const loved = products.filter((p) => p.bestseller);
	const scroller = (0, import_react.useRef)(null);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "pb-12",
		"aria-label": "Most loved",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
			title: "Most loved",
			subtitle: "The pieces people come back for.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden gap-2 sm:flex",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleArrow, {
					label: "Scroll loved products back",
					onClick: () => scroller.current?.scrollBy({
						left: -320,
						behavior: "smooth"
					}),
					dir: "left"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleArrow, {
					label: "Scroll loved products forward",
					onClick: () => scroller.current?.scrollBy({
						left: 320,
						behavior: "smooth"
					}),
					dir: "right"
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: scroller,
			className: "no-scrollbar flex snap-x gap-4 overflow-x-auto scroll-smooth pb-2",
			children: loved.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
				product,
				className: "w-64 shrink-0 snap-start sm:w-72"
			}, product.id))
		})]
	});
}
function Spotlight() {
	const featured = products.filter((p) => p.featured);
	const newest = products.filter((p) => p.newest);
	const deals = usePaged(featured, 4);
	const fresh = usePaged(newest, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pb-14",
		"aria-label": "Featured edits",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid items-start gap-4 xl:grid-cols-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hidden xl:col-span-2 xl:block",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 text-center text-xs tracking-widest text-mist uppercase",
						children: "Browse"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex flex-col items-center gap-4",
						children: circleCategories.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/shop",
							search: shopSearch({ cat: id }),
							className: "flex flex-col items-center gap-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "size-14 overflow-hidden rounded-full border border-line bg-paper",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: categoryMeta[id].image,
									alt: "",
									className: "h-full w-full object-cover"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-bark",
								children: categoryMeta[id].name
							})]
						}, id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-panel bg-sand/80 p-4 md:p-6 xl:col-span-5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-semibold tracking-tight",
							children: "Most requested"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dots, {
							pages: deals.pages,
							page: deals.page,
							onChange: deals.setPage
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3",
						children: deals.slice.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
							product,
							dense: true
						}, product.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid gap-4 sm:grid-cols-2 xl:col-span-3 xl:grid-cols-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Promo, {
						title: "Bags for the long day",
						cta: "Shop bags",
						image: "/catalog/promo-bag.jpg",
						search: { cat: "bags" }
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Promo, {
						title: "Strollers & carriers",
						cta: "Shop strollers",
						image: "/catalog/hero-stroll.jpg",
						search: { cat: "strollers" }
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-panel border border-line bg-paper p-4 xl:col-span-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-sm font-semibold",
							children: "New arrivals"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dots, {
							pages: fresh.pages,
							page: fresh.page,
							onChange: fresh.setPage
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-3 sm:grid-cols-3 xl:grid-cols-1",
						children: fresh.slice.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, {
							product,
							dense: true
						}, product.id))
					})]
				})
			]
		})
	});
}
function Promo({ title, cta, image, search, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/shop",
		search: shopSearch(search),
		className: cn("group relative flex min-h-56 flex-col justify-between overflow-hidden rounded-panel bg-beige p-5", className),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: image,
				alt: "",
				className: "img-zoom pointer-events-none absolute inset-y-0 right-0 h-full w-3/5 object-cover object-center"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				"aria-hidden": true,
				className: "pointer-events-none absolute inset-0 bg-gradient-to-r from-beige via-beige/85 to-transparent"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 flex h-full flex-col justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "max-w-[11rem] text-2xl font-semibold tracking-tight text-ink",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-4 inline-flex h-9 w-fit items-center rounded-full bg-paper px-4 text-xs font-medium text-ink shadow-sm transition group-hover:-translate-y-0.5",
					children: cta
				})]
			})
		]
	});
}
function ToyAtelier() {
	const toys = products.filter((p) => p.category === "toys" || p.category === "dolls").slice(0, 6);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "pb-14",
		"aria-label": "Toys",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
			title: "Best-selling toys",
			subtitle: "Plush, wood, and one ride-on that stays indoors."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 lg:col-span-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Promo, {
						title: "A softer kind of toy",
						cta: "Shop dolls",
						image: "/catalog/hero-plush.jpg",
						search: { cat: "dolls" },
						className: "min-h-72 sm:col-span-2"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Promo, {
						title: "Knits, washed and ready",
						cta: "Shop clothing",
						image: "/catalog/promo-clothes.jpg",
						search: { cat: "clothing" }
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Promo, {
						title: "Feeding, quietly done",
						cta: "Shop feeding",
						image: "/catalog/promo-bottles.jpg",
						search: { cat: "feeding" }
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-2",
				children: toys.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProductCard, { product }, product.id))
			})]
		})]
	});
}
function JournalRow() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "pb-6",
		"aria-label": "Journal",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionTitle, {
			title: "From the journal",
			subtitle: "Short notes on packing, shoes and rooms.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/journal",
				className: "inline-flex h-11 items-center rounded-full bg-bark px-5 text-sm text-ivory",
				children: "Read all"
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid gap-4 md:grid-cols-3",
			children: articles.map((article) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/journal/$slug",
				params: { slug: article.slug },
				className: "group overflow-hidden rounded-panel border border-line bg-paper transition hover:-translate-y-0.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-[16/10] overflow-hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: article.image,
						alt: "",
						className: "img-zoom h-full w-full object-cover"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-xs text-mist",
							children: [
								article.date,
								" · ",
								article.minutes,
								" min"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-1 text-lg font-medium tracking-tight",
							children: article.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-mist",
							children: article.excerpt
						})
					]
				})]
			}, article.slug))
		})]
	});
}
function CircleArrow({ label, onClick, dir }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-label": label,
		onClick,
		className: "inline-flex size-11 items-center justify-center rounded-full border border-line bg-paper text-bark",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(dir === "left" ? ChevronLeft : ChevronRight, { className: "size-5" })
	});
}
var SplitComponent = function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeView, {}) });
};
//#endregion
export { SplitComponent as component };
