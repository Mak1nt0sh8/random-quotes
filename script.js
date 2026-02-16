import quotes from "./qoutes.js";

let quotesCopy = [...quotes];

const quoteElement = document.getElementById("custom-text");
const quoteAuthorElement = document.getElementById("quote-author");
const button = document.getElementById("btn");

function generateQuote() {
  if (quotesCopy.length === 0) {
    quotesCopy = [...quotes];
  }
  const randomIndex = Math.floor(Math.random() * quotesCopy.length);
  const randomQuote = quotesCopy[randomIndex];
  quoteElement.innerHTML = `<em>"${randomQuote.quote}"</em>`;
  quoteAuthorElement.innerHTML = `<span style="display:block; margin-top:15px; opacity:0.8;">- ${randomQuote.author}</span>`;
  quotesCopy.splice(randomIndex, 1);
}

button.addEventListener("click", generateQuote);
