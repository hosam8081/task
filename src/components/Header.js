import React from 'react'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/" className='navbar-brand'>
            Home
          </Link>
          <Nav className="ms-auto">
            <Link to="/counter" className="nav-link" style={{fontSize:"20px"}}>counter</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header