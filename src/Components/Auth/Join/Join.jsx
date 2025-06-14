import React from 'react'
import logo from '../../../assets/Images/logo.png';

export default function Join() {
  return <>
    <div className=" vh-100 lightBg d-flex justify-content-center align-items-center">
  
      <div className="verify mx-auto" style={{ background:" linear-gradient(135deg, #D5D8FA 32.97%, #D1D5FA 67.6%, #A7B7FF 102.23%)"}}>
        <div className="text-center mb-4">
          <img src={logo} className='my-3 w-50' alt="" />
          <h4 className="text-primary fw-bold my-2">Join your company...</h4>
          <small className="text-muted fw-bold">Your company admin should send you an invite code
            <br />Enter this code bellow to be admitted in.
          </small>
        </div>
          {/* Code inputs */}
          <div className="my-5">
            <p className='text-center text-primary'>Enter your code</p>
            <input type="number" className="form-control w-75 mx-auto" placeholder="Enter your invite code"/>
          </div>
  
          {/* Return to home / Next */}
          <div className="d-flex justify-content-between w-75 mx-auto">
            <a className="text-primary">Return to home</a>
            <button className="btn btn-primary">Next</button>
          </div>
      </div>
    </div>
  </>
}
