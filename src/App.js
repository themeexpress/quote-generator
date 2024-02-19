import './style.css';
import { useState, useEffect } from 'react';

const getRandomQuote = (quotes) =>{
  return quotes[Math.floor(Math.random() * quotes.length)];
}


function App() {

  const [quotes, setQuotes] = useState();
  const [quote, setQuote] = useState(null)

  useEffect (() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((json) => {
        setQuotes(json);
        setQuote(json[0]);
      });
  }, []);


  const getNewQuote = () => {
    setQuote(getRandomQuote(quotes))
  }
  return (
    <main>
      <h1> Random Quote generator - React project</h1>
      <section>
        <button className='button' onClick={getNewQuote}>New Quote</button>
        <h3>
          <span>”</span>
          {quote?.text}
          <span>”</span>
        </h3>
        <i>{quote?.author}</i>
      </section>
    </main>
  );
}

export default App;

// Happy Coding :)
// Next step
// let's deploy this project on Vercel.
// Vercel is a MERN stack application hosting 