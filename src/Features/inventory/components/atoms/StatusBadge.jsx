export function StatusBadge({ status }) {
  const className = {
    'In Stock': 'badge bg-success-subtle text-success d-flex align-items-center gap-2',
    'Out of Stock': 'badge bg-danger-subtle text-danger d-flex align-items-center gap-2',
    'Low Stock': 'badge bg-warning-subtle text-warning d-flex align-items-center gap-2',
  }[status] || 'badge bg-secondary-subtle d-flex align-items-center gap-2';

  return (
    <span className={className}>
      <span className="rounded-circle p-2" style={{ backgroundColor: 'currentColor' }}></span>
      {status}
    </span>
  );
}
