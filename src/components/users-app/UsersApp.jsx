import { useState } from "react";
import { UserList } from "./UserList";

export const UsersApp = () => {
  const [endpoint, setEndpoint] = useState("users");

  const changeEndpoint = () => {
    setEndpoint("comments");
  };

  return (
    <>
      <h1>Lista de usuarios</h1>
      <button onClick={changeEndpoint}>Carga usuarios</button>
      <UserList endpoint={endpoint} />
    </>
  );
};
