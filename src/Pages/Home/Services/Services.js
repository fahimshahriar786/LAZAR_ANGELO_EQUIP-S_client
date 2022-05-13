import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('https://secure-oasis-08432.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    return (
        
    );
};

export default Services;