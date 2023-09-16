import {createContext, useContext, useState, useReducer, useEffect} from 'react'

export const Reducer = (state, action) => {
    switch (action.type) {
     case 'GET_DENTISTS':
       return {...state, dentists: action.payload}
     case 'GET_DENTIST':
       return {...state, dentist: action.payload}
     case 'ADD_FAVS':
        return {...state, favs: [...state.favs, action.payload]}
     case 'REMOVE_FAVS':
      return {...state, favs: action.payload}
     case 'THEME_LIGHT':
        return {...state, theme: 'light'}
     case 'THEME_DARK':
        return {...state, theme: 'dark'}
     default:
       throw new Error()
 }
}

