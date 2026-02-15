const quotes = [
  "Small progress every day beats big promises someday.",
  "You don't need motivation — you need a decision.",
  "Discipline is choosing what you want most over what you want now.",
];

const quoteElement = document.getElementById("custom-text");
const button = document.getElementById("btn");

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;
}

button.addEventListener("click", generateQuote);
