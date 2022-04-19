import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';
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
        <Navbar className='main-nav sticky-top' expand="lg">
            <Container>
                <Navbar.Brand href="#home" >
                    <Image className='brand-logo' src={logo} alt="Brand" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav-menu ms-auto">
                    <NavLink className={({isActive}) => isActive? "active-link" : "link"} to='/'>Home</NavLink>
                    <NavLink className={({isActive}) => isActive? "active-link" : "link"} to='/about'>About</NavLink>
                    <NavLink className={({isActive}) => isActive? "active-link" : "link"} to='/services'>Services</NavLink>
                    <NavLink className={({isActive}) => isActive? "active-link" : "link"} to='/blogs'>Blogs</NavLink>
                    <NavLink className={({isActive}) => isActive? "active-link" : "link"} to='/faq'>Faqs</NavLink>
                    {
                        user ? 
                        <Button onClick={handleLogOut} className="btn user-control-btn logOut-btn">Log out</Button>
                        :
                        <Button className='btn user-control-btn login-btn'>
                            <NavLink className={({isActive}) => isActive? "active-link" : "link"} to='/login'>LogIn</NavLink>
                        </Button>
                        
                    }

                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;