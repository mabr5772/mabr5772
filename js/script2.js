const quoteButton document.querySelector('#js-new-quote');
quoteButton.addEventListner('click', getQuote);

async function getQuote(){
  console.log("quote button was clicked")
  try {
    const response = await fetch(endpoint);
    if (!response.ok){
      throw Error(response.stausText)
    }
    const json = await response.json();
    console.log(json;
    displayQuote(json.fact);
  } catch (err){
    console.log(err)
    alert('Failed');
  }
}
function displayQuote(quote){
  const quoteText = document.querySelector(''#js-quote-text')
  quoteText.textContent = quote;
}

const quoteButton document.querySelector('#js-new-quote');
quoteButton.addEventListner('click', getQuote);
const endpoint = 'https://catfact.ninja/fact';
