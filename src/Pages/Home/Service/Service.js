import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service,children}) => {
    const {_id, name, img, description, price} = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }
    return (
        

    );
};

export default Service;