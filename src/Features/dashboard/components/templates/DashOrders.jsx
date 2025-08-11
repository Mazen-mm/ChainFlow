
import OrderItem from '../Atoms/OrderItem';

export default function DashOrders({ orders }) {
  if (!orders) return <div className="text-muted">No orders data</div>;
  const { stats = {}, locations = [] } = orders;

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

  return (
    <div className="card h-100">
      <h4 className='PrimaryText'>Orders</h4>
      <div className="maP">
        <svg width="100%" height="100%" viewBox="0 0 600 400">
          {/* Order Location Dots */}
          {locations.map((location, index) => {
            const { x, y } = projectToSVG(location.lat, location.lng);
            return (
              <g key={index}>
                <circle cx={x} cy={y} r="6" fill={getStatusColor(location.status)} stroke="white" strokeWidth="2"
                  className="order-dot" style={{ cursor: 'pointer' }}
                />
                <title>{`${location.city} - ${location.status}`}</title>
              </g>
            );
          })}
        </svg>
        {/* Status Cards */}
        <div className="row justify-content-between">
          <OrderItem Name={'Total'} Count={`${stats.total || 0}`} BackG={'#D7E1F7'} bordr={'#A7B7FF'} />
          <OrderItem Name={'Pending'} Count={`${stats.pending || 0}`} BackG={'#DAD7F7'} bordr={'#ACA7E9'} />
          <OrderItem Name={'Arrived'} Count={`${stats.arrived || 0}`} BackG={'#F6D7F7'} bordr={'#C72DCA'} />
          <OrderItem Name={'Cancelled'} Count={`${stats.cancelled || 0}`} BackG={'#F7D7D9'} bordr={'#E23A45'} />
          <OrderItem Name={'Incoming'} Count={`${stats.incoming || 0}`} BackG={'#F7E6D7'} bordr={'#FF881B'} />
        </div>
      </div>
    </div>
  );
}
