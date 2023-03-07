import Button from "./Button/Button.js";

import pikaLandingPage from "../assets/pikalandingpage.jpg";

export default function LandingHome() {
  return (
    <div
      style={{
        backgroundImage: `url(${pikaLandingPage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: 1000,
        width: 1000,
      }}
    >
      <h1>Henry Pokemon</h1>

      <div>
        <Button />
      </div>
    </div>
  );
}
