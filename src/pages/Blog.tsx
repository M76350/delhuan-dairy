import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const posts = [
  {
    slug: "milk-quality-testing-how-we-check-purity",
    title: "Milk Quality Testing: How We Check Purity",
    excerpt:
      "A quick overview of the basic tests and hygiene steps used to keep milk safe and fresh.",
  },
  {
    slug: "cow-vs-buffalo-milk-which-is-better",
    title: "Cow vs Buffalo Milk: Which is Better?",
    excerpt:
      "Differences in nutrition, taste, and best use-cases for families and businesses.",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <h1 className="text-3xl font-bold text-foreground">Blog</h1>
        <p className="text-muted-foreground mt-2 max-w-2xl">
          Dairy tips, farming guidance, milk quality information, and updates
          from Delhuan Dairy Farm.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {posts.map((p) => (
            <article
              key={p.slug}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <h2 className="text-xl font-semibold text-foreground">
                <Link
                  to={`/blog/${p.slug}`}
                  className="hover:text-primary transition-colors"
                >
                  {p.title}
                </Link>
              </h2>
              <p className="text-muted-foreground mt-2">{p.excerpt}</p>
              <div className="mt-4">
                <Link
                  to={`/blog/${p.slug}`}
                  className="text-primary font-medium hover:underline"
                >
                  Read more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

