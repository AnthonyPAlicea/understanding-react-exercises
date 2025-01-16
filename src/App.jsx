import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Understanding React</h1>
      <h2>Exercises</h2>
      <div className="card">
        <a href="https://understandingreact.com">
          Learn about the course by Tony Alicea
        </a>
      </div>
    </>
  );
}

export default App;
