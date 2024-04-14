import React from 'react'
import MovieSlider from '../../../common/MovieSlider/MovieSlider'
import { useRelatedMoviesQuery } from '../../../hooks/useRelatedMovies'
import { relatedMovieResponsive } from '../../../constants/responvie'
import { Alert, Container } from 'react-bootstrap'
import LoadingSpinner from '../../../common/LoadingSpinner/LoadingSpinner'

const RelatedMovie = ({ id }) => {
   const { data, isLoading, isError, error } = useRelatedMoviesQuery(id)

   if (isLoading) {
      return <LoadingSpinner />
   }
   if (isError) {
      return <Alert variant="danger">{error.message}</Alert>
   }

   return (
      <Container>
         <MovieSlider title="Related Movies" movies={data.results} responsive={relatedMovieResponsive} />
      </Container>
   )
}

export default RelatedMovie
