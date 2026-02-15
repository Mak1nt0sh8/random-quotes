let quotes = [
  "Small progress every day beats big promises someday.",
  "You dont need motivation — you need a decision.",
  "Discipline is choosing what you want most over what you want now.",
];

const quoteElement = document.getElementById("custom-text");
const button = document.getElementById("btn");

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  console.log(randomIndex);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote;
}

button.addEventListener("click", generateQuote);
