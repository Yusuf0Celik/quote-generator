console.log("main.js loaded")

const quoteSentence = document.querySelector(".quote");
const quotePerson = document.querySelector(".quote-from");
const quoteBtn = document.querySelector(".quote-btn");
// // ^Variabelen met quote, quote persoon en quote button^
let quotes;

async function init(){
  if(storedQuotes === null) {
    // ^Check if localStorage key "quoteArray" is empty^
  const res = await fetch("https://type.fit/api/quotes")
  // ^Fetch API^
  quotes = await res.json();
  // If quoteArray is not empy use localstorage
  localStorage.setItem("quoteArray", JSON.stringify(quotes))
  } else {
    quotes = storedQuotes;
  }
  getQuote();
}

const storedQuotes = JSON.parse(localStorage.getItem("quoteArray"));

function getQuote() {
  const num = Math.floor(Math.random()*quotes.length);
  // ^Pakt random nummer tussen 0 en quotes.length^
  const item = quotes[num];
  // ^Pakt de quote van een random nummer in lijst^
  const quote = item.text;
  // ^Pak de quote text^
  const author = item.author;
  // ^Pak de author text^
  quoteSentence.innerText = quote;
  // ^Zet text quoteSentence^
  quotePerson.innerText = author;
  // ^Zet text quotePerson^
}

quoteBtn.addEventListener("click", getQuote)
// ^klik voor random quote^

init();
// ^zet alvast 1 random quote in plaats^