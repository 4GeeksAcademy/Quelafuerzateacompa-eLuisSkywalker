import React from "react";
import { ItemCard } from "./ItemCard";

export const ItemList = ({ title, items = [], type }) => {
  if (!items || items.length === 0) {
    return <p className="text-center mt-4">No hay elementos para mostrar.</p>;
  }

  return (
    <div className="container mt-4">
      <h2 className="text-center">{title}</h2>
      <div className="d-flex flex-wrap justify-content-center">
        {items.map((item) => (
          <ItemCard key={item.uid} item={item} type={type} />
        ))}
      </div>
    </div>
  );
};
