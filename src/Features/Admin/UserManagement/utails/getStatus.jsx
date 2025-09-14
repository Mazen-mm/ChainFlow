

export default function getStatus (status) {
  const statusConfig = {
    'active': { bg: 'success', text: 'text-success' },
    'inactive': { bg: 'danger', text: 'text-danger' },
  };

  const config = statusConfig[status.toLowerCase()] || statusConfig.waiting;

  return (
    <span className={`badge bg-${config.bg} bg-opacity-10 ${config.text} border border-${config.bg} border-opacity-25 d-flex align-items-center`}>
      <span className={`bg-${config.bg} rounded-circle me-2`} style={{ width: '8px', height: '8px' }}></span>
      {status}
    </span>
  );
};

