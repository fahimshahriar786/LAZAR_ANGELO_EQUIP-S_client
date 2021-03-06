import React, { useEffect, useState } from 'react';
import ManageService from '../manageService/ManageService';

import './Manage.css';




const Manage = () => {


    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('https://secure-oasis-08432.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setServices(data));
    }, [])

    const handleUserDelete = id =>{
        const allow = window.confirm('You dare to delete !');
        if(allow){
            console.log('deleting user with id, ', id);
            const url = `https://secure-oasis-08432.herokuapp.com/product/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount > 0){
                    console.log('deleted');
                    const remaining = services.filter(user => user._id !== id);
                    setServices(remaining);
                }
            })
        }
    }


    return (
        <div>
            <div id="services" className='container'>
            <div className="row">
            <h1 className='text-dark fw-bold text-center my-4'> All Products </h1>
            <div className="services-container"></div>
            
            {
                services.map(service => <ManageService
                    key={service._id}
                    service={service}
                    handleUserDelete={handleUserDelete}
                >
                    Delete
                </ManageService>)
            }
            </div>
            </div>
        </div>
        
    );
};

export default Manage;