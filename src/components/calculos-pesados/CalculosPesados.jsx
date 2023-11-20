import { useMemo, useState } from "react";
import { Button } from "react-bootstrap";

export const CalculosPesados = () => {
  const [listaNumeros, setListaNumeros] = useState([2]);

  const [show, setShow] = useState(true);

  const getCalculo = useMemo(() => {
    console.log("Realizar cálculo");
    return listaNumeros.reduce((a, b) => a * b);
  }, [listaNumeros]);

  const agregarNumero = () => {
    setListaNumeros([
      ...listaNumeros,
      listaNumeros[listaNumeros.length - 1] + 1,
    ]);
  };

  return (
    <>
      <h2>Cálculos Pesados</h2>
      {show ? <p>Calculo:{getCalculo}</p> : <p>Hidden</p>}
      <Button variant="primary" onClick={() => setShow(!show)}>
        {!show ? "Show" : "Hide"}
      </Button>
      <Button variant="primary" onClick={() => agregarNumero()}>
        Agregar Número
      </Button>
      <Button variant="primary" onClick={() => setListaNumeros([2])}>
        Reset
      </Button>
    </>
  );
};
