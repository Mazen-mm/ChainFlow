import React from 'react';

const AddUserModal = ({ newUser, CloseModal, handleInputChange, handleCreateUser }) => (
  <div className="modal d-block m-0" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">Create New User</h5>
          <button type="button" className="btn-close" onClick={CloseModal}></button>
        </div>
        <div className="modal-body">
          {['name', 'email', 'role'].map((field) => (
            <div className="mb-3" key={field}>
              <label className="form-label">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input
                type={field === 'role' ? 'text' : 'email'}
                name={field}
                className="form-control"
                value={newUser[field]}
                onChange={handleInputChange}
                required
              />
            </div>
          ))}
          <div className="d-flex gap-3">
            <button type="button" className="btn btn-secondary flex-fill" onClick={CloseModal}>
              Cancel
            </button>
            <button type="button" className="btn btn-primary flex-fill" onClick={handleCreateUser}>
              Add New User
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default AddUserModal;
