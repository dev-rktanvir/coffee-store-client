import React from 'react';
import HeroSection from '../components/HeroSection/HeroSection';
import Feature from '../components/feature/Feature';
import FollowUs from '../components/FollowUs/FollowUs';
import Products from '../components/products/Products';
import { useLoaderData } from 'react-router';

const featurePromiss = fetch('feature.json').then(res => res.json())
const Home = () => {
    const coffees = useLoaderData();
    return (
        <div>
            <HeroSection></HeroSection>
            <Feature featurePromiss={featurePromiss}></Feature>
            <Products coffees={coffees}></Products>
            <FollowUs></FollowUs>
        </div>
    );
};

export default Home;