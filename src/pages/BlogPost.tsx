import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link, useParams } from "react-router-dom";

function prettifySlug(slug: string) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function BlogPost() {
  const { slug } = useParams();
  const safeSlug = slug || "post";
  const title = prettifySlug(safeSlug);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="text-sm text-muted-foreground">
          <Link to="/blog" className="hover:underline text-primary">
            Blog
          </Link>{" "}
          / {title}
        </div>

        <article className="mt-6 max-w-3xl">
          <h1 className="text-3xl font-bold text-foreground">{title}</h1>
          <p className="text-muted-foreground mt-3">
            This is a placeholder blog post page. In the future you can load
            real content from a CMS, Markdown files, or Firebase.
          </p>

          <div className="mt-8 rounded-xl border border-border bg-card p-6">
            <h2 className="text-xl font-semibold text-foreground">
              Coming soon
            </h2>
            <p className="text-muted-foreground mt-2">
              Add content for: <span className="font-medium">{safeSlug}</span>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

