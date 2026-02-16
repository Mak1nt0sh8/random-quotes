export function toggleFavorite(quoteObj) {
  quoteObj.isFavorite = !quoteObj.isFavorite;
  return quoteObj.isFavorite;
}
