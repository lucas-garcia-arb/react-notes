import { useFetchUsers } from "../../hooks/useFetchUsers";

export const UsersComponent = () => {
  let endpoint = "https://jsonplaceholder.typicode.com/users";

  const { data, isLoading, errors } = useFetchUsers(endpoint);

  return (
    <>
      <h1>Hello</h1>
      {isLoading ? (
        <h4>Cargando</h4>
      ) : errors ? (
        <p>Ha ocurrido un horror: {errors}</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d) => {
              return (
                <tr key={d.id}>
                  <th>{d.id}</th>
                  <td>{d.name}</td>
                  <td>{d.email}</td>
                  <td>{d.website}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};
