import "./App.css";
import Spaceship from "./components/Spaceship";

function App() {
  const spaceships = [
    { name: "Millennium Falcon", speed: 1050 },
    { name: "Naboo N-1 Starfighter", speed: 920 },
    { name: "TIE Interceptor", speed: 1200 },
  ];

  function logSpeed(name) {
    console.log("Logging Spaceship...");

    const spaceship = spaceships.find((s) => s.name === name);

    console.log(
      `Logging ${spaceship.name}: Speed is ${spaceship.speed} parsecs`
    );
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
