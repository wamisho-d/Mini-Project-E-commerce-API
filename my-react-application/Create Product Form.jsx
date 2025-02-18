import React, { useState } from 'react';

const CreateProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const product = { name, price };

    fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Product created:', data);
        setName('');
        setPrice('');
      })
      .catch(error => console.error('Error creating product:', error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Product</h1>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Price:
        <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
      </label>
      <br />
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateProductForm;
