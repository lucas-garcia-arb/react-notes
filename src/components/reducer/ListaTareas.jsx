const initialState = [
  {
    id: 1,
    tarea: "Explicar Reducer",
    terminada: false,
  },
];

const nuevaTarea = {
  id: 2,
  tarea: "Explicar useReducer",
  terminada: false,
};

const agregarTarea = {
  type: "[TAREAS] Agregar tareas",
  payload: nuevaTarea,
};

const borrarTareas = {
  type: "[TAREAS] Borrar tareas",
};

const editarTareas = {
  type: "[TAREAS] Editar tareas",
  payload: nuevaTarea,
};

const tareaReducer = (state = initialState, action = {}) => {
    //Lo importante de este reducer es que la lógica de negocios se centraliza en una sola función.
  switch (action) {
    case "[TAREAS] Agregar tareas":
      return [...state, action.payload];
    case "[TAREAS] Borrar tareas":
      return [];
    case "[TAREAS] Editar tareas":
      return [...state, action.payload];
    default:
      break;
  }
  return state;
};

console.log(tareaReducer(initialState, agregarTarea));

export const ListaTareas = () => {
  return <></>;
};
