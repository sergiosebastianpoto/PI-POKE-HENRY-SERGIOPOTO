import "./Card.css";
import { Link } from "react-router-dom";

export default function Card({ image, name, type }) {
  return (
    <div className="card">
      <div className="card__body">
        <div className="card__image">
          <img className="card__image" src={image} alt="pokemon" />
        </div>
        <h3 className="card__pokename">{name}</h3>
        <p className="card__type">
          <b>Type:</b> {type}
        </p>

        <Link to="/Detail">
          <button className="card__btn" type="button">
            View Pokemon
          </button>
        </Link>
      </div>
    </div>
  );
}
