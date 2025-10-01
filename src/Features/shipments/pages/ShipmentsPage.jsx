

import { useShipments } from '../hooks/useShipments';
import DetailsCard from '../../../Shared/Components/Molecules/DetailsCard';
import ShipmentsToolbar from '../components/organisms/ShipmentsToolbar';
import React, { useState } from 'react';
import CreateShipmentModal from '../components/molecules/CreateShipmentModal';
import ShipmentsTableWrapper from '../components/organisms/ShipmentsTableWrapper';
import ActivityCard from '../components/atoms/ActivityCard';
import { AnalyticsIcon, ExclamIcon, InvIcon, TrellaIcon } from '../../../assets/Icons/SVG';

export default function ShipmentsPage() {
  // Modal state
  const [showModal, setShowModal] = useState(false);

  // Modal open/close handlers
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Handle shipment creation (stub)

  // const handleCreateShipment = (formData) => {
  //   // TODO: Connect to backend or update state
  //   setShowModal(false);
  // };



  const {
    currentShipments,
    activities,
    currentPage,
    totalPages,
    startIndex,
    itemsPerPage,
    filteredShipments,
    setCurrentPage
  } = useShipments();

  return (
    <>
      {/* Summary Cards */}
      <div className="row">
        <DetailsCard name="Total Shipments" count="1,247" icon={<InvIcon fill='none' stroke="#5C8DFF" />} />
        <DetailsCard name="In Transit" count="342" icon={<ExclamIcon stroke="#5C8DFF" />} />
        <DetailsCard name="Delayed" count="28" icon={<TrellaIcon fill="#5C8DFF" />} />
        <DetailsCard name="Delivered Today" count="67" icon={<AnalyticsIcon stroke="#5C8DFF" />} />
      </div>

  {/* Toolbar */}
  <ShipmentsToolbar onCreateShipment={handleOpenModal} />

  {/* Modal */}
  <CreateShipmentModal show={showModal} onClose={handleCloseModal} />
  {/* onSubmit={handleCreateShipment} */}

      {/* Main Section */}
      <div className="row">
        <div className="col-lg-5">
          <div className="card h-100">
            <h5 className="PrimaryText">Live Tracking</h5>
            <iframe
              src="https://www.google.com/maps/embed?..."
              className="w-100 h-100"
              style={{ minHeight: '300px' }}
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div className="col-lg-7">
          <ShipmentsTableWrapper
            currentShipments={currentShipments}
            currentPage={currentPage}
            totalPages={totalPages}
            startIndex={startIndex}
            itemsPerPage={itemsPerPage}
            filteredShipments={filteredShipments}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>

      {/* Activity Feed */}
      <div className="row mt-3">
        <h5 className="PrimaryText">Activity</h5>
        {activities.map((a, i) => (
          <div className="col-md-3 mb-3" key={i}>
            <ActivityCard activity={a} />
          </div>
        ))}
      </div>
    </>
  );
}
