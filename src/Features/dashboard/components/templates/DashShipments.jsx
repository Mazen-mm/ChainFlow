import { Link } from "react-router-dom";
import ShipmentsTable from "../../../../Shared/Components/Organisms/ShipmentsTable";


export default function DashShipments() {

    const shipments = [
    {
      id: 'SHP-29871',
      origin: 'Chicago, IL',
      destination: 'Atlanta, GA',
      date: '03/22/2025',
      status: 'arrived',
      carrier: 'FastFreight Inc.',
      eta: 'Jun 15, 2023 - 14:30',
    },
    {
      id: 'SHP-29872',
      origin: 'Chicago, IL',
      destination: 'Atlanta, GA',
      date: '03/22/2025',
      status: 'departed',
      carrier: 'FastFreight Inc.',
      eta: 'Jun 15, 2023 - 14:30',
    },
    {
      id: 'SHP-29873',
      origin: 'Atlanta, GA',
      destination: 'Chicago, IL',
      date: '03/22/2025',
      status: 'loading',
      carrier: 'FastFreight Inc.',
      eta: 'Jun 15, 2023 - 14:30',
    },
    {
      id: 'SHP-29874',
      origin: 'Chicago, IL',
      destination: 'Atlanta, GA',
      date: '03/22/2025',
      status: 'departed',
      carrier: 'FastFreight Inc.',
      eta: 'Jun 15, 2023 - 14:30'
    },
    {
      id: 'SHP-29875',
      origin: 'Chicago, IL',
      destination: 'Atlanta, GA',
      date: '03/22/2025',
      status: 'lost',
      carrier: 'FastFreight Inc.',
      eta: 'Jun 15, 2023 - 14:30'
    },
    {
      id: 'SHP-29876',
      origin: 'Chicago, IL',
      destination: 'Atlanta, GA',
      date: '03/22/2025',
      status: 'departed',
      carrier: 'FastFreight Inc.',
      eta: 'Jun 15, 2023 - 14:30'
    },
    {
      id: 'SHP-29877',
      origin: 'Chicago, IL',
      destination: 'Atlanta, GA',
      date: '03/22/2025',
      status: 'departed',
      carrier: 'FastFreight Inc.',
      eta: 'Jun 15, 2023 - 14:30'
    },
    {
      id: 'SHP-29878',
      origin: 'New York, NY',
      destination: 'Miami, FL',
      date: '03/22/2025',
      status: 'loading',
      carrier: 'FastFreight Inc.',
      eta: 'Jun 15, 2023 - 14:30'
    },
    {
      id: 'SHP-29879',
      origin: 'Los Angeles, CA',
      destination: 'Seattle, WA',
      date: '03/22/2025',
      status: 'arrived',
      carrier: 'FastFreight Inc.',
      eta: 'Jun 15, 2023 - 14:30'
    }
  ];



  return <>
  <div className="card h-100">
    <h4 className='PrimaryText'>Shipments</h4>
    <ShipmentsTable shipments={shipments}/>
    <div className="text-center">
      <Link to='/pages/shipments' className="PrimaryText text-decoration-none">View All {'>'}</Link>
    </div>
  </div>
  </>
}




