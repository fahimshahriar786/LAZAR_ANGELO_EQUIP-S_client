import React from 'react';
import banner from '../../../images/banner/banner3.jpg'

const Moto = () => {
    return (
        <div className='d-flex container my-4 justify-content-between align-items-center'>
            <div><img src={banner} className='rounded' alt="" /></div>
            <div className='ms-2'>
               <h4> To keep the body in good health is a duty… otherwise we shall not be able to keep our mind strong and clear.</h4>
            </div>
        </div>
    );
};

export default Moto;