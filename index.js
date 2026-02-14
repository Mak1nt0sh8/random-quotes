const quotes = [
  "Small progress every day beats big promises someday.",
  "You dont need motivation — you need a decision.",
  "Discipline is choosing what you want most over what you want now.",
];

const quoteElement = document.getElementById("quote");
const button = document.getElementById("btn");

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = qoutes[randomIndex];
  quoteElement.textContent = randomQuote;
}

button.addEventListener("click", generateQuote);

// Optional: show a quote immediately when page loads
generateQuote();

console.log("a");
