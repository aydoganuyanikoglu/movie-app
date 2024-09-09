'use client'
import React, { useEffect, useState } from 'react';
import { Navbar, StarRating } from '../../index.js';
import styles from '../../styles/moviepage.module.scss';

const MovieDetail = ({ params }) => {
  const { id } = params;
  const my_api_key = process.env.NEXT_PUBLIC_MY_KEY;
  const base_url = "https://api.themoviedb.org/3";

  const [movie, setMovie] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`${base_url}/movie/${id}?api_key=${my_api_key}`);
        if (!response.ok) {
          throw new Error('error');
        }
        const movieData = await response.json();
        setMovie(movieData);
        const videoResponse = await fetch(`${base_url}/movie/${id}/videos?api_key=${my_api_key}`);
        const videoData = await videoResponse.json();
        const trailer = videoData.results.find(video => video.type === 'Trailer');
        if (trailer) {
          setTrailerUrl(`https://www.youtube.com/embed/${trailer.key}`);
        }
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) {
    return <div>Loading...</div>;
  }

  console.log(movie.genres)
  return (
    <div>
      <Navbar />
      <div className={styles.movieContainer}>
        <div className={styles.blackEffect}></div>
        <div className={styles.leftPart}>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
          <StarRating rating={movie.vote_average / 2} />
          <ul className={styles.genres}>
            {movie.genres.map((genre, index) => (
              <li key={index}>
                {genre.name}
              </li>
            ))}
          </ul>
          {trailerUrl && (
            <div className={styles.trailerContainer}>
              <iframe 
                width="560" 
                height="300" 
                src={trailerUrl} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen>
              </iframe>
            </div>
          )}
        </div>
        <img className={styles.image} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title} />
      </div>
    </div>
  );
};

export default MovieDetail;
