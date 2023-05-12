import "../styles/BotonClear.css";

const BotonClear = ({ children, manejarClear }) => {
  return <button className="boton-clear" onClick={manejarClear}>{children}</button>;
};

export default BotonClear;
