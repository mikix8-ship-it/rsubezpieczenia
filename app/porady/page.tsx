"use client";

import { useState, useEffect } from "react";
import { Calendar, ExternalLink, Loader2 } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  link: string;
  category: string;
  publishedDate: string;
  source: string;
}

export default function PoradyPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const response = await fetch('/api/articles');
      const data = await response.json();
      if (data.success) {
        setArticles(data.articles);
      }
    } catch (error) {
      console.error('Błąd pobierania artykułów:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (isoDate: string) => {
    const date = new Date(isoDate);
    return date.toLocaleDateString('pl-PL', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="pt-20">
      <section className="section-padding relative overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: 'url(/images/hero/porady.jpg)',
            backgroundAttachment: 'fixed',
          }}
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-background/50 z-0" />
        
        <div className="container-custom text-center relative z-10">
          <Badge className="mb-6">Blog</Badge>
          <h1 className="text-3xl sm:text-4xl md:text-display-lg font-bold text-text-primary mb-6">
            Porady ubezpieczeniowe
          </h1>
          <p className="text-body-lg text-text-primary max-w-2xl mx-auto">
            Praktyczne porady i aktualne informacje ze świata ubezpieczeń
          </p>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="container-custom">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="w-8 h-8 text-accent animate-spin" />
              <span className="ml-3 text-text-secondary">Ładowanie artykułów...</span>
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-text-secondary mb-4">
                Nie udało się pobrać artykułów. Sprawdź połączenie z internetem.
              </p>
              <button
                onClick={fetchArticles}
                className="text-accent hover:underline"
              >
                Spróbuj ponownie
              </button>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article, index) => (
                  <a
                    key={`${article.id}-${index}`}
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <Card className="h-full hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="default">{article.category}</Badge>
                        <div className="flex items-center gap-1 text-sm text-text-secondary">
                          <Calendar className="w-4 h-4" />
                          {formatDate(article.publishedDate)}
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-text-primary mb-3 group-hover:text-accent transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-text-secondary mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-accent font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                          Czytaj artykuł
                          <ExternalLink className="w-4 h-4" />
                        </span>
                        <span className="text-xs text-text-secondary">
                          {article.source}
                        </span>
                      </div>
                    </Card>
                  </a>
                ))}
              </div>

              <div className="mt-12 text-center">
                <p className="text-text-secondary mb-4">
                  Artykuły są automatycznie aktualizowane co 6 godzin
                </p>
                <button
                  onClick={() => {
                    setLoading(true);
                    fetch('/api/articles?refresh=true')
                      .then(res => res.json())
                      .then(data => {
                        if (data.success) {
                          setArticles(data.articles);
                        }
                      })
                      .finally(() => setLoading(false));
                  }}
                  className="text-accent hover:underline text-sm"
                >
                  Odśwież teraz
                </button>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
