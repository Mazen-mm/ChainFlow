import React from 'react';

export default function FormButton({ nameBtn, onClick }) {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="btn btn-primary w-100"
    >
      {nameBtn}
    </button>
  );
}