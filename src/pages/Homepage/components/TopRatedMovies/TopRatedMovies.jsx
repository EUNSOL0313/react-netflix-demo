import React from 'react'
import { useTopRatedMoviesQuery } from '../../../../hooks/useTopRatedMoviesQuery'
import { Alert } from 'bootstrap'
import MovieSlider from '../../../../common/MovieSlider/MovieSlider'
import { responsive } from '../../../../constants/responvie'
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner'

const TopRatedMovies = () => {
   const { data, isLoading, isError, error } = useTopRatedMoviesQuery()
   if (isLoading) {
      return <LoadingSpinner />
   }
   if (isError) {
      return <Alert variant="danger">{error.message}</Alert>
   }
   return (
      <div>
         <MovieSlider title={'Top Rated Movies'} movies={data.results} responsive={responsive} />
      </div>
   )
}

export default TopRatedMovies
