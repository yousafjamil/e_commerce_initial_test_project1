import React from 'react';

function ProductCard({ product }) {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg">
      <img 
        src={product.image} 
        alt={product.title} 
        className="h-28 w-full object-contain mb-2" 
      />
      <h3 className="font-bold">{product.title}</h3>
      <p className="text-lg">${product.price}</p>
      <p className="text-sm text-gray-500">{product.badge}</p>

    </div>
  );
}

export default ProductCard;