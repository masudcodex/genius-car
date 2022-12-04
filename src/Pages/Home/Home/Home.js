import React from 'react';
import About from '../../About/About';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import './Home.css';

const Home = () => {
    return (
        <div className='width mx-auto'>
            <Banner></Banner>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;