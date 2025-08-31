// Limiting useEffect to Mounting and Unmounting

import React, { useState, useEffect, useRef } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const countRef = useRef(count);

  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  useEffect(() => {
    countRef.current = count;
  }, [count]);

  useEffect(() => {
    console.log(
      `I'm inside the useEffect function. I will only run upon mounting. The current count is ${countRef.current}`
    );

    return () => {
      console.log(
        `I'm removing anything that was setup above! The last count was ${countRef.current}. But now, I will only run when component is being unmounted.`
      );
    };
  }, []);

  return (
    <div>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <h1>{count}</h1>
    </div>
  );
}

function App() {
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

export default App;
