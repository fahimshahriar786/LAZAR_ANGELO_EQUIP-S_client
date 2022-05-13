import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../Service/Service.css';

const ManageService = ({service,children,handleUserDelete}) => {
    const {_id, name, img, description, price} = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
        <img className='w-100' src={img} alt="" />
        <h2>{name}</h2>
        <p>Price: {price}</p>
        <p><small>{description}</small></p>
        <button onClick={() => navigateToServiceDetail(_id)} className='btn btn-warning rounded-pill fw-bold'>Stock Update</button>
        <button onClick={() => handleUserDelete(_id)} className='btn btn-danger mx-2 rounded-pill fw-bold'>{children}</button>
        
    </div>

    );
};

export default ManageService;