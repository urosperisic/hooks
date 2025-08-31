// Invoking the useEffect Hook

import React, { useState, useEffect } from "react";

function App22() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  useEffect(() => {
    console.log(
      `I'm inside the useEffect function. The current count is ${count}`
    );
  });

  return (
    <main>
      <div>
        <h1>Hi</h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <h1>{count}</h1>
      </div>
    </main>
  );
}

export default App22;
