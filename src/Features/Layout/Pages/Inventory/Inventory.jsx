import DetailsCard from '../Components/Molecules/DetailsCard'
import { AnalyticsIcon, ExclamIcon, InvIcon, TrellaIcon, PlusIcon, PenIcon, RecycleIcon, ExportIcon, FilterIcon, SearchIcon } from './../../../../assets/Icons/SVG';
import DashBtn from '../Components/Atoms/DashBtn';
import { useState } from 'react';

export default function Inventory() {
  // data/inventoryData.js
const inventoryData = [
  {
    code: 'ITM002',
    name: 'Fish Tank Filter',
    serial: '78679126378',
    category: 'Aquarium',
    stock: 0,
    unit: 'Piece',
    price: '$21',
    status: 'Out of Stock',
    location: 'Warehouse A',
    updated: '2024-01-15 09:30',
  },
  {
    code: 'ITM001',
    name: 'Fish Tank Filter',
    serial: '78679126378',
    category: 'Aquarium',
    stock: 420,
    unit: 'KG',
    price: '$100',
    status: 'In Stock',
    location: 'Warehouse A',
    updated: '2024-01-15 09:30',
  },
  {
    code: 'ITM003',
    name: 'Fish Tank Filter',
    serial: '78679126378',
    category: 'Aquarium',
    stock: 3,
    unit: 'Bag',
    price: '$200',
    status: 'Low Stock',
    location: 'Warehouse A',
    updated: '2024-01-15 09:30',
  },
  {
    code: 'ITM003',
    name: 'Fish Tank Filter',
    serial: '78679126378',
    category: 'Aquarium',
    stock: 3,
    unit: 'Bag',
    price: '$200',
    status: 'Low Stock',
    location: 'Warehouse A',
    updated: '2024-01-15 09:30',
  },
];
// utils/statusBadge
const getStatusClass = (status) => {
  switch (status) {
    case 'In Stock':
      return 'badge bg-success-subtle text-success d-flex align-items-center gap-2';
    case 'Out of Stock':
      return 'badge bg-danger-subtle text-danger d-flex align-items-center gap-2';
    case 'Low Stock':
      return 'badge bg-warning-subtle text-warning d-flex align-items-center gap-2';
    default:
      return 'badge bg-secondary-subtle';
  }
};

const [page, setPage] = useState(1);
const rowsPerPage = 9;
const totalPages = Math.ceil(inventoryData.length / rowsPerPage);
const startIndex = (page - 1) * rowsPerPage;
const currentData = inventoryData.slice(startIndex, startIndex + rowsPerPage);

  return <>
  {/* Details Card */}
  <div className="row flex-row">
    <DetailsCard detailName={'Total Items'} detailNum={'2,847'} icon={<InvIcon fill='none' stroke={'#5C8DFF'}/>}/>
    <DetailsCard detailName={'Low Stock Alerts'} detailNum={'24'} icon={<ExclamIcon stroke='#5C8DFF'/>}/>
    <DetailsCard detailName={'Incoming Shipments'} detailNum={'12'} icon={<TrellaIcon fill={'#5C8DFF'}/>}/>
    <DetailsCard detailName={'Total Value'} detailNum={'$1.2M'} icon={<AnalyticsIcon stroke='#5C8DFF'/>}/>
  </div>
  {/* Details Card */}

    {/* Buttons */}
    <div className="row align-items-center my-2">

      <div className="col-12 col-lg-5">
        <div className="input-group">
          <span className="input-group-text whiteBg"><SearchIcon /></span>
          <input type="search" className="form-control whiteBg" placeholder="Search Inventory..."/>
        </div>
      </div>

      <div className="col-3 col-lg-2">
        <DashBtn BtnName="Add new item" BtnIcon={<PlusIcon />} BtnColor='btn-primary' />
      </div>

      <div className="col-9 col-lg-5">
        <div className="d-flex justify-content-between">
          <DashBtn BtnName="Edit" BtnIcon={<PenIcon />} />
          <DashBtn BtnName="Delete" BtnIcon={<RecycleIcon />} BtnColor='border-0'
            BtnStyle={{backgroundColor: '#F6D2D2' , color: '#A00303'}} />
          <DashBtn BtnName="Export" BtnIcon={<ExportIcon />} />
          <DashBtn BtnName="Filter" BtnIcon={<FilterIcon />} />
        </div>
      </div>
    </div>
    {/* Buttons */}

    <div className="table-responsive rounded-3 overflow-auto border">
      {/* Table */}
      <table className="table table-hover">
        <thead className="table-primary">
          <tr>
            <th>Select</th>
            <th>Item code</th>
            <th>Item name</th>
            <th>Serial Number</th>
            <th>Category</th>
            <th>Stock</th>
            <th>Unit</th>
            <th>Unit Price</th>
            <th>Status</th>
            <th>Location</th>
            <th>Last updated</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {currentData.map((item, idx) => (
            <tr key={idx}>
              <td><input type="checkbox" /></td>
              <td>{item.code}</td>
              <td>{item.name}</td>
              <td>{item.serial}</td>
              <td>{item.category}</td>
              <td>{item.stock}</td>
              <td>{item.unit}</td>
              <td>{item.price}</td>
              <td>
                <span className={getStatusClass(item.status)}>
                  <span className="rounded-circle p-2" style={{ backgroundColor: 'currentColor' }}/>
                  {item.status}
                </span>
              </td>
              <td>{item.location}</td>
              <td>{item.updated}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="d-flex justify-content-between align-items-center p-3">
        <small className="text-muted">
          Showing {startIndex + 1} to {startIndex + currentData.length} of {inventoryData.length} entries
        </small>
        <div className="btn-group">
          <button className="btn btn-outline-primary" disabled={page === 1} onClick={() => setPage(1)}>
            &laquo;
          </button>
          <button className="btn btn-outline-primary" disabled={page === 1} onClick={() => setPage(prev => prev - 1)}>
            &lsaquo;
          </button>
          {[...Array(totalPages).keys()].slice(0, 3).map((n) => (
            <button key={n} className='btn btn-primary' onClick={() => setPage(n + 1)}>
              {n + 1}
            </button>
          ))}
          <button className="btn btn-outline-primary" disabled={page === totalPages} onClick={() => setPage(prev => prev + 1)}>
            &rsaquo;
          </button>
          <button className="btn btn-outline-primary" disabled={page === totalPages} onClick={() => setPage(totalPages)}>
            &raquo;
          </button>
        </div>
      </div>
      {/* Pagination */}
    </div>
  </>
}
