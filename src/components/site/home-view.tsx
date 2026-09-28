import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  articles,
  categoryMeta,
  circleCategories,
  heroSlides,
  products,
} from "@/data/catalog";
import { shopSearch } from "@/data/search";
import { cn } from "@/lib/cn";
import { ProductCard } from "@/components/site/product-card";
import { Dots, SectionTitle } from "@/components/site/ui";
import { Newsletter } from "@/components/site/footer";

function usePaged<T>(items: T[], size: number) {
  const [page, setPage] = useState(0);
  const pages = Math.max(1, Math.ceil(items.length / size));
  const safe = ((page % pages) + pages) % pages;
  return {
    slice: items.slice(safe * size, safe * size + size),
    page: safe,
    pages,
    setPage,
    next: () => setPage((safe + 1) % pages),
    prev: () => setPage((safe - 1 + pages) % pages),
  };
}

export function HomeView() {
  return (
    <div>
      <Hero />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <CategoryRail />
        <MostLoved />
        <Spotlight />
        <ToyAtelier />
        <JournalRow />
      </div>
      <Newsletter />
    </div>
  );
}

function Hero() {
  const [index, setIndex] = useState(0);
  const startX = useRef(0);
  const slides = heroSlides;
  const slide = slides[index]!;

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = window.setInterval(() => setIndex((n) => (n + 1) % slides.length), 7000);
    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <section className="mx-auto max-w-7xl px-4 pt-6 sm:px-6" aria-roledescription="carousel" aria-label="Featured">
      <div
        className="relative overflow-hidden rounded-panel bg-beige"
        onTouchStart={(e) => {
          startX.current = e.changedTouches[0]?.clientX ?? 0;
        }}
        onTouchEnd={(e) => {
          const dx = (e.changedTouches[0]?.clientX ?? 0) - startX.current;
          if (dx > 48) setIndex((n) => (n - 1 + slides.length) % slides.length);
          if (dx < -48) setIndex((n) => (n + 1) % slides.length);
        }}
      >
        <div className="grid md:min-h-[460px] md:grid-cols-2">
          <div key={slide.title} className="animate-rise relative z-10 flex flex-col justify-center px-6 py-10 md:px-12 md:py-16">
            <p className="text-xs tracking-widest text-cocoa uppercase">TinyHands</p>
            <h1 className="mt-3 max-w-md text-4xl font-semibold tracking-tight text-ink md:text-5xl">{slide.title}</h1>
            <p className="mt-4 max-w-sm text-base text-bark">{slide.subtitle}</p>
            <Link
              to="/shop"
              search={shopSearch(slide.search)}
              className="group/cta mt-6 inline-flex h-12 w-fit items-center gap-2 rounded-full bg-bark px-6 text-sm font-medium text-ivory shadow-sm transition hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-95"
            >
              {slide.cta}
              <ArrowRight className="size-4 transition-transform group-hover/cta:translate-x-1" />
            </Link>
            <div className="mt-8">
              <Dots pages={slides.length} page={index} onChange={setIndex} />
            </div>
          </div>
          <div className="relative min-h-64 md:min-h-full">
            {slides.map((item, i) => (
              <img
                key={item.image}
                src={item.image}
                alt={i === index ? item.alt : ""}
                className={cn(
                  "absolute inset-0 h-full w-full object-cover transition-opacity duration-700",
                  i === index ? "opacity-100" : "opacity-0",
                )}
              />
            ))}
            {/* Soft-blend the photo into the beige copy panel (desktop split only). */}
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-1/3 bg-gradient-to-r from-beige to-transparent md:block"
            />
          </div>
        </div>
        <div className="absolute right-4 bottom-4 z-20 hidden gap-2 md:flex">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => setIndex((n) => (n - 1 + slides.length) % slides.length)}
            className="inline-flex size-11 items-center justify-center rounded-full bg-paper/90 text-bark shadow-sm backdrop-blur transition hover:bg-paper hover:-translate-y-0.5 active:scale-95"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => setIndex((n) => (n + 1) % slides.length)}
            className="inline-flex size-11 items-center justify-center rounded-full bg-paper/90 text-bark shadow-sm backdrop-blur transition hover:bg-paper hover:-translate-y-0.5 active:scale-95"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

