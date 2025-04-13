import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import './First.css';

function First() {
  return (
 <>

<Navbar expand="lg" className="bg-primary mb-3">
      <Container >
        <Navbar.Brand className='comp' href="#home">Qweez Tech</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className='comp' href="#home">Home</Nav.Link>
            <Nav.Link className='comp' href="#course">Course</Nav.Link>
            <Nav.Link className='comp' href="#offer">Offers</Nav.Link>
            <Nav.Link className='comp' href="#link">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 </>
  )
}

export default First
