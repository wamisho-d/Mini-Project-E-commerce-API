import React from 'react';

const DeleteProduct = ({ productId }) => {
  const handleDelete = () => {
    fetch(`/api/products/${productId}`, {
      method: 'DELETE',
    })
      .then(response => response.json())
      .then(data => {
        console.log('Product deleted:', data);
      })
      .catch(error => console.error('Error deleting product:', error));
  };

  return (
    <button onClick={handleDelete}>Delete Product</button>
  );
};

export default DeleteProduct;
