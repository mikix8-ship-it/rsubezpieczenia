import { NextRequest, NextResponse } from 'next/server';
import { addQuote } from '@/lib/database';
import { validateVIN } from '@/lib/validateVIN';
import { sendNotificationEmail, sendConfirmationEmail } from '@/lib/email';
import { sendConfirmationSMS } from '@/lib/sms';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      registrationNumber,
      vin,
      firstRegistrationDate,
      email,
      phone,
      consent,
    } = body;

    // Walidacja danych
    if (!registrationNumber || !vin || !firstRegistrationDate || !email || !phone || !consent) {
      return NextResponse.json(
        { error: 'Wszystkie pola są wymagane' },
        { status: 400 }
      );
    }

    // Walidacja VIN
    const vinValidation = validateVIN(vin);
    if (!vinValidation.valid) {
      return NextResponse.json(
        { error: vinValidation.error },
        { status: 400 }
      );
    }

    // Walidacja email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Nieprawidłowy adres email' },
        { status: 400 }
      );
    }

    // Zapisanie do bazy danych
    const quote = addQuote({
      registrationNumber: registrationNumber.toUpperCase(),
      vin: vin.toUpperCase(),
      firstRegistrationDate,
      email,
      phone,
      consent,
    });

    // Wysłanie emaili (asynchronicznie, nie blokujemy odpowiedzi)
    Promise.all([
      sendNotificationEmail(quote),
      sendConfirmationEmail(quote),
      sendConfirmationSMS(quote),
    ]).then(([emailSent, confirmationSent, smsSent]) => {
      console.log('Email powiadomienie:', emailSent ? '✅' : '❌');
      console.log('Email potwierdzenie:', confirmationSent ? '✅' : '❌');
      console.log('SMS potwierdzenie:', smsSent.success ? '✅' : '❌');
    }).catch(error => {
      console.error('Błąd wysyłania powiadomień:', error);
    });

    // Zwróć sukces od razu
    return NextResponse.json({
      success: true,
      message: 'Zapytanie zostało zapisane',
      quote: {
        id: quote.id,
        registrationNumber: quote.registrationNumber,
      },
    });

  } catch (error) {
    console.error('Błąd API /api/quotes:', error);
    return NextResponse.json(
      { error: 'Wystąpił błąd podczas przetwarzania zapytania' },
      { status: 500 }
    );
  }
}

// GET - pobieranie wszystkich zapytań (dla admina - opcjonalne)
export async function GET(request: NextRequest) {
  try {
    // TODO: Dodać autoryzację dla admina
    // const { searchParams } = new URL(request.url);
    // const adminKey = searchParams.get('key');
    
    // if (adminKey !== process.env.ADMIN_API_KEY) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    // const { getAllQuotes } = await import('@/lib/database');
    // const quotes = getAllQuotes();
    
    // return NextResponse.json({ quotes });
    
    return NextResponse.json(
      { error: 'Endpoint not implemented yet' },
      { status: 501 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
