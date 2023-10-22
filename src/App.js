import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";

const QUOTES_API = "https://api.quotable.io/quotes/random";

function App() {
  const [quote, setQuote] = useState({
    content: "",
    author: "",
  });

  async function getQuote()  {
    let quote = await fetch(QUOTES_API)
      .then((res) => res.json())  
    
    return setQuote({
      content: quote[0].content,
      author: quote[0].author
    }
      )
  };
  
  useEffect(() => {
    getQuote();
  }, [])

  function handleNewQuote() {
    getQuote()
  }

  return (
    <div id="app" className="container-fluid bg-primary text-bg-primary d-flex align-items-center justify-content-center">
          <QuoteBox quote={quote} onNewQuote={handleNewQuote} />
    </div>
  );
}



function QuoteBox({ quote, onNewQuote }) {
  return (
    <div
      id="quote-box"
      className="d-flex flex-column vertical-end bg-white text-primary px-3 py-2 rounded"
    >
      <QuoteText text={quote.content} />
      <QuoteAuthor author={quote.author} />
      <ButtonBar onNewQuoteClick={onNewQuote} />
    </div>
  );
}

function QuoteText({ text }) {
  return (
    <div className="row no-gutters">
      
        <FontAwesomeIcon icon={faQuoteLeft} className="col"/> <span id="text" className="col-auto"> {text} </span>{" "}
        <FontAwesomeIcon icon={faQuoteRight} className="col" />
      
    </div>
  );
}

function QuoteAuthor({ author }) {
  return (
    <div className="row text-end pb-3">
      <span id="author">- {author}</span>
    </div>
  );
}

function ButtonBar({onNewQuoteClick}) {
  return (
    <div
      id="button-bar"
      className="row row-cols-3 align-items-center justify-content-evenly"
    >
      <TweetQuote />
      <div className="col"></div>
      <NewQuote onButtonClick={onNewQuoteClick}/>
    </div>
  );
}

function TweetQuote() {
  return (
    <div className="col">
      <a id="tweet-quote">
        <FontAwesomeIcon icon={faSquareXTwitter} size="xl" />
      </a>
    </div>
  );
}

function NewQuote({onButtonClick}) {
  return (
    <div className="col d-flex justify-content-end">
      <button id="new-quote" className="bg-primary text-light border-0 rounded" onClick={onButtonClick}>
        New Quote
      </button>
    </div>
  );
}

export default App;

const QUOTE = {
  _id: "RmeADLR8F3X2",
  content:
    "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
  author: "Anne Frank",
  tags: ["Famous Quotes"],
  authorSlug: "anne-frank",
  length: 95,
  dateAdded: "2020-03-27",
  dateModified: "2023-04-14",
};
