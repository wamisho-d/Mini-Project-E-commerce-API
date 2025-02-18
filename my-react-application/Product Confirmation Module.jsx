import React from 'react';

const ProductConfirmationModal = ({ action, productId, onConfirm, onCancel }) => {
  const handleConfirm = () => {
    onConfirm(productId);
  };

  return (
    <div className="modal">
      <h2>Confirm {action}</h2>
      <p>Are you sure you want to {action.toLowerCase()} this product?</p>
      <button onClick={handleConfirm}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  );
};

export default ProductConfirmationModal;
