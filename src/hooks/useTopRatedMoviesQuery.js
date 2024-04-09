import { useQuery } from '@tanstack/react-query'
import api from '../utils/api'

const fetchTopRatedMovies = () => {
   return api.get(`/movie/top_rated`)
}

//api호출 hook
export const useTopRatedMoviesQuery = () => {
   return useQuery({
      queryKey: ['movie-toprated'],
      queryFn: fetchTopRatedMovies,
      select: (result) => result.data,
   })
}
