import { useFetchData } from "../../hooks/useFetchData";

export const UserList = ({ endpoint }) => {
  const { data, isLoading } = useFetchData(endpoint);
  return (
    <>
      <ul>
        {
        isLoading
          ? <p>Cargando...</p>
          : endpoint === "users"
            ? data.map((item) => <li key={item.id}>{item.name}</li>)
            : data.map((item) => <li key={item.id}>{item.body}</li>)}
      </ul>
    </>
  );
};
