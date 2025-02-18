import React, { useState } from 'react';

const PlaceOrderForm = ({ onOrderPlaced }) => {
  const [customerName, setCustomerName] = useState('');
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      id: Date.now(), 
      product,
      quantity,
      orderDate: new Date().toISOString(),
    };
    
    onOrderPlaced(order);
    setCustomerName('');
    setProduct('');
    setQuantity(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Customer Name:</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Product:</label>
        <input
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Quantity:</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          min="1"
          required
        />
      </div>
      <button type="submit">Place Order</button>
    </form>
  );
};

export default PlaceOrderForm;
