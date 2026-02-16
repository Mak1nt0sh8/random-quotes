export function renderFavorites(favoritesList, quotes) {
  const favorites = quotes.filter((q) => q.isFavorite);

  if (favorites.length === 0) {
    favoritesList.innerHTML = `<p class="favorites-empty">No favorites yet</p>`;
    return;
  }

  favoritesList.innerHTML = favorites
    .map(
      (q) => `
        <div class="favorite-item">
          <div class="favorite-quote"><em>"${q.quote}"</em></div>
          <div class="favorite-author">- ${q.author}</div>
        </div>
      `,
    )
    .join("");
}

export function setFavoriteButtonText(btn, isFavorite) {
  btn.textContent = isFavorite ? "Remove from favorites" : "Add to favorites";
}

export function renderQuote(quoteElement, authorElement, quoteObj) {
  quoteElement.innerHTML = `<em>"${quoteObj.quote}"</em>`;
  authorElement.textContent = `- ${quoteObj.author}`;
}
