import { useCallback, useState } from "react";
import { Increment } from "./Increment";

export const CallbackComponent = () => {
  const [counter, setCounter] = useState(0);

  const incrementarPadre = useCallback((val) => {
    setCounter((count) => count + val);
    //! no puedo guardar el contador "counter" ya que se memorizaría el mismo y no cambiaría al ejecutarse la función
  }, []);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <Increment funcionIncrementarPadre={incrementarPadre} />
    </>
  );
};
