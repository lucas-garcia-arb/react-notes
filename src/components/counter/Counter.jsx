import "./counter.css";
import { useCounter } from "../../hooks/useCounter";

export const Counter = () => {
  const { counter, increase, decrease, reset } = useCounter(0);

  return (
    <>
      <h3 className="counter__title">Counter: {counter}</h3>
      <div className="buttons__container">
        <button className="btn btn-primary" onClick={() => increase(1)}>
          +1
        </button>
        <button className="btn btn-danger" onClick={() => reset()}>
          reset
        </button>
        <button className="btn btn-primary" onClick={() => decrease(1, true)}>
          -1
        </button>
      </div>
    </>
  );
};
