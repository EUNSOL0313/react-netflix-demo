import React from 'react'
import './MovieSlider.style.css'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import MovieCard from '../../common/MovieCard/MovieCard'

const MovieSlider = ({ title, movies, responsive }) => {
   return (
      <div className="movie-slider">
         <h3 className="fw-bold pt-5">{title}</h3>
         {movies.length > 0 ? (
            <Carousel
               infinite={true}
               centerMode={true}
               itemClass="movie-slider p-1"
               containerClass="carousel-container"
               responsive={responsive}
               sliderClass="sliderClass"
            >
               {movies.map((movie, index) => (
                  <MovieCard movie={movie} key={index} />
               ))}
            </Carousel>
         ) : (
            <div>0 results</div>
         )}
      </div>
   )
}

export default MovieSlider
