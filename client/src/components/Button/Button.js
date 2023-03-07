import { Link } from "react-router-dom";
import "./Button.css";

export default function Button() {
  return (
    <div className="button">
      <Link to="/Home">
        <button type="button">Atrapalos Ya!</button>
      </Link>
    </div>
  );
}
