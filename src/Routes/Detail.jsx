import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useGlobalContext } from '../Context/Context'



//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  /* const [dentist, setDentist] = useState({}) */

  const {state, dispatch} = useGlobalContext()


  const {id} = useParams()

  const url = 'https://jsonplaceholder.typicode.com/users/' + id

  useEffect(() => {
    fetch(url)
    .then(res => res.json())
    .then(data => {
       dispatch({type: 'GET_DENTIST', payload: data})
    })
}, [])

  return (
    <>
      <h1>{state.dentist.name}</h1>
      <h2>{state.dentist.email}</h2>
      <h2>{state.dentist.phone}</h2>
      <h2>{state.dentist.website}</h2>

      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail