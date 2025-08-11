import React from 'react';

export default function DrawerOverlay({ open, onClose, children, width = 420 }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      right: 0,
      width: '100vw',
      height: '100vh',
      zIndex: 2000,
      background: 'rgba(0,0,0,0.25)',
      display: 'flex',
      justifyContent: 'flex-end',
    }}>
      <div style={{
        width: width,
        maxWidth: '100vw',
        height: '100%',
        background: '#f7f8ff',
        boxShadow: '-2px 0 16px rgba(0,0,0,0.08)',
        position: 'relative',
        overflowY: 'auto',
        transition: 'transform 0.3s',
      }}>
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 16,
            right: 16,
            background: 'none',
            border: 'none',
            fontSize: 24,
            cursor: 'pointer',
            zIndex: 10,
          }}
          aria-label="Close"
        >
          ×
        </button>
        <div style={{ padding: '32px 32px 24px 32px', minHeight: '100%' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
