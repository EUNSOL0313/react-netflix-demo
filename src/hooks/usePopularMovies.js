import { useQuery } from '@tanstack/react-query'
import api from '../utils/api'

const fetchPopularMovies = () => {
   return api.get(`/movie/popular`)
}

//api호출 hook
export const usePopularMoviesQuery = () => {
   return useQuery({
      queryKey: ['movie-popular'],
      queryFn: fetchPopularMovies,
      select: (result) => result.data,
   })
}
