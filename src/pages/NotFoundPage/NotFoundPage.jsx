import React from 'react'
import { Container, Button } from 'react-bootstrap'

const NotFoundPage = () => {
   return (
      <div className="wrap">
         <Container>
            <div className="page-content">
               <img
                  src="https://www.creativefabrica.com/wp-content/uploads/2022/11/26/404-error-not-found-logo-Graphics-48584243-1.jpg"
                  alt="NotFound img"
               />
            </div>
            <Button variant="danger">GO TO HOME</Button>
         </Container>
      </div>
   )
}

export default NotFoundPage
