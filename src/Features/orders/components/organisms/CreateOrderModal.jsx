
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPartnerConnections } from '../../../partners/slice';
import { fetchProducts } from '../../../products/slice';

const CreateOrderModal = ({ newOrder, handleCloseModal, handleInputChange, handleSubmitOrder, setNewOrder }) => {
  const dispatch = useDispatch();
  const { partners } = useSelector(state => state.partners);
  const { products } = useSelector(state => state.products);

  // For multi-product selection
  const [orderItems, setOrderItems] = useState([
    { productId: '', quantity: 1 }
  ]);

  useEffect(() => {
    dispatch(fetchPartnerConnections());
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSupplierChange = (e) => {
    setNewOrder(prev => ({ ...prev, supplier: e.target.value }));
  };

  const handleOrderItemChange = (idx, field, value) => {
    setOrderItems(items => items.map((item, i) => i === idx ? { ...item, [field]: value } : item));
  };

  const handleAddProduct = () => {
    setOrderItems(items => [...items, { productId: '', quantity: 1 }]);
  };

  const handleRemoveProduct = (idx) => {
    setOrderItems(items => items.filter((_, i) => i !== idx));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Compose items for backend
    const items = orderItems
      .filter(item => item.productId && item.quantity > 0)
      .map(item => {
        const product = products.find(p => p._id === item.productId);
        return {
          productId: item.productId,
          productName: product?.productName,
          quantity: Number(item.quantity),
        };
      });
    handleSubmitOrder({
      ...newOrder,
      items,
    });
  };

  return (
    <div className="modal d-block m-0" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create New Order</h5>
            <button type="button" className="btn-close" onClick={handleCloseModal}></button>
          </div>
          <form onSubmit={onSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Supplier</label>
                <select className="form-control" value={newOrder.supplier} onChange={handleSupplierChange} required>
                  <option value="">Select supplier...</option>
                  {partners && partners.map(s => (
                    <option key={s._id} value={s._id}>{s.recipient || s.name}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Order Value</label>
                <input type="number" className="form-control" name="value" value={newOrder.value} onChange={handleInputChange} required />
              </div>
              <div className="mb-3">
                <label className="form-label">Products</label>
                {orderItems.map((item, idx) => (
                  <div className="d-flex mb-2 gap-2" key={idx}>
                    <select className="form-control" value={item.productId} onChange={e => handleOrderItemChange(idx, 'productId', e.target.value)} required>
                      <option value="">Select product...</option>
                      {products && products.map(p => (
                        <option key={p._id} value={p._id}>{p.productName}</option>
                      ))}
                    </select>
                    <input type="number" className="form-control" min="1" value={item.quantity} onChange={e => handleOrderItemChange(idx, 'quantity', e.target.value)} required />
                    {orderItems.length > 1 && (
                      <button type="button" className="btn btn-danger" onClick={() => handleRemoveProduct(idx)}>-</button>
                    )}
                  </div>
                ))}
                <button type="button" className="btn btn-secondary btn-sm mt-1" onClick={handleAddProduct}>Add Product</button>
              </div>
            </div>
            <div className="d-flex gap-3 p-3">
              <button type="button" className="btn btn-secondary flex-fill" onClick={handleCloseModal}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary flex-fill">
                Create Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderModal;
