import React from 'react'

export default function FormCheck() {
  return <>
    <div className="mb-3 form-check d-flex align-items-center justify-content-between">
      <div>
        <input type="checkbox" className="form-check-input" id="rememberMe"/>
        <label className='fw-bolder'>Remember Me?</label>
      </div>
      <a href="#" className="text-decoration-none text-primary">Forgot Password?</a>
    </div>
  </>
}
