// Onestop.js

import React from 'react';
import onestopImage from '../assets/small-logo.png';

const Onestop = () => {
  return (
    <div className="flex items-center p-6 py-[100px] justify-center my-8">
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
        <h2 className="text-5xl text-black max-w-[700px] mb-4">
          Your Vision, Our Expertise
        </h2>
      </div>
    </div>
  );
};

export default Onestop;
