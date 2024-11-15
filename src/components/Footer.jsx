import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {


  
    return(
        <footer id="contact"className="bg-[#222] text-white mx-auto max-w-[1440px] px-6 lg:px-12
        py-12 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="flex flex-col items-center md:items-center">
                    <Link  to={"/"} className="text-[24px] font-[700] leading-[120%] mb-4">
                        <h3>Food<span className="text-red-600">Stack</span></h3>
                    </Link>
                    <p className="text-center md:text-left">Discover culinary excellence with FoodStock, where flavors meet innovation.
                         Explore our passion for food through exceptional taste and quality</p>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <h4 className="text-[20px] font-[700] mb-4">Quick Links</h4>
                    <ul className="space-y-2 regular-15 text-gray-30">
                        <li>
                            <Link to={"/"} className="hover:text-secondary">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"} className="hover:text-secondary">
                                Menu
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"} className="hover:text-secondary">
                                Foods
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"} className="hover:text-secondary">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <h4 className="text-[20px] font-[700] mb-4">Quick Links</h4>
                    <ul className="space-y-2 regular-15 text-gray-30">
                        <li>
                            <Link to={"/"} className="hover:text-secondary">
                                Terms of Service
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"} className="hover:text-secondary">
                                Privacy Policy
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"} className="hover:text-secondary">
                                Shipping Policy
                            </Link>
                        </li>
                        <li>
                            <Link to={"/"} className="hover:text-secondary">
                                Return Policy
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex flex-col items-center md:items-start">
                    <h4 className="text-[20px] font-[700] mb-4">Contact Us</h4>
                   <p>
                    Email:
                    <a href="mail:ajith@foodstock.com" className="hover:text-secondary">ajith@foodstock.com</a>
                   </p>
                   <p>
                    Phone:
                    <a href="tel:+1234567890" className="text-secondary">+1234567890</a>
                   </p>
                   <p>Address:123 K.K.Nager Chennai - 78 </p>
                </div>
            </div>
            <div className="flex flex-col  items-center mt-8">
                <hr className="h-[1px] w-full max-w-screen-md my-4"/>
                <p className="text-center text-sm">&copy; 2024 sep,20 FoodStack | All right</p>
            </div>
        </footer>
    );
};
export default Footer;