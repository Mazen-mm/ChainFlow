

import { useGeneral } from '../hooks/useGeneral';
import CompanyInfoCard from '../components/organisms/CompanyInfoCard';
import SystemPreferencesCard from '../components/organisms/SystemPreferencesCard';
import { SettingIcon } from './../../../../assets/Icons/SVG';

export default function GeneralPage() {
  const { formData, handleInputChange } = useGeneral();

  return (
    <div className='row PrimaryText gap-3'>
      <div className="d-flex align-items-center gap-2 my-1">
        <SettingIcon circleStroke='currentColor' pathStroke='currentColor' fill='none'/>
        <h5 className='m-0'>General Settings</h5>
      </div>
      <small>Configure general settings for your supply chain management platform.</small>
      <hr/>
      <CompanyInfoCard />
      <SystemPreferencesCard formData={formData} onChange={handleInputChange} />
      <div className="d-flex justify-content-end my-2">
        <button className="btn btn-primary">Save Changes</button>
      </div>
    </div>
  );
}



