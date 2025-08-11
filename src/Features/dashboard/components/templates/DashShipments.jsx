import { Link } from "react-router-dom";
import ShipmentsTable from "../../../../Shared/Components/Organisms/ShipmentsTable";



export default function DashShipments({ shipments }) {
  if (!shipments) return <div className="text-muted">No shipments data</div>;
  return (
    <div className="card h-100">
      <h4 className='PrimaryText'>Shipments</h4>
      <ShipmentsTable shipments={shipments} />
      <div className="text-center">
        <Link to='/pages/shipments' className="PrimaryText text-decoration-none">View All {'>'}</Link>
      </div>
    </div>
  );
}




