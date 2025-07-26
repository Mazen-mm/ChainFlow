import { useState } from 'react';
import DetailsCard from '../Components/Molecules/DetailsCard';
import { AnalyticsIcon, ExclamIcon, ExportIcon, FilterIcon, InvIcon, PlusIcon, SearchIcon, TrellaIcon } from '../../../../assets/Icons/SVG';
import DashBtn from '../Components/Atoms/DashBtn';
import ShipTable from '../Components/Templates/ShipTable';

export default function Shipments () {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const itemsPerPage = 7;

  const shipments = [
    {
      id: 'SHP-29871',
      origin: 'Chicago, IL',
      destination: 'Atlanta, GA',
      date: '03/22/2025',
      status: 'arrived',
      carrier: 'FastFreight Inc.',
      eta: 'Jun 15, 2023 - 14:30'
    },
    {
      id: 'SHP-29872',
      origin: 'Chicago, IL',
      destination: 'Atlanta, GA',
      date: '03/22/2025',
      status: 'departed',
      carrier: 'FastFreight Inc.',
      eta: 'Jun 15, 2023 - 14:30',
      selected: true
    },
    {
      id: 'SHP-29873',
      origin: 'Atlanta, GA',
      destination: 'Chicago, IL',
      date: '03/22/2025',
      status: 'loading',
      carrier: 'FastFreight Inc.',
      eta: 'Jun 15, 2023 - 14:30'
    },
    {
      id: 'SHP-29874',
      origin: 'Chicago, IL',
      destination: 'Atlanta, GA',
      date: '03/22/2025',
      status: 'departed',
      carrier: 'FastFreight Inc.',
      eta: 'Jun 15, 2023 - 14:30'
    },
    {
      id: 'SHP-29875',
      origin: 'Chicago, IL',
      destination: 'Atlanta, GA',
      date: '03/22/2025',
      status: 'lost',
      carrier: 'FastFreight Inc.',
      eta: 'Jun 15, 2023 - 14:30'
    },
    {
      id: 'SHP-29876',
      origin: 'Chicago, IL',
      destination: 'Atlanta, GA',
      date: '03/22/2025',
      status: 'departed',
      carrier: 'FastFreight Inc.',
      eta: 'Jun 15, 2023 - 14:30'
    },
    {
      id: 'SHP-29877',
      origin: 'Chicago, IL',
      destination: 'Atlanta, GA',
      date: '03/22/2025',
      status: 'departed',
      carrier: 'FastFreight Inc.',
      eta: 'Jun 15, 2023 - 14:30'
    },
    {
      id: 'SHP-29878',
      origin: 'New York, NY',
      destination: 'Miami, FL',
      date: '03/22/2025',
      status: 'loading',
      carrier: 'FastFreight Inc.',
      eta: 'Jun 15, 2023 - 14:30'
    },
    {
      id: 'SHP-29879',
      origin: 'Los Angeles, CA',
      destination: 'Seattle, WA',
      date: '03/22/2025',
      status: 'arrived',
      carrier: 'FastFreight Inc.',
      eta: 'Jun 15, 2023 - 14:30'
    }
  ];

  const activities = [
    {
      id: 'SHP-29872',
      type: 'status_change',
      title: 'Status changed to Delayed',
      subtitle: 'Weather conditions',
      icon: 'fas fa-exclamation-triangle',
      color: 'danger'
    },
    {
      id: 'SHP-29871',
      type: 'location_update',
      title: 'Location updated',
      subtitle: 'GPS tracking update',
      icon: 'fas fa-map-marker-alt',
      color: 'primary'
    },
    {
      id: 'SHP-29870',
      type: 'eta_update',
      title: 'ETA updated',
      subtitle: 'Traffic conditions',
      icon: 'fas fa-clock',
      color: 'info'
    },
    {
      id: 'SHP-29869',
      type: 'delivery_proof',
      title: 'Proof of Delivery uploaded',
      subtitle: 'Delivery completed',
      icon: 'fas fa-check-circle',
      color: 'success'
    }
  ];

  // Filter shipments based on search term
  const filteredShipments = shipments.filter(shipment =>
    shipment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shipment.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
    shipment.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination
  const totalPages = Math.ceil(filteredShipments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentShipments = filteredShipments.slice(startIndex, startIndex + itemsPerPage);


  const handleExport = () => {
    console.log('Export clicked');
  };

  const handleFilter = () => {
    console.log('Filter clicked');
  };


// Add this state to your existing useState declarations
const [showCreateModal, setShowCreateModal] = useState(false);
const [newShipment, setNewShipment] = useState({
  origin: '',
  destination: '',
  carrier: '',
  eta: ''
});

// Update your handleCreateShipment function
const handleCreateShipment = () => {
  setShowCreateModal(true);
};

// Add these new functions
const handleCloseModal = () => {
  setShowCreateModal(false);
  setNewShipment({
    origin: '',
    destination: '',
    carrier: '',
    eta: ''
  });
};

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setNewShipment(prev => ({
    ...prev,
    [name]: value
  }));
};

const handleSubmitShipment = (e) => {
  e.preventDefault();
  // Generate new shipment ID
  const newId = `SHP-${29880 + shipments.length}`;
  const today = new Date().toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: '2-digit', 
    day: '2-digit' 
  });
  
  const shipmentData = {
    id: newId,
    origin: newShipment.origin,
    destination: newShipment.destination,
    date: today,
    status: 'loading',
    carrier: newShipment.carrier,
    eta: newShipment.eta
  };
  
  // Add to shipments array (you'll need to make shipments a state variable)
  console.log('New shipment created:', shipmentData);
  
  // Close modal
  handleCloseModal();
};


