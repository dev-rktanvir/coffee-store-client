import React from "react";
import { Link } from "react-router";
import logo from "../../assets/logo1.png";

const Navbar = () => {
    return (
        <header
            className="fixed top-0 left-0 w-full z-50 bg-cover bg-center h-20 flex items-center justify-center shadow-md"
            style={{ backgroundImage: "url('15.jpg')" }}
        >
            {/* Parent Container */}
            <div className="flex items-center gap-4 md:gap-4 justify-center w-11/12 max-w-7xl">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src={logo}
                        alt="Coffee Logo"
                        className="h-12 w-12 md:h-[80px] md:w-[75px] object-contain"
                    />
                </Link>

                {/* Brand Name */}
                <h1 className="text-3xl sm:text-4xl md:text-6xl text-white tracking-wide text-center md:text-left">
                    Espresso Emporium
                </h1>
            </div>
        </header>
    );
};

export default Navbar;
