import { useState } from 'react';

export const useUserProfile = () => {
  const [profileData, setProfileData] = useState({
    firstName: 'Abdullah',
    lastName: 'Alaa',
    dateOfBirth: '16/09/2003',
    country: 'Egypt',
    email: 'abdullah@mailservice.com',
    phoneNumber: '+20 XX XXXX XXXX',
    username: 'abdullah169'
  });

  const [editMode, setEditMode] = useState({});
  const [tempData, setTempData] = useState({});

  const handleEditToggle = (field) => {
    if (editMode[field]) {
      setProfileData(prev => ({
        ...prev,
        [field]: tempData[field] || prev[field]
      }));
      setTempData(prev => {
        const newData = { ...prev };
        delete newData[field];
        return newData;
      });
    } else {
      setTempData(prev => ({
        ...prev,
        [field]: profileData[field]
      }));
    }

    setEditMode(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const handleInputChange = (field, value) => {
    setTempData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return { profileData, tempData, editMode, handleEditToggle, handleInputChange };
};