return  <>
  {/* Create Shipment Modal */}
  {showCreateModal && (
    <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Create New Shipment</h5>
            <button type="button" className="btn-close" onClick={handleCloseModal}></button>
          </div>
          <form onSubmit={handleSubmitShipment}>
            <div className="row px-3 g-1">

              <label htmlFor="origin">Origin</label>
              <input type="text" className="form-control" id="origin" name="origin" required
                value={newShipment.origin} onChange={handleInputChange} placeholder="e.g., Chicago, IL" />

              <label htmlFor="destination">Destination</label>
              <input type="text" className="form-control" id="destination" name="destination" required
                value={newShipment.destination} onChange={handleInputChange} placeholder="e.g., Atlanta, GA" />

              <label htmlFor="carrier">Carrier</label>
              <input type="text" className="form-control" id="carrier" name="carrier" required
                value={newShipment.carrier} onChange={handleInputChange} placeholder="e.g., FastFreight Inc." />

              <label htmlFor="eta">ETA</label>
              <input type="datetime-local" className="form-control" id="eta" name="eta"
                value={newShipment.eta} onChange={handleInputChange} required />

              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Cancel</button>
                <button type="submit" className="btn btn-primary" onClick={handleSubmitShipment}>Create Shipment</button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  )}
  {/* Details Card */}
  <div className="row">
    <DetailsCard detailName={'Total Shipments'} detailNum={'1,247'} icon={<InvIcon fill='none' stroke={'#5C8DFF'}/>} />
    <DetailsCard detailName={'In Transit'} detailNum={'342'} icon={<ExclamIcon stroke='#5C8DFF'/>} />
    <DetailsCard detailName={'Delayed'}  detailNum={'28'} icon={<TrellaIcon fill={'#5C8DFF'}/>}/>
    <DetailsCard detailName={'Deliverd Today'}  detailNum={'67'} icon={<AnalyticsIcon stroke='#5C8DFF'/>} />
  </div>
  {/* Buttons */}
  <div className="row align-items-center my-2">
    <div className="col-md-7">
      <div className="input-group">
        <span className="input-group-text whiteBg"><SearchIcon /></span>
        <input type="search" className="form-control whiteBg" placeholder="Search Shipments..."
          value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      </div>
    </div>
    <div className="col-md-5">
      <div className="d-flex justify-content-between">
        <DashBtn BtnName="Create Shipment" BtnIcon={<PlusIcon />} BtnColor='btn-primary' onClick={handleCreateShipment}/>
        <DashBtn BtnName="Export" BtnIcon={<ExportIcon />} onClick={handleExport}/>
        <DashBtn BtnName="Filter" BtnIcon={<FilterIcon />} onClick={handleFilter}/>
      </div>
    </div>
  </div>
  {/* Main Content */}
  <div className="row">
    {/* Live Tracking */}
    <div className="col-lg-5">
      <div className="card h-100">
        <h5 className='PrimaryText'>Live Tracking</h5>
          {/* Map Placeholder */}
          <div className="position-relative" style={{ height: '300px'}}>
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center">
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13818.128142487525!2d31.319848499999996!3d30.02159075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2seg!4v1752837434175!5m2!1sen!2seg" 
                width="100%" height="100%" loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
            
            {/* Tracking Info */}
            <div className="position-absolute start-50 translate-middle-x">
              <div className="bg-white px-2 pb-1 rounded-2">
                <span className="badge bg-primary me-2">Departed</span>
                <strong>SHP-29872</strong>
              </div>
            </div>
          </div><hr />
          {/* Tracking Details */}
            <div className="row">
              <div className="col-6">
                <p className="small text-muted">Origin</p>
                <p className="fw-bold">Chicago, IL</p>
              </div>
              <div className="col-6">
                <p className="small text-muted">Destination</p>
                <p className="fw-bold">Atlanta, GA</p>
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-6">
                <p className="small text-muted">Carrier</p>
                <p className="fw-bold">FastFreight Inc.</p>
              </div>
              <div className="col-6">
                <p className="small text-muted">ETA</p>
                <p className="fw-bold">Jun 15, 2023 - 14:30</p>
              </div>
            </div>
      </div>
    </div>
    {/* Shipments Table */}
    <div className="col-lg-7">
      <div className="card h-100">
        <h5 className='PrimaryText'>Shipments</h5>
        <ShipTable shipments={currentShipments}/>
          {/* Pagination */}
          <div className="d-flex justify-content-between align-items-center p-3">
            <small className="text-muted">
              Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredShipments.length)} 
              of {filteredShipments.length} entries
            </small>
            <nav>
              <ul className="pagination pagination-sm mb-0">
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(1)}>
                    &laquo;
                  </button>
                </li>
                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>
                    &laquo;
                  </button>
                </li>
                {[...Array(totalPages)].map((_, i) => (
                  <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
                    <button className="page-link" onClick={() => setCurrentPage(i + 1)}>
                      {i + 1}
                    </button>
                  </li>
                ))}
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>
                    &raquo;
                  </button>
                </li>
                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                  <button className="page-link" onClick={() => setCurrentPage(totalPages)}>
                    &raquo;
                  </button>
                </li>
              </ul>
            </nav>
          </div>
      </div>
    </div>
  </div>
  {/* Activity Feed */}
  <div className="row mt-3">
    <h5 className='PrimaryText'>Activity</h5>
    {activities.map((activity, index) => (
      <div key={index} className="col-md-3 mb-3">
        <div className={`card border-1 rounded-2 h-100 bg-${activity.color === 'danger' ? 'danger' : activity.color === 'success' ? 'success' : activity.color === 'info' ? 'info' : 'primary'} bg-opacity-10`}>
            <div className="d-flex align-items-start">
              <div className={`me-3 text-${activity.color}`}>
                <ExclamIcon stroke={'red'}/>
              </div>
              <div>
                <h6>{activity.id}: {activity.title}</h6>
                <p>{activity.subtitle}</p>
              </div>
            </div>
        </div>
      </div>
    ))}
  </div>
</>
};



