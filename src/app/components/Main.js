'use client'

import React,{useEffect} from 'react'
import {FilterBar,MovieList,Navbar,MovieSlider,Footer} from '../index.js'
import styles from '../styles/main.module.scss'
import { useMovies } from '../contexts/MoviesContext.js'
import '../style.css'

const Main = () => {
  const {state,fetchMovies} = useMovies()
  const {filteredMovieList,movieList} = state
  
  useEffect(() => {
    fetchMovies()
  }, [])
  
  return (
    <div className={`${styles.mainContainer}`}>
      <Navbar />
      <MovieSlider filteredMovieList = {movieList} />
      <h1 className={styles.mainTitle}>Neoflema TV</h1>
      <FilterBar />
      <MovieList filteredMovieList={filteredMovieList} />
      <Footer />
    </div>
  )
}

export default Main