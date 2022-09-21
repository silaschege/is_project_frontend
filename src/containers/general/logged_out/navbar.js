import Container from 'react-bootstrap/Container';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function LoggedOutNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">The_Seed</Navbar.Brand>
        
        <NavbarCollapse className="justify-content-center">
        <Nav.Link href="/about">About</Nav.Link>
        </NavbarCollapse>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="justify-content-end">
           
            <NavDropdown title="Register" id="basic-nav-dropdown">
              <NavDropdown.Item href="/farmerRegister">Farmer</NavDropdown.Item>
              <NavDropdown.Item href="/deliveryRegister">
                Delivery
              </NavDropdown.Item>
              <NavDropdown.Item href="/manufacturerRegister">Manufacturer</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/login">Login</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default LoggedOutNavbar;