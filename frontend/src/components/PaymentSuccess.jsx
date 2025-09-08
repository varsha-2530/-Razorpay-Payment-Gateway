import React from 'react';
import { useLocation } from 'react-router-dom';

const PaymentSuccess = () => {
  const query = new URLSearchParams(useLocation().search);
  const reference = query.get("reference");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="text-green-600 text-5xl mb-4">🎉</div>
        <h1 className="text-3xl font-bold text-green-700 mb-2">Payment Successful!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your payment has been received successfully.
        </p>

        {reference && (
          <div className="bg-green-50 border border-green-200 rounded-md p-4 mt-4">
            <p className="text-sm text-green-800 font-medium mb-1">Transaction Reference</p>
            <p className="text-sm font-mono text-green-900 break-all">{reference}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentSuccess;
