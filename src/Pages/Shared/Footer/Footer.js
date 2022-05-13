import React from 'react';
import { Button, Form } from 'react-bootstrap';
import logo from '../../../images/logo.png'
import './Footer.css'
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className=' text-center mt-5 '>

            <div className='d-flex justify-content-around  bg-dark py-5'>
                <div className=' text-white '>
                    <h3>
                        LET'S STAY IN TOUCH !
                    </h3>
                    <Form.Control className=' my-2 ' type="email" placeholder="Enter email" />

                    <Button className='bg-warning   text-dark rounded-pill fw-bold ' variant="primary" type="submit">
                        SUBSCRIBE
                    </Button>

                </div>
                <div className=' text-white'>
                <img height={30} src={logo} alt="" />
                <p>
                CONTACT US 
<p> +(0) 1934 257 061 </p>

 <p> info@kustomkitgymequipment.com</p>

<p>Unit 16, Suprema Industrial Estate, Bridgwater, TA7 9BF, UK</p>
                </p>
                    <p><small className='my-2 '> All Rights Reservd copyright © {year} </small></p>
                </div>
            </div>

        </footer>
    );
};

export default Footer;