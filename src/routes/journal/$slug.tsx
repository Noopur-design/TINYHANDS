import { createFileRoute, Link } from "@tanstack/react-router";
import { getArticle } from "@/data/catalog";
import { Shell } from "@/components/site/shell";

export const Route = createFileRoute("/journal/$slug")({
  head: ({ params }) => ({
    meta: [{ title: `${getArticle(params.slug)?.title ?? "Journal"} — Lullora` }],
  }),
  component: function ArticlePage() {
    const { slug } = Route.useParams();
    const article = getArticle(slug);
    if (!article) {
      return (
        <Shell>
          <div className="mx-auto max-w-lg px-4 py-24 text-center">
            <h1 className="text-3xl font-semibold">That note isn’t here</h1>
            <Link to="/journal" className="mt-6 inline-flex h-11 items-center rounded-full bg-bark px-5 text-sm text-ivory">
              All notes
            </Link>
          </div>
        </Shell>
      );
    }
    return (
      <Shell>
        <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
          <Link to="/journal" className="text-sm text-cocoa">
            Journal
          </Link>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight">{article.title}</h1>
          <p className="mt-2 text-sm text-mist">
            {article.date} · {article.minutes} min read
          </p>
          <img src={article.image} alt="" className="mt-6 aspect-[16/9] w-full rounded-panel object-cover" />
          <div className="mt-8 space-y-4 text-base leading-relaxed text-bark">
            {article.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      </Shell>
    );
  },
});
