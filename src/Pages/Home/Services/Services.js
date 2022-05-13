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
        <div id="services" className='container'>
            <div className="row">
            <h1 className='text-danger fw-bold text-center my-5'> Inventory Products </h1>
            <div className="services-container">
            {
                services.slice(0,6).map(service => <Service
                    key={service._id}
                    service={service}
                >
                </Service>)
            }
            </div>
            </div>
        </div>
    );
};

export default Services;