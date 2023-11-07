let isTrue = true

export const fetchData = (task, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      if(isTrue) {
        resolve(task)
      }else{
        reject("Error")
      }
    }, time)
  })
}