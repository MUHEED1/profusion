"use client"
import { useState } from 'react';
import Link from 'next/link';
import Padding from './padding';
import Image from 'next/image';


const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="fixed top-0 py-4 w-full">
            <Padding>
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex gap-[25rem] items-center">
                        <img src="/logo.png" alt="Logo" className="h-8 mr-4" />
                        <ul className="flex">
                            <li className="mr-6">
                                <Link href="/">
                                    <div className="text-white hover:text-gray-300">Home</div>
                                </Link>
                            </li>
                            <li className="relative mr-6">
                                <div className="text-white cursor-pointer hover:text-gray-300" onClick={toggleDropdown}>Services</div>
                                {isDropdownOpen && (
                                    <div className="absolute top-full left-0 bg-white py-2 px-4 rounded shadow-md">
                                        <Link href="/bride">
                                            <div className="text-gray-800 hover:text-pink-600 cursor-pointer">Bride's Side</div>
                                        </Link>
                                        <Link href="/groom">
                                            <div className="text-gray-800 hover:text-pink-600 cursor-pointer">Groom's Side</div>
                                        </Link>
                                    </div>
                                )}
                            </li>
                            <li>
                                <Link href="/contact">
                                    <div className="text-white hover:text-gray-300">Contact</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <Link href="/login">
                            <div className="text-white mr-4 hover:text-gray-300">Login</div>
                        </Link>
                        <Link href="/signup">
                            <div className="text-white hover:text-gray-300">Sign Up</div>
                        </Link>
                    </div>
                </div>
            </Padding>
        </nav>
    );
};

export default Navbar;
