import './App.css';
import { useState } from 'react';

function App() {

  const [answer, setAnswer] = useState("Yes")

/**
 * challenge:
 * 1. create a function called "handleClick" that runs setAnswer("NO")
 * 2. add a click event listener to the div.state--value that runs handleClick when div is clicked.
 */

function handleClick() {
  setAnswer("No")
}

  return (
    <div className="state">
      <h1 className="state--title">Is state important to know</h1>
      <div className="state--value" onClick={handleClick}>
        <h1>{answer}</h1>
      </div>
    </div>
  );
}

export default App;
