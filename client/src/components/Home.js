import React from "react";
import SearchBar from "./SearchBar/SearchBar.js";
import Card from "./Card/Card.js";

export default function Home() {
  return (
    <div>
      <h2>Home</h2>

      <div>
        <SearchBar />
      </div>

      <div>
        <Card />
      </div>
    </div>
  );
}
