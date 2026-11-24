import { useState, useEffect, useRef } from "react";

const weatherData = {
  NewYork: {
    summary: "Sunny, 25°C",
    details:
      "Clear skies throughout the day with mild temperatures.",
  },

  London: {
    summary: "Cloudy, 18°C",
    details:
      "Overcast with occasional light rain in the afternoon.",
  },

  Tokyo: {
    summary: "Rainy, 22°C",
    details:
      "Continuous rain expected throughout the day.",
  },
};

function CityForecast({ city, clearSelection }) {
    const [forecast, setForecast] = useState(null);
    const detailsRef = useRef(null);


useEffect(() => {
  setForecast(null);

  const timer = setTimeout(() => {
    if (weatherData[city]) {
      setForecast(weatherData[city]);
    } else {
      setForecast({
        summary: "City not found",
        details: "No weather available.",
      });
    }
  }, 1000);

  return () => clearTimeout(timer);
}, [city]);

const scrollToDetails = () => {
  detailsRef.current.scrollIntoView({
    behavior: "smooth",
  });
};

return (
  <div>
    <h2>{city} Forecast</h2>

    {!forecast ? (
      <p>Loading weather...</p>
    ) : (
      <>
        <p>
          <strong>Summary:</strong>{" "}
          {forecast.summary}
        </p>

        <button onClick={scrollToDetails}>
          View Details
        </button>

        <button onClick={clearSelection}>
          Back
        </button>

        <div ref={detailsRef}>
          <h3>Weather Details</h3>

          <p>{forecast.details}</p>
        </div>
      </>
    )}
  </div>
  );
}
export default CityForecast;