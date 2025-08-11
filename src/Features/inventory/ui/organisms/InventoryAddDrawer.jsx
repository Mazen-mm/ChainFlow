import React, { useState } from 'react';
import DrawerOverlay from './DrawerOverlay';

export default function InventoryAddDrawer({ open, onClose, onAdd }) {
  const [form, setForm] = useState({
    name: '',
    serial: '',
    category: '',
    unit: '',
    price: '',
    location: '',
    stock: '',
    status: 'In Stock',
  });

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleStockChange = (delta) => {
    setForm(f => ({ ...f, stock: Math.max(0, Number(f.stock) + delta) }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAdd(form);
  };

  if (!open) return null;

  return (
    <DrawerOverlay open={open} onClose={onClose} width={420}>
      <form onSubmit={handleSubmit}>
        <div style={{ color: '#7A7A7A', fontSize: 14, marginBottom: 16 }}>Item code <span style={{ float: 'right', color: '#222', fontWeight: 600 }}>ITM012</span></div>
        <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 16 }}>Item name</div>
        <input className="form-control mb-3" name="name" value={form.name} onChange={handleChange} required />
        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>Serial Number</div>
        <input className="form-control mb-3" name="serial" value={form.serial} onChange={handleChange} />
        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>Category</div>
        <input className="form-control mb-3" name="category" value={form.category} onChange={handleChange} />
        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>Unit</div>
        <input className="form-control mb-3" name="unit" value={form.unit} onChange={handleChange} />
        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>Unit Price</div>
        <input className="form-control mb-3" name="price" value={form.price} onChange={handleChange} />
        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>Location</div>
        <input className="form-control mb-3" name="location" value={form.location} onChange={handleChange} />
        <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>Available Stock</div>
        <div className="d-flex align-items-center mb-2">
          <button type="button" className="btn btn-outline-secondary btn-sm me-2" onClick={() => handleStockChange(-1)}>-</button>
          <input className="form-control text-center" style={{ width: 60 }} name="stock" value={form.stock} onChange={handleChange} />
          <button type="button" className="btn btn-outline-secondary btn-sm ms-2" onClick={() => handleStockChange(1)}>+</button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontSize: 13, color: '#aaa' }}>This is set automatically depending on the stock.</span>
          <span style={{ borderRadius: 12, padding: '2px 12px', background: form.status === 'In Stock' ? '#e6f9ed' : form.status === 'Low Stock' ? '#fffbe6' : '#ffeaea', color: form.status === 'In Stock' ? '#1bbf6b' : form.status === 'Low Stock' ? '#e6b800' : '#e03a3a', fontWeight: 600 }}>{form.status}</span>
        </div>
        <div className="d-flex justify-content-end mt-4">
          <button className="btn btn-primary me-2" type="submit">+ Add new item</button>
          <button className="btn btn-outline-secondary" type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </DrawerOverlay>
  );
}
