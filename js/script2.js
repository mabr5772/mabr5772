const QuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);
const endpoint = 'https://catfact.ninja/fact';

async function getQuote(){
  console.log("quote button was clicked")
  try {
    const response = await fetch(endpoint);
    if (!response.ok){
      throw Error(response.stausText)
    }
    const json = await response.json();
    displayQuote(json.message);
  } catch (err){
    console.log(err)
    alert('Failed');
  }
}
function displayQuote(quote){
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}
