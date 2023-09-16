import axios from 'axios'
import {createContext, useContext, useReducer, useEffect} from 'react'
import { Reducer } from './Reducer'



const GlobalContext = createContext()

const localFavs = JSON.parse(localStorage.getItem('favs'))
const initialFavState = localFavs ? localFavs : []

const initialTheme = 'light'

const initialState = {
  favs: initialFavState,
  dentists: [],
  dentist: {},
  theme: initialTheme,
  clicked: false
}


const Context = ({children}) => {

   const [state, dispatch] = useReducer(Reducer, initialState)

const url = 'https://jsonplaceholder.typicode.com/users'

useEffect(() => {
  axios(url)
  .then(res => {
    console.log(res.data)
    dispatch({type: 'GET_DENTISTS', payload: res.data})
  })
  .catch(err => console.log(err))
}, [])

useEffect(() =>{
  localStorage.setItem('favs', JSON.stringify(state.favs))
}, [state.favs])


return (
    <GlobalContext.Provider value={{state, dispatch}}>
        {children}
    </GlobalContext.Provider>
)

}

export default Context

export const useGlobalContext = () => useContext(GlobalContext)







