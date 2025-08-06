// src/features/shipments/components/ShipmentsToolbar.js
import DashBtn from '../../../../Shared/Components/Atoms/DashBtn';
import { FilterIcon, ExportIcon, PlusIcon, SearchIcon } from '../../../../assets/Icons/SVG';
import { useShipments } from '../../hooks/useShipments';

export default function ShipmentsToolbar() {
  const { searchTerm, setSearchTerm } = useShipments();

  return (
    <div className="row align-items-center my-2">
      <div className="col-md-7">
        <div className="input-group">
          <span className="input-group-text whiteBg"><SearchIcon /></span>
          <input
            type="search"
            className="form-control whiteBg"
            placeholder="Search Shipments..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      <div className="col-md-5 d-flex justify-content-between">
        <DashBtn BtnName="Create Shipment" BtnIcon={<PlusIcon />} BtnColor="btn-primary" />
        <DashBtn BtnName="Export" BtnIcon={<ExportIcon />} />
        <DashBtn BtnName="Filter" BtnIcon={<FilterIcon />} />
      </div>
    </div>
  );
}
