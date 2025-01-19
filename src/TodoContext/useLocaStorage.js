import React from "react";

function useLocalStorage(itemName, inicialValue) {
  const [item, setItem] = React.useState(inicialValue)
  const [loading, setLoading] = React.useState(true)
  const [error, setError] = React.useState(false)



  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName)
        let parsedItem;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify([inicialValue]))
          parsedItem = inicialValue
        } else {
          parsedItem = JSON.parse(localStorageItem)
          setItem(parsedItem)
        }
  
        setLoading(false)
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }, 2000);
  }, [])
 


  //-------------------------------------------------------------------------
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return {
    item,
    saveItem,
    loading,
    error,
  }

}

export { useLocalStorage }


// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: false },
//   { text: 'tomar el curso de introduccion a react js', completed: false },
//   { text: 'llorar con la llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
//   { text: 'usar estados derivados', completed: false },
//   { text: 'pruebita 01', completed: false }
// ]

// localStorage.setItem('TODOS_V1',JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1')