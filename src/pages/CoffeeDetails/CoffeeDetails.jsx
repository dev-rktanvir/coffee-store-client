import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const { photo, name, chef, supplier, taste, category, details } = useLoaderData();

    return (
        <section
            className="bg-cover bg-center min-h-screen py-8 sm:py-12"
            style={{ backgroundImage: "url('11.png')" }}
        >
            {/* Back to home */}
            <div className="max-w-7xl mx-auto flex gap-2 sm:gap-3 items-center px-4 sm:px-6 py-6 sm:py-12 mt-6 sm:mt-12">
                <FaArrowLeft size={24} />
                <Link
                    to="/"
                    className="text-lg sm:text-2xl md:text-3xl text-[#374151] font-medium"
                >
                    Back to Home
                </Link>
            </div>

            {/* Content Box */}
            <div className="max-w-7xl mx-auto bg-[#F4F3F0] p-6 sm:p-8 md:p-12 rounded-xl shadow-lg mb-16 sm:mb-24">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-28 justify-center">

                    {/* Image */}
                    <div className="flex-shrink-0 w-full md:w-auto flex justify-center">
                        <img
                            className="md:h-[455px] rounded-lg"
                            src={photo}
                            alt={name}
                        />
                    </div>

                    {/* Text Content */}
                    <div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{name}</h2>
                        <div className="space-y-2 text-lg sm:text-xl text-[#374151]">
                            <p><span className="font-semibold">Chef:</span> {chef}</p>
                            <p><span className="font-semibold">Supplier:</span> {supplier}</p>
                            <p><span className="font-semibold">Taste:</span> {taste}</p>
                            <p><span className="font-semibold">Category:</span> {category}</p>
                            <p><span className="font-semibold">Details:</span> {details}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CoffeeDetails;
