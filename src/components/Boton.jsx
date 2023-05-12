import React from "react";
import "../styles/Boton.css";

function Boton({ children, manejarClick }) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor !== "." && valor !== "=";
  };

  // SIN TERNARIO

  // if(esOperador(children)){
  //   return <div className={`boton-contenedor operador}`} onClick={() => manejarClick(children)}>{children}</div>;
  // }
  // else{
  //   return <div className={`boton-contenedor }`} onClick={() => manejarClick(children)}>{children}</div>;
  // }

  return <button className={`boton-contenedor ${esOperador(children) ? "operador" : ""}`.trimEnd()} onClick={() => manejarClick(children)}>{children}</button>;
}

export default Boton;
