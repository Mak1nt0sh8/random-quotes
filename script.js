const quotes = [
  {
    quote: "Innovation distinguishes between a leader and a follower",
    author: "Steve Jobs",
  },
  {
    quote:
      "Design is not just what it looks like and feels like. Design is how it works",
    author: "Steve Jobs",
  },
  {
    quote:
      "Sometimes life is going to hit you in the head with a brick. Don't lose faith",
    author: "Steve Jobs",
  },
  {
    quote: "Life is what happens when you're busy making other plans",
    author: "John Lennon",
  },
  {
    quote: "In the middle of difficulty lies opportunity",
    author: "Albert Einstein",
  },
  {
    quote:
      "Success is not final, failure is not fatal: it is the courage to continue that counts",
    author: "Winston Churchill",
  },
  {
    quote: "Do what you can, with what you have, where you are",
    author: "Theodore Roosevelt",
  },
  {
    quote: "It always seems impossible until it's done",
    author: "Nelson Mandela",
  },
  {
    quote: "Be yourself; everyone else is already taken",
    author: "Oscar Wilde",
  },
  {
    quote: "The journey of a thousand miles begins with one step",
    author: "Lao Tzu",
  },
];

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
