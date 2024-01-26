// Onestop.js

import React from 'react';
import onestopImage from '../assets/small-logo.png'; // Replace with the actual path to your image

const Onestop = () => {
  return (
    <div className="flex items-center p-6 justify-center my-8">
      <div className="mr-4">
        <img
          src={onestopImage}
          alt="Onestop Showroom"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <div>
        <h2 className="text-5xl max-w-[700px] font-bold text-yellow-600 mb-4">
          One-Stop Designer and Builder Showroom
        </h2>
        <p className="text-lg text-gray-700 max-w-[700px]">
          Welcome to our one-stop designer and builder showroom. Explore a
          curated selection of top-notch products and services that cater to all
          your design and construction needs. From exquisite tiles and flooring
          options to expert advice on creating your dream space, we offer
          everything you need under one roof. Our team of professionals is
          dedicated to providing you with a seamless and enjoyable experience as
          you embark on your design and construction journey.
        </p>
      </div>
    </div>
  );
};

export default Onestop;
