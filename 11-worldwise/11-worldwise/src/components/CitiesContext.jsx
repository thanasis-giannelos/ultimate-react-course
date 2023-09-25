import { createContext, useEffect, useReducer } from "react";

/* eslint-disable react/prop-types */

export const CitiesContext = createContext();

const initialState = {
  cities: [],
};

function reducer(citiesState, action) {
  if (action.type === "cities/loaded") {
    console.log("mesa sto reducer");
    return { cities: action.payload };
  }
}

export function CitiesProvider({ children }) {
  const [citiesState, dispatch] = useReducer(reducer, initialState);

  console.log("citiesState", citiesState);

  useEffect(function () {
    async function fetchCities() {
      try {
        const res = await fetch("http://localhost:9000/cities");
        const data = await res.json();
        console.log("data irthan");
        dispatch({ type: "cities/loaded", payload: data });
      } catch {
        console.log("error");
      }
    }
    fetchCities();
  }, []);
  return (
    <CitiesContext.Provider value={{ citiesState }}>
      {children}
    </CitiesContext.Provider>
  );
}
