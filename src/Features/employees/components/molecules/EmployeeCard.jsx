import { Link } from 'react-router-dom';
import DashBtn from '../../../../Shared/Components/Atoms/DashBtn';
import { GridGapIcon, MessageIcon } from '../../../../assets/Icons/SVG';
import { Avatar } from '../atoms/Avatar';

export function EmployeeCard({ employee }) {
  return (
    <div className='d-flex align-items-center p-3 border-bottom position-relative'>
      {employee.isOnline && (
        <small className="position-absolute blueAccent rounded-circle p-1"></small>
      )}
      <div className="ms-4 me-3">
        <Avatar initials={employee.avatar} color={employee.avatarColor} />
      </div>
      <div className="flex-grow-1">
        <Link to='employeeInfo' className="fw-semibold text-decoration-none">
          {employee.name}
        </Link>
        <small className="d-flex align-items-center text-muted">
          <span className='fw-bold opacity-75'>{employee.department}</span>
          <span className="mx-2 fs-3">•</span>
          <span className={employee.status === 'In Shift' ? 'text-success' : 'text-muted'}>
            {employee.status}
          </span>
        </small>
      </div>
      <div className="d-flex gap-2">
        <DashBtn BtnIcon={<GridGapIcon />} BtnColor='bg-white' />
        <DashBtn BtnIcon={<MessageIcon />} BtnColor='bg-white' />
      </div>
    </div>
  );
}
