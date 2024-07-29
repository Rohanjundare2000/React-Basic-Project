import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import {BASE_ROUTE,REGISTRATION_ROUTE,STUDENTS_LIST_ROUTE} from "../../constant/AppRoute"

export function Navigationbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to={BASE_ROUTE}>
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to={REGISTRATION_ROUTE}>
              <Nav.Link>Register Student</Nav.Link>
            </LinkContainer>
            <LinkContainer to={STUDENTS_LIST_ROUTE}>
              <Nav.Link> StudentList</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
