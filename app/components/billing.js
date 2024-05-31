"use client"
import { useState } from 'react';
import Padding from '../components/padding';

const Billing = () => {
    // Sample data for selected services and their prices
    const services = [
        { name: 'Catering', price: 2000 },
        { name: 'Dresses', price: 1500 },
        { name: 'Cars', price: 800 },
        { name: 'Invitation Cards', price: 300 },
        { name: 'Photography', price: 1200 }
    ];

    // Calculate the total price
    const totalPrice = services.reduce((total, service) => total + service.price, 0);

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-500 to-red-500 flex justify-center items-center">
            <Padding>
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                    <h1 className="text-3xl font-bold text-center mb-6 text-pink-600">Billing Summary</h1>
                    <div className="space-y-4">
                        {services.map((service, index) => (
                            <div key={index} className="flex justify-between text-gray-800">
                                <span>{service.name}</span>
                                <span>${service.price.toFixed(2)}</span>
                            </div>
                        ))}
                        <div className="flex justify-between text-gray-800 font-bold border-t pt-4 mt-4">
                            <span>Total</span>
                            <span>${totalPrice.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className="mt-6">
                        <button
                            className="w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-md hover:from-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                        >
                            Proceed to Payment
                        </button>
                    </div>
                </div>
            </Padding>
        </div>
    );
};

export default Billing;
