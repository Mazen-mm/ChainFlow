import React from 'react';

export default function FormButton({ nameBtn, onClick , disabled }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      disabled={disabled}
      className="btn btn-primary w-100"
    >
      {nameBtn}
    </button>
  );
}