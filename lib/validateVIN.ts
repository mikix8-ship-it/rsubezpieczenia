/**
 * Walidacja numeru VIN (Vehicle Identification Number)
 * VIN musi mieć dokładnie 17 znaków (bez I, O, Q)
 */
export function validateVIN(vin: string): { valid: boolean; error?: string } {
  // Usunięcie białych znaków i konwersja na wielkie litery
  const cleanVIN = vin.trim().toUpperCase();

  // Sprawdzenie długości
  if (cleanVIN.length !== 17) {
    return {
      valid: false,
      error: 'Numer VIN musi mieć dokładnie 17 znaków',
    };
  }

  // Sprawdzenie czy zawiera tylko dozwolone znaki (bez I, O, Q)
  const validChars = /^[A-HJ-NPR-Z0-9]{17}$/;
  if (!validChars.test(cleanVIN)) {
    return {
      valid: false,
      error: 'Numer VIN zawiera niedozwolone znaki (nie może zawierać I, O, Q)',
    };
  }

  // Sprawdzenie sumy kontrolnej (algorytm VIN)
  const transliteration: { [key: string]: number } = {
    A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8,
    J: 1, K: 2, L: 3, M: 4, N: 5, P: 7, R: 9,
    S: 2, T: 3, U: 4, V: 5, W: 6, X: 7, Y: 8, Z: 9,
    '0': 0, '1': 1, '2': 2, '3': 3, '4': 4,
    '5': 5, '6': 6, '7': 7, '8': 8, '9': 9,
  };

  const weights = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];
  
  let sum = 0;
  for (let i = 0; i < 17; i++) {
    const char = cleanVIN[i];
    const value = transliteration[char];
    sum += value * weights[i];
  }

  const checkDigit = sum % 11;
  const expectedCheckDigit = cleanVIN[8] === 'X' ? 10 : parseInt(cleanVIN[8]);

  if (checkDigit !== expectedCheckDigit) {
    return {
      valid: false,
      error: 'Numer VIN jest nieprawidłowy (błędna suma kontrolna)',
    };
  }

  return { valid: true };
}

/**
 * Formatowanie VIN (dodanie spacji dla lepszej czytelności)
 */
export function formatVIN(vin: string): string {
  const cleanVIN = vin.trim().toUpperCase();
  if (cleanVIN.length !== 17) return cleanVIN;
  
  // Format: XXX XXXX XX XXXXXXX
  return `${cleanVIN.slice(0, 3)} ${cleanVIN.slice(3, 7)} ${cleanVIN.slice(7, 9)} ${cleanVIN.slice(9)}`;
}
