// Cleaning Up by by Returning a Function from the Effect I

import React, { useState, useEffect } from "react";

function App23() {
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
  });

  return (
    <main>
      <h1>Hi</h1>
      <div>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <h1>{count}</h1>
      </div>
    </main>
  );
}

export default App23;
