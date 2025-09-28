export function makeGoogleSearchUrl(query: string): string {
  if (!query || query.trim() === '') {
    return '';
  }
  const trimmedQuery = query.trim();
  const encodedQuery = encodeURIComponent(trimmedQuery);
  return `https://www.google.com/search?q=${encodedQuery}`;
}
