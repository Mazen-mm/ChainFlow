import React from 'react';
import PlanSelect from '../atoms/PlanSelect';

export default function SubscriptionCheckoutFormRow({ planId, setPlanId, paymentMethod, setPaymentMethod }) {
  return (
    <div className="flex gap-2 items-center mb-2">
      <PlanSelect value={planId} onChange={setPlanId} />
      <input
        className="border rounded px-2 py-1 flex-1"
        type="text"
        placeholder="Payment Method"
        value={paymentMethod}
        onChange={e => setPaymentMethod(e.target.value)}
      />
    </div>
  );
}
