import React from 'react';
import DrawerOverlay from './DrawerOverlay';

export default function InventoryViewDrawer({ open, onClose, item }) {
  if (!item) return null;
  return (
    <DrawerOverlay open={open} onClose={onClose} width={420}>
      <div style={{ color: '#7A7A7A', fontSize: 14, marginBottom: 16 }}>Item code <span style={{ float: 'right', color: '#222', fontWeight: 600 }}>{item.code || item.product?.sku}</span></div>
      <div style={{ fontWeight: 600, fontSize: 18, marginBottom: 16 }}>Item name</div>
      <input className="form-control mb-3" value={item.name || item.product?.productName || ''} disabled />
      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>Serial Number</div>
      <input className="form-control mb-3" value={item.serial || ''} disabled />
      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>Category</div>
      <input className="form-control mb-3" value={item.category || item.product?.category || ''} disabled />
      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>Unit</div>
      <input className="form-control mb-3" value={item.unit || item.product?.unit || ''} disabled />
      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>Unit Price</div>
      <input className="form-control mb-3" value={item.price || item.product?.price || ''} disabled />
      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>Location</div>
      <input className="form-control mb-3" value={item.location || item.location?.locationName || ''} disabled />
      <div style={{ fontWeight: 600, fontSize: 16, marginBottom: 8 }}>Available Stock</div>
      <input className="form-control mb-2" value={item.stock || item.onHand || ''} disabled />
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <span style={{ fontSize: 13, color: '#aaa' }}>This is set automatically depending on the stock.</span>
        <span style={{ borderRadius: 12, padding: '2px 12px', background: item.status === 'In Stock' ? '#e6f9ed' : item.status === 'Low Stock' ? '#fffbe6' : '#ffeaea', color: item.status === 'In Stock' ? '#1bbf6b' : item.status === 'Low Stock' ? '#e6b800' : '#e03a3a', fontWeight: 600 }}>{item.status}</span>
      </div>
      <div className="d-flex justify-content-end mt-4">
        <button className="btn btn-primary me-2" onClick={() => onClose('edit')}>Edit</button>
        <button className="btn btn-outline-secondary" onClick={onClose}>Cancel</button>
      </div>
    </DrawerOverlay>
  );
}
