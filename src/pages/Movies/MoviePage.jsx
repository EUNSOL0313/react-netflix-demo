import React, { useState } from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie'
import { useSearchParams } from 'react-router-dom'
import { Container, Alert, Row, Col } from 'react-bootstrap'
import MovieCard from '../../common/MovieCard/MovieCard'
import ReactPaginate from 'react-paginate'
import './MoviePage.style.css'

//경로 2가지
// nav 바에서 클릭해서 온 경우=> popularMovie보여주기
// keyword를 입력해서 온 경우 => keyword와 관련된 영화를 보여줌

//페이지네이션 설치
//page state 만들기
//페이지네이션 클릭할 떄마다 page 바뀌기
// page 값이 바뀔 때 마다 useSearchMovie에 page까지 넣어서 fetch
const MoviePage = () => {
   const [query, setQuery] = useSearchParams()
   const [page, setPage] = useState(1)
   const keyword = query.get('q')

   const { data, isLoading, isError, error } = useSearchMovieQuery({ keyword, page })

   const handlePageClick = ({ selected }) => {
      setPage(selected + 1)
      //console.log('page', page)
   }

   console.log('search Q', data)
   if (isLoading) {
      return <h1>Loading...</h1>
   }
   if (isError) {
      return <Alert variant="danger">{error.message}</Alert>
   }

   return (
      <Container>
         {/* sort&card 부분 */}
         <Col lg={4} xs={12}>
            필터
         </Col>
         {data?.results.length === 0 ? (
            <div>{keyword}와 일치하는 영화가 없습니다.</div>
         ) : (
            <Row>
               {/* card-sort하는 부분의 줄 */}
               {data?.results.map((movie, index) => (
                  <Col key={index} lg={3} xs={6} className="movie-card-box">
                     <MovieCard movie={movie} />
                  </Col>
               ))}
            </Row>
         )}
         <div className="d-flex justify-content-center my-4">
            <ReactPaginate
               nextLabel=">"
               onPageChange={handlePageClick}
               pageRangeDisplayed={5}
               marginPagesDisplayed={5}
               pageCount={data?.total_pages > 500 ? 500 : data?.total_pages} //전체페이지
               previousLabel="<"
               pageClassName="r-page-item"
               pageLinkClassName="r-page-link"
               previousClassName="r-page-item"
               previousLinkClassName="r-rpage-link"
               nextClassName="r-page-item"
               nextLinkClassName="r-page-link"
               breakLabel="..."
               breakClassName="r-page-item"
               breakLinkClassName="r-page-link"
               containerClassName="pagination"
               activeClassName="active"
               renderOnZeroPageCount={null}
               forcePage={page - 1}
            />
         </div>
      </Container>
   )
}

export default MoviePage
