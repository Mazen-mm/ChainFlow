import DashOrders from '../components/templates/DashOrders';
import DashOverView from '../components/templates/DashOverView';
import DashShipments from '../components/templates/DashShipments';

export default function DashboardPage() {

  return <>
  <div className="row gap-2">
    <div className="row overflow-hidden"><DashOverView/></div>
    <div className="row">
      <div className="col-md-6"><DashOrders/></div>
      <div className="col-md-6"><DashShipments/></div>
    </div>
  </div>
  </>
}
