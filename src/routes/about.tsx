import { createFileRoute, Link } from "@tanstack/react-router";
import { shopSearch } from "@/data/search";
import { Shell } from "@/components/site/shell";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — TinyHands" }] }),
  component: function AboutPage() {
    return (
      <Shell>
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <h1 className="text-4xl font-semibold tracking-tight">The house</h1>
          <section id="story" className="mt-8 scroll-mt-24">
            <h2 className="text-2xl font-semibold">Our story</h2>
            <p className="mt-3 text-bark leading-relaxed">
              TinyHands started as a short list: a bear that sits, a bag that closes, a knit that doesn’t itch. We still buy that way. The palette stays warm, the hardware stays quiet, and nothing in the shop needs a character license to be wanted.
            </p>
          </section>
          <section id="shipping" className="mt-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold">Shipping</h2>
            <p className="mt-3 text-bark leading-relaxed">
              Orders of ₹4,999 and over ship free inside the demo. Under that, shipping is a flat ₹660. This storefront doesn’t dispatch parcels — checkout saves an order on your device so you can see the full path.
            </p>
          </section>
          <section id="returns" className="mt-10 scroll-mt-24">
            <h2 className="text-2xl font-semibold">Returns</h2>
            <p className="mt-3 text-bark leading-relaxed">
              Unworn pieces with tags come back within 30 days in the real version of a shop like this. Here, you can remove anything from the bag before you place a demo order.
            </p>
          </section>
          <Link to="/shop" search={shopSearch()} className="mt-10 inline-flex h-11 items-center rounded-full bg-bark px-5 text-sm text-ivory">
            Shop the collection
          </Link>
        </div>
      </Shell>
    );
  },
});
