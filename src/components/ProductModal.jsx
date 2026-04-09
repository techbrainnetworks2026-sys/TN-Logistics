import React from 'react';

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-btn" onClick={onClose}>&times;</span>
        <h2>{product.name}</h2>
        <img src={product.image} alt={product.alt} />
        <p>{product.details}</p>
      </div>
    </div>
  );
};

export default ProductModal;