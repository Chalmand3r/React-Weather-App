function CityList({ onSelectCity }) {
  const cities = ["NewYork", "London", "Tokyo"];

  return (
    <div>
      <h2>Select a City</h2>

      {cities.map((city) => (
        <button
          key={city}
          onClick={() => onSelectCity(city)}
        >
          {city}
        </button>
      ))}
    </div>
  );
}

export default CityList;