// Cleaning Up by by Returning a Function from the Effect II

import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  useEffect(() => {
    console.log(
      `I'm inside the useEffect function. The current count is ${count}`
    );

    return () => {
      console.log(
        `I'm removing anything that was setup above! The last count was ${count}`
      );
    };
  }, [count]);

  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <h1>{count}</h1>
    </div>
  );
}

function App24() {
  const [visible, setVisible] = useState(false);

  return (
    <main>
      <h1>Hi</h1>
      <div>
        <button onClick={() => setVisible(!visible)}>
          Show / Hide the Counter component
        </button>

        {visible && <Counter />}
      </div>
    </main>
  );
}

export default App24;
