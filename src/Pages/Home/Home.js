import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummery></BusinessSummery>
            <Tools></Tools>
        </div>
    );
};

export default Home;