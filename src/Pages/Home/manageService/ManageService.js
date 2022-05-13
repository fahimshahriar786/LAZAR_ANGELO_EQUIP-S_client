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
      

    );
};

export default ManageService;