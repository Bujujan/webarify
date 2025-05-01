import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'fr'],
  
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: 'en'
});

export const config = {
    // Match all pathnames except for
    // - ... files in the public folder
    // - ... files with extensions (e.g. favicon.ico)
    // - ... the API folder
    matcher: ['/((?!api|_next|.*\\..*|sitemap\\.xml).*)']
};