import { useState } from 'react';
import { BillingIcon } from '../../../assets/Icons/SVG';
import DashBtn from './../../../Shared/Components/Atoms/DashBtn';

export default function BillingSubscription () {
  const [paymentMethods, setPaymentMethods] = useState([
    {
      id: 1,
      type: 'visa',
      name: 'Abdullah Alaa Soliman',
      number: 'XXXX XXXX XXXX 1234',
      expires: '11/2026',
      isDefault: false
    },
    {
      id: 2,
      type: 'mastercard',
      name: 'Abdullah Alaa Soliman',
      number: 'XXXX XXXX XXXX 1234',
      expires: '11/2026',
      isDefault: true
    }
  ]);

  const [subscription, setSubscription] = useState({
    plan: 'Professional',
    price: 999,
    currency: 'EGP',
    period: 'month',
    daysRemaining: 36,
    autoRenewal: true
  });

  const handleSetDefault = (id) => {
    setPaymentMethods(methods => 
      methods.map(method => ({
        ...method,
        isDefault: method.id === id
      }))
    );
  };

  const handleRemovePayment = (id) => {
    if (paymentMethods.length > 1) {
      setPaymentMethods(methods => methods.filter(method => method.id !== id));
    } else {
      alert('You must have at least one payment method');
    }
  };

  const handleAutoRenewalToggle = () => {
    setSubscription(prev => ({
      ...prev,
      autoRenewal: !prev.autoRenewal
    }));
  };

  const handleRecharge = () => {
    alert('Redirecting to payment...');
  };

  const handleCancel = () => {
    if (window.confirm('Are you sure you want to cancel your subscription?')) {
      alert('Subscription cancelled');
    }
  };

  const getCardIcon = (type) => {
    switch (type) {
      case 'visa':
        return (
          <div className="bg-primary text-white px-2 py-1 rounded fw-bold" style={{ fontSize: '12px' }}>
            VISA
          </div>
        );
      case 'mastercard':
        return (
          <div className="d-flex">
            <div className="bg-danger rounded-circle" style={{ width: '20px', height: '20px', marginRight: '-8px' }}></div>
            <div className="bg-warning rounded-circle" style={{ width: '20px', height: '20px' }}></div>
          </div>
        );
      default:
        return null;
    }
  };

  return  <>
  <div className="row PrimaryText gap-3">
    {/* Header */}
    <div className="d-flex align-items-center gap-2 my-1">
      <BillingIcon stroke="currentColor" />
      <h5 className="m-0">Billing & Subscription</h5>
    </div>
    <small>Manage your payment methods and plan subscriptions</small>
    <hr />
    {/* Payment Methods Section */}
    <div className="card lightBg">
      <div className="card-body">
        <h5 className="fw-bold">Payment methods</h5>
        {paymentMethods.map((method) => (
          <div key={method.id} className="d-flex align-items-center justify-content-between py-3 border-bottom">
            <div className="d-flex align-items-center">
              <div className="me-3">
                {getCardIcon(method.type)}
              </div>
              <div>
                <div className="fw-semibold text-dark mb-1">
                  {method.name} {method.number}
                </div>
                <div className="text-muted small">
                  Expires {method.expires}
                </div>
              </div>
            </div>
            
            <div className="d-flex align-items-center gap-3">
              {method.isDefault ? <span className="bg-secondary bg-opacity-10 p-2 rounded-4">Default</span> : 
                <DashBtn BtnName="Set as default" onClick={() => handleSetDefault(method.id)} /> }
              <DashBtn BtnName="Remove" onClick={() => handleRemovePayment(method.id)} 
                BtnStyle={{backgroundColor : '#F6D2D2'}} BtnColor="text-danger" />
            </div>
          </div>
        ))}
      </div>
    </div>
    {/* Subscription Section */}
    <div className="card p-3">
      <h5 className="fw-bold">Subscription</h5>
      {/* Current Plan */}
      <div className="linearSubscription rounded-4 p-4 my-3">
        <div className="d-flex align-items-center justify-content-between">
          <div>
            <h4 className="fw-bold text-primary mb-2">{subscription.plan}</h4>
            <div className="d-flex align-items-baseline">
              <span className="h3 fw-bold text-dark me-1">{subscription.price}</span>
              <span className="text-muted">/{subscription.period}</span>
            </div>
            <div className="text-muted small mt-2">
              {subscription.daysRemaining} days remaining
            </div>
          </div>
          
          <div className="d-flex gap-2">
            <DashBtn BtnName='Recharge' onClick={handleRecharge} />
            <DashBtn BtnName="Cancel" BtnStyle={{backgroundColor : '#F6D2D2'}} BtnColor="text-danger" 
              onClick={handleCancel}/>
          </div>
        </div>
      </div>
      {/* Auto Renewal Toggle */}
      <div className="d-flex align-items-center justify-content-between">
        <div className="fw-semibold text-dark mb-1">Enable Subscription auto renewal</div>
        <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" id="autoRenewal"
            onChange={handleAutoRenewalToggle} checked={subscription.autoRenewal}
            style={{ width:'3rem', height: '1.5rem'}} />
          <label className="form-check-label" htmlFor="autoRenewal"></label>
        </div>
      </div>
    </div>
  </div>
  </>
};
