import React from 'react'
import './RatingStars.style.css'
const RatingStars = () => {
   return (
      <fieldset className="rating">
         <input id="star5" name="rating" type="radio" value="5" />
         <label className="full" for="star5" title="5 stars" />
         <input id="star4half" name="rating" type="radio" value="4 and a half" />
         <label className="half" for="star4half" title="4.5 stars" />
         <input id="star4" name="rating" type="radio" value="4" />
         <label className="full" for="star4" title="4 stars" />
         <input id="star3half" name="rating" type="radio" value="3 and a half" />
         <label className="half" for="star3half" title="3.5 stars" />
         <input id="star3" name="rating" type="radio" value="3" />
         <label className="full" for="star3" title="3 stars" />
         <input id="star2half" name="rating" type="radio" value="2 and a half" />
         <label className="half" for="star2half" title="2.5 stars" />
         <input id="star2" name="rating" type="radio" value="2" />
         <label className="full" for="star2" title="2 stars" />
         <input id="star1half" name="rating" type="radio" value="1 and a half" />
         <label className="half" for="star1half" title="1.5 stars" />
         <input id="star1" name="rating" type="radio" value="1" />
         <label className="full" for="star1" title="1 stars" />
         <input id="starhalf" name="rating" type="radio" value="half" />
         <label className="half" for="starhalf" title="0.5 stars" />
      </fieldset>
   )
}

export default RatingStars
