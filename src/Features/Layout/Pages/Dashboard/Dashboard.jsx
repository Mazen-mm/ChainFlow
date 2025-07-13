import DashOrders from './Components/Templates/DashOrders';
import DashOverView from './Components/Templates/DashOverView';
import DashShipments from './Components/Templates/DashShipments';

export default function Dashboard() {

  return <>
    <div className="row overflow-hidden"><DashOverView/></div>
    <div className="row">
      <div className="col-md-5"><DashOrders/></div>
      <div className="col-md-7"><DashShipments/></div>
    </div>
  </>
}
