"use client"
import { useState } from 'react';
import Padding from '../components/padding';

const Payment = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [cardHolder, setCardHolder] = useState('');

    const handlePayment = (e) => {
        e.preventDefault();
        // Add payment handling logic here
        alert('Payment submitted successfully!');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-500 to-red-500 flex justify-center items-center">
            <Padding>
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                    <h1 className="text-3xl font-bold text-center mb-6 text-pink-600">Payment Details</h1>
                    <form onSubmit={handlePayment} className="space-y-6">
                        <div>
                            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700">Card Number:</label>
                            <input
                                type="text"
                                id="cardNumber"
                                value={cardNumber}
                                onChange={(e) => setCardNumber(e.target.value)}
                                className="mt-1 block w-full p-3 text-gray-800 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                                placeholder="1234 5678 9012 3456"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700">Expiry Date:</label>
                            <input
                                type="text"
                                id="expiryDate"
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                                className="mt-1 block w-full p-3 text-gray-800 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                                placeholder="MM/YY"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700">CVV:</label>
                            <input
                                type="text"
                                id="cvv"
                                value={cvv}
                                onChange={(e) => setCvv(e.target.value)}
                                className="mt-1 block w-full p-3 text-gray-800 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                                placeholder="123"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="cardHolder" className="block text-sm font-medium text-gray-700">Card Holder Name:</label>
                            <input
                                type="text"
                                id="cardHolder"
                                value={cardHolder}
                                onChange={(e) => setCardHolder(e.target.value)}
                                className="mt-1 block w-full p-3 text-gray-800 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500"
                                placeholder="John Doe"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 px-4 bg-gradient-to-r from-pink-500 to-red-500 text-white font-semibold rounded-md hover:from-pink-600 hover:to-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                        >
                            Submit Payment
                        </button>
                    </form>
                </div>
            </Padding>
        </div>
    );
};

export default Payment;
