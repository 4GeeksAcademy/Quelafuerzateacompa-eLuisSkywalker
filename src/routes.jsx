import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ItemList from "./components/ItemList";
import ItemDetails from "./components/ItemDetails";
import FavoritesList from "./components/FavoritesList";

const AppRoutes = () => {
  return (
    <Router>
      {/* Navbar se sitúa fuera de Routes para que esté siempre visible */}
      <Navbar />
      <Routes>
        {/* Ruta dinámica para listar categorías */}
        <Route path="/:category" element={<ItemList />} />

        {/* Ruta dinámica para mostrar detalles dentro de una categoría */}
        <Route path="/:category/:id" element={<ItemDetails />} />

        {/* Ruta dedicada a la lista de favoritos */}
        <Route path="/favorites" element={<FavoritesList />} />

        {}
        <Route path="*" element={<p style={{ textAlign: "center", color: "#ff0000" }}>
          Página no encontrada.
        </p>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
