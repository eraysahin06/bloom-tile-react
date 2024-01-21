import React from 'react';
import Featured from '../components/Featured';
import Services from '../components/Services';
import Showroom from '../components/Showroom';

const HomePage = () => {
  return (
    <div>
      <Featured />
      <Services />
      <hr className="my-8 border-t border-gray-300" />
      <Showroom />
    </div>
  );
};

export default HomePage;
