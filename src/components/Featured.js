import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import slideData from '../data/slideData';

const Featured = () => {
  const [rightCurrentSlide, setRightCurrentSlide] = useState(0);
  const totalSlides = slideData.length;

  const goToRightPrevSlide = () => {
    setRightCurrentSlide(
      (prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides
    );
  };

  const goToRightNextSlide = () => {
    setRightCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
  };

  return (
    <div className="my-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Section (Slogan) */}
      <div className="flex items-center justify-center max-w-[500px] mb-4 lg:mb-0 mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Elevate Your Space with Stunning Tiles and Hardwood Flooring
          </h2>
          <p className="text-sm text-gray-600">
            Discover a world of possibilities as you explore our diverse range
            of tiles, slabs, and hardwood flooring options. Whether you're
            looking to revamp your kitchen, bathroom, or entire living space,
            our curated selection offers something for every taste and design
            vision.
          </p>
        </div>
      </div>

      {/* Right Section (Slide Show) */}
      <div className="relative border border-black max-w-[800px] w-full overflow-hidden mx-auto">
        <div className="flex items-center justify-center transition-opacity duration-500 relative h-[400px]">
          <Link
            to={`/products/${slideData[rightCurrentSlide].id}`}
            target="_blank" // Open link in a new tab
          >
            {/* Wrap only the image with a Link */}
            <img
              src={slideData[rightCurrentSlide].image}
              alt={`Right Slide ${rightCurrentSlide + 1}`}
              className="w-full h-full object-cover cursor-pointer"
            />
          </Link>

          {/* Left Arrow */}
          <button
            onClick={goToRightPrevSlide}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full cursor-pointer transition-colors duration-300 hover:bg-white hover:text-black"
          >
            &lt;
          </button>

          {/* Right Arrow */}
          <button
            onClick={goToRightNextSlide}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full cursor-pointer transition-colors duration-300 hover:bg-white hover:text-black"
          >
            &gt;
          </button>
        </div>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          {slideData.map((product, index) => (
            <div
              key={index}
              onClick={() => setRightCurrentSlide(index)}
              className={`w-3 h-3 mx-1 cursor-pointer rounded-full ${
                rightCurrentSlide === index ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
