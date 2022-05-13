import React from 'react';

const MyItemsCollab = ({myproduct,handleUserDelete}) => {
    const { name, _id, price, img, description, quantity, supplier } = myproduct
    return (
        <div className='col gy-4 gx-2 shadow rounded p-3 mb-2 bg-body'>
        <div className="card shadow rounded mb-2 bg-body">
            <img src={img} style={{ "height": "300px" }} className=" w-100 card-img-top" alt="..." />
    );
};

export default MyItemsCollab;