import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import logo from "../../assets/logo1.png";

const Footer = () => {
    return (
        <footer
            className="bg-cover bg-center text-white py-12 px-4 sm:px-6 md:px-12"
            style={{ backgroundImage: "url('13.jpg')" }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto pt-20 md:pt-28">

                {/* ---------- LEFT SIDE ---------- */}
                <div>
                    {/* Logo + Brand */}
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                        <img src={logo} alt="Coffee Logo" className="h-14 w-14 sm:h-16 sm:w-16 object-contain" />
                        <h2 className="text-3xl sm:text-4xl font-medium text-[#331A15]">Espresso Emporium</h2>
                    </div>

                    {/* Description */}
                    <p className="mt-4 text-[#331A15] text-base sm:text-lg leading-relaxed">
                        Always ready to be your friend. Come & Contact with us to share your memorable
                        moments, to share with your best companion.
                    </p>

                    {/* Social Icons */}
                    <div className="flex gap-4 mt-6">
                        <a href="#" className="p-2 bg-[#331A15] rounded-full">
                            <FaFacebookF size={24} />
                        </a>
                        <a href="#" className="p-2 bg-[#331A15] rounded-full">
                            <FaTwitter size={24} />
                        </a>
                        <a href="#" className="p-2 bg-[#331A15] rounded-full">
                            <FaInstagram size={24} />
                        </a>
                        <a href="#" className="p-2 bg-[#331A15] rounded-full">
                            <FaLinkedinIn size={24} />
                        </a>
                    </div>

                    {/* Contact Info */}
                    <h3 className="mt-8 text-2xl sm:text-3xl md:text-4xl text-[#331A15] font-semibold">Get in Touch</h3>
                    <ul className="mt-4 space-y-3 text-[#331A15] text-base sm:text-lg">
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt /> +880 1234 567 890
                        </li>
                        <li className="flex items-center gap-2">
                            <HiOutlineMail /> contact@espresso.com
                        </li>
                        <li className="flex items-center gap-2">
                            <IoLocationSharp /> 123 Coffee Street, Dhaka, Bangladesh
                        </li>
                    </ul>
                </div>

                {/* ---------- RIGHT SIDE ---------- */}
                <div>
                    <h3 className="text-3xl sm:text-4xl text-[#331A15] font-bold mb-6 mt-8 md:mt-16">Connect with Us</h3>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 rounded-lg bg-white border border-white/30 placeholder-[#331A15] focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 rounded-lg bg-white border border-white/30 placeholder-[#331A15] focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows="4"
                            className="w-full p-3 rounded-lg bg-white border border-white/30 placeholder-[#331A15] focus:outline-none focus:ring-2 focus:ring-yellow-400 text-black"
                        ></textarea>
                        <button
                            type="submit"
                            className="border border-[#331A15] rounded-full text-black font-semibold py-2 px-6 hover:bg-[#331A15] hover:text-white transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
