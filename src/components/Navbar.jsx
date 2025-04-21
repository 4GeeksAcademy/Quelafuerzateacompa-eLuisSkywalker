import React from "react";
import { Link } from "react-router-dom";
import { FaJediOrder } from "react-icons/fa"; // ícono temático

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <FaJediOrder size={28} color="#ffe81f" style={{ marginRight: "10px" }} />
        <h1>Star Wars Universe</h1>
      </div>
      <div className="nav-links">
        <Link to="/characters">Personajes</Link>
        <Link to="/planets">Planetas</Link>
        <Link to="/vehicles">Vehículos</Link>
        <Link to="/favorites">Favoritos</Link>
      </div>
    </nav>
  );
};

export default Navbar;
