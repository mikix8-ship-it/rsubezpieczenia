import nodemailer from 'nodemailer';
import type { QuoteRequest } from './database';

// Konfiguracja SMTP
// WAŻNE: Przed wdrożeniem uzupełnij dane SMTP w zmiennych środowiskowych
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false, // true dla 465, false dla innych portów
  auth: {
    user: process.env.SMTP_USER || '', // Twój email
    pass: process.env.SMTP_PASSWORD || '', // Hasło lub app password
  },
});

/**
 * Wysyła email z powiadomieniem o nowym zapytaniu do RS Ubezpieczenia
 */
export async function sendNotificationEmail(quote: QuoteRequest): Promise<boolean> {
  try {
    // Email dla RS Ubezpieczenia
    const adminEmail = {
      from: process.env.SMTP_FROM || 'noreply@rsubezpieczenia.pl',
      to: 'info@rsubezpieczenia.pl',
      subject: `🚗 Nowe zapytanie ofertowe - ${quote.registrationNumber}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #4F8CFF; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #4F8CFF; }
            .value { color: #333; margin-top: 5px; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #4F8CFF; color: #666; font-size: 12px; }
            .button { 
              display: inline-block; 
              background: #4F8CFF; 
              color: white; 
              padding: 12px 24px; 
              text-decoration: none; 
              border-radius: 6px; 
              margin-top: 15px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🚗 Nowe zapytanie ofertowe</h2>
            </div>
            <div class="content">
              <p>Otrzymano nowe zapytanie o wycenę ubezpieczenia samochodu:</p>
              
              <div class="field">
                <div class="label">📋 Numer rejestracyjny:</div>
                <div class="value">${quote.registrationNumber}</div>
              </div>
              
              <div class="field">
                <div class="label">🔢 Numer VIN:</div>
                <div class="value">${quote.vin}</div>
              </div>
              
              <div class="field">
                <div class="label">📅 Data pierwszej rejestracji:</div>
                <div class="value">${quote.firstRegistrationDate}</div>
              </div>
              
              <hr style="margin: 20px 0; border: 1px solid #ddd;">
              
              <div class="field">
                <div class="label">👤 Dane kontaktowe klienta:</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${quote.email}">${quote.email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">📱 Telefon:</div>
                <div class="value"><a href="tel:${quote.phone}">${quote.phone}</a></div>
              </div>
              
              <div class="field">
                <div class="label">🕐 Data zgłoszenia:</div>
                <div class="value">${new Date(quote.createdAt).toLocaleString('pl-PL')}</div>
              </div>
              
              <a href="tel:${quote.phone}" class="button">📞 Zadzwoń do klienta</a>
              
              <div class="footer">
                <p>To automatyczna wiadomość z systemu RS Ubezpieczenia.</p>
                <p>Zapytanie ID: ${quote.id}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(adminEmail);
    return true;
  } catch (error) {
    console.error('Błąd wysyłania emaila:', error);
    return false;
  }
}

/**
 * Wysyła email potwierdzający do klienta
 */
export async function sendConfirmationEmail(quote: QuoteRequest): Promise<boolean> {
  try {
    const clientEmail = {
      from: process.env.SMTP_FROM || 'noreply@rsubezpieczenia.pl',
      to: quote.email,
      subject: '✅ Potwierdzenie zapytania - RS Ubezpieczenia',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #4F8CFF; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f8f9fa; padding: 30px; border-radius: 0 0 8px 8px; }
            .highlight { background: white; padding: 20px; border-left: 4px solid #34D399; margin: 20px 0; border-radius: 4px; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 2px solid #4F8CFF; color: #666; font-size: 12px; text-align: center; }
            .contact-box { background: white; padding: 15px; margin-top: 20px; border-radius: 6px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✅ Dziękujemy za zapytanie!</h1>
            </div>
            <div class="content">
              <p>Szanowni Państwo,</p>
              
              <p>Otrzymaliśmy Państwa zapytanie o wycenę ubezpieczenia samochodu. Dziękujemy za zaufanie!</p>
              
              <div class="highlight">
                <h3 style="margin-top: 0; color: #4F8CFF;">🚗 Szczegóły Państwa pojazdu:</h3>
                <p><strong>Numer rejestracyjny:</strong> ${quote.registrationNumber}</p>
                <p><strong>Numer VIN:</strong> ${quote.vin}</p>
                <p><strong>Data pierwszej rejestracji:</strong> ${quote.firstRegistrationDate}</p>
              </div>
              
              <h3 style="color: #4F8CFF;">⏱️ Co dalej?</h3>
              <p>Nasz doradca skontaktuje się z Państwem <strong>w ciągu 24 godzin</strong> z przygotowaną ofertą dopasowaną do Państwa potrzeb.</p>
              
              <div class="contact-box">
                <h4 style="margin-top: 0; color: #4F8CFF;">📞 Potrzebujesz szybszego kontaktu?</h4>
                <p>Zadzwoń do nas:</p>
                <p><strong>Telefon:</strong> <a href="tel:+48660726743" style="color: #4F8CFF;">+48 660 726 743</a></p>
                <p><strong>Email:</strong> <a href="mailto:info@rsubezpieczenia.pl" style="color: #4F8CFF;">info@rsubezpieczenia.pl</a></p>
                <p style="margin-bottom: 0;"><strong>Godziny pracy:</strong> Pon-Pt 9:00-17:00</p>
              </div>
              
              <div class="footer">
                <p><strong>RS Ubezpieczenia</strong></p>
                <p>ul. Szybowcowa 25, 54-130 Wrocław</p>
                <p>www.rsubezpieczenia.pl</p>
                <p style="margin-top: 15px; color: #999;">Numer zapytania: ${quote.id}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(clientEmail);
    return true;
  } catch (error) {
    console.error('Błąd wysyłania emaila potwierdzającego:', error);
    return false;
  }
}

/**
 * Test połączenia SMTP
 */
export async function testEmailConnection(): Promise<boolean> {
  try {
    await transporter.verify();
    console.log('✅ Połączenie SMTP działa poprawnie');
    return true;
  } catch (error) {
    console.error('❌ Błąd połączenia SMTP:', error);
    return false;
  }
}
