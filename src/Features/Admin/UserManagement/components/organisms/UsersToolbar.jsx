
import DashBtn from '../../../../../Shared/Components/Atoms/DashBtn';
import DetailsThreeCards from '../molecules/DetailsThreeCards';
import { AddDocumentIcon, UserIcon, UserProfileIcon , SearchIcon, PlusIcon, FilterIcon, PenIcon } from '../../../../../assets/Icons/SVG';

const UsersToolbar = ({ searchTerm, setSearchTerm, handleCreateUser, handleFilter }) => {
  return  <>
  <div className="row">
    <DetailsThreeCards name="Total Users" count="1,415" icon={<UserIcon fill="#5C8DFF" />} />
    <DetailsThreeCards name="Total Managers" count="123" icon={<UserProfileIcon fill="none" stroke='#5C8DFF'/>} />
    <DetailsThreeCards name="Total Employees" count="1,292" icon={<AddDocumentIcon />} />
  </div>
  <div className="row align-items-center my-2">
    <div className="col-md-8">
      <div className="input-group">
        <span className="input-group-text whiteBg"><SearchIcon /></span>
        <input
          type="search"
          className="form-control whiteBg"
          placeholder="Search Users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </div>
    <div className="col-md-4 d-flex justify-content-between">
      <DashBtn BtnName="Add User" BtnIcon={<PlusIcon />} BtnColor="btn-primary" onClick={handleCreateUser} />
      <DashBtn BtnName="Edit" BtnIcon={<PenIcon />} />
      <DashBtn BtnName="Filter" BtnIcon={<FilterIcon />}  onClick={handleFilter} />
    </div>
  </div>
  </>
};

export default UsersToolbar;
