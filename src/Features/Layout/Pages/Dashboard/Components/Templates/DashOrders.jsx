import { useState } from 'react';
import OrderItem from '../Atoms/OrderItem';

export default function OrdersDashboard () {

const [orders] = useState({ total: 63 , pending: 20 , arrived: 20 , cancelled: 8 , incoming: 9 });

const orderLocations = [
  // North America
  { lat: 40.7128, lng: -74.0060, status: 'pending', city: 'New York' },
  { lat: 34.0522, lng: -118.2437, status: 'arrived', city: 'Los Angeles' },
  { lat: 41.8781, lng: -87.6298, status: 'cancelled', city: 'Chicago' },
  { lat: 29.7604, lng: -95.3698, status: 'incoming', city: 'Houston' },
  { lat: 49.2827, lng: -123.1207, status: 'pending', city: 'Vancouver' },
  { lat: 43.6532, lng: -79.3832, status: 'arrived', city: 'Toronto' },
  { lat: 25.7617, lng: -80.1918, status: 'incoming', city: 'Miami' },
  
  // Europe
  { lat: 51.5074, lng: -0.1278, status: 'arrived', city: 'London' },
  { lat: 48.8566, lng: 2.3522, status: 'pending', city: 'Paris' },
  { lat: 52.5200, lng: 13.4050, status: 'incoming', city: 'Berlin' },
  { lat: 41.9028, lng: 12.4964, status: 'cancelled', city: 'Rome' },
  { lat: 40.4168, lng: -3.7038, status: 'arrived', city: 'Madrid' },
  { lat: 59.3293, lng: 18.0686, status: 'pending', city: 'Stockholm' },
  { lat: 55.7558, lng: 37.6173, status: 'incoming', city: 'Moscow' },
  { lat: 52.3676, lng: 4.9041, status: 'cancelled', city: 'Amsterdam' },
  
  // Asia
  { lat: 35.6762, lng: 139.6503, status: 'arrived', city: 'Tokyo' },
  { lat: 39.9042, lng: 116.4074, status: 'pending', city: 'Beijing' },
  { lat: 1.3521,  lng: 103.8198, status: 'incoming', city: 'Singapore' },
  { lat: 19.0760, lng: 72.8777, status: 'cancelled', city: 'Mumbai' },
  { lat: 37.5665, lng: 126.9780, status: 'arrived', city: 'Seoul' },
  { lat: 31.2304, lng: 121.4737, status: 'pending', city: 'Shanghai' },
  { lat: 28.6139, lng: 77.2090, status: 'incoming', city: 'New Delhi' },
  { lat: 13.7563, lng: 100.5018, status: 'cancelled', city: 'Bangkok' },
  
  // Australia/Oceania
  { lat: -33.8688, lng: 151.2093, status: 'pending', city: 'Sydney' },
  { lat: -37.8136, lng: 144.9631, status: 'arrived', city: 'Melbourne' },
  { lat: -27.4698, lng: 153.0251, status: 'incoming', city: 'Brisbane' },
  
  // South America
  { lat: -23.5505, lng: -46.6333, status: 'incoming', city: 'São Paulo' },
  { lat: -34.6037, lng: -58.3816, status: 'cancelled', city: 'Buenos Aires' },
  { lat: 4.7110,   lng: -74.0721, status: 'pending', city: 'Bogotá' },
  { lat: -12.0464, lng: -77.0428, status: 'arrived', city: 'Lima' },
  { lat: -22.9068, lng: -43.1729, status: 'pending', city: 'Rio de Janeiro' },
  
  // Africa
  { lat: -26.2041, lng: 28.0473, status: 'arrived', city: 'Johannesburg' },
  { lat: 30.0444,  lng: 31.2357, status: 'pending', city: 'Cairo' },
  { lat: -1.2921,  lng: 36.8219, status: 'incoming', city: 'Nairobi' },
  { lat: 6.5244,   lng: 3.3792, status: 'cancelled', city: 'Lagos' },
  { lat: 33.9716,  lng: -6.8498, status: 'arrived', city: 'Casablanca' },
  
  // Middle East
  { lat: 25.2048, lng: 55.2708, status: 'pending', city: 'Dubai' },
  { lat: 31.7683, lng: 35.2137, status: 'incoming', city: 'Jerusalem' },
  { lat: 33.8938, lng: 35.5018, status: 'cancelled', city: 'Beirut' },
  { lat: 35.6892, lng: 51.3890, status: 'arrived', city: 'Tehran' }
];

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return '#8B5CF6'; // Purple
      case 'arrived': return '#EC4899'; // Pink
      case 'cancelled': return '#EF4444'; // Red
      case 'incoming': return '#F59E0B'; // Orange
      default: return '#6B7280'; // Gray
    }
  };

// Updated projection function with proper lat/lng naming
const projectToSVG = (lat, lng) => {
  const x = ((lng + 180) / 360) * 400;
  const y = ((90 - lat) / 180) * 300;
  return { x, y };
};

  return  <>
  <div className="card h-100">
    <h4 className='PrimaryText'>Orders</h4>
    <div className="maP">
      <svg width="100%" height="100%" viewBox="0 0 600 400">
        {/* Order Location Dots */}
        {orderLocations.map((location, index) => {
          const { x, y } = projectToSVG(location.lat, location.lng);
          return (
            <g key={index}>
              <circle cx={x} cy={y} r="6" fill={getStatusColor(location.status)} stroke="white" strokeWidth="2" 
                className="order-dot" style={{ cursor: 'pointer'}}
              />
              <title>{`${location.city} - ${location.status}`}</title>
            </g>
          );
        })}
      </svg>
      {/* Status Cards */}
      <div className="row justify-content-between">
        <OrderItem Name={'Total'} Count={`${orders.total}`} BackG={'#D7E1F7'} bordr={'#A7B7FF'} />
        <OrderItem Name={'Pending'} Count={`${orders.pending}`} BackG={'#DAD7F7'} bordr={'#ACA7E9'} />
        <OrderItem Name={'Arrived'} Count={`${orders.arrived}`} BackG={'#F6D7F7'} bordr={'#C72DCA'} />
        <OrderItem Name={'Cancelled'} Count={`${orders.cancelled}`} BackG={'#F7D7D9'} bordr={'#E23A45'} />
        <OrderItem Name={'Incoming'} Count={`${orders.incoming}`} BackG={'#F7E6D7'} bordr={'#FF881B'} />
      </div>
    </div>
  </div>
  </>
};
