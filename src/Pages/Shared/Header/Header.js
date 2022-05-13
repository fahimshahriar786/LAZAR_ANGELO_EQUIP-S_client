import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar,  } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png'

const Header = () => {
    const [user] = useAuthState(auth);
    const navigate =useNavigate()

    const handleSignOut = () =>{
        signOut(auth);
        navigate('/home')
    }

    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="warning" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={30} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto fw-bold">
                        <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link href="home#services">Services</Nav.Link>
                            
                            <Nav.Link as={Link} to="Blog">Blog</Nav.Link>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            
                            
                        </Nav>
                        <Nav className='fw-bold'>

                         {
                                user && 
                                <>
        
                                <Nav.Link as={Link} to="AddItem">Add Item</Nav.Link>
                                <Nav.Link as={Link} to="manage">Manage Products</Nav.Link>
                                <Nav.Link as={Link} to="myItem">My Item</Nav.Link>
                                </>
                         }
                            
                            {
                                user ?
                                    <button className='btn btn-link text-danger fw-bold text-decoration-none' onClick={handleSignOut}>SIGN OUT !!! </button>
                                :
                                <Nav.Link as={Link} to="login">
                                Login
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;