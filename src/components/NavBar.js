import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import {useState, useEffect} from 'react';

import logo from '../assets/img/NicePng_vaporwave-grid-png_2071258.png';
import liIcon from '../assets/img/navIcon1.png';
import ghIcon from '../assets/img/navIcon3.png';
import resume from '../assets/img/pngtree-vector-resume-icon-png-image_932447.jpeg';

import { SiGithub, SiLinkedin } from 'react-icons/si';

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
        <Navbar expand="lg" className={scrolled ? "scrolled" : ''}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={logo} alt='Logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="m-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Contact</Nav.Link>
                </Nav>
                    <span className='navbar-text'>
                        <button className='vvd' onClick={() => console.log('connect')}>
                            <div className='social-icon'>
                                <a href='https://www.linkedin.com/in/corey-m-neal/' title='LinkedIn Profile' target="_blank"><SiLinkedin title='LinkedIn Profile' /></a>
                                <a href='https://github.com/BadMeme' title='GithubProfile' target="_blank"><SiGithub title='Github Profile' /></a>
                                <a title={'My Resume'} href='https://docs.google.com/document/d/1H7vXLqCiMOpfQBXIg2NAK6zu-jAKeEKw8-VJI8MPfeg/edit?usp=sharing'  target="_blank"><img src="https://www.freeiconspng.com/uploads/resume-icon-png-4.png" alt='Resume'/></a>
                            </div>
                            <span>{' contact '}</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;