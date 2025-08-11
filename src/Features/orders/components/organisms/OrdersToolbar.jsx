import React from 'react';
import { SearchIcon, PlusIcon, RecycleIcon, ExportIcon, FilterIcon } from '../../../../assets/Icons/SVG';
import DashBtn from '../../../../Shared/Components/Atoms/DashBtn';
import DetailsCard from '../../../../Shared/Components/Molecules/DetailsCard';
import { InvIcon, ClockIcon, TruckIcon, TruckCheckIcon } from '../../../../assets/Icons/SVG';

const OrdersToolbar = ({ searchTerm, setSearchTerm, handleCreateOrder, handleExport, handleFilter, handleBulkDelete, selectedOrders }) => {
  return (
    <>
      <div className="row flex-row">
        <DetailsCard detailName={'Total Items'} detailNum={'2,847'} icon={<InvIcon fill='none' stroke={'#5C8DFF'} />} />
        <DetailsCard detailName={'Low Stock Alerts'} detailNum={'24'} icon={<ClockIcon stroke='#5C8DFF' />} />
        <DetailsCard detailName={'Incoming Shipments'} detailNum={'12'} icon={<TruckIcon fill={'#5C8DFF'} />} />
        <DetailsCard detailName={'Total Value'} detailNum={'$1.2M'} icon={<TruckCheckIcon stroke='#5C8DFF' />} />
      </div>

      <div className="row align-items-center my-2">
        <div className="col-12 col-lg-6">
          <div className="input-group">
            <span className="input-group-text whiteBg"><SearchIcon /></span>
            <input
              type="search"
              className="form-control whiteBg"
              placeholder="Search Orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="col-3 col-lg-2">
          <DashBtn BtnName="Create Order" BtnIcon={<PlusIcon />} BtnColor='btn-primary' onClick={handleCreateOrder} />
        </div>
        <div className="col-9 col-lg-4 d-flex justify-content-between">
          <DashBtn BtnName="Delete" BtnIcon={<RecycleIcon stroke='#A00303' />} BtnColor='border-0' BtnStyle={{ backgroundColor: '#F6D2D2', color: '#A00303' }} onClick={handleBulkDelete} disabled={selectedOrders.length === 0} />
          <DashBtn BtnName="Export" BtnIcon={<ExportIcon />} onClick={handleExport} />
          <DashBtn BtnName="Filter" BtnIcon={<FilterIcon />} onClick={handleFilter} />
        </div>
      </div>
    </>
  );
};

export default OrdersToolbar;
