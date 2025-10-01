import React, { useState } from 'react';

export default function CreateShipmentModal({ show, onClose, onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    origin: '',
    destination: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.origin || !form.destination) {
      setError('Please fill in all required fields.');
      return;
    }
    setError('');
    if (onSubmit) onSubmit(form);
    setForm({ name: '', origin: '', destination: '' });
    onClose();
  };

  if (!show) return null;

  return (
    <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ background: 'rgba(0,0,0,0.3)' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">Create Shipment</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              {error && <div className="alert alert-danger">{error}</div>}
              <div className="mb-3">
                <label className="form-label">Shipment Name *</label>
                <input type="text" className="form-control" name="name" value={form.name} onChange={handleInputChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Origin *</label>
                <input type="text" className="form-control" name="origin" value={form.origin} onChange={handleInputChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Destination *</label>
                <input type="text" className="form-control" name="destination" value={form.destination} onChange={handleInputChange} required />
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Close</button>
              <button type="submit" className="btn btn-primary">Create Shipment</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
