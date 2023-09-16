import React from 'react'
import Card from '../components/Card'
import { useGlobalContext } from '../Context/Context'


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
   
const {state} = useGlobalContext()




  return (
    <main className={state.theme} >
      <h1>Home</h1>
      <div className='card-grid'>
     {state.dentists.map( den =>  <Card name={den.name} username={den.username} key={den.id} id={den.id}/>)}
      </div>
    </main>
  )
}

export default Home