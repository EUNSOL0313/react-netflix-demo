import React from 'react'
import './MovieDetailPage.style.css'
import { Col, Row, Container, Badge } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useMovieDetailQuery } from '../../hooks/useMovieDetailQuery'
import { Alert } from 'react-bootstrap'
import imdb from '../../assets/images/imdb.png'
import { ReactComponent as LikeIcon } from '../../assets/images/like.svg'
import RatingStars from './components/RatingStars'
import { numberWithCommas } from '../../utils/number'
import RelatedMovie from './components/RelatedMovie'
import Reviews from './components/Reviews'
import Banner from '../../common/Banner/Banner'
const MovieDetailPage = () => {
   const { id } = useParams()
   const { data, isLoading, isError, error } = useMovieDetailQuery(id)
   if (isLoading) {
      return <h1>Loading...</h1>
   }
   if (isError) {
      return <Alert variant="danger">{error.message}</Alert>
   }

   return (
      <>
         <Banner movie={data?.data} />
         <Container className="movie-detail pb-5">
            <Row className="d-flex justify-content-center">
               <Col className="movie-img d-flex justify-content-center mt-5" xs={12} lg={6}>
                  <img className="w-80" src={`https://image.tmdb.org/t/p/original/${data.data.poster_path}`} />
               </Col>
               <Col className="movie-detail-txt mt-5" xs={12} lg={6}>
                  <div className="d-flex mb-4">
                     {data?.data.genres.map((genre, index) => (
                        <Badge bg="danger" className="movie-badge me-2" key={index}>
                           {genre.name}
                        </Badge>
                     ))}
                  </div>
                  <h1>{data.data.title}</h1>
                  <div className="d-flex justify-content-start  movie-detail-info">
                     <div> {data.data.adult ? <span className="adult_18">18</span> : <span className="adult_all bd-success">All</span>}</div>
                     <div>{data.data.release_date}</div>
                     <div>{data.data.runtime} min</div>
                  </div>
                  <div className="d-flex justify-content-between movie-number-info">
                     <div className="movie-vote">
                        <img src={imdb} alt="imdb" width={20} className="me-1" />
                        {data.data.vote_average}
                     </div>
                     <div className="movie-popularity">
                        <LikeIcon width={30} className="ms-3 me-1" />
                        {data.data.popularity}
                     </div>
                     <div className="d-flex align-items-center mb-2">
                        <div className="movie-number-budget me-2">
                           Budget
                           <br />$ {numberWithCommas(data.data.budget)}
                        </div>
                     </div>

                     <div className="d-flex align-items-center mb-2">
                        <div className="movie-detail-badge me-2">
                           Revenue
                           <br />$ {numberWithCommas(data.data.revenue)}
                        </div>
                     </div>
                  </div>
                  <div className="d-flex justify-content-start movie-detail-rating border-bottom border-white">
                     <RatingStars />
                  </div>
                  <div className="movie-detail-overview">
                     <p>{data.data.overview}</p>
                  </div>
               </Col>
            </Row>
            <RelatedMovie id={id} />
            <Reviews id={id} />
         </Container>
      </>
   )
}

export default MovieDetailPage
