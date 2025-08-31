import { useState } from "react";

function App13() {
  //   const [state, setState] = useState({
  //     city: "",
  //     country: "",
  //   });

  //   function handleCityChange(event) {
  //     setState({
  //       ...state,
  //       city: event.target.value,
  //     });
  //   }

  //   function handleCountryChange(event) {
  //     setState((prevState) => ({
  //       ...prevState,
  //       country: event.target.value,
  //     }));
  //   }

  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleCityChange = (event) => setCity(event.target.value);
  const handleCountryChange = (event) => setCountry(event.target.value);

  return (
    <main>
      <h1>Hello</h1>
      <form className="location-form">
        <div className="form-control">
          <label htmlFor="city">City:</label>
          <input
            id="city"
            type="text"
            placeholder="Enter your city"
            value={city}
            onChange={handleCityChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="country">Country:</label>
          <input
            id="country"
            type="text"
            placeholder="Enter your country"
            value={country}
            onChange={handleCountryChange}
          />
        </div>

        <div className="output">
          <p>
            {city || "City"} --- {country || "Country"}
          </p>
        </div>
      </form>
    </main>
  );
}

export default App13;
