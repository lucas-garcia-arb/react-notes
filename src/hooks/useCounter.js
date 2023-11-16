import { useState } from "react"

export const useCounter = (initValue = 0) => {
  const [counter, setCounter] = useState(initValue)
  const increase = (value = 1) => {
    setCounter(counter + value)
  }

  const decrease = (value = 1, negative = true) => {
    if (negative && counter - value < 0) {
      setCounter(0)
      return
    }
    setCounter(counter - value)
  }

  const reset = () => {
    setCounter(0)
  }

  return {
    counter,
    increase,
    decrease,
    reset
  }
}
