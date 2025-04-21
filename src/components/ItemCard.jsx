import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StarwarsContext } from "../context/StarwarsProvider";
import noImage from "../assets/no-image.jpg";

export const ItemCard = ({ item, type }) => {
  const { addToFavorites, data } = useContext(StarwarsContext);
  const isFavorite = data.favorites.some((fav) => fav.uid === item.uid);

  // Genera la URL de la imagen desde SWAPI Gallery
  const imageUrl = `https://vieraboschkova.github.io/swapi-gallery/static/assets/img/${type}/${item.uid}.jpg`;

  return (
    <div className="card m-2 text-center shadow-lg" style={{ width: "12rem", borderRadius: "8px", overflow: "hidden", backgroundColor: "rgba(0, 0, 0, 0.8)", color: "#fff" }}>
      {/* Contenedor de la imagen */}
      <div
        style={{
          height: "150px", // Altura fija para todas las tarjetas
          overflow: "hidden", // Oculta cualquier exceso de imagen
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.8)", // Fondo oscuro para eliminar blanco
        }}
      >
        <img
          src={imageUrl}
          alt={item.name || "No Image"}
          style={{ width: "100%", height: "100%", objectFit: "cover" }} // Ajusta la imagen al tamaño del contenedor
          onError={(e) => {
            e.target.src = noImage; // Usa la imagen de respaldo si falla la principal
            e.target.style.objectFit = "contain"; // Ajusta la imagen de respaldo para encuadrarla
          }}
        />
      </div>
      {/* Cuerpo de la tarjeta */}
      <div className="card-body" style={{ padding: "8px" }}>
        <h6 className="card-title mb-1" style={{ fontSize: "0.9rem" }}>{item.name}</h6>
        <Link to={`/details/${type}/${item.uid}`} className="btn btn-primary mb-1" style={{ width: "100%", fontSize: "0.75rem" }}>
          Ver detalles
        </Link>
        <button
          className={`btn ${isFavorite ? "btn-danger" : "btn-warning"} mt-1`}
          style={{ width: "100%", fontSize: "0.75rem" }}
          onClick={() => addToFavorites(item)}
        >
          {isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
        </button>
      </div>
    </div>
  );
};
