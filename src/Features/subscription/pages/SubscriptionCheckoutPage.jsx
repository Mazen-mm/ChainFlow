import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkoutSubscription } from '../slice';
import SubscriptionCheckoutForm from '../ui/organisms/SubscriptionCheckoutForm';

export default function SubscriptionCheckoutPage() {
  const dispatch = useDispatch();
  const { loading, message, error } = useSelector(state => state.subscription);

  const handleCheckout = (data) => {
    dispatch(checkoutSubscription(data));
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Subscription Checkout</h1>
      <SubscriptionCheckoutForm onSubmit={handleCheckout} loading={loading} />
      {message && <div className="mt-4 text-green-700">{message}</div>}
      {error && <div className="mt-4 text-red-600">{error}</div>}
    </div>
  );
}
