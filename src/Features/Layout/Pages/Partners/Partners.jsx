
import { useState } from 'react';
import { BoxIcon, DocIcon, FilterIcon, LockIcon, MessageIcon, SearchIcon } from '../../../../assets/Icons/SVG';
import DashBtn from '../Components/Atoms/DashBtn';

export default function Partners () {
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All');

  // Sample data for partners
  const partners = [
    {
      id: 1,
      name: "Global Logistics Inc.",
      type: "Logistics Provider",
      avatar: "🚚",
      status: "online",
      lastActivity: "2 hours ago",
      connectedSince: "Jan 15, 2023",
      ordersProcessed: 1245,
      onTimeDelivery: "98.5%",
      activeShipments: 37,
      permissions: [
        { category: "Order Information", access: "Full access", icon: <BoxIcon/> },
        { category: "Order Information", access: "Limited access", icon: "🎯" },
        { category: "Order Information", access: "Full access", icon: <BoxIcon/> },
        { category: "Order Information", access: "No access", icon: "📊" }
      ],
      recentActivity: [
        { action: "Shared new shipping document", time: "2 hours ago", icon: <DocIcon fill={'#061726'}/>  },
        { action: "Updated order #GL-7829", time: "5 hours ago", icon: <BoxIcon/> },
        { action: "Modified access permissions", time: "1 day ago", icon: <LockIcon/> }
      ]
    },
    {
      id: 2,
      name: "Acme Manufacturing",
      type: "Manufacturer",
      avatar: "🏭",
      status: "offline",
      lastActivity: "A day ago",
      connectedSince: "Mar 22, 2023",
      ordersProcessed: 892,
      onTimeDelivery: "95.2%",
      activeShipments: 24,
      permissions: [
        { category: "Order Information", access: "Full access", icon: "📦" },
        { category: "Order Information", access: "Full access", icon: "🎯" },
        { category: "Order Information", access: "Limited access", icon: "📋" },
        { category: "Order Information", access: "Full access", icon: "📊" }
      ],
      recentActivity: [
        { action: "Updated production schedule", time: "1 day ago", icon: "📋" },
        { action: "Completed order #AM-5641", time: "2 days ago", icon: "📦" },
        { action: "Shared quality report", time: "3 days ago", icon: "🔒" }
      ]
    },
    {
      id: 3,
      name: "EastWest Suppliers",
      type: "Supplier",
      avatar: "📦",
      status: "online",
      lastActivity: "3 hours ago",
      connectedSince: "Feb 08, 2023",
      ordersProcessed: 1567,
      onTimeDelivery: "97.8%",
      activeShipments: 45,
      permissions: [
        { category: "Order Information", access: "Limited access", icon: "📦" },
        { category: "Order Information", access: "Full access", icon: "🎯" },
        { category: "Order Information", access: "Full access", icon: "📋" },
        { category: "Order Information", access: "No access", icon: "📊" }
      ],
      recentActivity: [
        { action: "Inventory update received", time: "3 hours ago", icon: "📋" },
        { action: "New supplier onboarded", time: "1 day ago", icon: "📦" },
        { action: "Price list updated", time: "2 days ago", icon: "🔒" }
      ]
    },
    {
      id: 4,
      name: "Metro Warehousing",
      type: "Warehouse",
      avatar: "🏢",
      status: "online",
      lastActivity: "5 hours ago",
      connectedSince: "Apr 10, 2023",
      ordersProcessed: 723,
      onTimeDelivery: "99.1%",
      activeShipments: 18,
      permissions: [
        { category: "Order Information", access: "Full access", icon: "📦" },
        { category: "Order Information", access: "Full access", icon: "🎯" },
        { category: "Order Information", access: "Full access", icon: "📋" },
        { category: "Order Information", access: "Limited access", icon: "📊" }
      ],
      recentActivity: [
        { action: "Warehouse capacity updated", time: "5 hours ago", icon: "📋" },
        { action: "Storage optimization completed", time: "8 hours ago", icon: "📦" },
        { action: "Security protocols updated", time: "1 day ago", icon: "🔒" }
      ]
    },
    {
      id: 5,
      name: "Retail Chain Co.",
      type: "Retailer",
      avatar: "🏪",
      status: "offline",
      lastActivity: "2 days ago",
      connectedSince: "May 15, 2023",
      ordersProcessed: 456,
      onTimeDelivery: "93.7%",
      activeShipments: 12,
      permissions: [
        { category: "Order Information", access: "No access", icon: "📦" },
        { category: "Order Information", access: "Limited access", icon: "🎯" },
        { category: "Order Information", access: "Full access", icon: "📋" },
        { category: "Order Information", access: "Full access", icon: "📊" }
      ],
      recentActivity: [
        { action: "Store inventory synchronized", time: "2 days ago", icon: "📋" },
        { action: "Promotion campaign launched", time: "3 days ago", icon: "📦" },
        { action: "Customer feedback analyzed", time: "4 days ago", icon: "🔒" }
      ]
    }
  ];

  const filteredPartners = partners.filter(partner => 
    partner.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (activeTab === 'All' || partner.type.includes(activeTab))
  );

  const getStatusColor = (status) => {
    return status === 'online' ? 'success' : 'secondary';
  };

  const getAccessColor = (access) => {
    switch(access) {
      case 'Full access': return 'success';
      case 'Limited access': return 'warning';
      case 'No access': return 'secondary';
      default: return 'secondary';
    }
  };

  const handleFilter = () => {
    console.log('Filter clicked');
  };





  return  <>
    <div className="row">
      {/* Left Sidebar - Partners List */}
      <div className="card col-12 col-lg-5">
        {/* Search Bar */}
        <div className='d-flex gap-2'>
          <div className="input-group">
            <span className="input-group-text"><SearchIcon/></span>
            <input type="search" className="form-control" placeholder="Search Partners..." 
              value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          </div>
          <DashBtn BtnIcon={<FilterIcon />} onClick={handleFilter} BtnColor={'bg-white'}/>
        </div>
        {/* Filter Tabs */}
        <div className="my-2">
          <ul className="nav nav-pills">
            {['All', 'Suppliers', 'Logistics', 'Retailers'].map(tab => (
              <li className="nav-item" key={tab}>
                <button className={`nav-link ${activeTab === tab ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab)}>
                  {tab}
                </button>
              </li>
            ))}
          </ul>
        </div>
        {/* Partners List */}
        <div className="overflow-auto">
          {filteredPartners.map(partner => (
            <div key={partner.id} onClick={() => setSelectedPartner(partner)}
              className={selectedPartner?.id === partner.id ? 'text-white primary' : ''}>
              <div className='d-flex align-items-center p-2 gap-2 border-bottom' style={{cursor: 'pointer'}}>
                <div className={`rounded-circle p-2 bg-${getStatusColor(partner.status)}`}></div>
                <div className="rounded-circle p-2 border border-primary">{partner.avatar}</div>
                <div className='d-flex flex-column'>
                  <p className='fw-bold'>{partner.name}</p>
                  <small>{partner.type} • {partner.lastActivity}</small>
                </div>
                <button className="btn border ms-auto"><MessageIcon/></button>
              </div>
            </div>
          ))}
        </div>
        {/* Footer Stats */}
        <div className="d-flex justify-content-between">
          <small className="text-muted">All: {partners.length}</small>
          <small className="text-muted">Online: {partners.filter(p => p.status === 'online').length}</small>
          <small className="text-muted">Pending: {Math.floor(partners.length / 3)}</small>
        </div>
      </div>
      {/* Right Panel - Partner Details */}
      <div className="card col-12 col-lg-7">
        {selectedPartner && (
          <div className="d-flex flex-column">
            {/* Header */}
            <div className="d-flex justify-content-between align-items-center">
              <div className="rounded-circle p-3 border border-primary">
                {selectedPartner.avatar}
              </div>
              <div>
                <h3 className="fw-bold">{selectedPartner.name}</h3>
                <span className="badge bg-primary">{selectedPartner.type}</span>
                <small className="text-muted">Connected since {selectedPartner.connectedSince}</small>
              </div>
              <DashBtn BtnName={'Contact'} BtnIcon={<MessageIcon/>} BtnColor={'btn-primary'} />
            </div>
            {/* Stats Cards */}
            <div className="d-flex justify-content-between my-3 gap-3">
              <div className="card whiteBg w-100 rounded-3">
                <p className='smallSize opacity-75'>Orders Processed</p>
                <h5>{selectedPartner.ordersProcessed.toLocaleString()}</h5>
              </div>
              <div className="card whiteBg w-100 rounded-3">
                <p className='smallSize opacity-75'>On-time Delivery</p>
                <h5>{selectedPartner.onTimeDelivery}</h5>
              </div>
              <div className="card whiteBg w-100 rounded-3">
                <p className='smallSize opacity-75'>Active Shipments</p>
                <h5>{selectedPartner.activeShipments}</h5>
              </div>
            </div>
            {/* Content */}
            <div className="row">
              <h5>Shared Data & Permissions</h5>
              <div>
                {selectedPartner.permissions.map((perm, index) => (
                  <div key={index} className="d-flex justify-content-between align-items-center whiteBg p-2 my-2">
                    <div className="d-flex align-items-center gap-2">
                      <span className='rounded-circle p-2 lightBg'>{perm.icon}</span>
                      <h6>{perm.category}</h6>
                    </div>
                    <div className="d-flex align-items-center gap-2">
                      <span className={`badge bg-${getAccessColor(perm.access)}`}>
                        {perm.access}
                      </span>
                      <button className="btn link-primary">Edit</button>
                    </div>
                  </div>
                ))}
              </div>
              {/* Recent Activity */}
              <div className="row">
                <h5>Recent Activity</h5>
                <div>
                  {selectedPartner.recentActivity.map((activity, index) => (
                    <div key={index} className="d-flex justify-content-between align-items-center gap-2 whiteBg p-2 my-2">
                        <span className='rounded-circle p-2 lightBg'>{activity.icon}</span>
                        <div className="flex-grow-1">
                          <p>{activity.action}</p>
                          <small className="text-muted">{activity.time}</small>
                        </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </>
};
