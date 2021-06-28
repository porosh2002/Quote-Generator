// const BTN = document.getElementById('PWA_ADD-BTN')
const QuoteBox = document.getElementById('QuoteBox');
const quoteText = document.getElementById('quoteText');
const authorText = document.getElementById('authorText');
const twitterBtn = document.getElementById('twitterBtn');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const online = document.getElementById('online');
const offline = document.getElementById('offline');
const Burger = document.getElementById('Burger')
const Times = document.getElementById('Times')
const DropDown = document.getElementById('DropDown')
window.addEventListener("load", () => {
  if(navigator.onLine !== true){
    online.classList.add('hidden')
    offline.classList.remove('hidden')
  }
});
const SubMenuHandle = () =>{
  Burger.classList.toggle('hidden')
  Times.classList.toggle('hidden')
  DropDown.classList.toggle('hidden')
  QuoteBox.classList.toggle('hidden')
}
Burger.addEventListener('click',()=>{
  SubMenuHandle()
})
Times.addEventListener('click',()=>{
  SubMenuHandle()
})
DropDown.addEventListener('click',()=>{
  SubMenuHandle()
})
// 
function newQuote() {
    // Pick a random quote from array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // Check if Author field is blank and replace it with 'Unknown'
    if (!quote.author) {
      authorText.textContent = 'Unknown';
    } else {
      authorText.textContent = quote.author;
    }
    quoteText.textContent = quote.text;
  }
  async function getQuotes() {
    const apiUrl ='https://type.fit/api/quotes';
    try {
      const response = await fetch(apiUrl);
      apiQuotes = await response.json();
      newQuote();
    } catch (error) {
      // Catch Error Here
    }
  }
  
  // Tweet Quote
  function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
    window.open(twitterUrl, '_blank');
  }
  
  // Event Listeners
  newQuoteBtn.addEventListener('click', newQuote);
  twitterBtn.addEventListener('click', tweetQuote);
  
  // On Load
  getQuotes();



  