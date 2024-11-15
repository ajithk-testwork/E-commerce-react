import React from 'react';
import { useNavigate } from 'react-router-dom';

const Confirmation = () => {
    const navigate = useNavigate();

    return (
        <div className="mx-auto max-w-[600px] px-6 py-28">
            <h1 className="text-3xl font-bold text-green-600 mt-20">Thank You!</h1>
            <p className="mt-4 text-lg text-gray-700">
                Your payment has been processed successfully.
            </p>
            <p className="mt-2 text-md text-gray-500">
                We will contact you shortly with your order details.
            </p>
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
                <p className="text-md text-green-700">
                    If you have any questions, feel free to reach out to our support team!
                </p>
            </div>
            <button 
                onClick={() => navigate('/')} 
                className="mt-6 btn-secondary w-full rounded"
            >
                Back To Home
            </button>
        </div>
    );
};

export default Confirmation;
