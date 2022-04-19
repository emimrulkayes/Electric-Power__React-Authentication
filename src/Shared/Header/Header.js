import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogOut = () => {
        signOut(auth);
    }
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home" >
                        <Image className='brand-logo' src={logo} alt="Brand" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="nav-menu ms-auto">
                        <NavLink to='/'>Home</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to='/services'>Services</NavLink>
                        <NavLink to='/blogs'>Blogs</NavLink>
                        <NavLink to='/faq'>Faqs</NavLink>
                        {
                            user ? 
                            <button onClick={handleLogOut} >Log out</button>
                            :
                            <NavLink to='/login'>LogIn</NavLink>
                        }

                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;