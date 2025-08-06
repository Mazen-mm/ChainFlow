const getStatusBadge = (status) => {
  const statusConfig = {
    'approved': { bg: 'success', text: 'text-success' },
    'cancelled': { bg: 'danger', text: 'text-danger' },
    'delivered': { bg: 'success', text: 'text-success' },
    'ready': { bg: 'primary', text: 'text-primary' },
    'shipped': { bg: 'info', text: 'text-info' },
    'in production': { bg: 'warning', text: 'text-warning' },
    'waiting': { bg: 'warning', text: 'text-warning' }
  };

  const config = statusConfig[status.toLowerCase()] || statusConfig.waiting;

  return (
    <span className={`badge bg-${config.bg} bg-opacity-10 ${config.text} border border-${config.bg} border-opacity-25 d-flex align-items-center`}>
      <span className={`bg-${config.bg} rounded-circle me-2`} style={{ width: '8px', height: '8px' }}></span>
      {status}
    </span>
  );
};

export default getStatusBadge;
