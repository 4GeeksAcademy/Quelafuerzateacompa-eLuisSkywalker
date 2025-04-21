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
    <div className="card m-2 text-center" style={{ width: "18rem" }}>
      <img
        src={imageUrl}
        alt={item.name || "No Image"}
        className="card-img-top"
        onError={(e) => (e.target.src = noImage)} // Imagen de respaldo
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <Link to={`/details/${type}/${item.uid}`} className="btn btn-primary mb-2">
          Ver detalles
        </Link>
        <button
          className={`btn ${isFavorite ? "btn-danger" : "btn-warning"}`}
          onClick={() => addToFavorites(item)}
        >
          {isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
        </button>
      </div>
    </div>
  );
};
