import React from 'react';
import { FaGem } from 'react-icons/fa';
import showroomImage from '../assets/small-logo.png';

const Showroom = () => {
  return (
    <div className="bg-white p-8 mt-8 flex flex-wrap items-center">
      {/* Logo Section */}
      <div className="w-full mt-4 flex justify-center items-center">
        <img
          src={showroomImage}
          alt="Luxury and Style. Bloom Tile."
          className="w-40 h-40 rounded-md mb-4"
        />
        {/* Title */}
        <h2 className="w-full text-4xl font-bold mb-6">You're Invited!</h2>
      </div>

      {/* Text Section - Left Side */}
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 md:mb-0 lg:pr-4">
        {/* State-of-Art Showroom */}
        <div className="mb-6 bg-gray-200 p-4 rounded-md w-5/6">
          <h2 className="text-2xl font-bold mb-2 flex items-center">
            <span className="mr-2">
              <FaGem />
            </span>
            State-of-Art Showroom
          </h2>
          <p className="text-gray-700">
            Visit our 22,000 sqft. one-stop designer and builder showroom to
            explore the latest trends in premium tiles, slabs, antique mirrors,
            and superior flooring solutions.
          </p>
        </div>

        {/* You Won't Leave Empty-Handed */}
        <div className="bg-gray-200 p-4 rounded-md w-5/6">
          <h2 className="text-2xl font-bold mb-2 flex items-center">
            <span className="mr-2">
              <FaGem />
            </span>
            You Won't Leave Empty-Handed
          </h2>
          <p className="text-gray-700">
            Immerse yourself in a world of design possibilities. With our
            curated selection, you won't go home without finding the perfect
            addition for your space.
          </p>
        </div>
      </div>

      {/* Google Maps Integration - Right Side */}
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
        <div className="relative h-96 border border-black rounded-lg">
          {/* Insert your Google Maps Embed code here */}
          <iframe
            title="Bloom Tile Showroom"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2878.180069731112!2d-79.52350222375127!3d43.83136414088937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2f267541dcfd%3A0x3614298e6e8ea7fb!2sBLOOM%20TILE!5e0!3m2!1str!2sca!4v1705874704143!5m2!1str!2sca"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-full mt-6 p-4 border-gray-300">
        <h2 className="text-3xl font-bold mb-4">
          Explore <span className="text-yellow-600">Luxury and Style</span> in
          Person
        </h2>

        <button className="bg-black text-white px-4 py-4 rounded-md border border-white transition duration-300 hover:bg-white hover:text-black hover:border-black">
          Book an Appointment
        </button>
      </div>
    </div>
  );
};

export default Showroom;
