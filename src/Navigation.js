import './Navigation.styles.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = ()=>{
  return (
    <Navbar expand="lg" className="navigation bg-white">
      <Container>
        <Navbar.Brand href="#home"><h3 class="heading-dark">Midhun Thomas</h3></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav collapsed d-flex d-lg-none flex-column justify-content-around"  >
          <span className='toggler-icon top-bar'></span>
          <span className='toggler-icon bottom-bar'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav className="d-flex flex-lg-row flex-md-column mjt-nav-wrapper">
            <Nav.Link href="#home" className='p-lg-4 text-dark'>Home</Nav.Link>
            <Nav.Link href="https://www.instagram.com/midhunjohnthomas/" className='p-lg-4 text-dark'>Photography</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/midhunthomas/" className='p-lg-4 text-dark'>About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;