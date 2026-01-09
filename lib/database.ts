import fs from 'fs';
import path from 'path';

const DB_PATH = path.join(process.cwd(), 'data', 'quotes.json');

export interface QuoteRequest {
  id: string;
  registrationNumber: string;
  vin: string;
  firstRegistrationDate: string;
  email: string;
  phone: string;
  consent: boolean;
  createdAt: string;
  status: 'new' | 'processing' | 'completed';
}

// Inicjalizacja bazy danych
function initDatabase() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  if (!fs.existsSync(DB_PATH)) {
    fs.writeFileSync(DB_PATH, JSON.stringify([], null, 2));
  }
}

// Odczyt wszystkich zapytań
export function getAllQuotes(): QuoteRequest[] {
  initDatabase();
  const data = fs.readFileSync(DB_PATH, 'utf-8');
  return JSON.parse(data);
}

// Dodanie nowego zapytania
export function addQuote(quote: Omit<QuoteRequest, 'id' | 'createdAt' | 'status'>): QuoteRequest {
  const quotes = getAllQuotes();
  
  const newQuote: QuoteRequest = {
    ...quote,
    id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
    createdAt: new Date().toISOString(),
    status: 'new',
  };
  
  quotes.push(newQuote);
  fs.writeFileSync(DB_PATH, JSON.stringify(quotes, null, 2));
  
  return newQuote;
}

// Pobranie zapytania po ID
export function getQuoteById(id: string): QuoteRequest | null {
  const quotes = getAllQuotes();
  return quotes.find(q => q.id === id) || null;
}

// Aktualizacja statusu
export function updateQuoteStatus(id: string, status: QuoteRequest['status']): QuoteRequest | null {
  const quotes = getAllQuotes();
  const index = quotes.findIndex(q => q.id === id);
  
  if (index === -1) return null;
  
  quotes[index].status = status;
  fs.writeFileSync(DB_PATH, JSON.stringify(quotes, null, 2));
  
  return quotes[index];
}
