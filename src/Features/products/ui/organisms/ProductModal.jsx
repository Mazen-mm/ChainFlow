import React, { useState, useEffect } from 'react';

const initialProduct = {
  productName: '',
  sku: '',
  unitPrice: '',
  unit: '',
  category: '',
  isActive: true,
};

export default function ProductModal({
  show,
  onClose,
  onSubmit,
  product,
  loading,
}) {
  const [form, setForm] = useState(initialProduct);

  useEffect(() => {
    if (product) {
      setForm({ ...product, unitPrice: product.unitPrice || '' });
    } else {
      setForm(initialProduct);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.productName || !form.sku || !form.unitPrice || !form.unit || !form.category) {
      alert('Please fill in all fields');
      return;
    }
    onSubmit({
      ...form,
      unitPrice: Number(form.unitPrice),
    });
  };

  if (!show) return null;

  return (
    <div className="modal d-block m-0" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{product ? 'Edit' : 'Add'} Product</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input className="form-control" name="productName" value={form.productName} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">SKU</label>
                <input className="form-control" name="sku" value={form.sku} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Unit Price</label>
                <input type="number" className="form-control" name="unitPrice" value={form.unitPrice} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Unit</label>
                <input className="form-control" name="unit" value={form.unit} onChange={handleChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Category</label>
                <input className="form-control" name="category" value={form.category} onChange={handleChange} required />
              </div>
              <div className="form-check mb-3">
                <input className="form-check-input" type="checkbox" name="isActive" checked={form.isActive} onChange={handleChange} id="isActiveCheck" />
                <label className="form-check-label" htmlFor="isActiveCheck">Active</label>
              </div>
            </div>
            <div className="d-flex gap-3 p-3">
              <button type="button" className="btn btn-secondary flex-fill" onClick={onClose} disabled={loading}>Cancel</button>
              <button type="submit" className="btn btn-primary flex-fill" disabled={loading}>{loading ? 'Saving...' : (product ? 'Update' : 'Add')}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
