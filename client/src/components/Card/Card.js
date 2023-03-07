export default function Card() {
  return (
    <div className="card">
      <div className="card__body">
        <img
          src="https://i.pinimg.com/564x/f2/95/76/f295769d9bd3c34ffc552e837f5304ae.jpg"
          alt="pokemon"
        />

        <h2 className="card__tittle">Pokenombre</h2>
        <p className="card__description">Es un poke muy veloz</p>
      </div>
      <button className="card__btn">View Pokemon</button>
    </div>
  );
}
