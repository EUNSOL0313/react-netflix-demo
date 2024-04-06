import '../layout/AppLayout.style.css'
import React from 'react'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Outlet } from 'react-router-dom' //자손들 가져오는 것
import { ReactComponent as Logo } from '../assets/images/logo.svg'

const AppLayout = () => {
   return (
      <div className="wrap">
         <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
               <Navbar.Brand href="/">
                  {/* <img width={100} className="logo" src="https://bi-jingo.com/wp-content/uploads/2009/03/netflix-logo-png-clip-art.png" alt="logo" /> */}
                  <Logo className="logo" />
               </Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
               <Navbar.Collapse id="navbarScroll">
                  <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                     <Nav.Link href="/">Home</Nav.Link>
                     <Nav.Link href="/movies">Movies</Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                     <Form.Control type="search" placeholder="Search" className="me-2" aria-label="Search" />
                     <Button variant="outline-danger">Search</Button>
                  </Form>
               </Navbar.Collapse>
            </Container>
         </Navbar>
         <Outlet />
      </div>
   )
}

export default AppLayout
