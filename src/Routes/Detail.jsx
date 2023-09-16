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
  <div className='detailTable'>
   <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Website</th>
      </tr>
      <tr>
        <td>{state.dentist.name}</td>
        <td>{state.dentist.email}</td>
        <td>{state.dentist.phone}</td>
        <td>{state.dentist.website}</td>
      </tr>
    </table>

  </div>
    

    
  )
}

export default Detail