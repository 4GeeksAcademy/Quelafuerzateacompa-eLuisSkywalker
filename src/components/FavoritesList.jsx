import React, { useContext } from "react";
import { StarwarsContext } from "../context/StarwarsProvider";
import { Link } from "react-router-dom";
import noImage from "../assets/no-image.jpg";

const FavoritesList = () => {
  const { data, removeFromFavorites } = useContext(StarwarsContext);

  if (!data.favorites || data.favorites.length === 0) {
    return <p className="text-center">No tienes favoritos aún.</p>;
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center">Favoritos</h1>
      <div className="row">
        {data.favorites.map((item) => (
          <div className="col-md-4 mb-4" key={item.uid}>
            <div className="card card-favorites">
              <img
                src={item.imageUrl || noImage}
                alt={item.name}
                className="card-img-top"
                onError={(e) => (e.target.src = noImage)}
              />
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.description}</p>
                <Link to={`/details/${item.type}/${item.uid}`} className="btn btn-primary">
                  Ver detalles
                </Link>
                <button
                  className="btn btn-danger mt-2"
                  onClick={() => removeFromFavorites(item.uid)}
                >
                  Quitar de favoritos
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesList;
