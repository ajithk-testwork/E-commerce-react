import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Payment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { orderItems, deliveryInfo } = location.state || { orderItems: [], deliveryInfo: {} };

    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');
    const [error, setError] = useState(null);

    // Calculate subtotal, tax, and total amount
    const calculateTotals = () => {
        const subtotal = orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const tax = subtotal * 0.1; // Example: 10% tax
        const total = subtotal + tax;
        return { subtotal, tax, total };
    };

    const { subtotal, tax, total } = calculateTotals();

    const handlePayment = (event) => {
        event.preventDefault();

        // Simulate a payment process
        if (!cardNumber || !expiryDate || !cvc) {
            setError("Please fill in all fields.");
            return;
        }

        // Simulate payment processing delay
        setTimeout(() => {
            alert("Payment Successful!");
            // Navigate to confirmation page
            navigate("/confirmation");
        }, 2000);
    };

    return (
        <div className="mx-auto max-w-[600px] px-6 py-28">
            <h2 className="text-2xl font-bold">Payment</h2>

            <h3 className="text-xl mt-4">Delivery Information</h3>
            <div className="bg-gray-100 p-4 rounded-lg">
                <p><strong>First Name:</strong> {deliveryInfo.firstname}</p>
                <p><strong>Last Name:</strong> {deliveryInfo.lastname}</p>
                <p><strong>Email:</strong> {deliveryInfo.email}</p>
                <p><strong>Phone:</strong> {deliveryInfo.phone}</p>
                <p><strong>Address:</strong></p>
                <p>{deliveryInfo.street}</p>
                <p>{deliveryInfo.city}, {deliveryInfo.state} {deliveryInfo.zipcode}</p>
                <p>{deliveryInfo.country}</p>
            </div>

            <h3 className="text-xl mt-4">Order Summary</h3>
            <table className="w-full mt-4">
                <thead>
                    <tr className="border-b border-slate-900/20">
                        <th className="text-left">Product</th>
                        <th className="text-left">Price</th>
                        <th className="text-left">Quantity</th>
                        <th className="text-left">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {orderItems.map(item => (
                        <tr key={item._id} className="border-b border-slate-900/20">
                            <td className="flex items-center py-2">
                                <img src={item.image} alt={item.name} height={50} width={50} className="rounded-lg mr-2" />
                                <span>{item.name}</span>
                            </td>
                            <td>${item.price.toFixed(2)}</td>
                            <td>{item.quantity}</td>
                            <td>${(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="mt-6">
                <div className="flex justify-between py-2">
                    <span className="font-bold">Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2">
                    <span className="font-bold">Tax (10%):</span>
                    <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between py-2 font-bold">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </div>

            {error && <p className="text-red-500">{error}</p>}

            <form onSubmit={handlePayment} className="flex flex-col mt-6">
                <input
                    type="text"
                    placeholder="Card Number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="ring-1 ring-slate-900/15 p-2 rounded-sm mb-4 outline-none"
                    required
                />
                <input
                    type="text"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="ring-1 ring-slate-900/15 p-2 rounded-sm mb-4 outline-none"
                    required
                />
                <input
                    type="text"
                    placeholder="CVC"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    className="ring-1 ring-slate-900/15 p-2 rounded-sm mb-4 outline-none"
                    required
                />
                <button type="submit" className="btn-secondary w-full rounded mt-4">
                    Pay Now
                </button>
            </form>
        </div>
    );
};

export default Payment;
