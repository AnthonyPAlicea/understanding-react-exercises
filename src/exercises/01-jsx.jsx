/* 
Exercise: Conditional Rendering

TODO: Instead of showing both boxes, modify the code to:
1. Show only the red box when showBlue is false
2. Show only the blue box when showBlue is true

Hint: You can use either:
1. The ternary operator ( ? : )
2. The && operator
3. An if/else statement outside the JSX
4. Keep a single box and swap the CSS classes instead
*/

import { useState } from 'react';
import '../App.css';

function App() {
  const [showBlue, setShowBlue] = useState(false);

  return (
    <>
      <h1>Understanding React!</h1>
      <h2>Template Logic and JSX</h2>
      
      <article className="card">
        <button onClick={() => setShowBlue(!showBlue)}>
          Toggle Box Color
        </button>
        
        <section className="box-container">
          <div className="box box-red" />
          <div className="box box-blue" />
        </section>
      </article>
    </>
  );
}

export default App;
