import { useContext } from "react";
import { CitiesContext } from "./CitiesContext";

function Countries() {
  const { citiesState } = useContext(CitiesContext);
  const { cities } = citiesState;
  return (
    <ul>
      {cities.map((city, i) => {
        return <li key={i}>{city.emoji}</li>;
      })}
    </ul>
  );
}

export default Countries;
