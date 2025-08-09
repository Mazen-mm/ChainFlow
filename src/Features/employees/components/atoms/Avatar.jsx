

export function Avatar({ initials, color }) {
  return (
    <div className={`rounded-circle d-flex align-items-center justify-content-center text-white ${color}`}
        style={{ width: '45px', height: '45px' , cursor: 'pointer' }}>
      {initials}
    </div>
  );
}
