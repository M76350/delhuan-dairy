import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { posts } from "@/data/posts";
import { useState, useMemo } from "react";

const PAGE_SIZE = 10;

export default function Blog() {
  const [page, setPage] = useState(1);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(posts.length / PAGE_SIZE)),
    []
  );

  const visiblePosts = useMemo(() => {
    const start = 0;
    const end = page * PAGE_SIZE;
    return posts.slice(start, end);
  }, [page]);

  const canLoadMore = visiblePosts.length < posts.length;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <section className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">
            Blog &amp; Dairy Insights
          </h1>
          <p className="text-muted-foreground mt-2">
            Dairy tips, farming guidance, milk quality information, and updates
            from Delhuan Dairy Farm for Kochas, Dinara aur Rohtas ke logon ke
            liye.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-semibold text-foreground uppercase tracking-wide mb-4">
            Latest Articles
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {visiblePosts.map((p) => (
              <article
                key={p.slug}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-shadow"
              >
                {p.image && (
                  <Link to={`/blog/${p.slug}`}>
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                )}
                <div className="p-5 flex flex-col h-full">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                    <span>{p.date}</span>
                    {p.tags && p.tags.length > 0 && (
                      <span className="inline-flex flex-wrap gap-1">
                        {p.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-secondary px-2 py-0.5 text-[10px] uppercase tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground leading-snug">
                    <Link
                      to={`/blog/${p.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {p.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                    {p.description}
                  </p>
                  <div className="mt-4 pt-2">
                    <Link
                      to={`/blog/${p.slug}`}
                      className="text-sm font-medium text-primary hover:underline"
                    >
                      Read full story →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {canLoadMore && (
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                onClick={() => setPage((prev) => prev + 1)}
                className="px-6 py-2 rounded-full border border-border bg-background text-sm font-medium text-primary hover:bg-secondary/60 transition-colors"
              >
                Load more posts
              </button>
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-6 flex justify-center gap-2 text-sm">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-1 rounded border border-border disabled:opacity-40"
              >
                Prev
              </button>
              <span className="px-2 py-1 text-muted-foreground">
                Page {page} of {totalPages}
              </span>
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-3 py-1 rounded border border-border disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

