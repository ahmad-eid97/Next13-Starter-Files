//== Utils
import { NextResponse } from 'next/server';
import { i18n } from '@/i18n.config';
//== Types
import type { NextRequest } from 'next/server';

export const middleware = (request: NextRequest) => {
  const response = NextResponse.next();
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = i18n.locales.every(locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`);
  const savedLocaleCookie = request.cookies.get('lms-locale');
  const savedLocale = savedLocaleCookie?.value;
  const currentLocale = request.nextUrl.pathname.split('/')[1];

  response.cookies.set('lms-locale', currentLocale, {
    path: '/',
  })

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = savedLocale || currentLocale || 'en';
    return NextResponse.redirect(new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url));
  }

  // Redirect if current locale is not same as saved locale
  if ((savedLocale && currentLocale) !== savedLocale) {
    return NextResponse.redirect(new URL(`/${savedLocale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url));
  }
}

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.png|imgs|fonts|css|webfonts|favicon).*)']
}