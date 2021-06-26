// const BTN = document.getElementById('PWA_ADD-BTN')
const quoteText = document.getElementById('quoteText');
const authorText = document.getElementById('AuthorText');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
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



  // PWA

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }
  
  
  
  let deferredPrompt;
  // BTN.classList.add('hidden')
  // setTimeout(()=>{  
  //   BTN.classList.add('delay-300')
  //   BTN.classList.remove('hidden')
  // },
  // 000)
  
  window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // BTN.classList.remove('hidden')

  BTN.addEventListener('click', (e) => {
    console.log('clicked');
	  // hide our user interface that shows our A2HS button
	  // BTN.classList.add('hidden');
	  // Show the prompt
	  deferredPrompt.prompt();
	  // Wait for the user to respond to the prompt
	  deferredPrompt.userChoice
	    .then((choiceResult) => {
	      if (choiceResult.outcome === 'accepted') {
	        console.log('User accepted the A2HS prompt');
	      } else {
	        console.log('User dismissed the A2HS prompt');
	      }
	      deferredPrompt = null;
	    });
	});
  // Update UI notify the user they can install the PWA
  showInstallPromotion();
  // Optionally, send analytics event that PWA install promo was shown.
  console.log(`'beforeinstallprompt' event was fired.`);
});