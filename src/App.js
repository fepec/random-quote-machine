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
  
  // Study this: https://stackoverflow.com/questions/72253011/is-it-possible-to-initialize-the-state-of-a-component-with-api-data-before-the-i
  useEffect(() => {
    getQuote();
  }, [])

  function handleNewQuote() {
    getQuote()
  }

  return (
    <div id="app" className="container-fluid bg-primary text-bg-primary d-flex flex-column align-items-center justify-content-center">
          <QuoteBox quote={quote} onNewQuote={handleNewQuote} />
          <div className="mt-2"><a id="fepec" href="https://github.com/fepec" className="text-white link-underline link-underline-opacity-0">by fepec</a></div>
    </div>
  );
}



function QuoteBox({ quote, onNewQuote }) {
  return (
    <div
      id="quote-box"
      className="container-sm d-flex flex-column justify-content-between bg-white text-primary p-5 rounded"
    >
      <QuoteText text={quote.content} />
      <QuoteAuthor author={quote.author} />
      <ButtonBar onNewQuoteClick={onNewQuote} quote={quote}/>
    </div>
  );
}

function QuoteText({ text }) {
  return (
    <div className="no-gutters d-flex text-center pt-3 justify-content-center">
      <span>
        <FontAwesomeIcon icon={faQuoteLeft} size="xl" className="me-1 xl"/>
        <span id="text" className="fs-5"> {text} </span>
        <FontAwesomeIcon icon={faQuoteRight} size="xl" className="ms-1" />
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

function ButtonBar({onNewQuoteClick, quote}) {
  return (
    <div
      id="button-bar"
      className="d-flex align-items-stretch justify-content-evenly pt-3"
    >
      <TweetQuote quote={quote}/>
      
      <NewQuote onButtonClick={onNewQuoteClick}/>
    </div>
  );
}

function TweetQuote({quote}) {
  const tweetText = `"${quote.content}" -${quote.author}`
  const tweetURL =  `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(tweetText)}`
  return (
    <div className="">
      <a id="tweet-quote" href={tweetURL} target="_blank">
        <FontAwesomeIcon icon={faSquareXTwitter} size="2x" />
      </a>
    </div>
  );
}

function NewQuote({onButtonClick}) {
  return (
    <div className=" d-flex justify-content-end ms-auto ">
      <button id="new-quote" className="bg-primary text-light border-0 rounded-1 " onClick={onButtonClick}>
        New Quote
      </button>
    </div>
  );
}

export default App;