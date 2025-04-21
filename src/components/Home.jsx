import React, { useContext } from "react";
import { StarwarsContext } from "../context/StarwarsProvider";

export const Home = () => {
  const { data } = useContext(StarwarsContext); // Asegúrate de que el contexto no sea null

  if (!data) {
    return <p>Cargando datos...</p>; // Manejo del caso en que los datos sean null
  }

  return (
    <div className="container">
      <h1 className="mt-4">Bienvenido al Star Wars Blog</h1>
      <p className="lead">Explora personajes, planetas y vehículos del universo de Star Wars.</p>
    </div>
  );
};
