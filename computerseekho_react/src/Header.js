import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CourseDropdown from './Courses/CourseDropdown'
import './Home/Home.css'
function Header() {

  return (
    <Navbar sticky='top' expand="lg" className="bg-light">
      <Container>
        <Nav.Link href="/">
          <Navbar.Brand><img src="/images/Logo.png" width="200" /></Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="a" >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="About">About Us</Nav.Link>
            {/* <Nav.Link href="/CourseList">Course</Nav.Link> */}
            <CourseDropdown />



            {/* <NavDropdown title="Courses" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">PG-DAC</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">PD-DBDA</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">MS-CIT</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link href="#">Gallery</Nav.Link>

            <Nav.Link href="placement">Placement</Nav.Link>
            <Nav.Link href="Contactus">Contact Us</Nav.Link>
            <NavDropdown title="Admin Panel" id="basic-nav-dropdown">
              <NavDropdown.Item href="StaffLogin">Staff Login</NavDropdown.Item>
              <NavDropdown.Item href="adminlogin">Admin Login</NavDropdown.Item>

            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;