import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
  } from "react-router-dom";
// import NavDropdown from 'react-bootstrap/NavDropdown';

import {useState, useEffect} from 'react';

import logo from '../assets/img/NicePng_vaporwave-grid-png_2071258.png';
import { SiGithub, SiLinkedin } from 'react-icons/si';
import { BsFillFileRuledFill } from 'react-icons/bs';

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
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled" : ''}>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={ logo } alt='Logo' />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <span className='navbar-toggler-icon'></span>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="m-auto">
                            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                        </Nav>
                        <span className='navbar-text'>
                                <HashLink to='#connect'>
                                    <button className="vvd">
                                        <div className='social-icon'>
                                            <a href='https://www.linkedin.com/in/corey-m-neal/' title='LinkedIn Profile' target="_blank"><SiLinkedin title='LinkedIn Profile' /></a>
                                            <a href='https://github.com/BadMeme' title='GithubProfile' target="_blank"><SiGithub title='Github Profile' /></a>
                                            <a title={'My Resume'} href='https://docs.google.com/document/d/1H7vXLqCiMOpfQBXIg2NAK6zu-jAKeEKw8-VJI8MPfeg/edit?usp=sharing'  target="_blank"><BsFillFileRuledFill title='Resume' /></a>
                                        </div>
                                    <span>Connect</span>
                                    </button>
                                </HashLink>
                        </span>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Router>
    );
}

export default NavBar;