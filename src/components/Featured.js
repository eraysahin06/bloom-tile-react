import React, { useState, useEffect } from 'react';
import Nightlight from '../assets/product-images/nightlight.jpg';
import SmallLogo from '../assets/small-logo.png';
import { Link } from 'react-router-dom';

const Featured = () => {
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  function calculateTimeRemaining() {
    const endDate = new Date('2024-01-31T23:59:59'); // January 31, 2024, at 23:59:59
    const currentTime = new Date();
    const timeDifference = endDate - currentTime;

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );

      return { days, hours };
    } else {
      return { days: 0, hours: 0 };
    }
  }

  return (
    <div
      className="bg-cover bg-center p-6 flex flex-wrap items-center justify-center relative"
      style={{ backgroundImage: `url(${Nightlight})` }}
    >
      {/* Bloom Tile Logo */}
      <div className="w-full flex items-center justify-center">
        <img src={SmallLogo} alt="Bloom Tile Logo" className="w-40 h-auto" />
      </div>

      {/* Left Side - Timer and January Discount */}
      <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 md:mb-0 lg:pr-4 text-center text-white">
        <div>
          <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-2">
            January Discount is Here!
          </h2>
          <p className="text-gray-200 text-lg lg:text-xl xl:text-2xl">
            Start the new year with style!
          </p>
          <p className="text-red-500 font-bold text-lg lg:text-xl xl:text-2xl">
            Ends on 31st of January, 2024
          </p>

          {/* Timer */}
          <div className="text-lg lg:text-xl xl:text-2xl font-bold text-white mt-2">
            <span>Days: {timeRemaining.days}</span>
            <span className="mx-2">|</span>
            <span>Hours: {timeRemaining.hours}</span>
          </div>
        </div>

        {/* Button - Go to Products Page */}
        <Link to="/products">
          <button className="border border-black text-white px-4 py-2 mt-4 rounded-md transition duration-300 bg-black hover:bg-white hover:text-black">
            Explore Products
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Featured;
