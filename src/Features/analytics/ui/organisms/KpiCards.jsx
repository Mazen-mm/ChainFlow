import React from 'react';

const kpiList = [
  { key: 'inventoryValue', label: 'Inventory Value', color: 'bg-blue-100 text-blue-800' },
  { key: 'orderedValue', label: 'Ordered Value', color: 'bg-green-100 text-green-800' },
  { key: 'remainingBudget', label: 'Remaining Budget', color: 'bg-yellow-100 text-yellow-800' },
  { key: 'productCount', label: 'Products', color: 'bg-purple-100 text-purple-800' },
  { key: 'orderCount', label: 'Orders', color: 'bg-pink-100 text-pink-800' },
  { key: 'partnerCount', label: 'Partners', color: 'bg-indigo-100 text-indigo-800' },
];

export default function KpiCards({ kpis }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {kpiList.map(kpi => (
        <div key={kpi.key} className={`rounded shadow p-4 ${kpi.color}`}>
          <div className="text-lg font-bold">{kpi.label}</div>
          <div className="text-2xl mt-2">{kpis[kpi.key]}</div>
        </div>
      ))}
    </div>
  );
}
