import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {state, dispatch} = useGlobalContext()

  const toggleTheme = () => {
    if (state.theme != 'dark'){
      dispatch({type: 'THEME_DARK'})
    } else {
      dispatch({type: 'THEME_LIGHT'})
    }

  }

  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
       <Link to='/'>Home</Link>
       <Link to='/favs'>Favs</Link>
       <Link to='/contact'>Contact</Link>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={toggleTheme}>Change theme</button>
    </nav>
  )
}

export default Navbar