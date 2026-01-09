import type { QuoteRequest } from './database';

/**
 * Wysyła SMS z potwierdzeniem do klienta
 * 
 * WAŻNE: Do działania wymaga konfiguracji:
 * 1. Załóż konto na https://www.smsapi.pl/
 * 2. Dodaj token API do zmiennych środowiskowych:
 *    SMSAPI_TOKEN=your_token_here
 * 3. Kup kredyty SMS
 */

interface SMSResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export async function sendConfirmationSMS(quote: QuoteRequest): Promise<SMSResponse> {
  const token = process.env.SMSAPI_TOKEN;
  
  // Jeśli brak tokena, zwracamy informację
  if (!token) {
    console.warn('⚠️ Brak tokena SMSAPI - SMS nie zostanie wysłany');
    console.warn('Skonfiguruj SMSAPI_TOKEN w zmiennych środowiskowych');
    return {
      success: false,
      error: 'SMS API nie jest skonfigurowane',
    };
  }

  try {
    // Formatowanie numeru telefonu (usunięcie spacji, myślników)
    const cleanPhone = quote.phone.replace(/[\s\-()]/g, '');
    
    // Treść SMS (max 160 znaków dla pojedynczego SMS)
    const message = `RS Ubezpieczenia: Dziekujemy za zapytanie! Skontaktujemy sie w ciagu 24h. Tel: 660726743`;

    // Wywołanie API SMS
    const response = await fetch('https://api.smsapi.pl/sms.do', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: cleanPhone,
        message: message,
        from: 'RSUbezp', // Nazwa nadawcy (max 11 znaków)
        encoding: 'utf-8',
        normalize: 1,
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log(`✅ SMS wysłany do ${quote.phone}`);
      return {
        success: true,
        message: 'SMS wysłany pomyślnie',
      };
    } else {
      console.error('❌ Błąd wysyłania SMS:', data);
      return {
        success: false,
        error: data.message || 'Nieznany błąd SMS API',
      };
    }
  } catch (error) {
    console.error('❌ Błąd połączenia z SMS API:', error);
    return {
      success: false,
      error: 'Błąd połączenia z SMS API',
    };
  }
}
