'use client'

import React,{createContext,useContext,useReducer,useCallback} from 'react'
import Reduce from '../reducers/Reduce'
import { myAxios } from '../api/Api'

const MoviesContext = createContext()

const initialState = {
    movieList: [],
    filteredMovieList: [],
    filter: '',
    error: null
}

const MoviesProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reduce, initialState)

    const fetchMovies = useCallback(async () => {
        try {
            const response = await myAxios.get('/movie/popular');
            dispatch({type: 'FETCH_MOVIES',payload: response.data.results})
        }
        catch (error) {
            dispatch({type: 'SET_ERROR',payload: error.message})
        }
      },[])
    

    const setFilter = useCallback(async (filter) => {
        dispatch({type:'FILTER_MOVIES',payload: filter})
    })
    

    return (
        <MoviesContext.Provider value={{state,fetchMovies,setFilter}}>
            {children}
        </MoviesContext.Provider>
    )
}

const useMovies = () => {
    return useContext(MoviesContext)
}

export {MoviesProvider,useMovies}
export default MoviesContext