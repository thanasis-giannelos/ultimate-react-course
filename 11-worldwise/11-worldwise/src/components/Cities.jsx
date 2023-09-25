import { useContext } from "react";
import { CitiesContext } from "./CitiesContext";
import { Link } from "react-router-dom";

function Cities() {
  const { citiesState } = useContext(CitiesContext);
  console.log("citiesState:", citiesState);

  if (!citiesState?.cities.length) {
    return <p>Add your first city by clicking on a city on the map</p>;
  }

  return (
    <ul>
      {citiesState.cities.map((city, index) => (
        <li key={index}>
          <Link to={`${city.id}`}>
            {city.emoji} {city.cityName} {city.date}
          </Link>
          <button>x</button>
        </li>
      ))}
    </ul>
  );
}

export default Cities;
