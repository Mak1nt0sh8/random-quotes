export function getRandomQuote(quotesCopy) {
  const index = Math.floor(Math.random() * quotesCopy.length);
  const quote = quotesCopy[index];
  return { index, quote };
}
