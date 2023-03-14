import React from "react";
import SearchBar from "../SearchBar/SearchBar.js";
import Card from "../Card/Card.js";
//import Detail from "../Detail.js";
import "./Home.css";

export default function Home() {
  const pokemones = [
    {
      name: "Charmander",
      image:
        "https://i.pinimg.com/564x/f2/95/76/f295769d9bd3c34ffc552e837f5304ae.jpg",
      type: "fire",
    },
    {
      name: "Squirtle",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
      type: "water",
    },
    {
      name: "Bulbasaur",
      image:
        "https://images.wikidexcdn.net/mwuploads/wikidex/4/43/latest/20190406170624/Bulbasaur.png",
      type: "grass",
    },
    {
      name: "Charmander",
      image:
        "https://i.pinimg.com/564x/f2/95/76/f295769d9bd3c34ffc552e837f5304ae.jpg",
      type: "fire",
    },
    {
      name: "Squirtle",
      image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
      type: "water",
    },
    {
      name: "Bulbasaur",
      image:
        "https://images.wikidexcdn.net/mwuploads/wikidex/4/43/latest/20190406170624/Bulbasaur.png",
      type: "grass",
    },
  ];

  return (
    <div className="root">
      <div>
        <h2>Home</h2>

        <div>
          <SearchBar />
        </div>

        <div className="card">
          {pokemones.map((pokemon) => {
            return (
              <Card
                name={pokemon.name}
                type={pokemon.type}
                image={pokemon.image}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
