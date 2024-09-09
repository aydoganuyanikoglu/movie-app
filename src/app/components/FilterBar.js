import React from 'react'
import { useMovies } from '../contexts/MoviesContext'
import styles from '../styles/filter.module.scss'

const FilterBar = () => {
  const{filter,setFilter} = useMovies()

  const handleChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div
    className={styles.filterContainer}>
      <input 
      className={styles.filterInput}
      type="text" 
      value={filter}
      placeholder='filter movies..'
      onChange={handleChange}/>
    </div>
  )
}

export default FilterBar 