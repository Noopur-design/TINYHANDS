import { createFileRoute, Link } from "@tanstack/react-router";
import { articles } from "@/data/catalog";
import { Shell } from "@/components/site/shell";

export const Route = createFileRoute("/journal/")({
  head: () => ({ meta: [{ title: "Journal — Lullora" }] }),
  component: function JournalPage() {
    return (
      <Shell>
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">From the journal</h1>
          <p className="mt-2 max-w-xl text-sm text-mist">Short notes. No listicles, no life hacks.</p>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.slug}
                to="/journal/$slug"
                params={{ slug: article.slug }}
                className="overflow-hidden rounded-panel border border-line bg-paper transition hover:-translate-y-0.5"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={article.image} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="p-4">
                  <p className="text-xs text-mist">
                    {article.date} · {article.minutes} min read
                  </p>
                  <h2 className="mt-1 text-lg font-medium">{article.title}</h2>
                  <p className="mt-1 text-sm text-mist">{article.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </Shell>
    );
  },
});
