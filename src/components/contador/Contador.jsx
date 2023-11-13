import "./contador.css";
import { useCounter } from "../../hooks/useCounter";

export const Contador = () => {
  return (
    <>
      <h3 className="contador__title">Contador: 0</h3>
      <div className="buttons__container">
        <button className="btn btn-primary" onClick={() => incrementar()}>
          +1
        </button>
        <button className="btn btn-danger" onClick={() => resetear()}>
          reset
        </button>
        <button className="btn btn-primary" onClick={() => decrementar()}>
          -1
        </button>
      </div>
    </>
  );
};
