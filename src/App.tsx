import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import ClinicMap from "./components/ClinicMap";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>ayy</h1>
      <ClinicMap />
    </>
  );
}

export default App;
