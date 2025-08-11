import React, { useState } from 'react';
import SubscriptionCheckoutFormRow from '../molecules/SubscriptionCheckoutFormRow';

export default function SubscriptionCheckoutForm({ onSubmit, loading }) {
  const [planId, setPlanId] = useState('plan_basic');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ planId, paymentMethod });
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <SubscriptionCheckoutFormRow
        planId={planId}
        setPlanId={setPlanId}
        paymentMethod={paymentMethod}
        setPaymentMethod={setPaymentMethod}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
        disabled={loading}
      >
        {loading ? 'Processing...' : 'Checkout'}
      </button>
    </form>
  );
}