function CategoryRail() {
  return (
    <section className="py-12" aria-label="Shop by category">
      <SectionTitle title="Shop by category" subtitle="Six places to start, none of them loud." />
      {/* Full-width row on desktop (evenly spread); horizontal scroll only on mobile. */}
      <div className="no-scrollbar flex gap-5 overflow-x-auto scroll-smooth py-2 md:justify-between md:gap-4 md:overflow-visible">
        {circleCategories.map((id) => {
          const cat = categoryMeta[id];
          return (
            <Link
              key={id}
              to="/shop"
              search={shopSearch({ cat: id })}
              className="group flex w-24 shrink-0 snap-start flex-col items-center gap-3 md:w-auto md:flex-1"
            >
              <span className="flex size-20 items-center justify-center overflow-hidden rounded-full border border-line bg-paper transition group-hover:-translate-y-0.5 md:size-24">
                <img src={cat.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </span>
              <span className="text-sm text-bark">{cat.name}</span>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function MostLoved() {
  const loved = products.filter((p) => p.bestseller);
  const scroller = useRef<HTMLDivElement>(null);
  return (
    <section className="pb-12" aria-label="Most loved">
      <SectionTitle
        title="Most loved"
        subtitle="The pieces people come back for."
        action={
          <div className="hidden gap-2 sm:flex">
            <CircleArrow label="Scroll loved products back" onClick={() => scroller.current?.scrollBy({ left: -320, behavior: "smooth" })} dir="left" />
            <CircleArrow label="Scroll loved products forward" onClick={() => scroller.current?.scrollBy({ left: 320, behavior: "smooth" })} dir="right" />
          </div>
        }
      />
      <div ref={scroller} className="no-scrollbar flex snap-x gap-4 overflow-x-auto scroll-smooth pb-2">
        {loved.map((product) => (
          <ProductCard key={product.id} product={product} className="w-64 shrink-0 snap-start sm:w-72" />
        ))}
      </div>
    </section>
  );
}

function Spotlight() {
  const featured = products.filter((p) => p.featured);
  const newest = products.filter((p) => p.newest);
  const deals = usePaged(featured, 4);
  const fresh = usePaged(newest, 3);
  return (
    <section className="pb-14" aria-label="Featured edits">
      <div className="grid items-start gap-4 xl:grid-cols-12">
        <div className="hidden xl:col-span-2 xl:block">
          <p className="mb-3 text-center text-xs tracking-widest text-mist uppercase">Browse</p>
          <div className="flex flex-col items-center gap-4">
            {circleCategories.map((id) => (
              <Link key={id} to="/shop" search={shopSearch({ cat: id })} className="flex flex-col items-center gap-1">
                <span className="size-14 overflow-hidden rounded-full border border-line bg-paper">
                  <img src={categoryMeta[id].image} alt="" className="h-full w-full object-cover" />
                </span>
                <span className="text-xs text-bark">{categoryMeta[id].name}</span>
              </Link>
            ))}
          </div>
        </div>
        <div className="rounded-panel bg-sand/80 p-4 md:p-6 xl:col-span-5">
          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold tracking-tight">Most requested</h2>
            <Dots pages={deals.pages} page={deals.page} onChange={deals.setPage} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            {deals.slice.map((product) => (
              <ProductCard key={product.id} product={product} dense />
            ))}
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:col-span-3 xl:grid-cols-1">
          <Promo
            title="Bags for the long day"
            cta="Shop bags"
            image="/catalog/promo-bag.jpg"
            search={{ cat: "bags" }}
          />
          <Promo
            title="Strollers & carriers"
            cta="Shop strollers"
            image="/catalog/hero-stroll.jpg"
            search={{ cat: "strollers" }}
          />
        </div>
        <div className="rounded-panel border border-line bg-paper p-4 xl:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-semibold">New arrivals</h2>
            <Dots pages={fresh.pages} page={fresh.page} onChange={fresh.setPage} />
          </div>
          <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
            {fresh.slice.map((product) => (
              <ProductCard key={product.id} product={product} dense />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Promo({
  title,
  cta,
  image,
  search,
  className,
}: {
  title: string;
  cta: string;
  image: string;
  search: { cat: string };
  className?: string;
}) {
  return (
    <Link
      to="/shop"
      search={shopSearch(search)}
      className={cn("group relative flex min-h-56 flex-col justify-between overflow-hidden rounded-panel bg-beige p-5", className)}
    >
      <img
        src={image}
        alt=""
        className="img-zoom img-fade-l pointer-events-none absolute inset-y-0 right-0 h-full w-4/5 object-cover object-center"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-beige via-beige/40 to-transparent"
      />
      <div className="relative z-10 flex h-full flex-col justify-between">
        <h3 className="max-w-[11rem] text-2xl font-semibold tracking-tight text-ink">{title}</h3>
        <span className="mt-4 inline-flex h-9 w-fit items-center rounded-full bg-paper px-4 text-xs font-medium text-ink shadow-sm transition group-hover:-translate-y-0.5">
          {cta}
        </span>
      </div>
    </Link>
  );
}

function ToyAtelier() {
  const toys = products.filter((p) => p.category === "toys" || p.category === "dolls").slice(0, 6);
  return (
    <section className="pb-14" aria-label="Toys">
      <SectionTitle title="Best-selling toys" subtitle="Plush, wood, and one ride-on that stays indoors." />
      <div className="grid gap-4 lg:grid-cols-12">
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
          <Promo
            title="A softer kind of toy"
            cta="Shop dolls"
            image="/catalog/hero-plush.jpg"
            search={{ cat: "dolls" }}
            className="min-h-72 sm:col-span-2"
          />
          <Promo title="Knits, washed and ready" cta="Shop clothing" image="/catalog/promo-clothes.jpg" search={{ cat: "clothing" }} />
          <Promo title="Feeding, quietly done" cta="Shop feeding" image="/catalog/promo-bottles.jpg" search={{ cat: "feeding" }} />
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-2">
          {toys.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}

function JournalRow() {
  return (
    <section className="pb-6" aria-label="Journal">
      <SectionTitle
        title="From the journal"
        subtitle="Short notes on packing, shoes and rooms."
        action={
          <Link to="/journal" className="inline-flex h-11 items-center rounded-full bg-bark px-5 text-sm text-ivory">
            Read all
          </Link>
        }
      />
      <div className="grid gap-4 md:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.slug}
            to="/journal/$slug"
            params={{ slug: article.slug }}
            className="group overflow-hidden rounded-panel border border-line bg-paper transition hover:-translate-y-0.5"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img src={article.image} alt="" className="img-zoom h-full w-full object-cover" />
            </div>
            <div className="p-4">
              <p className="text-xs text-mist">
                {article.date} · {article.minutes} min
              </p>
              <h3 className="mt-1 text-lg font-medium tracking-tight">{article.title}</h3>
              <p className="mt-1 text-sm text-mist">{article.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function CircleArrow({
  label,
  onClick,
  dir,
}: {
  label: string;
  onClick: () => void;
  dir: "left" | "right";
}) {
  const Icon = dir === "left" ? ChevronLeft : ChevronRight;
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="inline-flex size-11 items-center justify-center rounded-full border border-line bg-paper text-bark"
    >
      <Icon className="size-5" />
    </button>
  );
}
