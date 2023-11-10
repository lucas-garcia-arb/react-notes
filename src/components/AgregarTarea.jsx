import { useState } from "react"

export const AgregarTarea = ({sumTarea}) => {

  const [inputValue, setInputValue] = useState('')

  const inputChange = (event) => {
    setInputValue(event.target.value)
  }
  
  const submitForm = (event) => {
    event.preventDefault()
    sumTarea(inputValue)
  }
  return (
    <>
      <form onSubmit={submitForm}>
        <input 
        type="text"
        placeholder="Agregar Tarea" 
        value={inputValue}
        onChange={inputChange}
        />
      </form>
    </>
  )
}
