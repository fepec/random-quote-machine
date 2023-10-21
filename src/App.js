import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col"></div>
        <div className="col-md-6 col-sm-10">
          <QuoteBox quote={QUOTE} />
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

function QuoteBox({ quote }) {
  return (
    <div id="quote-box" className="container vertical-center bg-white text-primary px-3 py-2 rounded">
      <QuoteText text={quote.content} />
      <QuoteAuthor author={quote.author} />
      <ButtonBar />
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

function ButtonBar() {
  return (
    <div id="button-bar" className="row row-cols-3 align-items-center justify-content-evenly">
      
        <TweetQuote /> 
        <div className="col"></div>
        <NewQuote />
      
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

function NewQuote() {
  return (
    <div className="col d-flex justify-content-end">
      <button id="new-quote" className="bg-primary text-light border-0 rounded">New Quote</button>
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
