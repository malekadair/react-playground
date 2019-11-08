import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import Bomb from "./state-drills/RouletteGun";
import RouletteGun from "./state-drills/RouletteGun";

ReactDOM.render(
  <RouletteGun bulletInChamber="8" />,
  document.getElementById("root")
);