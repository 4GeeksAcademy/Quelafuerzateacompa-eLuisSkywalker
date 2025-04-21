import React, { createContext, useState, useEffect } from "react";

export const StarwarsContext = createContext(null);

export const StarwarsProvider = ({ children }) => {
  const [data, setData] = useState({
    favorites: [],
    characters: [],
    planets: [],
    vehicles: [],
  });

  useEffect(() => {
    Promise.all([
      fetch("https://www.swapi.tech/api/people").then((res) => res.json()),
      fetch("https://www.swapi.tech/api/planets").then((res) => res.json()),
      fetch("https://www.swapi.tech/api/vehicles").then((res) => res.json()),
    ])
      .then(([people, planets, vehicles]) => {
        setData({
          favorites: [],
          characters: people.results || [],
          planets: planets.results || [],
          vehicles: vehicles.results || [],
        });
      })
      .catch((err) => console.error("Error cargando datos:", err));
  }, []);

  const addToFavorites = (item) => {
    if (!data.favorites.some((fav) => fav.uid === item.uid)) {
      setData((prevData) => ({
        ...prevData,
        favorites: [...prevData.favorites, item],
      }));
    }
  };

  const removeFromFavorites = (uid) => {
    setData((prevData) => ({
      ...prevData,
      favorites: prevData.favorites.filter((fav) => fav.uid !== uid),
    }));
  };

  return (
    <StarwarsContext.Provider value={{ data, addToFavorites, removeFromFavorites }}>
      {children}
    </StarwarsContext.Provider>
  );
};
