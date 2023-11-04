// import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { FaHeartbeat } from "react-icons/fa"


export default function NavigationBar() {
  return (
    <Navbar expand="lg" className="body-tertiary">
      
        <Navbar.Brand href="#home"><h2 className='logos'> < FaHeartbeat/> VEGAN-GLORY </h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me">
            <a className='Links' href="/">HOME</a>
            <a className='Links' href="/ ">ORDER</a>
            <a className='Links' href="#testimonial ">TESTIMONIES</a>
            <a className='Links' href="#mealdisplay ">OUR MEALS</a>
            <a className='Links' href="/contact ">CONTACT</a>
          </Nav>
        </Navbar.Collapse>
    
    </Navbar>
  );
}


