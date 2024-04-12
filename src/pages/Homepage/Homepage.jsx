import React from 'react'
import HomepageBanner from './components/HomepageBanner/HomepageBanner'
import './Homepage.style.css'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import TopRatedMovies from './components/TopRatedMovies/TopRatedMovies'
import UpcomingMovies from './components/UpcomingMovies/UpcomingMovies'

//1. 배너 => popular movie를 들고와서 첫번째 아이템을 보여주자
//2. popular movie
//3. top rated movie
//4. upcoming movie

const Homepage = () => {
   return (
      <div className="wrap">
         <HomepageBanner />
         <PopularMovieSlide />
         <TopRatedMovies />
         <UpcomingMovies />
      </div>
   )
}

export default Homepage
