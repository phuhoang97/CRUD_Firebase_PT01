import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function LayoutNavbar() {
  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Navbar.Brand href='#home'>RA</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav>
              <Nav.Link>
                <Link to='/home'>Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/about'>About</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/Contact'>Contact</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Link to='/user/add'>
            <Button variant='outline-success' style={{ left: "20px" }}>
              Add User
            </Button>
          </Link>
        </Container>
      </Navbar>
    </div>
  );
}

export default LayoutNavbar;
