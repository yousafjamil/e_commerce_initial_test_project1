

import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard';

function App() {
  const [productList, setProductList] = useState([]);
  const [sortType, setSortType] = useState('none');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(data => {
        setProductList(data);
        setLoading(false);
      })
      .catch(err => {
        console.log('Error fetching:', err);
        setLoading(false);
      });
  }, []);

  let displayedProducts = [...productList];
  if (sortType === 'low') {
    displayedProducts.sort((a, b) => a.price - b.price);
  } else if (sortType === 'high') {
    displayedProducts.sort((a, b) => b.price - a.price);
  }

  if (loading) {
    return    <div className="flex justify-center items-center text-3xl p-4 mt-">
 Loading products...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <select 
        className="mb-4 p-2 border rounded"
        onChange={e => setSortType(e.target.value)}
      >
        <option value="none">Sort by Price</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {displayedProducts.map(prod => (
          <ProductCard key={prod.id} product={prod} />
        ))}
      </div>
    </div>
  );
}

export default App;