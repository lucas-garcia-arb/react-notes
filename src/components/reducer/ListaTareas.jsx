import { Button, Form } from "react-bootstrap";
import { useForm } from "../../hooks/useForm";
import "./ListaTareas.css";

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
  switch (action.type) {
    case "[TAREAS] Agregar tareas":
      console.log("agregar");
      return [...state, action.payload];
    case "[TAREAS] Borrar tareas":
      console.log("Borrar");
    // return [...state, action.payload];
    case "[TAREAS] Editar tareas":
      console.log("Editar");
    // return [...state, action.payload];
    default:
      return state;
  }
  return state;
};

export const ListaTareas = () => {
  const { tarea, formState, onInputChange } = useForm({ tarea: "" });

  const [tareasState, dispatch] = useReducer(tareaReducer, initialState);

  const agregarTarea = (event) => {
    event.preventDefault();
    console.log(formState);

    //   type: "[TAREAS] Agregar tareas",
    //   payload: nuevaTarea,
  };

  return (
    <>
      <Form className="formTareas" onSubmit={agregarTarea}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            name="tarea"
            type="text"
            placeholder="Ingrese Tarea"
            value={tarea}
            onChange={onInputChange}
          />
        </Form.Group>
        <Button
          className="formTareas__btn"
          variant="primary"
          type="submit"
          onClick={(e) => {}}
        >
          Submit
        </Button>
      </Form>
      <ul>
        {
          tareasState.map(item => {
            return (
              <li key={item.id}>{item.tarea}</li>
            )
          })
        }
      </ul>
    </>
  );
};

// export const useForm = (initialForm = {}) => {

//   const [ formState, setFormState ] = useState(initialForm)

//   const onInputChange = ({ target }) => {
//     const { name, value } = target

//     setFormState({
//       ...formState,
//       [name]: value
//     })
//   }

//   return{
//     formState,
//     ...formState,
//     onInputChange
//   }
// }
