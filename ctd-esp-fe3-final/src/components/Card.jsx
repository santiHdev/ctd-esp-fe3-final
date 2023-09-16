import React, { useEffect} from "react";
import { useGlobalContext } from '../Context/Context'
import { Link } from 'react-router-dom'
import doctorImg from '../assets/doctor.jpg'


const Card = ({ name, username, id }) => {

  const {state, dispatch} = useGlobalContext()

  

  const fav = {
    favName: name,
    favUsername: username,
    favId: id
  }

  useEffect(() =>{
    localStorage.setItem('favs', JSON.stringify(state.favs))
  }, [state.favs])
  
  const addFav = ()=>{
  
    if (state.favs.some(item => item.favId === fav.favId)) {
      const removeFav = state.favs.filter(item => item.favId === fav.favId);
      dispatch({ type: 'REMOVE_FAVS', payload: removeFav })
     } else {
      dispatch({type: 'ADD_FAVS', payload: fav})
    }
  
  }



  return (
    <div className="card">
      <Link to={'/detail/' + id}>
        <img src={doctorImg} alt="" />
        <h1>{name}</h1>
        <h3>{username}</h3>

        </Link>

      
        {/* En cada card deberan mostrar en name - username y el id */}
    

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
