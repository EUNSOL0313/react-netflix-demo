import React, { useState } from 'react'

const MovieCreditBox = ({ item, characterOverride }) => {
   //    const character = characterOverride || item?.character

   //    return (
   //       <div>
   //          <div class="credit-box">
   //             <img src={`https://media.themoviedb.org/t/p/w276_and_h350_face${item?.profile_path}`} alt="profile" />
   //          </div>
   //          <div className="credit-content-overlay">
   //             <div className="credit-character">{character === 'director' ? 'Director' : character}</div>
   //             <div className="credit-name">{item?.name}</div>
   //          </div>
   //       </div>
   //    )

   const [isHovered, setIsHovered] = useState(false)
   const character = characterOverride || item?.character

   return (
      <div className="credit-box" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
         <img src={`https://media.themoviedb.org/t/p/w276_and_h350_face${item?.profile_path}`} alt="profile" />
         <div className={`credit-content-overlay ${isHovered ? 'hovered' : ''}`}>
            <div className="credit-character">{character === 'director' ? 'Director' : character}</div>
            <div className="credit-name">{item?.name}</div>
         </div>
      </div>
   )
}

export default MovieCreditBox
