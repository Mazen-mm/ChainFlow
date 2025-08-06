import { useState } from 'react';

export default function useSecurity() {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const connectedDevices = [
    { id: 1, name: 'Zen Browser', location: 'Egypt, Beni suef', lastAccess: 'Current session', iconBg: '#000' },
    { id: 2, name: 'Arc browser', location: 'Egypt, Beni suef', lastAccess: '1 month ago', iconBg: '#FF6B6B' },
    { id: 3, name: 'Brave browser', location: 'Egypt, Beni suef', lastAccess: '9 month ago', iconBg: '#FF6B35' },
  ];

  const toggleTwoFactor = () => setTwoFactorEnabled(prev => !prev);
  const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    setPasswordForm({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  const onPasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordForm(prev => ({ ...prev, [name]: value }));
  };

  const submitPasswordChange = () => {
    const { currentPassword, newPassword, confirmPassword } = passwordForm;
    if (!currentPassword || !newPassword || !confirmPassword) return alert('Please fill in all fields');
    if (newPassword !== confirmPassword) return alert('New passwords do not match');
    console.log('Change password:', { currentPassword, newPassword });
    alert('Password changed successfully!');
    closeModal();
  };

  const removeDevice = (id) => {
    console.log('Remove device:', id);
    alert('Device removed');
  };

  return {
    twoFactorEnabled,
    showModal,
    passwordForm,
    connectedDevices,
    toggleTwoFactor,
    openModal,
    closeModal,
    onPasswordChange,
    submitPasswordChange,
    removeDevice,
  };
}
