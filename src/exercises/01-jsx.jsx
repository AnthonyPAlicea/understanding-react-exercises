// Determine how to conditionally show either the red box or the blue box

import { useState } from 'react';
import '../App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Understanding React!</h1>
      <h2>Template Logic and JSX</h2>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
