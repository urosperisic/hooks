// Invoking the useContext Hook

import React, { createContext, useState, useContext } from "react";

const NameContext = createContext();

function App32() {
  const [name] = useState("Billy Shakespeare");

  return (
    <main>
      <h1>Hi</h1>
      <NameContext.Provider value={name}>
        <Child />
      </NameContext.Provider>
    </main>
  );
}

function Child() {
  return (
    <section className="child">
      <Grandchild />
    </section>
  );
}

function Grandchild() {
  return (
    <div className="grandchild">
      <Button />
    </div>
  );
}

function Button() {
  const name = useContext(NameContext);

  return <button>{name}</button>;
}

export default App32;
