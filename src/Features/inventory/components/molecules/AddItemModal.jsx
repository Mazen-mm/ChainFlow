import React, { useState } from 'react';

export default function AddItemModal({ show, onClose, onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    serial: '',
    category: '',
    stock: '',
    unit: '',
    price: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.serial || !form.stock || !form.price) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    if (onSubmit) onSubmit(form);
    setForm({ name: '', serial: '', stock: '', price: '', unit: '', category: ''});
    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.3)' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">Add New Inventory Item</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="mb-3">
                <label className="form-label">Item Name *</label>
                <input type="text" className="form-control" name="name" value={form.name} onChange={handleInputChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Serial *</label>
                <input type="text" className="form-control" name="serial" value={form.serial} onChange={handleInputChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Category</label>
                <input type="text" className="form-control" name="category" value={form.category} onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Stock *</label>
                <input type="number" className="form-control" name="stock" value={form.stock} onChange={handleInputChange} required min="0" />
              </div>
              <div className="mb-3">
                <label className="form-label">Unit</label>
                <input type="text" className="form-control" name="unit" value={form.unit} onChange={handleInputChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Price *</label>
                <input type="number" className="form-control" name="price" value={form.price} onChange={handleInputChange} required min="0" step="0.01" />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
              <button type="submit" className="btn btn-primary">Save Item</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
