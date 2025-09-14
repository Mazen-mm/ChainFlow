
import { useEmployees } from '../hooks/useEmployees';
import { SearchInput } from '../../../Shared/Components/Atoms/SearchInput';
import DashBtn from '../../../Shared/Components/Atoms/DashBtn';
import { FilterIcon, PlusIcon } from '../../../assets/Icons/SVG';
import { EmployeeCard } from '../components/molecules/EmployeeCard';

export default function EmployeesPage() {
  const { searchTerm, setSearchTerm, activeFilter, setActiveFilter, filteredEmployees, stats } = useEmployees();
  const departments = ['All', 'Inventory', 'Production', 'Finance', 'HR', 'Administration'];

  return (
    <div className="card">
      {/* Header Employees */}
      <div className="d-flex justify-content-between gap-2 w-100">
        <div className="col-lg-10">
          <SearchInput placeholder="Search Partners" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        </div>
        <div className="d-flex gap-2">
          <DashBtn BtnIcon={<FilterIcon />} BtnColor='bg-white' />
          <DashBtn BtnIcon={<PlusIcon />} BtnColor='bg-white' />
        </div>
      </div>
      {/* Nav List */}
      <div className="mt-3">
        <ul className="nav nav-pills d-flex gap-2">
          {departments.map(depart => (
            <li className="nav-item" key={depart}>
              <button className={`nav-link ${activeFilter === depart ? 'active' : ''}`}
                  onClick={() => setActiveFilter(depart)}>
                {depart}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {filteredEmployees.map(emp => <EmployeeCard key={emp.id} employee={emp} />)}
        <div className="row p-3 text-center">
          <div className="col-4">
            <div className="fw-semibold text-dark">All: {stats.total}</div>
          </div>
          <div className="col-4">
            <div className="fw-semibold text-success">In Shift: {stats.inShift}</div>
          </div>
          <div className="col-4">
            <div className="fw-semibold text-muted">Out of Shift: {stats.outOfShift}</div>
          </div>
        </div>
    </div>
  );
}
