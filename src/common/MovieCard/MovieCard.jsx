import React from 'react'
import { Badge } from 'react-bootstrap'
import './MovieCard.style.css'
import imdb from '../../assets/images/imdb.png'
import { ReactComponent as LikeIcon } from '../../assets/images/like.svg'
import { useMovieGenreQuery } from '../../hooks/useMovieGenre'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ movie }) => {
   const navigate = useNavigate()
   const { data: genreData } = useMovieGenreQuery()
   console.log('genreData', genreData)

   const showGenre = (genreIdList) => {
      if (!genreData) return []
      const genreNameList = genreIdList.map((id) => {
         const genreObj = genreData.find((genre) => genre.id === id)
         return genreObj.name
      }) //장르 이름만 모인 것들이 map이 되어서 나옴

      return genreNameList
   }

   return (
      <div
         className="movie-card"
         style={{ backgroundImage: 'url(' + `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` + ')' }}
         onClick={() => navigate(`/movies/${movie.id}`)}
      >
         <div className="overlay">
            <div className="movie-card-title">
               <h1>{movie.title}</h1>
               <div className="badge-wrap">
                  {showGenre(movie.genre_ids).map((genre, index) => (
                     <Badge bg="danger" key={index}>
                        {genre}
                     </Badge>
                  ))}
               </div>
            </div>

            <div className="movie-card-adult">
               <div className="movie-adult">
                  {movie.adult ? <span className="adult_18">18</span> : <span className="adult_all bd-success">All</span>}
               </div>

               <div className="movie-card-content">
                  <div className="movie-vote">
                     <img src={imdb} alt="imdb" />
                     {movie.vote_average}
                  </div>
                  <div className="movie-popularity">
                     <LikeIcon />
                     {movie.popularity}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default MovieCard
