import React from "react";
import CoffeeCard from "./CoffeeCard";
import { Link } from "react-router";

const Products = ({ coffees }) => {
    return (
        <section
            className="bg-cover bg-center py-16"
            style={{ backgroundImage: "url('productbg.png')" }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p className="text-[#E3B577] text-lg text-center mb-2">--- Sip & Savor ---</p>
                <h2 className="text-4xl md:text-5xl text-center text-[#374151] font-bold mb-6">
                    Our Popular Products
                </h2>
                <div className="text-center mb-10">
                    <Link to={'/add-coffee'}>
                        <button className="bg-[#E3B577] hover:bg-yellow-600 text-[#242222] font-semibold text-lg py-2 px-6 rounded-lg transition">
                            Add Coffee
                        </button>
                    </Link>
                </div>

                {/* Coffee Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {coffees.map((coffee) => (
                        <CoffeeCard key={coffee._id} coffee={coffee} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
