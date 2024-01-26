import React from 'react';
import Featured from '../components/Featured';
import Services from '../components/Services';
import Showroom from '../components/Showroom';

const HomePage = () => {
  return (
    <div>
      <Services />
      <hr className="my-8 border-t border-gray-300" />
      <Featured />
      <hr className="border-t border-gray-300" />
      <Showroom />
    </div>
  );
};

export default HomePage;
