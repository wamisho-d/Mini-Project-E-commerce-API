import React, { useEffect, useState } from 'react';

const ManageProductStock = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const handleStockChange = (productId, newStock) => {
    fetch(`/api/products/${productId}/stock`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ stock: newStock }),
    })
      .then(response => response.json())
      .then(data => {
        setProducts(products.map(product => product.id === productId ? { ...product, stock: newStock } : product));
      })
      .catch(error => console.error('Error updating stock:', error));
  };

  return (
    <div>
      <h1>Manage Product Stock</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <p>{product.name} - Stock: {product.stock}</p>
            <button onClick={() => handleStockChange(product.id, product.stock + 1)}>Increase Stock</button>
            <button onClick={() => handleStockChange(product.id, product.stock - 1)}>Decrease Stock</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageProductStock;
