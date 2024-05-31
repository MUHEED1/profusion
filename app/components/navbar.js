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
        <nav className="fixed z-10 top-0 py-4 w-full bg-white/45">
            <Padding>
                <div className="container mx-auto flex items-center justify-between">
                    <div className="flex gap-[25rem] items-center">
                        {/* <Image src="/images/logo3.jpg" height={1000} width={1000} alt="Logo" className="h-8 w-8 mr-4" /> */}
                        <div className='font-scr text-'>ForeverJoined</div>
                        <ul className="flex gap-10">
                            <li className="mr-6">
                                <Link href="/">
                                    <div className="text-black hover:text-gray-700">Home</div>
                                </Link>
                            </li>
                            <li className="relative mr-6">
                                <div className="text-black cursor-pointer hover:text-gray-700" onClick={toggleDropdown}>Book Now</div>
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
                                    <div className="text-black hover:text-gray-700">Contact</div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex gap-10 items-center">
                        <Link href="/login">
                            <div className="text-black mr-4 hover:text-gray-300">Login</div>
                        </Link>
                        <Link href="/signup">
                            <div className="text-black hover:text-gray-300">Sign Up</div>
                        </Link>
                    </div>
                </div>
            </Padding>
        </nav>
    );
};

export default Navbar;
