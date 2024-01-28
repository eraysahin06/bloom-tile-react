import React from 'react';
import mainImage from '../assets/bloom-tile-logo.png';

const TopSection = () => {
  return (
    <div className="bg-white text-white h-[500px] flex flex-col items-center justify-center">
      <img src={mainImage} alt="Bloom Tile Logo" className="w-[800px] h-auto" />
      <p className="text-5xl text-black text-center">
        Elevate Your Space with Bloom Tile – Where Quality Meets Style
      </p>
    </div>
  );
};

export default TopSection;
