
export default function RoleBadge(role) {
  const roleConfig = {
    'Manager' : { bg: 'primary', text: 'PrimaryText' },
    'Employee' : { bg: 'primary', text: 'text-primary' },
  };

const config = roleConfig[role];
  return (
    <span className={`badge bg-${config.bg} bg-opacity-10 ${config.text} border border-${config.bg} border-opacity-25 d-flex align-items-center`}>
      {role}
    </span>
  );
}

