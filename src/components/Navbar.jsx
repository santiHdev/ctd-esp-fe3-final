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
    <nav className={state.theme == 'dark' ? 'darkNav' : '' }>
      <div>
        <h2><span>D</span>H O<span>d</span>onto</h2>
      </div>
      <div>
       <Link to='/' className={state.theme == 'dark' ? 'darkNav' : '' }>Home</Link>
       <Link to='/favs' className={state.theme == 'dark' ? 'darkNav' : '' }>Favs</Link>
       <Link to='/contact' className={state.theme == 'dark' ? 'darkNav' : '' }>Contact</Link>
       <button onClick={toggleTheme} className={state.theme == 'dark' ? 'themButtonDark' : '' }>Change theme</button>
      </div>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      
    </nav>
  )
}

export default Navbar