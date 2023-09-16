import React, { useEffect, useState} from "react";
import { useGlobalContext } from '../Context/Context'
import { Link } from 'react-router-dom'
import doctorImg from '/images/doctor.jpg'



const Card = ({ name, username, id }) => {

  const {state, dispatch} = useGlobalContext()

const [clicked, setClicked] = useState(false);

  

  const fav = {
    favName: name,
    favUsername: username,
    favId: id
  }

  
  
  const addFav = ()=>{

    setClicked(true)
  
      dispatch({type: 'ADD_FAVS', payload: fav})
    
  
  }

  const removeFav = () => {
    setClicked(false)
    const removeFav = state.favs.filter(item => item.favId === fav.favId);
    dispatch({ type: 'REMOVE_FAVS', payload: removeFav })
  }



  return (
    <div className="card">
      <Link to={'/detail/' + id} className={state.theme}>
        <img src={doctorImg} alt="" />
        <h1>{name}</h1>
        <h3>{username}</h3>

        </Link>

      
        {/* En cada card deberan mostrar en name - username y el id */}
    

        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
       {clicked ? <button className="favButton" onClick={removeFav}>Remove Favourite</button> :  <button onClick={addFav} className="favButton">Add fav</button>   }
        
    </div>
  );
};

export default Card;
