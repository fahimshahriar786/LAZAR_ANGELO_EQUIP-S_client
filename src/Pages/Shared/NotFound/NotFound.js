import React from 'react';
import notfound from '../../../images/notfound.jpg';

const NotFound = () => {
    return (
        <div>
        <h2 className='text-primary text-center'>Page Not Found !</h2>
        <img className='w-100' src={notfound} alt="" />
    </div>
    );
};

export default NotFound;