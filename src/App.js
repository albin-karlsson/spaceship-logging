import "./App.css";
import { useState } from "react";
import Spaceship from "./components/Spaceship";

function App() {
  const [spaceships, setSpaceships] = useState(getSpaceships());

  function getSpaceships() {
    return [
      { name: "Millennium Falcon", speed: 1050 },
      { name: "Naboo N-1 Starfighter", speed: 920 },
      { name: "TIE Interceptor", speed: 1200 },
    ];
  }

  function logSpeed(name) {
    console.log("Logging Spaceship...");

    const spaceship = spaceships.find((s) => s.name === name);

    console.log(
      `Logging ${spaceship.name}: Speed is ${spaceship.speed} parsecs`
    );

    // Update spaceships state

    // Create a completely different array from the spaceships array
    const updatedSpaceships = [...spaceships];
    // Get the specific spaceship that should be placed first
    const spaceshipToUnshift = updatedSpaceships.find((s) => s.name === name);
    // Get the index of that specific spaceship in the array
    const indexOfSpaceship = updatedSpaceships.indexOf(spaceshipToUnshift);
    // Remove the spaceship with that index
    updatedSpaceships.splice(indexOfSpaceship, 1);
    // Place the spaceship first in the array
    updatedSpaceships.unshift(spaceshipToUnshift);

    // Update state with the new array
    setSpaceships(updatedSpaceships);
  }

  return (
    <div>
      {spaceships.map((s) => (
        <Spaceship
          key={s.name}
          name={s.name}
          onLogSpeed={logSpeed}
        />
      ))}
    </div>
  );
}

export default App;
