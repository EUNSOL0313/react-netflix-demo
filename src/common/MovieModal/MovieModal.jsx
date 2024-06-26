import React from 'react'
import { Modal, Alert } from 'react-bootstrap'
import YouTube from 'react-youtube'
import { useMovieTrailerQuery } from '../../hooks/useMovieTrailerQuery'
import './MovieModal.style.css'

const MovieModal = ({ movie, ...props }) => {
   const opts = {
      height: '100%',
      width: '100%',
      playerVars: {
         // https://developers.google.com/youtube/player_parameters
         autoplay: 1,
      },
   }
   const { data, isLoading, isError, error } = useMovieTrailerQuery(movie.id)

   if (isLoading) {
      return <h1>Loading...</h1>
   }
   if (isError) {
      return <Alert>{error.message}</Alert>
   }
   const modalContent = () => {
      if (data.data.results.length === 0) {
         return (
            <Alert key="danger" variant="danger">
               There is no trailer for this movie
            </Alert>
         )
      }
      return <YouTube videoId={data.data.results[0].key} opts={opts} className="youtube-frame" />
   }
   return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered contentClassName="trailer-modal">
         <Modal.Header closeButton closeVariant="white"></Modal.Header>
         <Modal.Body>{modalContent()}</Modal.Body>
      </Modal>
   )
}

export default MovieModal
