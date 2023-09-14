import { createContext, useContext, useState, useReducer, useEffect } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'

export const initialState = {theme: "", data: []}

const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

 /*  const [dentist, setDentist] = useState({}) */


  const url = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    axios(url)
    .then(res => {
      console.log(res.data)

    })
  })

  return (
    <ContextGlobal.Provider value={{}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider

export const useContextGlobal =  () => useContext(ContextGlobal)