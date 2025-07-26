import { useState } from 'react'
import { SettingIcon } from '../../../../../assets/Icons/SVG';

export default function General() {

  const [formData, setFormData] = useState({
    companyName: 'Arasaka Corp',
    businessType: 'Manufacturing',
    companyAddress: '123 Corporations plaza City centre, Night City, 90210',
    taxId: 'US123456789',
    industry: 'Electronics',
    dateFormat: 'MM/DD/YYYY',
    timeFormat: '12-hour (AM/PM)',
    timeZone: 'UTC (GMT+0)',
    currency: 'USD ($)',
    language: 'English',
    unitsOfMeasurement: 'Metric (kg, cm)'
  });
  
  
  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };




  return <>
    <div className='row PrimaryText gap-3'>
      {/* Header */}
      <div className="d-flex align-items-center gap-2 my-1">
        <SettingIcon circleStroke='currentColor' pathStroke='currentColor' fill='none'/>
        <h5 className='m-0'>General Settings</h5>
      </div>
      <small>Configure general settings for your supply chain management platform.</small>
      <hr/>
      {/* Company Information Section */}
      <div className="card rounded-3 whiteBg">
        <h5>Company Information</h5>
        <div className="row my-2">
          <div className="col-md-6 my-1">
            <label className="fw-semibold">Company Name</label>
            <input type="text" className="form-control" placeholder='Arasaka Corp'/>
          </div>
          <div className="col-md-6 my-1">
            <label className="fw-semibold">Business Type</label>
            <input type="text" className="form-control" placeholder='Manufacturing'/>
          </div>
          <div className="col-md-12 my-1">
            <label className="fw-semibold">Company Address</label>
            <input type="text" className="form-control" 
              placeholder='123 Corporations plaza City centre, Night City, 90210'/>
          </div>
          <div className="col-md-6 my-1">
            <label className="fw-semibold">Tax ID / VAT Number</label>
            <input type="text" className="form-control" placeholder='US123456789'/>
          </div>
          <div className="col-md-6 my-1">
            <label className="fw-semibold">Industry</label>
            <input type="text" className="form-control" placeholder='Electronics'/>
          </div>
        </div>
      </div>
      {/* System Preferences Section */}
      <div className="card rounded-2 d-flex gap-2">
        <h5>System Preferences</h5>
        <div className="d-flex justify-content-between">
          <div>
            <label className="fw-semibold">Date Format</label>
            <p className="PrimaryText smallSize opacity-75 fw-bold">Select your preferred date format</p>
          </div>
          <select className="form-select w-auto" value={formData.dateFormat}
            onChange={(e) => handleInputChange('dateFormat', e.target.value)}>
            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
          </select>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <label className="fw-semibold">Time Format</label>
            <p className="PrimaryText smallSize opacity-75 fw-bold">Select your preferred time format</p>
          </div>
          <select className="form-select w-auto" value={formData.timeFormat}
            onChange={(e) => handleInputChange('timeFormat', e.target.value)}>
            <option value="12-hour (AM/PM)">12-hour (AM/PM)</option>
            <option value="24-hour">24-hour</option>
          </select>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <label className="fw-semibold">Time Zone</label>
            <p className="PrimaryText smallSize opacity-75 fw-bold">Set your local time zone</p>
          </div>
          <select className="form-select w-auto" value={formData.timeZone}
            onChange={(e) => handleInputChange('timeZone', e.target.value)}>
            <option value="UTC (GMT+0)">UTC (GMT+0)</option>
            <option value="EST (GMT-5)">EST (GMT-5)</option>
            <option value="PST (GMT-8)">PST (GMT-8)</option>
            <option value="GMT+1">GMT+1</option>
          </select>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <label className="fw-semibold">Currency</label>
            <p className="PrimaryText smallSize opacity-75 fw-bold">Default currency for transactions</p>
          </div>
          <select className="form-select w-auto" value={formData.currency}
            onChange={(e) => handleInputChange('currency', e.target.value)}>
            <option value="USD ($)">USD ($)</option>
            <option value="EUR (€)">EUR (€)</option>
            <option value="GBP (£)">GBP (£)</option>
            <option value="JPY (¥)">JPY (¥)</option>
          </select>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <label className='fw-semibold'>Language</label>
            <p className="PrimaryText smallSize opacity-75 fw-bold">Interface language</p>
          </div>
          <select className="form-select w-auto" value={formData.language}
            onChange={(e) => handleInputChange('language', e.target.value)}>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <label className="fw-semibold">Units of Measurement</label>
            <p className="PrimaryText smallSize opacity-75 fw-bold">Select your preferred measurement system</p>
          </div>
          <select className="form-select w-auto" value={formData.unitsOfMeasurement}
            onChange={(e) => handleInputChange('unitsOfMeasurement', e.target.value)}>
            <option value="Metric (kg, cm)">Metric (kg, cm)</option>
            <option value="Imperial (lb, in)">Imperial (lb, in)</option>
          </select>
        </div>
      </div>
      {/* Save Button */}
      <div className="d-flex justify-content-end my-2">
        <button className="btn btn-primary">
          Save Changes
        </button>
      </div>
    </div>
  </>
}
