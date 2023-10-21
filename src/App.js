import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons"

function App() {
  return (
    <div>
      <QuoteBox quote={QUOTE} />
    </div>
  );
}

function QuoteBox({ quote }) {
  return (
    <div id="quote-box">
      <QuoteText text={quote.content} />
      <QuoteAuthor author={quote.author} />
      <ButtonBar />
    </div>
  );
}

function QuoteText({ text }) {
  return (
    <div>
      <FontAwesomeIcon icon={faQuoteLeft} />
      <span id="text"> {text} </span>
      <FontAwesomeIcon icon={faQuoteRight} />
    </div>
  );
}

function QuoteAuthor({ author }) {
  return <p id="author">- {author}</p>;
}

function ButtonBar() {
  return (
    <div className="button-bar">
      <TweetQuote />
      <NewQuote />
    </div>
  );
}

function TweetQuote() {
  return (
    <div>
      <a id="tweet-quote">
        <FontAwesomeIcon icon={faSquareXTwitter} />
      </a>
    </div>
  );
}

function NewQuote() {
  return (
    <>
      <button id="new-quote">New Quote</button>
    </>
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
