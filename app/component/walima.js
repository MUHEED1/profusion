'use client'
import Link from 'next/link';
import React, { useState } from 'react'

const Walima = () => {
    const [formData, setFormData] = useState({
        catering: 'none',
        invitation: 'none',
        venue: 'none',
        cars: 'none',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
      };
    
      return (
        <form onSubmit={handleSubmit} className="max-w-xl mt-[20rem] mx-auto p-6 bg-white rounded-lg shadow-md border-2 border-pink-200">
          <h1 className="text-3xl font-bold mb-6 text-center text-pink-600">Event Planning Services</h1>
          
          <div className="mb-4">
            <label htmlFor="catering" className="block text-xl font-medium text-gray-700">
              Catering Services:
            </label>
            <select
              id="catering"
              name="catering"
              value={formData.catering}
              onChange={handleChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-lg border-gray-300 focus:outline-none focus:ring-pink-500 text-black
               focus:border-pink-500 sm:text-sm rounded-md"
            >
              <option value="none">Select Catering Service</option>
              <option value="service1 "> Deccan Caters</option>
              <option value="service2">Atul Caters</option>
              <option value="service3"> Hyderabad caters</option>
              <option value="service3"> Hyderis events and caters</option>
              <option value="service3">al rayyan caters </option>
              <option value="service3"> kitchen caters</option>
              <option value="service3">Risers events and more </option>
              <option value="service3"> Iqbal catering</option>
              <option value="service3"> Shahi Caters</option>

            </select>
          </div>
          
    
          {/* <div className="mb-4">
            <label htmlFor="invitation" className="block text-sm font-medium text-gray-700">
              Invitation Cards:
            </label>
            <select
              id="invitation"
              name="invitation"
              value={formData.invitation}
              onChange={handleChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-lg text-black border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md"
            >
              <option value="none">Select Invitation Card</option>
              <option  value="card1"><Link href={"/"}> select from catlog</Link></option>
            
            </select>
          </div> */}
    
          <div className="mb-4">
            <label htmlFor="venue" className="block text-xl font-medium text-gray-700">
              Venue:
            </label>
            <select
              id="venue"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-lg text-black border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md"
            >
              <option value="none">Select Venue</option>
            

              <option value="venue1"> NKNR Gardens</option>
              <option value="venue2">Metro Classic Garden </option>
              <option value="venue3">Chowmahalla Palace</option>
              <option value="venue3">Central Court Convention Hall</option>
              <option value="venue3">Pvr Convention Centre</option>
              <option value="venue3">S V Convention</option>
              <option value="venue3">The Vintage Palace</option>
              <option value="venue3">Paradise Garden</option>
              <option value="venue3">Mughals Banquet Hall</option>
              <option value="venue3">Down Town Club Halls</option>
              <option value="venue3">City Convention Center</option>
              <option value="venue3">Nr Convention Hall</option>
              <option value="venue3">Hamara Family Garden Hall</option>
              <option value="venue3">SS Grand Convention</option>
              <option value="venue3">H F Convention</option>
              <option value="venue3">City Convention Center</option>
              <option value="venue3">Mallika Convention</option>
              <option value="venue3">Raj Mahal Function Hall</option>
              <option value="venue3">Red Rose Palace</option>
              <option value="venue3">Krystal Gardens</option>
              <option value="venue3">The Vintage Palace</option>
              <option value="venue3">JRC Conventions</option>
              <option value="venue3">Subham Convention Centre</option>
              <option value="venue3">  Kings Kohinoor Convention</option>
              <option value="venue3"> N Convention</option>



            </select>
          </div>
    
          <div className="mb-4">
            <label htmlFor="cars" className="block text-xl font-medium text-gray-700">
              Guests:
            </label>
            <select
              id="cars"
              name="cars"
              value={formData.cars}
              onChange={handleChange}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-lg text-black border-gray-300 focus:outline-none focus:ring-pink-500 focus:border-pink-500 sm:text-sm rounded-md"
            >
              <option value="none">No of Guests</option>
              <option value="car1">100 - 250</option>
              <option value="car2">250 - 500</option>
              <option value="car3">500 - 750</option>
              <option value="car3">750 - 1000</option>
              {/* <option value="car3">1000</option> */}

            </select>
          </div>
    
          <button type="submit" className="w-full py-2 px-4 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500">
            <Link href={"/suite"}>
            Submit
</Link>
          </button>
        </form>
      );
    };
    
      
  
export default Walima