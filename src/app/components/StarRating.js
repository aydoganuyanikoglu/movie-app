'use client'

import React from 'react';
import StarRatings from 'react-star-ratings';

const StarRating = ({ rating }) => {
  return (
    <StarRatings
      rating={rating}
      starRatedColor="#0affb6"
      numberOfStars={5}
      starDimension="23px"
      starSpacing="5px"
    />
  );
};

export default StarRating;
