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
            
        </>
    );
};

export default Header;