import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import { NextRequest } from 'next/server';

// 1. Creamos la instancia del middleware de next-intl
const intlMiddleware = createMiddleware(routing);

// 2. Exportamos la función con el nombre 'proxy' como requiere Next.js
export function proxy(request: NextRequest) {
  return intlMiddleware(request);
}

// 3. El matcher se queda exactamente igual
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en)/:path*']
};