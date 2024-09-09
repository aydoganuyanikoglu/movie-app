'use client'
import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/movieslider.module.scss'

const MovieSlider = (props) => {
  const movieList = props.filteredMovieList.slice(6,10)
  const imageBaseUrl = 'https://image.tmdb.org/t/p/w1280';

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
      {movieList.map((movie,index) => (
            <div
            key={index}
            className={styles.slides}
            >
              <Link href={`/movies/${movie.id}`} key={movie.id} className='z-10 h-full w-[55%] max-md:w-full absolute right-0 top-0'></Link>
              <div
              className={styles.slidesLeft}>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
              </div>
              <img 
              className={styles.movieImagee}
              loading='lazy'
              src={`${imageBaseUrl}${movie.backdrop_path}`} 
              alt={movie.title} />
              <img 
              className={styles.playButton}
              loading='lazy'
              src="/play-button.svg" alt="" />
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default MovieSlider;
