import React, { useState } from "react";
import CoffeeCard from "./CoffeeCard";
import { Link } from "react-router";
import Swal from "sweetalert2";

const Products = ({ allCoffees }) => {
    const [coffees, setCoffees] = useState(allCoffees);
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#331A15",
            cancelButtonColor: "#E3B577",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffees/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success",
                                timer: 1500,
                                confirmButtonColor: "#331A15"
                            });
                            const remainingCoffee = coffees.filter(coffee => (coffee._id !== id));
                            setCoffees(remainingCoffee);
                        }
                    })
            }
        });
    }
    return (
        <section
            className="bg-contain bg-no-repeat bg-center py-16"
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
                        <CoffeeCard key={coffee._id} coffee={coffee} handleDelete={handleDelete} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
