console.log("main.js loaded")

const quotes = [
  // Array met alle quotes
  { 
    quote: "My fault original gangster",
    from: "-Not an original gangster"
},
// ^Object om quote en quote persoon op te slaan^
{ 
  quote: 'If life were predictable it would cease to be life, and be without flavor.',
  from: '-Eleonor Roosevelt'
},
// ^Object om quote en quote persoon op te slaan^
{ 
  quote: 'Life is what happens when you\'re busy making other plans',
  from: '-John Lennon'
},
// ^Object om quote en quote persoon op te slaan^
{ 
  quote: 'If life gives you lemons, <br> make lemonade',
  from: '-Dunno - sometime...'
},
// ^Object om quote en quote persoon op te slaan^
];

const quoteSentence = document.querySelector(".quote");
const quotePerson = document.querySelector(".quote-from");
const quoteBtn = document.querySelector(".quote-btn");
// Variabelen met quote, quote persoon en quote button

quoteBtn.addEventListener("click", randomQuote)
// als je op button klikt voert hij randomQuote function uit

function randomQuote() {
  const getQuoteNmr = Math.floor(Math.random() * quotes.length);
  // Zorgt dat hij een nummer tussen de 0 en 1 pakt en * de lengte van de aantal
  // quotes pakt en afrond omlaag zodat hij de laatste quote ook pakt.
  const useQuote = quotes[getQuoteNmr];
  // getQuoteNmr geeft een nummer en kiest 1 van de objecten
  quoteSentence.innerHTML = useQuote.quote;
  // Vult de quote van het gegeven object
  quotePerson.innerHTML = useQuote.from;
  // Vult de from van het gegeven object
}

randomQuote();
// Zorgt dat er al een random quote in de div ligt 