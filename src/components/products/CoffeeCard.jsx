import React from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router";

const CoffeeCard = ({ coffee }) => {
    const { _id, name, chef, price, photo } = coffee;

    return (
        <div className="bg-[#F4F3F0] rounded-xl shadow-md flex flex-col md:flex-row items-center p-8 gap-4 md:gap-6">

            {/* Left: Image */}
            <div className="flex-shrink-0">
                <img
                    src={photo}
                    alt={name}
                    className="w-full md:w-32 h-32 md:h-60 object-cover"
                />
            </div>

            {/* Middle: Text */}
            <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-[#374151]">Name: {name}</h2>
                <p className="text-[#6B7280] mt-1">Chef: {chef}</p>
                <p className="text-[#E3B577] font-semibold mt-2">Price: ${price}</p>
            </div>

            {/* Right: Action Buttons */}
            <div className="flex lg:flex-col gap-3 mt-3 md:mt-0">
                <Link to={`/coffee-details/${_id}`}>
                    <button
                        className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-full transition"
                    >
                        <FaEye />
                    </button>
                </Link>
                <button

                    className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-full transition"
                >
                    <FaEdit />
                </button>
                <button

                    className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full transition"
                >
                    <FaTrash />
                </button>
            </div>
        </div>
    );
};

export default CoffeeCard;
