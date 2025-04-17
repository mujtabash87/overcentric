import React from 'react';
import overcentric from 'overcentric';

function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$0',
      period: 'Free forever',
      features: [
        '10,000 events/month',
        'Basic analytics',
        'Community support',
        '1 project'
      ]
    },
    {
      name: 'Pro',
      price: '$49',
      period: 'per month',
      features: [
        '100,000 events/month',
        'Advanced analytics',
        'Priority support',
        'Unlimited projects'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Contact us',
      features: [
        'Unlimited events',
        'Custom solutions',
        'Dedicated support',
        'SLA guarantee'
      ]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-gray-900 text-center mb-8">Simple, transparent pricing</h1>
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {plans.map((plan) => (
          <div key={plan.name} className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900">{plan.name}</h2>
            <div className="mt-4">
              <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
              <span className="text-gray-500 ml-2">{plan.period}</span>
            </div>
            <ul className="mt-6 space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center">
                  <svg className="h-5 w-5 text-green-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="ml-3 text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className="mt-8 w-full bg-indigo-600 text-white rounded-md py-2 px-4 hover:bg-indigo-700 transition-colors"
              onClick={() => overcentric.trackEvent('picked_plan', { plan: plan.name })}
            >
              Get started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
