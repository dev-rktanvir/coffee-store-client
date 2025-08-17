import React, { use } from 'react';
import FeatureCard from './FeatureCard';

const Feature = ({ featurePromiss }) => {
    const features = use(featurePromiss);

    return (
        <div className='bg-[#ECEAE3] py-14'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-center max-w-7xl mx-auto px-6'>
                {
                    features.map(feature => (
                        <FeatureCard key={feature.id} feature={feature} />
                    ))
                }
            </div>
        </div>
    );
};

export default Feature;
