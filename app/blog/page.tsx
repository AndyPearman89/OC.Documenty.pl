import type { Metadata } from "next";
import { ArrowRight, BookOpen, CalendarDays, Clock3, FileText, FileSearch, ShieldCheck, Sparkles, TrendingUp } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { AdsenseScript } from "@/components/AdSense";
import { BlogHeroVisual, BlogThumbnailVisual } from "@/components/ProductVisuals";
import { NewsletterSignup } from "@/components/NewsletterSignup";
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
              <h1>Aktualne poradniki OC, kolizje i dokumenty gotowe do użycia</h1>
              <p>
                Krótkie, konkretne teksty o kolizjach, wypowiedzeniu OC, odwołaniach, zmianach przepisów i przygotowaniu dokumentów do wysyłki.
              </p>
              <div className="blogHeroChips">
                <span><TrendingUp /> SEO i Discover</span>
                <span><ShieldCheck /> Treści zgodne z logiką OC</span>
                <span><FileSearch /> Szybki dostęp do wzorów</span>
              </div>
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
                Treści są tworzone z myślą o użytkownikach, którzy chcą szybko znaleźć odpowiedź, zobaczyć wzór i przejść dalej do
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

            <div className="blogSEOBox">
              <h2>Tematy, które najczęściej prowadzą do wzorów i generatorów</h2>
              <p>
                Blog budujemy wokół realnych intencji użytkowników: co zrobić po kolizji, jak wypowiedzieć OC, kiedy zgłosić szkodę i
                jakie dokumenty pobrać.
              </p>
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

            <div className="blogAdSlot">
              <AdsenseScript slot="1234567890" label="Reklama w sekcji bloga" />
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

            <div className="blogAdSlot blogAdSlotSpaced">
              <AdsenseScript slot="1234567890" label="Drugi blok reklamy na blogu" />
            </div>

            <section className="blogCategorySection blogDiscoverSection">
              <h2>Najważniejsze obszary bloga</h2>
              <div className="catalogIntentGrid">
                <article className="intentCard">
                  <span><FileSearch /></span>
                  <strong>Kolizje i wypadki</strong>
                  <p>Instrukcje po zdarzeniu, oświadczenia i zgłoszenia szkód.</p>
                </article>
                <article className="intentCard">
                  <span><ShieldCheck /></span>
                  <strong>Ubezpieczenie OC</strong>
                  <p>Wypowiedzenia, terminy, podwójne OC i najważniejsze zasady.</p>
                </article>
                <article className="intentCard">
                  <span><TrendingUp /></span>
                  <strong>Dokumenty i wzory</strong>
                  <p>PDF-y, formularze oraz szybkie przejścia do generatorów.</p>
                </article>
              </div>
            </section>
          </div>
        </section>

        <NewsletterSignup
          compact
          variant="showcase"
          title="Newsletter blogowy"
          description="Dostawaj nowe artykuły, zmiany przepisów i praktyczne poradniki prosto na e-mail."
        />
      </main>
      <Footer />
    </>
  );
}
