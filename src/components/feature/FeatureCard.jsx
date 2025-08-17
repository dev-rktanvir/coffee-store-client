import React from 'react';

const FeatureCard = ({ feature }) => {
    const { img, title, description } = feature;
    return (
        <div className="flex flex-col px-4">
            {/* Image */}
            <img
                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
                src={img}
                alt={title}
            />

            {/* Title */}
            <h2 className="text-[#331A15] text-2xl sm:text-3xl md:text-4xl mt-4 mb-2">
                {title}
            </h2>

            {/* Description */}
            <p className="text-[#1B1A1A] text-base leading-relaxed max-w-xs">
                {description}
            </p>
        </div>
    );
};

export default FeatureCard;
