import React, { useEffect, useState } from 'react';

const RestockProducts = ({ threshold }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    products.forEach(product => {
      if (product.stock < threshold) {
        fetch(`/api/products/${product.id}/restock`, {
          method: 'POST',
        })
          .then(response => response.json())
          .then(data => {
            console.log(`Product ${product.id} restocked`);
          })
          .catch(error => console.error(`Error restocking product ${product.id}:`, error));
      }
    });
  }, [products, threshold]);

  return (
    <div>
      <h1>Restock Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <p>{product.name} - Stock: {product.stock}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestockProducts;
