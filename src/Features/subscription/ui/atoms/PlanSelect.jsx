import React from 'react';

const plans = [
  { value: 'plan_basic', label: 'Basic' },
  { value: 'plan_premium', label: 'Premium' },
];

export default function PlanSelect({ value, onChange }) {
  return (
    <select
      className="border rounded px-2 py-1"
      value={value}
      onChange={e => onChange(e.target.value)}
    >
      {plans.map(plan => (
        <option key={plan.value} value={plan.value}>{plan.label}</option>
      ))}
    </select>
  );
}
