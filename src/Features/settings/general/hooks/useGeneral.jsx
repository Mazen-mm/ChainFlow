import { useState } from 'react';

export const useGeneral = () => {
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
    unitsOfMeasurement: 'Metric (kg, cm)',
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return { formData, handleInputChange };
};
