"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Loader2 } from "lucide-react";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  link: string;
  category: string;
  publishedDate: string;
  source: string;
}

export default function BlogSection() {
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
        setArticles(data.articles.slice(0, 3)); // Pokaż tylko 3 najnowsze
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
    <section className="section-padding bg-surface">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-16"
        >
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-heading-xl font-bold text-text-primary mb-4">
              Wiadomości z rynku ubezpieczeń
            </h2>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              Najnowsze informacje i aktualności z branży ubezpieczeniowej
            </p>
          </div>
          <a href="/porady">
            <Button variant="outline" className="mt-6 md:mt-0">
              Zobacz wszystkie
              <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="w-8 h-8 text-accent animate-spin" />
          </div>
        ) : articles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-text-secondary">
              Brak dostępnych artykułów. Sprawdź połączenie z internetem.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <motion.div
                key={`${article.id}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <a href={article.link} target="_blank" rel="noopener noreferrer">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 overflow-hidden p-0">
                    {/* Image placeholder */}
                    <div className="h-48 bg-gradient-to-br from-accent/20 to-accent-secondary/20 flex items-center justify-center">
                      <p className="text-text-secondary text-sm px-4 text-center">
                        {article.source}
                      </p>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="default">{article.category}</Badge>
                        <div className="flex items-center gap-1 text-sm text-text-secondary">
                          <Calendar className="w-4 h-4" />
                          {formatDate(article.publishedDate)}
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-text-primary mb-3 hover:text-accent transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-text-secondary mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      <span className="text-accent font-medium inline-flex items-center gap-2 hover:gap-3 transition-all">
                        Czytaj więcej
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Card>
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
