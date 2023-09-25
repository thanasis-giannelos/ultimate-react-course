import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CityDescription() {
  const { id } = useParams();
  const [city, setCity] = useState();

  useEffect(
    function () {
      async function fetchCity() {
        try {
          const res = await fetch(`http://localhost:9000/cities/${id}`);
          const data = await res.json();
          setCity(data);
        } catch {
          console.log("error");
        }
      }
      fetchCity();
    },
    [id]
  );

  if (!city) return <p>loading</p>;

  return (
    <div>
      <ul>
        <li>
          {city.emoji} {city.cityName}
        </li>
      </ul>
      <button>back</button>
    </div>
  );
}

export default CityDescription;
