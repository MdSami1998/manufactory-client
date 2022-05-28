import React from 'react';
import Banner from './Banner';
import BusinessSummery from './BusinessSummery';
import Reviews from './Reviews';
import Subscribe from './Subscribe';
import TeamMembers from './TeamMembers';
import Tools from './Tools';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BusinessSummery></BusinessSummery>
            <Tools></Tools>
            <Reviews></Reviews>
            <TeamMembers></TeamMembers>
            <Subscribe></Subscribe>
        </div>
    );
};

export default Home;