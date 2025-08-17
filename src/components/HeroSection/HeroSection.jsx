import React from "react";
import { Link } from "react-router";

const HeroSection = () => {
    return (
        <section
            className="bg-cover bg-center h-[80vh] sm:h-[85vh] md:h-[90vh] flex items-center"
            style={{ backgroundImage: "url('3.png')" }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full">

                {/* Left Side (empty) */}
                <div></div>

                {/* Right Side (Content) */}
                <div className="text-white flex flex-col justify-center items-start space-y-4 sm:space-y-6 pt-[25%] md:pt-0">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug drop-shadow-lg">
                        Would you like a Cup of Delicious Coffee?
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed max-w-xl md:max-w-3xl drop-shadow-md">
                        It's coffee time - Sip & Savor - Relaxation in every sip!
                        Get the nostalgia back!! Your companion of every moment!!!
                        Enjoy the beautiful moments and make them memorable.
                    </p>

                    <Link
                        to="/about"
                        className="bg-[#E3B577] hover:bg-yellow-600 text-[#242222] text-base sm:text-lg md:text-xl font-semibold px-4 sm:px-5 py-2 sm:py-3 transition rounded"
                    >
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
