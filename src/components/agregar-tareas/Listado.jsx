import { useState } from "react";
import { AgregarTarea } from "./AgregarTarea";

const Item = ({ nombre, visto }) => {
  return (
    <li>
      {nombre}
      {visto ? "✔" : "❌"}
    </li>
  );
};

export const Listado = () => {

  let listadoSecciones = [
    { id: 0, nombre: "Instalaciones necesarias", visto: true },
    { id: 1, nombre: "Uso de Vite", visto: true },
    { id: 2, nombre: "Uso de Componentes", visto: true },
    { id: 3, nombre: "Variables en JSX", visto: true },
    { id: 4, nombre: "Props", visto: true },
    { id: 5, nombre: "Eventos", visto: true },
    { id: 6, nombre: "useState", visto: true },
    { id: 7, nombre: "Redux", visto: false },
    { id: 8, nombre: "Custom Hooks", visto: false },
  ];

  const [arreglo, setArreglo] = useState(listadoSecciones);

  const onAgregarTarea = (val) => {
    let valor = val.trim()
    if(valor < 1) return
    const envio = {
      id: arreglo.length,
      nombre: valor,
      visto: false
    }
    setArreglo([...arreglo, envio])
  }
  return (
    <>
      <h1>Listado de Tareas</h1>
      <AgregarTarea sumTarea={onAgregarTarea}/>
      <ol>
        {arreglo.map((item) => <Item key={item.id} nombre={item.nombre} visto={item.visto} />)}
      </ol>
    </>
  );
};
