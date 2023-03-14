import React from "react";
import { Link } from "react-router-dom";

export default function Detail() {
  return (
    <div>
      <h2>Detail</h2>
      <div>
        <p>Vida:</p>
        <p>Fuerza:</p>
        <p>Defensa:</p>
        <p>Velocidad:</p>
        <p>Altura:</p>
        <p>Peso:</p>
      </div>
      <Link to="/Home">
        <button className="card__btn" type="button">
          Volver
        </button>
      </Link>
    </div>
  );
}
