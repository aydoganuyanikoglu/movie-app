'use client'

import React,{useEffect} from 'react'
import styles from '../styles/likedmovies.module.scss'
import { useAuth } from '../contexts/AuthContext'
import Link from 'next/link'

const LikedMovies = () => {
  const {userData,addToLikedMovies,removeFromLikedMovies,userLoggedIn} = useAuth()
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w1280';

  const handleLikeButton = (movie) => {
    addToLikedMovies(movie);
  }

  const handleUnLikeButton = (movie) => {
      removeFromLikedMovies(movie);
  }

  if (!userData || userData.LikedMovies.length === 0) {
    return (
        <div className={styles.noLikedMovies}>
            <h1 className={styles.likedMoviesTitle}>Your Movie List</h1>
            <p>No liked movies found.</p>
        </div>
    );
} 

  return (
      <div className={styles.movieContainer}>
        <h1 className={styles.likedMoviesTitle}>Your Movie List</h1>
        <ul className={styles.movies}>
        {userData.LikedMovies.map((movie, index) => (
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
        </ul>
    </div>
)
}
export default LikedMovies;