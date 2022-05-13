import React from 'react';
import Banner from '../Banner/Banner';
import Moto from '../Moto/Moto';

import Services from '../Services/Services';
import Suppliers from '../Suppliers/Suppliers';

const Home = () => {
    return (
        <>
           
            <Banner></Banner>
            <Services></Services>
            <Moto></Moto>
            <Suppliers></Suppliers>

        </>
    );
};

export default Home;