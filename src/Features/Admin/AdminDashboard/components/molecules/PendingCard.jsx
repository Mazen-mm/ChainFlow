
import img from "../../../../../assets/Images/poker.jpg"
import DashBtn from './../../../../../Shared/Components/Atoms/DashBtn';


export default function PendingCard() {


  return (
  <div className="col-lg-4 col-md-6 col-sm-6">
    <div className="card rounded-4">
        {/* Header */}
        <div className="d-flex align-items-center mb-3">
          <img src={img} className="rounded-circle me-3" width="60" height="60" />
          <div>
            <h6 className="mb-0 fw-bold">Quantum Innovations</h6>
            <small className="text-muted">Technology</small>
          </div>
        </div>
        {/* Registration Date */}
        <div className="mb-4">
          <small className="text-muted d-block">Registration Date</small>
          <span className="fw-semibold">Dec 10, 2025</span>
        </div>
        {/* Actions */}
        <div className="d-flex gap-2">
          <DashBtn BtnName="✓ Approve" BtnColor="btn-primary w-100" />
          <DashBtn BtnName="✕ Deny" BtnColor="w-100" />
        </div>
    </div>
  </div>
  );
}
