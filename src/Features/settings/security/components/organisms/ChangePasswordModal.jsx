export default function ChangePasswordModal({ form, onClose, onChange, onSubmit }) {
  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title fw-semibold">Change Password</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body d-flex flex-column gap-3">
            {['currentPassword', 'newPassword', 'confirmPassword'].map((field, idx) => (
              <div key={idx} className="mb-3">
                <label className="form-label fw-medium">
                  {field === 'currentPassword' ? 'Current' : field === 'newPassword' ? 'New' : 'Confirm New'} Password
                </label>
                <input type="password" name={field} className="form-control" placeholder={`Enter ${field}`} value={form[field]} onChange={onChange} required />
              </div>
            ))}
            <div className="d-flex gap-3">
              <button className="btn btn-secondary flex-fill" onClick={onClose}>Cancel</button>
              <button className="btn btn-primary flex-fill" onClick={onSubmit}>Change Password</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
