// CHALLENGE: Reusing Custom Hooks in Multiple Components

import React, { useState } from "react";

function useInput() {
  const [value, setValue] = useState("");

  function onChange(event) {
    setValue(event.target.value);
  }

  return {
    value,
    onChange,
  };
}

function App43() {
  const name = useInput();
  const surname = useInput();
  const age = useInput();

  return (
    <main>
      <h1>Hi</h1>
      <form className="location-form">
        <div className="form-control">
          <label htmlFor="name">Name:</label>
          <input id="name" type="text" placeholder="Name" {...name} />
        </div>

        <div className="form-control">
          <label htmlFor="surname">Surname:</label>
          <input id="surname" type="text" placeholder="Surname" {...surname} />
        </div>

        <div className="form-control">
          <label htmlFor="age">Age:</label>
          <input id="age" type="number" placeholder="Age" {...age} />
        </div>
      </form>
    </main>
  );
}

export default App43;
