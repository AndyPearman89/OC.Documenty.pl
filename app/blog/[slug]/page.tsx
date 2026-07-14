import type { Metadata } from "next";
import { ArrowRight, CalendarDays, Clock3, FileText, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { BlogCoverVisual, BlogThumbnailVisual } from "@/components/ProductVisuals";
import { getBlogPost, blogPosts } from "@/lib/blog";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const related = (post.related ?? []).map((relatedSlug) => getBlogPost(relatedSlug)).filter(Boolean);

  return (
    <>
      <Header />
      <main id="main-content" className="blogArticlePage">
        <section className="blogArticleHero">
          <div className="container blogArticleGrid">
            <div>
              <span className="premiumPill">Artykuł ekspercki</span>
              <h1>{post.title}</h1>
              <p>{post.lead}</p>
              <div className="blogMeta">
                <span>
                  <CalendarDays /> {post.category}
                </span>
                <span>
                  <Clock3 /> {post.readingTime}
                </span>
                <span>
                  <FileText /> Aktualizowany 14.07.2026
                </span>
              </div>
            </div>
            <aside className="blogArticleAside">
              <BlogCoverVisual category={post.category} title={post.title} />
              <strong>W tym artykule</strong>
              <ul>
                <li>praktyczne wskazówki</li>
                <li>najczęstsze pułapki</li>
                <li>krótkie przejście do formularza</li>
              </ul>
              <Link className="premiumButton secondary" href={post.ctaHref}>
                {post.ctaLabel} <ArrowRight />
              </Link>
            </aside>
          </div>
        </section>

        <section className="enterpriseSection blogContent">
          <div className="container blogContentGrid">
            <article>
              <div className="blogBody">
                <h2>Najważniejsze zasady</h2>
                <p>{post.sections[0]}</p>
                <p>{post.sections[1]}</p>
                <p>{post.sections[2]}</p>
              </div>
              <div className="blogInfoBar">
                <span>
                  <ShieldCheck /> Treści zgodne z logiką formularzy OC
                </span>
                <span>
                  <Clock3 /> Czas czytania dopasowany do szybkiej decyzji
                </span>
              </div>
            </article>
            <aside className="blogSidebar">
              <strong>Jeśli chcesz działać od razu</strong>
              <p>Przejdź do generatora albo do biblioteki dokumentów i wybierz właściwy wzór.</p>
              <Link className="premiumButton primary" href="/generator">
                Otwórz generator <ArrowRight />
              </Link>
              <Link className="premiumButton secondary" href="/dokumenty">
                Zobacz wzory <FileText />
              </Link>
            </aside>
          </div>

          {related.length > 0 ? (
            <div className="container">
              <div className="relatedPosts">
                <h2>Powiązane artykuły</h2>
                <div className="blogList">
                  {related.map((item) =>
                    item ? (
                      <article className="blogCard" key={item.slug}>
                        <BlogThumbnailVisual category={item.category} title={item.title} />
                        <small>{item.category}</small>
                        <h3>{item.title}</h3>
                        <p>{item.excerpt}</p>
                        <Link href={`/blog/${item.slug}`}>
                          Czytaj dalej <ArrowRight />
                        </Link>
                      </article>
                    ) : null,
                  )}
                </div>
              </div>
            </div>
          ) : null}
        </section>
      </main>
      <Footer />
    </>
  );
}
