import React from 'react'
import { useMovieCreditQuery } from '../../../../hooks/useMovieCredit'
import MovieCreditBox from './MovieCreditBox/MovieCreditBox'
import './MovieCredit.style.css'

const MovieCredit = ({ id }) => {
   const { data: credit } = useMovieCreditQuery({ id })
   const creditCast = credit?.cast.slice(0, 10)
   const crewCast = credit?.crew
   const crewCastDirecting = crewCast?.filter((direct) => direct.job === 'Director')
   return (
      <div className="movie-credit-wrap">
         <div className="credit-title">Credit Cast</div>
         <div>
            <ul className="credit-directing-list">
               {crewCastDirecting &&
                  crewCastDirecting.map((item, index) => (
                     <li key={index}>
                        <MovieCreditBox item={item} characterOverride="director" />
                     </li>
                  ))}
            </ul>
         </div>
         <ul className="credit-character-list mt-1">
            {creditCast &&
               creditCast.map((item, index) => (
                  <li key={index}>
                     <MovieCreditBox item={item} />
                  </li>
               ))}
         </ul>
      </div>
   )
}

export default MovieCredit
