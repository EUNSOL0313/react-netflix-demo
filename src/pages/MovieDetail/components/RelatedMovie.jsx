import React from 'react'
import MovieSlider from '../../../common/MovieSlider/MovieSlider'
import { useRelatedMoviesQuery } from '../../../hooks/useRelatedMovies'
import { relatedMovieResponsive } from '../../../constants/responvie'
import { Alert } from 'react-bootstrap'

const RelatedMovie = ({ id }) => {
   const { data, isLoading, isError, error } = useRelatedMoviesQuery(id)

   if (isLoading) {
      return <h1>Loading...</h1>
   }
   if (isError) {
      return <Alert variant="danger">{error.message}</Alert>
   }

   return <MovieSlider title="Related Movies" movies={data.results} responsive={relatedMovieResponsive} />
}

export default RelatedMovie
