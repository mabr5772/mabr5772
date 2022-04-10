


async function getQuote() {
  try {
    const response = await fetch(endpoint)
    if (!response.ok) {
      throw Error(response.statusText)
    }
    const json = await response.json();
    displayQuote(json.quote);
    setTweetButton(json.quote);

  } catch (err) {
    console.log(err)
    alert('Failed to get quote');
  }
}
const endpoint = "https://free-quotes-api.herokuapp.com";

const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);
const twitterButton = document.querySelector('#js-tweet');

function displayQuote(quote) {
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = quote;
}

function setTweetButton(quote) {
  twitterButton.setAttribute('href', `https://twitter.com/share?text=${quote}`);
}
getQuote();
