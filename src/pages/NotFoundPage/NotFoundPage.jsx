import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './NotFoundPage.style.css'

const NotFoundPage = () => {
   return (
      <div className="wrap">
         <img
            className="notfound-img"
            src="https://www.creativefabrica.com/wp-content/uploads/2022/11/26/404-error-not-found-logo-Graphics-48584243-1.jpg"
            alt="NotFound img"
         />
         <Link to={'/'} className="btn-link">
            <Button className="home-button" variant="danger">
               GO TO HOME
            </Button>
         </Link>
      </div>
   )
}

export default NotFoundPage
