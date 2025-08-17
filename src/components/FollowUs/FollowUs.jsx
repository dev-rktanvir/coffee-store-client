import React from 'react';
import image1 from '../../assets/cups/Rectangle 9.png';
import image2 from '../../assets/cups/Rectangle 10.png';
import image3 from '../../assets/cups/Rectangle 11.png';
import image4 from '../../assets/cups/Rectangle 12.png';
import image5 from '../../assets/cups/Rectangle 13.png';
import image6 from '../../assets/cups/Rectangle 14.png';
import image7 from '../../assets/cups/Rectangle 15.png';
import image8 from '../../assets/cups/Rectangle 16.png';

const FollowUs = () => {
    return (
        <div className="max-w-7xl mx-auto py-16 px-4">
            {/* Heading */}
            <h2 className="text-center text-xl sm:text-2xl font-medium text-[#331A15]">
                Follow Us Now
            </h2>
            <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#331A15] mb-10">
                Follow on Instagram
            </h2>

            {/* Image Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
                <img className="w-full h-auto object-cover rounded-lg" src={image1} alt="coffee1" />
                <img className="w-full h-auto object-cover rounded-lg" src={image2} alt="coffee2" />
                <img className="w-full h-auto object-cover rounded-lg" src={image3} alt="coffee3" />
                <img className="w-full h-auto object-cover rounded-lg" src={image4} alt="coffee4" />
                <img className="w-full h-auto object-cover rounded-lg" src={image5} alt="coffee5" />
                <img className="w-full h-auto object-cover rounded-lg" src={image6} alt="coffee6" />
                <img className="w-full h-auto object-cover rounded-lg" src={image7} alt="coffee7" />
                <img className="w-full h-auto object-cover rounded-lg" src={image8} alt="coffee8" />
            </div>
        </div>
    );
};

export default FollowUs;
