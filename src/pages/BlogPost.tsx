import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useParams } from "react-router-dom";
import {
  findPostBySlug,
  getPrevNextPosts,
  getRelatedPosts,
} from "@/data/posts";

export default function BlogPost() {
  const { slug } = useParams();
  const post = findPostBySlug(slug);
  const { prev, next } = getPrevNextPosts(slug);
  const related = getRelatedPosts(slug);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm text-muted-foreground">
            <Link to="/blog" className="hover:underline text-primary">
              Blog
            </Link>{" "}
            / {post ? post.title : "Post not found"}
          </div>

          {post ? (
            <>
              <article className="mt-4 rounded-2xl border border-border bg-card/60 shadow-sm overflow-hidden">
                {post.image && (
                  <div className="relative max-h-[360px] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span>{post.date}</span>
                    {post.tags && post.tags.length > 0 && (
                      <span className="inline-flex flex-wrap gap-1">
                        {post.tags.map((tag) => (
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

                  <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                    {post.title}
                  </h1>

                  <p className="text-muted-foreground mt-4 text-base">
                    {post.description}
                  </p>

                  <div className="mt-6 space-y-4 text-foreground/90 leading-relaxed text-base">
                    {post.content.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                </div>
              </article>

              <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex gap-2">
                  {prev && (
                    <Link
                      to={`/blog/${prev.slug}`}
                      className="px-4 py-2 rounded-full border border-border bg-background text-sm hover:bg-secondary/70 transition-colors"
                    >
                      ← Previous:{" "}
                      <span className="font-medium line-clamp-1">
                        {prev.title}
                      </span>
                    </Link>
                  )}
                  {next && (
                    <Link
                      to={`/blog/${next.slug}`}
                      className="px-4 py-2 rounded-full border border-border bg-background text-sm hover:bg-secondary/70 transition-colors ml-auto"
                    >
                      Next:{" "}
                      <span className="font-medium line-clamp-1">
                        {next.title}
                      </span>{" "}
                      →
                    </Link>
                  )}
                </div>
                <Link
                  to="/blog"
                  className="text-sm text-primary hover:underline mt-2 md:mt-0"
                >
                  Back to all posts
                </Link>
              </div>

              {related.length > 0 && (
                <section className="mt-10">
                  <h2 className="text-lg font-semibold text-foreground mb-4">
                    Related posts
                  </h2>
                  <div className="grid gap-4 md:grid-cols-2">
                    {related.map((rp) => (
                      <article
                        key={rp.slug}
                        className="rounded-xl border border-border bg-card/80 p-4 hover:shadow-sm transition-shadow"
                      >
                        <h3 className="text-sm font-semibold text-foreground">
                          <Link
                            to={`/blog/${rp.slug}`}
                            className="hover:text-primary transition-colors"
                          >
                            {rp.title}
                          </Link>
                        </h3>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {rp.description}
                        </p>
                      </article>
                    ))}
                  </div>
                </section>
              )}
            </>
          ) : (
            <div className="rounded-xl border border-border bg-card p-6 mt-4 max-w-3xl">
              <h1 className="text-2xl font-semibold text-foreground">
                Post not found
              </h1>
              <p className="text-muted-foreground mt-2">
                Yeh blog post abhi available nahi hai. Kripya baad me check
                karein ya blog list se koi dusra article open karein.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

