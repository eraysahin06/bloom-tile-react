import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';
import productsData from '../data/products';

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    ...new Set(productsData.map((product) => product.category)),
  ];

  const filteredProducts =
    selectedCategory === 'All'
      ? productsData
      : productsData.filter((product) => product.category === selectedCategory);

  return (
    <div className="container mx-auto mt-8 mb-10">
      <h2 className="text-4xl font-bold mb-8">
        {selectedCategory === 'All' ? 'All Products' : `${selectedCategory}`}
      </h2>

      {/* Category Filter Section */}
      <div className="flex flex-wrap justify-center mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`mx-2 my-2 px-4 py-2 rounded ${
              selectedCategory === category
                ? 'bg-yellow-600 text-white'
                : 'bg-gray-300 text-black'
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products Flex Container */}
      <div className="flex flex-wrap justify-center gap-8">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            singleProductStyle={
              filteredProducts.length === 1 ? 'flex-grow-0' : 'flex-grow'
            }
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
