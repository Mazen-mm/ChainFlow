import { ExportIcon, FilterIcon, PenIcon, PlusIcon, RecycleIcon } from '../../../../assets/Icons/SVG';
import { SearchInput } from '../../../../Shared/Components/Atoms/SearchInput';
import DashBtn from '../../../../Shared/Components/Atoms/DashBtn';

export function InventoryToolbar({ onSearch }) {
  return (
    <div className="row align-items-center my-2">
      <div className="col-12 col-lg-5"><SearchInput onSearch={onSearch} /></div>
      <div className="col-3 col-lg-2">
        <DashBtn BtnName="Add new item" BtnIcon={<PlusIcon />} BtnColor="btn-primary"/>
      </div>
      <div className="col-9 col-lg-5">
        <div className="d-flex justify-content-between">
          <DashBtn BtnName='Edit' BtnIcon={<PenIcon/>} />
          <DashBtn BtnName='Delete' BtnIcon={<RecycleIcon stroke='#A00303' />} />
          <DashBtn BtnName='Export' BtnIcon={<ExportIcon/>} />
          <DashBtn BtnName='Filter' BtnIcon={<FilterIcon/>} />
        </div>
      </div>
    </div>
  );
}


