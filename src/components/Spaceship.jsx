import React from "react";

function Spaceship(props) {
  function logSpaceship() {
    props.onLogSpeed(props.name);
  }

  return (
    <div>
      <h1 onClick={logSpaceship}>{props.name}</h1>
    </div>
  );
}

export default Spaceship;
