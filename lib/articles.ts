import Parser from 'rss-parser';
import fs from 'fs';
import path from 'path';

const parser = new Parser({
  customFields: {
    item: ['pubDate', 'description', 'content:encoded'],
  },
});

// RSS feedy popularnych portali o ubezpieczeniach w Polsce
const RSS_FEEDS = [
  {
    name: 'Gazeta Ubezpieczeniowa',
    url: 'https://gu.com.pl/feed/',
    category: 'Ubezpieczenia',
  },
  {
    name: 'Portal Ubezpieczeniowy',
    url: 'https://www.pu.pl/rss',
    category: 'Ubezpieczenia',
  },
  {
    name: 'Money.pl - Ubezpieczenia',
    url: 'https://www.money.pl/rss/ubezpieczenia/',
    category: 'Ubezpieczenia',
  },
];

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  link: string;
  category: string;
  publishedDate: string; // ISO format
  source: string;
}

const ARTICLES_FILE = path.join(process.cwd(), 'data', 'articles.json');

// Inicjalizacja pliku artykułów
function initArticlesFile() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(ARTICLES_FILE)) {
    fs.writeFileSync(ARTICLES_FILE, JSON.stringify([], null, 2));
  }
}

/**
 * Pobiera artykuły ze wszystkich RSS feedów
 */
export async function fetchArticles(): Promise<Article[]> {
  const allArticles: Article[] = [];

  for (const feed of RSS_FEEDS) {
    try {
      const feedData = await parser.parseURL(feed.url);
      
      feedData.items.slice(0, 5).forEach((item) => {
        if (item.title && item.link && item.pubDate) {
          allArticles.push({
            id: generateArticleId(item.link),
            title: item.title,
            excerpt: extractExcerpt(item.contentSnippet || item.description || ''),
            link: item.link,
            category: feed.category,
            publishedDate: new Date(item.pubDate).toISOString(),
            source: feed.name,
          });
        }
      });
    } catch (error) {
      console.error(`Błąd pobierania RSS z ${feed.name}:`, error);
    }
  }

  // Sortuj według daty (najnowsze pierwsze)
  allArticles.sort((a, b) => 
    new Date(b.publishedDate).getTime() - new Date(a.publishedDate).getTime()
  );

  return allArticles.slice(0, 10); // Zwróć 10 najnowszych
}

/**
 * Generuje unikalny ID dla artykułu na podstawie URL
 */
function generateArticleId(url: string): string {
  // Użyj pełnego hash URL zamiast skróconego base64
  const crypto = require('crypto');
  return crypto.createHash('md5').update(url).digest('hex').substring(0, 16);
}

/**
 * Wyciąga skrót tekstu (excerpt)
 */
function extractExcerpt(text: string): string {
  // Usuń HTML tags
  const clean = text.replace(/<[^>]*>/g, '');
  // Usuń nadmiarowe białe znaki
  const trimmed = clean.replace(/\s+/g, ' ').trim();
  // Ogranicz długość
  return trimmed.length > 200 ? trimmed.substring(0, 197) + '...' : trimmed;
}

/**
 * Zapisuje artykuły do pliku
 */
export function saveArticles(articles: Article[]): void {
  initArticlesFile();
  fs.writeFileSync(ARTICLES_FILE, JSON.stringify(articles, null, 2));
}

/**
 * Wczytuje artykuły z pliku
 */
export function loadArticles(): Article[] {
  initArticlesFile();
  try {
    const data = fs.readFileSync(ARTICLES_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Błąd wczytywania artykułów:', error);
    return [];
  }
}

/**
 * Aktualizuje artykuły (pobiera nowe i zapisuje)
 */
export async function updateArticles(): Promise<Article[]> {
  console.log('Aktualizacja artykułów...');
  const articles = await fetchArticles();
  saveArticles(articles);
  console.log(`Zaktualizowano ${articles.length} artykułów`);
  return articles;
}

/**
 * Pobiera aktywne artykuły (z cache lub świeże)
 */
export async function getActiveArticles(forceRefresh = false): Promise<Article[]> {
  if (forceRefresh) {
    return await updateArticles();
  }

  const cached = loadArticles();
  
  // Jeśli cache jest pusty lub starszy niż 6 godzin, odśwież
  if (cached.length === 0) {
    return await updateArticles();
  }

  const oldestArticle = cached[cached.length - 1];
  const ageHours = (Date.now() - new Date(oldestArticle.publishedDate).getTime()) / (1000 * 60 * 60);
  
  if (ageHours > 6) {
    // Aktualizuj asynchronicznie w tle
    updateArticles().catch(console.error);
  }

  return cached;
}
