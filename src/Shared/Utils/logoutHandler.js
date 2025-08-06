// src/Shared/Utils/logoutHandler.js
import { useDispatch } from 'react-redux';
import { logout } from '../redux/slices/authSlice';

// This is a hook to be used in components
export function useLogoutHandler() {
  const dispatch = useDispatch();
  return () => {
    dispatch(logout());
    // Optionally, clear tokens or redirect
    localStorage.removeItem('token');
    window.location.href = '/';
  };
}

// For non-hook usage (if needed)
export function handleLogout(dispatch) {
  dispatch(logout());
  localStorage.removeItem('token');
  window.location.href = '/';
}
