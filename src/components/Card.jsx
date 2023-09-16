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
    const removeFav = state.favs.filter(item => item.favId !== fav.favId);
    console.log("removeFav")
    console.log(removeFav)
    dispatch({ type: 'REMOVE_FAVS', payload: removeFav })

   

  }

  return (
    <div className="card">
      <Link to={'/detail/' + id} className={state.theme}>
        <img src={doctorImg} alt="" />
        <h1>{name}</h1>
        <h3>{username}</h3>

        </Link>
       {clicked ? <button className="favButton" onClick={removeFav}>Quitar Favorito</button> :  <button onClick={addFav} className="favButton">Agregar Favorito</button>   }
        
    </div>
  );
};

export default Card;
