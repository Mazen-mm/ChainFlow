import port from '../../../../assets/Images/Port-amico.png';


export default function RightSide() {
  return <>
    <div className="col-md-6 d-flex align-items-center justify-content-center p-5">
      <div className="text-center">
        <img src={port} alt="" className="mb-4 w-100" style={{ maxHeight: "300px" }} />
        <h4 className="fw-bold">
          Your <span className="text-primary">supply management</span>
          <br /> expedition begins right now
        </h4>
        <hr />
        <p className="text-muted">Get started by creating a new account</p>
      </div>
    </div>
  </>
}
