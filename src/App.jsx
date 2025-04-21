import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ItemList } from "./components/ItemList";
import { ItemDetails } from "./components/ItemDetails"; // Exportación con nombre
import FavoritesList from "./components/FavoritesList"; // Exportación predeterminada
import Navbar from "./components/Navbar";
import { StarwarsContext } from "./context/StarwarsProvider";
import "./index.css";

export const App = () => {
  const { data } = React.useContext(StarwarsContext);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/characters" />} />
        <Route
          path="/characters"
          element={<ItemList title="Personajes" items={data.characters} type="characters" />}
        />
        <Route
          path="/planets"
          element={<ItemList title="Planetas" items={data.planets} type="planets" />}
        />
        <Route
          path="/vehicles"
          element={<ItemList title="Vehículos" items={data.vehicles} type="vehicles" />}
        />
        <Route path="/favorites" element={<FavoritesList />} />
        <Route path="/details/:type/:id" element={<ItemDetails />} />
      </Routes>
    </div>
  );
};
