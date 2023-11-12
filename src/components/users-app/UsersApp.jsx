import { useState } from 'react'

const UsersApp = () => {
    
    const [users, setUsers] = useState([])
    const fetchUsers = async() => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json()
            setUsers(data)
        } catch (error) {
            console.error(error)
        }
    }

    //Se puede cargar automaticamente los datos cuando se genere un cambio
    //useState(()=>{
    //    fetchUsers()
    //},[])
    //O se puede cargar a través de una función con un botón
    const loadUsers = () => {
        fetchUsers()
    }

    return (
    <>
      <h1>Lista de usuarios</h1>
      <button onClick={loadUsers}>Carga usuarios</button>
      <ul>
        {users.map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
    </>
  )
}

export default UsersApp
