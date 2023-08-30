import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CourseDropdown from './Courses/CourseDropdown';
import './Home/Home.css';

function Header() {
  return (
    <Navbar expand="lg" className="modern-header">
      <div className="container">
        <Navbar.Brand href="/">
          <img src="/images/Logo.png" alt="Logo" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="nav-link">Home</Nav.Link>
            <Nav.Link href="About" className="nav-link">About Us</Nav.Link>
            <CourseDropdown />
            <Nav.Link href="gallery" className="nav-link">Gallery</Nav.Link>
            <Nav.Link href="placement" className="nav-link">Placement</Nav.Link>
            <Nav.Link href="Contactus" className="nav-link">Contact Us</Nav.Link>
            <NavDropdown title="Admin Panel" id="basic-nav-dropdown" className="nav-link">
              <NavDropdown.Item href="StaffLogin">Staff Login</NavDropdown.Item>
              <NavDropdown.Item href="adminlogin">Admin Login</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
