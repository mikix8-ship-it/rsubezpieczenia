/**
 * Walidacja numeru VIN (Vehicle Identification Number)
 * VIN to 17-znakowy kod identyfikacyjny pojazdu
 */

export function validateVIN(vin: string): { valid: boolean; error?: string } {
  // Usuń białe znaki
  const cleanVIN = vin.trim().toUpperCase();

  // Sprawdź długość
  if (cleanVIN.length !== 17) {
    return {
      valid: false,
      error: 'Numer VIN musi zawierać dokładnie 17 znaków',
    };
  }

  // Sprawdź niedozwolone znaki (I, O, Q są zabronione w VIN)
  const invalidChars = /[IOQ]/;
  if (invalidChars.test(cleanVIN)) {
    return {
      valid: false,
      error: 'Numer VIN nie może zawierać liter I, O lub Q',
    };
  }

  // Sprawdź czy zawiera tylko dozwolone znaki (litery i cyfry)
  const validChars = /^[A-HJ-NPR-Z0-9]{17}$/;
  if (!validChars.test(cleanVIN)) {
    return {
      valid: false,
      error: 'Numer VIN może zawierać tylko litery (A-Z, bez I, O, Q) i cyfry (0-9)',
    };
  }

  // Opcjonalna walidacja sumy kontrolnej (check digit)
  // TODO: Implementacja pełnej walidacji sumy kontrolnej według standardu ISO 3779
  // Na razie podstawowa walidacja formatu

  return { valid: true };
}

/**
 * Walidacja numeru rejestracyjnego (polskiego)
 */
export function validateRegistrationNumber(regNumber: string): { valid: boolean; error?: string } {
  const clean = regNumber.trim().toUpperCase().replace(/[\s-]/g, '');

  // Polski numer rejestracyjny: 2-3 litery + 4-5 cyfr lub litera
  // Przykłady: DW12345, DWR1234, WR12345
  const polishPattern = /^[A-Z]{2,3}[A-Z0-9]{4,5}$/;

  if (!polishPattern.test(clean)) {
    return {
      valid: false,
      error: 'Nieprawidłowy format numeru rejestracyjnego',
    };
  }

  return { valid: true };
}
