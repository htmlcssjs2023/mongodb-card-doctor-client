import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Service/Services';
import TimeSchedule from '../TimeSchedule/TimeSchedule';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <TimeSchedule></TimeSchedule>
            <Products></Products>
        </div>
    );
};

export default Home;