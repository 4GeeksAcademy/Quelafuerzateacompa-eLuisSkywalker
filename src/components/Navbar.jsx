import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1>Star Wars Universe</h1>
      <div className="nav-links">
        <Link to="/characters">Personajes</Link>
        <Link to="/planets">Planetas</Link>
        <Link to="/vehicles">Vehículos</Link>
        <Link to="/favorites">Favoritos</Link>
      </div>
    </div>
  );
};

export default Navbar;
