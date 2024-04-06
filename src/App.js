import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom'
import AppLayout from './layout/AppLayout'
import Homepage from './pages/Homepage/Homepage'
import MoviePage from './pages/Movies/MoviePage'
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
//홈페이지 '/'
//영화 전체보여주는 페이지(서치)'/movies' or 서치'/movies?q=
// 영화 디테일 페이지 '/movies/:id'

function App() {
   return (
      <div>
         <Routes>
            <Route path="/" element={<AppLayout />}>
               <Route index element={<Homepage />} />
               <Route path="movies">
                  <Route index element={<MoviePage />} />
                  <Route path=":id" element={<MovieDetailPage />} />
               </Route>

               {/* <Route path="/movies" element={<MoviePage />} />
               <Route path="/movies/:id" element={<MovieDetailPage />} /> */}
            </Route>
            <Route path="*" element={<NotFoundPage />} />
         </Routes>
      </div>
   )
}

export default App
