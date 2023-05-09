import React from "react";
import { SpaceshipService } from "../services/spaceshipService.js";

function Spaceship(props) {
  function logSpaceship() {
    props.onLogSpeed(props.name);
  }

  function handleStart() {
    SpaceshipService.startSpaceship(props.name);
  }

  return (
    <div>
      <h1 onClick={logSpaceship}>{props.name}</h1>
      <button onClick={handleStart}>Start!</button>
      <button onClick={() => SpaceshipService.landSpaceship(props.name)}>
        Land!
      </button>
      <button onClick={() => SpaceshipService.goIntoHyperdrive(props.name)}>
        Go Into Hyperdrive!!
      </button>
    </div>
  );
}

export default Spaceship;
