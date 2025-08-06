import React from 'react';

const CreateOrderModal = ({ newOrder, handleCloseModal, handleInputChange, handleSubmitOrder }) => (
  <div className="modal d-block m-0" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Create New Order</h5>
          <button type="button" className="btn-close" onClick={handleCloseModal}></button>
        </div>
        <div className="modal-body">
          {['value', 'supplier', 'items'].map((field) => (
            <div className="mb-3" key={field}>
              <label className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                type={field === 'supplier' ? 'text' : 'number'}
                name={field}
                className="form-control"
                value={newOrder[field]}
                onChange={handleInputChange}
                required
              />
            </div>
          ))}
          <div className="d-flex gap-3">
            <button type="button" className="btn btn-secondary flex-fill" onClick={handleCloseModal}>
              Cancel
            </button>
            <button type="button" className="btn btn-primary flex-fill" onClick={handleSubmitOrder}>
              Create Order
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CreateOrderModal;
