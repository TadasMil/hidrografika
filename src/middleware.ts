import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  const { url, redirect } = context;
  
  // Get the pathname from the URL
  const pathname = url.pathname;
  
  // Skip if already has trailing slash
  if (pathname.endsWith('/')) {
    return next();
  }
  
  // Skip if it's a file with extension (like favicon.ico, robots.txt, etc.)
  if (pathname.includes('.')) {
    return next();
  }
  
  // Skip API routes or special Astro routes
  if (pathname.startsWith('/_') || pathname.startsWith('/api/')) {
    return next();
  }
  
  // Create the new URL with trailing slash
  const newUrl = new URL(url);
  newUrl.pathname = pathname + '/';
  
  // Redirect to the URL with trailing slash
  return redirect(newUrl.toString(), 301);
});