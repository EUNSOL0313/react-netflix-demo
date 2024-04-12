import React from 'react'
import { useMovieReviewsQuery } from '../../../hooks/useMovieReviewsQuery'
import { Alert } from 'react-bootstrap'
import ReviewBox from './ReviewBox/ReviewBox'
const Reviews = ({ id }) => {
   const { data, isLoading, isError, error } = useMovieReviewsQuery(id)

   if (isLoading) {
      return <h1>Loading...</h1>
   }
   if (isError) {
      return <Alert>{error.message}</Alert>
   }
   return (
      <div>
         <div>
            <h3 className="fw-bold">Reviews</h3>

            {data.data.results.length === 0 ? (
               <div className="mb-5">0 reviews for this movie</div>
            ) : (
               data.data.results.map((review, index) => <ReviewBox review={review} key={index} />)
            )}
         </div>
      </div>
   )
}

export default Reviews
