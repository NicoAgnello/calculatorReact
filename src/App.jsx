import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import freecodecampLogo from "./img/freecodecamp-logo.png";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className="freecodecamp-logo" src={freecodecampLogo} alt="freeCodeCamp Logo" />
      </div>
      <div className="contenedor-calculadora">
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
      </div>
    </div>
  );
}

export default App;
