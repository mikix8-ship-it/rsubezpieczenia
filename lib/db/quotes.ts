import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data');
const QUOTES_FILE = path.join(DATA_DIR, 'quotes.json');

// Inicjalizacja katalogu danych
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

if (!fs.existsSync(QUOTES_FILE)) {
  fs.writeFileSync(QUOTES_FILE, JSON.stringify([], null, 2));
}

export interface QuoteRequest {
  id: string;
  registrationNumber: string;
  vin: string;
  firstRegistrationDate: string;
  email: string;
  phone: string;
  consent: boolean;
  createdAt: string;
  ipAddress?: string;
  userAgent?: string;
}

export function saveQuote(quote: Omit<QuoteRequest, 'id' | 'createdAt'>): QuoteRequest {
  const quotes = getAllQuotes();
  
  const newQuote: QuoteRequest = {
    ...quote,
    id: `QT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    createdAt: new Date().toISOString(),
  };
  
  quotes.push(newQuote);
  fs.writeFileSync(QUOTES_FILE, JSON.stringify(quotes, null, 2));
  
  return newQuote;
}

export function getAllQuotes(): QuoteRequest[] {
  try {
    const data = fs.readFileSync(QUOTES_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

export function getQuoteById(id: string): QuoteRequest | null {
  const quotes = getAllQuotes();
  return quotes.find(q => q.id === id) || null;
}

export function getQuotesByDateRange(startDate: Date, endDate: Date): QuoteRequest[] {
  const quotes = getAllQuotes();
  return quotes.filter(q => {
    const quoteDate = new Date(q.createdAt);
    return quoteDate >= startDate && quoteDate <= endDate;
  });
}
