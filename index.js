import quotes from "./src/qoutes.js";
import {
  renderFavorites,
  setFavoriteButtonText,
  renderQuote,
} from "./modules/ui.js";
import { toggleFavorite } from "./modules/favorites.js";
import { getRandomQuote } from "./modules/random.js";

let quotesCopy = [...quotes];

const quoteElement = document.getElementById("custom-text");
const quoteAuthorElement = document.getElementById("quote-author");
const button = document.getElementById("btn");
const toggleFavoriteBtn = document.getElementById("toggle-favorite-btn");
const favoritesList = document.getElementById("favorites-list");

let currentQuote = null;

function generateQuote() {
  if (quotesCopy.length === 0) {
    quotesCopy = [...quotes];
  }

  const { index, quote } = getRandomQuote(quotesCopy);
  currentQuote = quote;

  renderQuote(quoteElement, quoteAuthorElement, currentQuote);
  setFavoriteButtonText(toggleFavoriteBtn, currentQuote.isFavorite);

  quotesCopy.splice(index, 1);
}

function onToggleFavorite() {
  if (!currentQuote) return;

  const nowFavorite = toggleFavorite(currentQuote);
  setFavoriteButtonText(toggleFavoriteBtn, nowFavorite);

  renderFavorites(favoritesList, quotes);
}

button.addEventListener("click", generateQuote);
toggleFavoriteBtn.addEventListener("click", onToggleFavorite);

renderFavorites(favoritesList, quotes);
