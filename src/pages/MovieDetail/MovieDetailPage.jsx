import React from 'react'
import './MovieDetailPage.style.css'
import { Col, Row, Container, Badge } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useMovieDetailQuery } from '../../hooks/useMovieDetailQuery'
import { Alert } from 'react-bootstrap'
import imdb from '../../assets/images/imdb.png'
import { ReactComponent as LikeIcon } from '../../assets/images/like.svg'
import RatingStars from './components/RatingStars/RatingStars'
import { numberWithCommas } from '../../utils/number'
import RelatedMovie from './components/RelatedMovie'
import Reviews from './components/Reviews'
import Banner from '../../common/Banner/Banner'
import MovieCredit from './components/MovieCredit/MovieCredit'
import LoadingSpinner from '../../common/LoadingSpinner/LoadingSpinner'

const MovieDetailPage = () => {
   const { id } = useParams()
   const { data, isLoading, isError, error } = useMovieDetailQuery(id)
   if (isLoading) {
      return <LoadingSpinner />
   }
   if (isError) {
      return <Alert variant="danger">{error.message}</Alert>
   }

   return (
      <>
         <Banner movie={data?.data} />
         <Container
            className=" movie-detail mt-2 
         pb-5"
            fluid
         >
            <Row className="d-flex justify-content-center movie-detail-overview">
               <Col xs={12} lg={6} className="movie-img d-flex justify-content-center mb-1">
                  <img className="w-100" src={`https://image.tmdb.org/t/p/original/${data.data.poster_path}`} />
               </Col>
               <Col xs={12} lg={6} className="movie-detail-txt">
                  <div className="d-flex mb-3">
                     {data?.data.genres.map((genre, index) => (
                        <Badge bg="danger" className="movie-badge me-2" key={index}>
                           {genre.name}
                        </Badge>
                     ))}
                  </div>
                  <h1 className="mb-3">{data.data.title}</h1>
                  <div className="d-flex justify-content-start  movie-detail-info mb-3">
                     <div> {data.data.adult ? <span className="adult_18">18</span> : <span className="adult_all bd-success">All</span>}</div>
                     <div>{data.data.release_date}</div>
                     <div>{data.data.runtime} min</div>
                  </div>
                  <div className="d-flex justify-content-start movie-number-info">
                     <div className="movie-vote ">
                        <img src={imdb} alt="imdb" width={20} className="me-1" />
                        {data.data.vote_average}
                     </div>
                     <div className="movie-popularity ">
                        <LikeIcon width={30} className="ms-3 me-1" />
                        {data.data.popularity}
                     </div>
                  </div>
                  <div className="d-flex justify-content-start movie-number-money">
                     <div className="d-flex align-items-center mb-2">
                        <div className="movie-number-budget me-4">
                           Budget
                           <br />${numberWithCommas(data.data.budget)}
                        </div>
                     </div>
                     <div className="d-flex align-items-center mb-2 ">
                        <div className="movie-detail-badge ps-2">
                           Revenue
                           <br />${numberWithCommas(data.data.revenue)}
                        </div>
                     </div>
                  </div>
                  <div className="d-flex justify-content-start movie-detail-rating border-bottom border-white">
                     <RatingStars />
                  </div>
                  <div className=" d-flex  movie-detail-credit">
                     <MovieCredit id={id} />
                  </div>
               </Col>
            </Row>
            <Col>
               <RelatedMovie id={id} />
               <Reviews id={id} />
            </Col>
         </Container>
      </>
   )
}

export default MovieDetailPage
