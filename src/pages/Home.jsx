import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import Feature from '../components/feature/Feature';
import FollowUs from '../components/FollowUs/FollowUs';

const featurePromiss = fetch('feature.json').then(res => res.json())
const Home = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <Feature featurePromiss={featurePromiss}></Feature>
            <FollowUs></FollowUs>
        </div>
    );
};

export default Home;