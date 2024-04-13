import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import Alert from 'react-bootstrap/Alert'
import './HomepageBanner.style.css'
import LoadingSpinner from '../../../../common/LoadingSpinner/LoadingSpinner'

const HomepageBanner = () => {
   const { data, isLoading, isError, error } = usePopularMoviesQuery()
   console.log('popular data', data)

   if (isLoading) {
      return <LoadingSpinner />
   }
   if (isError) {
      return <Alert variant="danger">{error.message}</Alert>
   }
   return (
      <div
         className="banner"
         style={{
            backgroundImage: 'url(' + `https://image.tmdb.org/t/p/original/${data?.results[0].backdrop_path}` + ')',
         }}
      >
         <div className="text-white banner-text-area">
            <h1>{data?.results[0].title}s</h1>
            <p>{data?.results[0].overview}</p>
         </div>
      </div>
   )
}

export default HomepageBanner
