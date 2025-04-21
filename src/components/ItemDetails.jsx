import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { StarwarsContext } from "../context/StarwarsProvider";
import noImage from "../assets/no-image.jpg";

export const ItemDetails = () => {
  const { type, id } = useParams();
  const { addToFavorites, removeFromFavorites, data } = useContext(StarwarsContext);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const validTypes = {
        characters: "people",
        planets: "planets",
        vehicles: "vehicles",
      };

      const apiType = validTypes[type];
      if (!apiType) {
        setError("El tipo proporcionado no es válido.");
        setLoading(false);
        return;
      }

      try {
        const apiUrl = `https://www.swapi.tech/api/${apiType}/${id}`;
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`Error al obtener datos: ${response.status}`);

        const data = await response.json();
        console.log("Datos recibidos de la API:", data.result.properties);

        // Traducciones al español
        const genderTranslation = {
          male: "hombre",
          female: "mujer",
          "n/a": "no aplica",
          unknown: "desconocido",
        };

        const hairColorTranslation = {
          blonde: "rubio",
          brown: "marrón",
          black: "negro",
          red: "rojo",
          white: "blanco",
          bald: "calvo",
          unknown: "desconocido",
          none: "ninguno",
        };

        const gender = genderTranslation[data.result.properties.gender] || data.result.properties.gender || "personaje";
        const hairColor =
          hairColorTranslation[data.result.properties.hair_color.toLowerCase()] || "desconocido";

        const dynamicDescription = `
          ${data.result.properties.name} es un ${gender} de 
          altura ${data.result.properties.height || "desconocida"} cm, 
          con masa ${data.result.properties.mass || "desconocida"} kg, 
          y color de cabello ${hairColor}.
        `;

        setDetails({
          ...data.result.properties,
          imageUrl: `https://vieraboschkova.github.io/swapi-gallery/static/assets/img/${type === "characters" ? "people" : type}/${id}.jpg`,
          description: dynamicDescription.trim(),
        });
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError(err.message || "Ocurrió un error al cargar los detalles.");
        setLoading(false);
      }
    };

    fetchDetails();
  }, [type, id]);

  const isFavorite = data.favorites.some((fav) => fav.uid === id);

  if (loading) return <p className="text-center">Cargando detalles...</p>;
  if (error) return <p className="text-center text-danger">Error: {error}</p>;

  return (
    <div className="container mt-4 text-center">
      <h1>{details.name || "Sin nombre"}</h1>
      <div className="card card-details mx-auto">
        <img
          src={details.imageUrl}
          alt={details.name}
          className="img-fluid rounded"
          onError={(e) => (e.target.src = noImage)}
        />
        <div className="card-body">
          <p className="card-text">{details.description}</p>
          <button
            className={`btn ${isFavorite ? "btn-danger" : "btn-warning"}`}
            onClick={() =>
              isFavorite
                ? removeFromFavorites(id)
                : addToFavorites({
                    uid: id,
                    name: details.name,
                    type,
                    imageUrl: details.imageUrl,
                    description: details.description,
                  })
            }
          >
            {isFavorite ? "Quitar de favoritos" : "Añadir a favoritos"}
          </button>
        </div>
      </div>
    </div>
  );
};
