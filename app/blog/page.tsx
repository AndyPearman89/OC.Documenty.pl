import type { Metadata } from "next";
import { ArrowRight, BookOpen, CalendarDays, Clock3, FileText, Sparkles } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BlogHeroVisual, BlogThumbnailVisual } from "@/components/ProductVisuals";
import { blogCategories, blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog OC — poradniki, wzory i praktyczne wskazówki",
  description:
    "Poradniki, aktualności i praktyczne wskazówki dotyczące kolizji, wypowiedzeń OC, dokumentów PDF i wzorów do pobrania.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const featured = blogPosts.filter((post) => post.featured);

  return (
    <>
      <Header />
      <main id="main-content" className="blogPage">
        <section className="blogHero">
          <div className="container blogHeroGrid">
            <div>
              <span className="premiumPill">
                <Sparkles /> Blog i poradniki
              </span>
              <h1>Praktyczna wiedza o dokumentach OC</h1>
              <p>
                Krótkie, konkretne teksty o kolizjach, wypowiedzeniu OC, odwołaniach i przygotowaniu dokumentów do wysyłki.
              </p>
              <div className="blogHeroActions">
                <Link className="premiumButton primary" href="/generator">
                  Generuj dokument <ArrowRight />
                </Link>
                <Link className="premiumButton secondary" href="/dokumenty">
                  Biblioteka wzorów <FileText />
                </Link>
              </div>
            </div>
            <aside className="blogHeroCard">
              <BlogHeroVisual />
              <div>
                <BookOpen />
                <span>
                  <strong>{blogPosts.length}</strong>
                  <small>gotowych tematów</small>
                </span>
              </div>
              <p>
                Treści są tworzone z myślą o użytkownikach, którzy chcą szybko znaleźć odpowiedź i przejść dalej do wzoru lub
                generatora.
              </p>
              <Link href="/faq">
                Zobacz FAQ <ArrowRight />
              </Link>
            </aside>
          </div>
        </section>

        <section className="enterpriseSection blogSection">
          <div className="container">
            <div className="blogCategoryBar">
              {blogCategories.map((category) => (
                <span key={category}>{category}</span>
              ))}
            </div>

            <div className="blogGrid">
              {featured.map((post) => (
                <article className="blogCard featured" key={post.slug}>
                  <BlogThumbnailVisual category={post.category} title={post.title} />
                  <small>{post.category}</small>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <div>
                    <span>
                      <CalendarDays /> {post.date}
                    </span>
                    <span>
                      <Clock3 /> {post.readingTime}
                    </span>
                    <Link href={`/blog/${post.slug}`}>
                      Czytaj artykuł <ArrowRight />
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {blogCategories.map((category) => {
              const posts = blogPosts.filter((post) => post.category === category);
              if (!posts.length) return null;
              return (
                <section key={category} className="blogCategorySection">
                  <h2>{category}</h2>
                  <div className="blogList">
                    {posts.map((post) => (
                      <article className="blogCard" key={post.slug}>
                        <BlogThumbnailVisual category={post.category} title={post.title} />
                        <small>{post.category}</small>
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <div>
                          <span>
                            <CalendarDays /> {post.date}
                          </span>
                          <span>
                            <Clock3 /> {post.readingTime}
                          </span>
                          <Link href={`/blog/${post.slug}`}>
                            Otwórz wpis <ArrowRight />
                          </Link>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
