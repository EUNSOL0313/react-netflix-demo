import React from 'react'
import { useMovieReviewsQuery } from '../../../hooks/useMovieReviewsQuery'
import { Alert, Container } from 'react-bootstrap'
import ReviewBox from './ReviewBox/ReviewBox'
import LoadingSpinner from '../../../common/LoadingSpinner/LoadingSpinner'

const Reviews = ({ id }) => {
   const { data, isLoading, isError, error } = useMovieReviewsQuery(id)

   if (isLoading) {
      return <LoadingSpinner />
   }
   if (isError) {
      return <Alert>{error.message}</Alert>
   }
   return (
      <Container>
         <h3 className="fw-bold ps-3">Reviews</h3>

         {data.data.results.length === 0 ? (
            <div className="mb-5">0 reviews for this movie</div>
         ) : (
            data.data.results.map((review, index) => <ReviewBox review={review} key={index} />)
         )}
      </Container>
   )
}

export default Reviews
