
export default function PaymentBadge({ payment }) {
  const paymentConfig = {
    'paid': { bg: 'success', text: 'text-success' },
    'due': { bg: 'danger', text: 'text-danger' },
  };

  const config = paymentConfig[payment?.toLowerCase()];

  return (
    <span className={`badge bg-${config.bg} bg-opacity-10 ${config.text} border border-${config.bg} border-opacity-25 d-flex align-items-center`}>
      {payment}
    </span>
  );
}
