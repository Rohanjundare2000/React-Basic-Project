import React, { useState } from 'react';
 // Corrected relative path
import{getAllProduct,removeProduct, saveproduct} from '../service/ProductService'
export function ProductForm() {
  const [formData, setFormData] = useState({ name: '', price: '', quantity: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await saveproduct(formData)
      console.log('Product saved:', response);
      setFormData({ name: '', price: '', quantity: '' }); // Reset form after submission
    } catch (error) {
      console.error('Error saving product:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="quantity"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Product</button>
    </form>
  );
}

