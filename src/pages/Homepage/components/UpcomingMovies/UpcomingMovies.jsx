import React from 'react'
import { useUpcomingMoviesQuery } from '../../../../hooks/useUpcomingMoviesQuery'
import { Alert } from 'bootstrap'
import MovieSlider from '../../../../common/MovieSlider/MovieSlider'
import { responsive } from '../../../../constants/responvie'
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner'

const UpcomingMovies = () => {
   const { data, isLoading, isError, error } = useUpcomingMoviesQuery()
   if (isLoading) {
      return <LoadingSpinner />
   }
   if (isError) {
      return <Alert variant="danger">{error.message}</Alert>
   }
   return (
      <div>
         <MovieSlider title={'Upcoming Movies'} movies={data.results} responsive={responsive} />
      </div>
   )
}

export default UpcomingMovies
