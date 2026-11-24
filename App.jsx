import { useState } from "react";
import CityList from "./components/CityList";
import CityForecast from "./components/CityForecast";
import "./App.css";

function App() {
  const [selectedCity, setSelectedCity] =
    useState("");

  return (
    <div>
      <h1>City Weather App</h1>

      <CityList
        onSelectCity={setSelectedCity}
      />

      {selectedCity && (
        <CityForecast
          city={selectedCity}
          clearSelection={() =>
            setSelectedCity("")
          }
        />
      )}
    </div>
  );
}

export default App;