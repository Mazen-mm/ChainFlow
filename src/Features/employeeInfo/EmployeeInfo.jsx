import { useState } from 'react';
import DashBtn from '../../Shared/Components/Atoms/DashBtn';
import { AnalyticsIcon, BoxIcon, DocIcon, GridGapIcon, LockIcon, MessageIcon, TrellaIcon } from '../../assets/Icons/SVG';
import { useNavigate } from 'react-router-dom';


export default function EmployeeInfo () {


  const [
    activeEmployee
    ,
    //  setActiveEmployee
    ] = useState(0);

  // Sample employee data
  const employees = [
    {
      id: 1,
      name: 'Ali Essam',
      department: 'Inventory',
      employeeSince: 'June 16, 2022',
      avatar: 'AE',
      workingHours: '9 am ~ 6 pm',
      monthlySalary: { current: 2350, previous: 2500, change: '-2%100', changeType: 'decrease' },
      daysAbsent: { current: 2, total: 30, unit: 'days' },
      overtimeBonus: 50,
      permissions: [
        { name: 'Inventory', icon: <BoxIcon /> , access: 'Full access' },
        { name: 'Orders', icon: <BoxIcon/>, access: 'Full access' },
        { name: 'Shipments', icon: <TrellaIcon/> , access: 'Full access' },
        { name: 'Partner list', icon: <GridGapIcon/>, access: 'Full access' },
        { name: 'Documents', icon: <DocIcon/>, access: 'Full access' },
        { name: 'Statistics', icon: <AnalyticsIcon stroke='currentColor' />, access: 'Full access' }
      ],
      recentActivity: [
        { action: 'Viewed new shipping document', time: '2 hours ago', icon: <DocIcon/> },
        { action: 'Added Item Fish tank', time: '3 hours ago', icon: <BoxIcon/> },
        { action: 'Reordered Fish tank', time: '3 hours ago', icon: <BoxIcon/> },
        { action: 'Updated order #GL-7829', time: '5 hours ago', icon: <BoxIcon/> },
        { action: 'Modified access permissions', time: '1 day ago', icon: <LockIcon stroke='currentColor' /> }
      ]
    }
  ];

  const currentEmployee = employees[activeEmployee];

  const handlePermissionEdit = (permissionName) => {
    console.log(`Editing permission for: ${permissionName}`);
  };


  const navigate = useNavigate();


  return (
    <div className="row card">
      {/* Header Section */}
      <div className="d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <div className="position-relative me-3">
            <div className="rounded-circle bg-danger d-flex align-items-center justify-content-center text-white"
              style={{ width: '80px', height: '80px', fontSize: '24px' }} >
              {currentEmployee.avatar}
            </div>
          </div>
          <div>
            <h2 className="mb-1 fw-bold text-dark">{currentEmployee.name}</h2>
            <div className="text-muted d-flex align-items-center">
              <span className="text-primary fw-medium">{currentEmployee.department}</span>
              <span className="mx-2">•</span>
              <span>Employee since {currentEmployee.employeeSince}</span>
            </div>
          </div>
        </div>
        <div className="d-flex gap-2">
          <DashBtn BtnIcon={<MessageIcon/>} BtnName='Contact' BtnColor="text-white btn-primary" 
            onClick={() => navigate('/pages/employees/employeeChat')} />
          <DashBtn BtnName='. . .' BtnColor='fw-bolder border-secondary' />
        </div>
      </div>
      {/* Stats Cards */}
      <div className="row my-3">
        <div className="col-md-3 col-sm-6 p-2">
          <div className="card h-100 justify-content-center">
            <div className="text-muted small mb-1">Working hours</div>
            <div className="fw-bold text-dark">{currentEmployee.workingHours}</div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 p-2">
          <div className="card h-100 justify-content-center">
            <div className='d-lg-flex d-md-block justify-content-between align-items-center'>
              <div>
                <div className="text-muted small">Monthly Salary</div>
                <span className="text-decoration-line-through text-muted small">
                  ${currentEmployee.monthlySalary.previous}
                </span>
                <span className="fw-bold text-dark">${currentEmployee.monthlySalary.current}</span>
              </div>
              <div className="small text-muted">
                <span className="text-danger">{currentEmployee.monthlySalary.change}</span>
                <span className="ms-1">+50</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 p-2">
          <div className="card h-100 justify-content-center">
            <div className="text-muted small mb-1">Days Absent this month</div>
            <div className="fw-bold text-dark">{currentEmployee.daysAbsent.current} {currentEmployee.daysAbsent.unit}</div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 p-2">
          <div className="card h-100 justify-content-center">
            <div className="text-muted small mb-1">Overtime Bonus</div>
            <div className="fw-bold text-dark">${currentEmployee.overtimeBonus}</div>
          </div>
        </div>
      </div>
      {/* Shared Data & Permissions */}
      <div className="my-3">
        <h5 className="fw-bold">Shared Data & Permissions</h5>
        <div className="row">
          {currentEmployee.permissions.map((permission, index) => (
            <div key={index} className="col-md-6 p-0">
              <div className="card-body whiteBg d-flex align-items-center justify-content-between m-2">
                <div className="d-flex align-items-center gap-2">
                  <div className="lightBg rounded-circle p-3 align-middle">
                    {permission.icon}
                  </div>
                  <h6>{permission.name}</h6>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <span className="badge text-success p-2">
                    {permission.access}
                  </span>
                  <button className="btn btn-link text-primary text-decoration-none"
                      onClick={() => handlePermissionEdit(permission.name)} >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Recent Activity */}
      <div className='row py-3'>
        <h5 className="fw-bold mb-3">Recent Activity</h5>
        <div className="list-group d-flex gap-3">
          {currentEmployee.recentActivity.map((activity, index) => (
            <div key={index} className="d-flex align-items-center gap-3">
              <div className="lightBg rounded-circle align-middle p-3">
                {activity.icon}
              </div>
              <div className="flex-grow-1">
                <div className="fw-medium text-dark mb-1">{activity.action}</div>
                <div className="small text-muted">{activity.time}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
