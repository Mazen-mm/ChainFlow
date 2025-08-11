import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createInventory, updateInventory } from '../../slice';
import QuickAddProduct from './QuickAddProduct';
import { fetchProducts } from '../../../products/slice';

export default function InventoryModal({ open, onClose, editingItem }) {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [form, setForm] = useState({
    productId: '',
    onHand: '',
    reserved: '',
    minimumThreshold: '',
    location: '',
    status: 'In Stock',
  });

  useEffect(() => {
    if (editingItem) {
      setForm({
        productId: editingItem.product?._id || '',
        onHand: editingItem.onHand || '',
        reserved: editingItem.reserved || '',
        minimumThreshold: editingItem.minimumThreshold || '',
        location: editingItem.location?.locationName || '',
        status: editingItem.status || 'In Stock',
      });
    } else {
      setForm({
        productId: '',
        onHand: '',
        reserved: '',
        minimumThreshold: '',
        location: '',
        status: 'In Stock',
      });
    }
  }, [editingItem]);


  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleQuickAddProduct = async (newProduct) => {
    setShowAddProduct(false);
    // Refetch products to ensure dropdown is up to date
    await dispatch(fetchProducts());
    setForm(f => ({ ...f, productId: newProduct._id }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (editingItem) {
      dispatch(updateInventory({ id: editingItem._id, data: form }));
    } else {
      dispatch(createInventory(form));
    }
    onClose();
  };

  if (!open) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <h2>{editingItem ? 'Edit Inventory Item' : 'Add Inventory Item'}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Product</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <select name="productId" value={form.productId} onChange={handleChange} required>
                <option value="">Select product</option>
                {products.map(p => (
                  <option key={p._id} value={p._id}>{p.productName}</option>
                ))}
              </select>
              <button type="button" className="btn btn-sm btn-outline-primary" onClick={() => setShowAddProduct(true)}>
                + Add Product
              </button>
            </div>
          </div>
          <div>
            <label>On Hand</label>
            <input name="onHand" type="number" value={form.onHand} onChange={handleChange} required />
          </div>
          <div>
            <label>Reserved</label>
            <input name="reserved" type="number" value={form.reserved} onChange={handleChange} />
          </div>
          <div>
            <label>Min Threshold</label>
            <input name="minimumThreshold" type="number" value={form.minimumThreshold} onChange={handleChange} />
          </div>
          <div>
            <label>Location</label>
            <input name="location" value={form.location} onChange={handleChange} />
          </div>
          <div>
            <label>Status</label>
            <select name="status" value={form.status} onChange={handleChange}>
              <option>In Stock</option>
              <option>Low Stock</option>
              <option>Out of Stock</option>
              <option>Discontinued</option>
            </select>
          </div>
          <div className="modal-actions">
            <button type="submit">{editingItem ? 'Update' : 'Add'}</button>
            <button type="button" onClick={onClose}>Cancel</button>
          </div>
        </form>
        {showAddProduct && (
          <QuickAddProduct
            onSuccess={handleQuickAddProduct}
            onCancel={() => setShowAddProduct(false)}
          />
        )}
      </div>
    </div>
  );
}
