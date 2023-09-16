import React from "react";
import Card from "../components/Card";
import { useGlobalContext } from '../Context/Context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state} = useGlobalContext()
  
  


  return (
    <div className="favs">
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {state.favs.map(fav => <Card name={fav.favName} username={fav.favUsername} key={fav.favId}></Card>)}
      </div>
    </div>
  );
};

export default Favs;
