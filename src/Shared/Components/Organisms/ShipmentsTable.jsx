import { TrellaIcon } from '../../../assets/Icons/SVG';

export default function ShipmentsTable({ shipments }) {

  const getStatusClass = (status) => {
    return `status-${status}`;
  };


  return  <>
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr className="smallSize">
            <th className='text-center'>Name</th>
            <th>Origin</th>
            <th>Destination</th>
            <th>Date</th>
            <th>State</th>
          </tr>
        </thead>
        <tbody>
          {shipments.map((shipment, index) => (
            <tr key={index} className="border-opacity-50 border-top">
              <td>
                <div className="d-flex align-items-center gap-1">
                  <div className='rounded-4 p-2 lightBg'><TrellaIcon fill='#0F345C'/></div>
                  <div>{shipment.id}</div>
                </div>
              </td>
              <td>{shipment.origin}</td>
              <td>{shipment.destination}</td>
              <td>{shipment.date}</td>
              <td>
                <span className={`status-badge btn ${getStatusClass(shipment.status)}`}>
                  {(shipment.status)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </>
}
