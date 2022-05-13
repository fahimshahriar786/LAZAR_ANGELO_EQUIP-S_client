import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const AddItem = () => {
    const [user]=useAuthState(auth)

    const handleAddItem=(event)=>{
        event.preventDefault()
        const name =event.target.productName.value
        const price =event.target.price.value
        const quantity =event.target.quantity.value
        const img =event.target.img.value
        const email =event.target.email.value
        const description =event.target.description.value
        const supplier =event.target.supplierName.value
        
        const product ={name,price,email,quantity,img,description,supplier}
        console.log(product);

// backend post

        fetch('https://secure-oasis-08432.herokuapp.com/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
        .then(res => res.json())
        .then(data =>{
            console.log('success', data);
            alert('product added successfully');
            event.target.reset();
        })
    }
    return (
        <div className='container mx-auto  w-50  min-vh-100 '>
            <h1 className=' text-success fw-bold'> Add Inventory Collections</h1>
            <form onSubmit={handleAddItem} className='mt-4 '>
                    <input className='w-75 mb-2 d-block mx-auto' style={{ height: "40px" }} type='text' name="productName" placeholder='Product Name'></input>
    );
};

export default AddItem;