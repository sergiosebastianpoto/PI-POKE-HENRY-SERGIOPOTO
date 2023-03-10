import "./Card.css";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div className="card">
      <div className="card__body">
        <img
          className="card__image"
          src="https://i.pinimg.com/564x/f2/95/76/f295769d9bd3c34ffc552e837f5304ae.jpg"
          alt="pokemon"
        />

        <h3 className="card__pokename"> Charmander</h3>
        <p className="card__type">Type: Fire</p>

        <Link to="/Detail">
          <button className="card__btn" type="button">
            View Pokemon
          </button>
        </Link>
      </div>
    </div>
  );
}
