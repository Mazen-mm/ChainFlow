import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct } from '../../../products/slice';

export default function QuickAddProduct({ onSuccess, onCancel }) {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    productName: '',
    sku: '',
    unit: '',
    price: '',
    category: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await dispatch(createProduct(form)).unwrap();
      onSuccess(res.data.product);
    } catch (err) {
      setError(err.message || 'Failed to add product');
    }
    setLoading(false);
  };

  return (
    <div className="quick-add-product-modal">
      <h3>Add New Product</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Product Name</label>
          <input name="productName" value={form.productName} onChange={handleChange} required />
        </div>
        <div>
          <label>SKU</label>
          <input name="sku" value={form.sku} onChange={handleChange} required />
        </div>
        <div>
          <label>Unit</label>
          <input name="unit" value={form.unit} onChange={handleChange} required />
        </div>
        <div>
          <label>Price</label>
          <input name="price" value={form.price} onChange={handleChange} required />
        </div>
        <div>
          <label>Category</label>
          <input name="category" value={form.category} onChange={handleChange} />
        </div>
        {error && <div className="text-danger">{error}</div>}
        <div className="modal-actions">
          <button type="submit" disabled={loading}>{loading ? 'Adding...' : 'Add Product'}</button>
          <button type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
