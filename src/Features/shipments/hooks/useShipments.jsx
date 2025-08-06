import { useState } from 'react';

export function useShipments() {
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





  const filteredShipments = shipments.filter(
    s =>
      s.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredShipments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentShipments = filteredShipments.slice(startIndex, startIndex + itemsPerPage);

  return {
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    currentShipments,
    filteredShipments,
    totalPages,
    startIndex,
    itemsPerPage,
    activities
  };
}
