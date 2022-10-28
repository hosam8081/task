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
            <Link to="/" className="nav-link" style={{fontSize:"18px"}}>Post</Link>
            <Link to="/counter" className="nav-link" style={{fontSize:"18px"}}>Counter</Link>
            <Link to="/movies" className="nav-link" style={{fontSize:"18px"}}>Get</Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header