/* final-Task - project*/

document.addEventListener('DOMContentLoaded', () => {
    const quoteText = document.getElementById('quote');
    const authorText = document.getElementById('author');
    const newQuoteBtn = document.getElementById('new-quote-btn');
    const shareQuoteBtn = document.getElementById('share-quote-btn');
  
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        const { content, author } = data;
        quoteText.textContent = content;
        authorText.textContent = `- ${author}`;
      } catch (error) {
        console.error('Error fetching quote:', error);
        quoteText.textContent = 'Error fetching quote. Please try again later.';
        authorText.textContent = '';
      }
    };
  
    newQuoteBtn.addEventListener('click', fetchQuote);
  
    shareQuoteBtn.addEventListener('click', () => {
      const quote = quoteText.textContent;
      const author = authorText.textContent;
      const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${quote} ${author}`)}`;
      window.open(twitterUrl, '_blank');
    });
  
    // Fetch a quote when the page loads
    fetchQuote();
  });