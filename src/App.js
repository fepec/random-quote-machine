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

  async function handleNewQuote()  {
    fetch(QUOTES_API)
      .then((res) => res.json())
      .then((json) =>
        setQuote({
          content: json[0].content,
          author: json[0].author,
        })
      );
  };
  
  return (
    <div id="app" className="bg-primary text-bg-primary">
      <div className="row">
        <div className="col"></div>
        <div className="col-md-6 col-sm-10">
          <QuoteBox quote={quote} onNewQuote={handleNewQuote} />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}



function QuoteBox({ quote, onNewQuote }) {
  return (
    <div
      id="quote-box"
      className="container vertical-center bg-white text-primary px-3 py-2 rounded"
    >
      <QuoteText text={quote.content} />
      <QuoteAuthor author={quote.author} />
      <ButtonBar onNewQuoteClick={onNewQuote} />
    </div>
  );
}

function QuoteText({ text }) {
  return (
    <div className="row ">
      <span>
        <FontAwesomeIcon icon={faQuoteLeft} /> <span id="text"> {text} </span>{" "}
        <FontAwesomeIcon icon={faQuoteRight} />
      </span>
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
