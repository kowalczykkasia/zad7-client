import React from 'react';

function SuccessDialog({ onClose }) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl mb-4">Payment Successful!</h2>
          <p>Your payment has been processed successfully.</p>
          <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    );
  }

  export default SuccessDialog;