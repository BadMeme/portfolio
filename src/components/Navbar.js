import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import {useState, useEffect} from 'react';

// import logo from '..assets/img/logo/svg';
// import navIcon1 from '..assets/img/logo/svg';
// import navIcon2 from '..assets/img/logo/svg';
// import navIcon3 from '..assets/img/logo/svg';


const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false);

    useEffect (()=> {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar bg="light" expand="lg" className={scrolled ? "scrolled" : ''}>
            <Container>
                <Navbar.Brand href="#home">
                    {/* <img src='https://cdn2.vectorstock.com/i/1000x1000/80/56/chain-link-icon-on-transparent-background-vector-35608056.jpg' alt='Logo' /> */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <span className='navbar-toggler-icon'></span>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href='#'><img src='https://cdn2.vectorstock.com/i/1000x1000/80/56/chain-link-icon-on-transparent-background-vector-35608056.jpg' alt=''/>**PH**</a>
                            <a href='#'><img src='https://cdn2.vectorstock.com/i/1000x1000/80/56/chain-link-icon-on-transparent-background-vector-35608056.jpg' alt=''/>**PH**</a>
                            <a href='#'><img src='https://cdn2.vectorstock.com/i/1000x1000/80/56/chain-link-icon-on-transparent-background-vector-35608056.jpg' alt=''/>**PH**</a>
                        </div>
                        <button className='vvd' onclick={() => console.log('connect')}><span>**lets connect**</span></button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;