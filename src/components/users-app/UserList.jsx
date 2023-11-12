import { useState, useEffect } from "react";

const UserList = ({ endpoint }) => {
  const [users, setUsers] = useState([]);
  const fetchUsers = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/${endpoint}`
      );
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUsers()
  }, [endpoint])
  

  return (
    <>
      <ul>
        {
            endpoint === 'users' ? users.map(item => <li key={item.id}>{item.name}</li>)
                                :  users.map(item => <li key={item.id}>{item.body}</li>) 
        }
      </ul>
    </>
  );
};

export default UserList;
