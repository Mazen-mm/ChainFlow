import React from 'react'

export default function FormCheck({ checked, onChange }) {
  return (
    <div className="mb-3 form-check d-flex align-items-center justify-content-between">
      <div>
        <input
          type="checkbox"
          className="form-check-input"
          id="rememberMe"
          checked={checked}
          onChange={onChange}
        />
        <label className='fw-bolder' htmlFor="rememberMe">Remember Me?</label>
      </div>
      <a href="#" className="text-decoration-none text-primary">Forgot Password?</a>
    </div>
  );
}
