import React,{useState} from 'react'
import Link from 'next/link'
import styles from '../styles/movielist.module.scss'
import { useAuth } from '../contexts/AuthContext'

const MovieList = (props) => {
  const filteredMovieList = props.filteredMovieList
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w1280';
  const {userLoggedIn,addToLikedMovies,removeFromLikedMovies,userData} = useAuth()

  console.log(filteredMovieList)
  const handleLikeButton = (movie) => {
    addToLikedMovies(movie);
}

  const handleUnLikeButton = (movie) => {
      removeFromLikedMovies(movie);
  }
  
  return (
    <div className={styles.movieContainer}>
      {filteredMovieList.length === 0 
      ?
      <p className='w-full text-center text-[18px] h-[300px] font-bold flex items-center justify-center'>
        Sorry.. We could not find your search. Please try to search for another movie..</p> 
      : 
      <ul className={`${styles.movies} ${filteredMovieList.length === 0 ? styles.py0 : styles.py5}`}>
      {filteredMovieList.map((movie, index) => (
        <li key={index}>
          <Link href={`/movies/${movie.id}`} key={movie.id} className='z-10 h-full w-full absolute left-0 top-0'></Link>
          <h1 className={styles.movieTitle}>{movie.title}</h1>
          <img
            className={styles.movieImage}
            src={`${imageBaseUrl}${movie.backdrop_path}`}
            alt=""
            loading='lazy'
          />
          <div className={styles.movieLogos}>
            <img className={styles.movieHdLogo} loading='lazy' src="/hd-logo.svg" alt="" />
            <img className={styles.movieTurkishLogo} loading='lazy' src="/turkishflag.svg" alt="" />
            <img className={styles.movieUsLogo} loading='lazy' src="/usflag.svg" alt="" />
          </div>
          <div className={styles.movieOverview}>
              <p>{movie.overview}</p>
          </div>
          {userLoggedIn && userData?.isLiked && (
            userData.isLiked[movie.id]
            ? 
            <button
            className={styles.unlikeMovieButton} 
            onClick={() => handleUnLikeButton(movie)}
            >
              Remove Like
            </button>
            :
              <button
            className={styles.likeMovieButton} 
            onClick={() => handleLikeButton(movie)}
            >
              Like
            </button>
          )}
        </li>
      ))}
    </ul>}
    </div>
  )
}

export default MovieList
