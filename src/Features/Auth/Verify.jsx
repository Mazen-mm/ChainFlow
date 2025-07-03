import logo from '../../assets/Images/logo.png';


export default function Verify() {
  return <>
  <h1 className='text-center'>Verify</h1>
  <div className="row lightBg min-vh-100 justify-content-center align-items-center">
    <div className="verify mx-auto">
      <div className="text-center">
        <img src={logo} className='my-3 w-50' alt="" />
        <h4 className="text-primary fw-bold my-4">Verify your account</h4>
        <p className="text-muted fw-bold">A verification code has been sent to your Email.
          <br />Make sure to check your spam folder.
        </p>
      </div>
        {/* Code inputs */}
        <p className='text-center text-primary '>Enter your code</p>
        <div className="d-flex justify-content-center gap-2 mb-3">
          {[...Array(6)].map((_, idx) => (
            <input key={idx} type="text" maxLength="1" className="form-control code-input text-center"/>
          ))}
        </div>

        {/* Resend / Next buttons */}
        <div className="d-flex justify-content-between w-75 mx-auto">
          <div>
            <button className="btn btn-light border">Resend</button>
            <small className='fw-bold'> Didn't receive a code?</small>
          </div>
          <button className="btn btn-secondary">Next</button>
        </div>

    </div>
  </div>

  </>
}
