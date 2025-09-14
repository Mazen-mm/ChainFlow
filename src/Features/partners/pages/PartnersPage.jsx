import { useState } from 'react';
import PartnerListItem from '../components/atoms/PartnerListItem';
import PartnerDetailsPanel from '../components/organisms/PartnerDetailsPanel';
import { SearchIcon, FilterIcon } from '../../../assets/Icons/SVG';
import DashBtn from '../../../Shared/Components/Atoms/DashBtn';
import usePartners from '../utils/usePartnerData';

export default function PartnersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('All');
  const [selectedPartner, setSelectedPartner] = useState(null);
  const {partners} = usePartners();

  const filteredPartners = partners.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (activeTab === 'All' || p.type.includes(activeTab))
  );

  return (
    <div className="row">
      <div className="card col-12 col-lg-5">
        <div className="d-flex gap-2">
          <div className="input-group">
            <span className="input-group-text"><SearchIcon /></span>
            <input type="search" className="form-control" placeholder="Search Partners..." value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}/>
          </div>
          <DashBtn BtnIcon={<FilterIcon />} BtnColor={'bg-white'} onClick={() => {}} />
        </div>

        <ul className="nav nav-pills my-2">
          {['All', 'Suppliers', 'Logistics', 'Retailers'].map( tab => (
            <li className="nav-item" key={tab}>
              <button className={`nav-link ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)}>
                {tab}
              </button>
            </li>
          ))}
        </ul>

        <div className="overflow-auto">
          {filteredPartners.map(partner => (
            <PartnerListItem key={partner.id} partner={partner} selected={selectedPartner?.id === partner.id}
              onClick={() => setSelectedPartner(partner)} />
          ))}
        </div>
      </div>

      <div className="card col-12 col-lg-7">
        {selectedPartner && <PartnerDetailsPanel partner={selectedPartner} />}
      </div>
    </div>
  );
}
