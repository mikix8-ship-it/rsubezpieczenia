import { NextRequest, NextResponse } from 'next/server';
import { getActiveArticles, updateArticles } from '@/lib/articles';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const refresh = searchParams.get('refresh') === 'true';

    const articles = await getActiveArticles(refresh);

    return NextResponse.json({
      success: true,
      articles,
      count: articles.length,
    });
  } catch (error) {
    console.error('Błąd pobierania artykułów:', error);
    return NextResponse.json(
      { success: false, error: 'Nie udało się pobrać artykułów' },
      { status: 500 }
    );
  }
}

// POST - manualna aktualizacja artykułów (dla admina)
export async function POST() {
  try {
    const articles = await updateArticles();
    
    return NextResponse.json({
      success: true,
      message: 'Artykuły zaktualizowane',
      count: articles.length,
    });
  } catch (error) {
    console.error('Błąd aktualizacji artykułów:', error);
    return NextResponse.json(
      { success: false, error: 'Nie udało się zaktualizować artykułów' },
      { status: 500 }
    );
  }
}
