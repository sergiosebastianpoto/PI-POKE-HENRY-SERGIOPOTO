import Button from "../components/Button/Button.js";

import pikaLandingPage from "../assets/pikalandingpage.jpg";
export default function Home() {
  return (
    <div className="App">
      <h1>Henry Pokemon</h1>
      <link rel="stylesheet" href="./App.css" />
      <img src={pikaLandingPage} alt="fondo" />
      <Button> Comenzar</Button>
    </div>
  );
}
