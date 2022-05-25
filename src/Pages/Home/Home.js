import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Reviews from './Reviews';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummery></BusinessSummery>
            <Tools></Tools>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;