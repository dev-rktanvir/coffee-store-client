import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';
import UpdateForm from './UpdateForm';

const UpdateCoffee = () => {
    const coffeeData = useLoaderData();
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
                {/* Heading */}
                <h2 className="text-2xl sm:text-4xl md:text-5xl text-[#374151] font-bold text-center mb-4">
                    Update Existing Coffee Details
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 text-center mb-8 sm:mb-10 max-w-2xl md:max-w-4xl mx-auto px-2">
                    It is a long established fact that a reader will be distracted by the
                    readable content of a page when looking at its layout. The point of
                    using Lorem Ipsum is that it has a more-or-less normal distribution of
                    letters, as opposed to using Content here.
                </p>

                {/* Form Component */}
                <UpdateForm coffeeData={coffeeData}></UpdateForm>
            </div>
        </section>
    );
};

export default UpdateCoffee;