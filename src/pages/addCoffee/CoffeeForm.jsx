import React from "react";
import Swal from "sweetalert2";

const CoffeeForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCoffee = Object.fromEntries(formData.entries())

        // send data to db
        fetch('http://localhost:5000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Good job!",
                        text: "Coffee Added Successfully!",
                        icon: "success",
                        background: "#F4F3F0",           
                        color: "#374151",                
                        iconColor: "#E3B577",            
                        confirmButtonColor: "#E3B577",  
                        confirmButtonText: "Cool!",
                        timer: 3000,
                    });
                }
            })
    }
    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
                <label className="block text-[#374151] font-medium mb-2">Name</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter coffee name"
                    className="w-full bg-white border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
            </div>

            {/* Chef */}
            <div>
                <label className="block text-[#374151] font-medium mb-2">Chef</label>
                <input
                    type="text"
                    name="chef"
                    placeholder="Enter coffee chef"
                    className="w-full bg-white border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
            </div>

            {/* Supplier */}
            <div>
                <label className="block text-[#374151] font-medium mb-2">Supplier</label>
                <input
                    type="text"
                    name="supplier"
                    placeholder="Enter coffee supplier"
                    className="w-full bg-white border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
            </div>

            {/* Taste */}
            <div>
                <label className="block text-[#374151] font-medium mb-2">Taste</label>
                <input
                    type="text"
                    name="taste"
                    placeholder="Enter coffee taste"
                    className="w-full bg-white border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
            </div>

            {/* Category */}
            <div>
                <label className="block text-[#374151] font-medium mb-2">Category</label>
                <input
                    type="text"
                    name="category"
                    placeholder="Enter coffee category"
                    className="w-full bg-white border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
            </div>

            {/* Details */}
            <div>
                <label className="block text-[#374151] font-medium mb-2">Details</label>
                <input
                    type="text"
                    name="details"
                    placeholder="Enter coffee details"
                    className="w-full bg-white border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
            </div>

            {/* Photo */}
            <div>
                <label className="block text-[#374151] font-medium mb-2">Photo</label>
                <input
                    type="url"
                    name="photo"
                    placeholder="Enter photo URL"
                    className="w-full bg-white border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
            </div>

            {/* Price */}
            <div>
                <label className="block text-[#374151] font-medium mb-2">Price</label>
                <input
                    type="number"
                    name="price"
                    placeholder="Enter coffee price"
                    className="w-full bg-white border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
            </div>

            {/* Full Width Button */}
            <div className="col-span-1 md:col-span-2">
                <button
                    type="submit"
                    className="w-full bg-[#E3B577] hover:bg-yellow-600 text-[#242222] font-semibold text-lg py-3 rounded-lg transition"
                >
                    Add Coffee
                </button>
            </div>
        </form>
    );
};

export default CoffeeForm;
