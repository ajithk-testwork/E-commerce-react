import React, { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const { all_products, cartItems, getTotalCartAmount } = useContext(ShopContext);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });
  
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const placeOrder = (event) => {
    event.preventDefault();

    // Create order items from the cart
    let orderItems = [];
    all_products.forEach((item) => {
      if (cartItems[item._id] > 0) {
        orderItems.push({ ...item, quantity: cartItems[item._id] });
      }
    });

    console.log("Order Items: ", orderItems);
    console.log("Delivery Information: ", data);

    // Navigate to the payment page and pass order data via state
    navigate("/payment", { state: { orderItems, deliveryInfo: data } });
  };

  return (
    <div className="mx-auto max-w-[1440px] px-6 lg:px-12 py-28 xl:py-32">
      <form onSubmit={placeOrder} className="flex flex-col xl:flex-row gap-20 xl:gap-28">
        {/* Delivery Information Fields */}
        <div className="flex flex-1 flex-col gap-3 text-[95%]">
          <h3 className="text-[28px] font-[700] leading-[120%] mb-4">Delivery Information</h3>
          <div className="flex gap-3">
            <input
              onChange={onChangeHandler}
              value={data.firstname}
              type="text"
              name="firstname"
              placeholder="First Name"
              required
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
            <input
              onChange={onChangeHandler}
              value={data.lastname}
              type="text"
              name="lastname"
              placeholder="Last Name"
              required
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none w-1/2"
            />
          </div>
          <input
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            name="email"
            placeholder="Email"
            required
            className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none"
          />
          <input
            onChange={onChangeHandler}
            value={data.phone}
            type="text"
            name="phone"
            placeholder="Phone Number"
            required
            className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none"
          />
          <input
            onChange={onChangeHandler}
            value={data.street}
            type="text"
            name="street"
            placeholder="Street"
            required
            className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none"
          />
          <div className="flex gap-3">
            <input
              onChange={onChangeHandler}
              value={data.city}
              type="text"
              name="city"
              placeholder="City"
              required
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none"
            />
            <input
              onChange={onChangeHandler}
              value={data.state}
              type="text"
              name="state"
              placeholder="State"
              required
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none"
            />
          </div>
          <div className="flex gap-3">
            <input
              onChange={onChangeHandler}
              value={data.zipcode}
              type="text"
              name="zipcode"
              placeholder="Zip Code"
              required
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none"
            />
            <input
              onChange={onChangeHandler}
              value={data.country}
              type="text"
              name="country"
              placeholder="Country"
              required
              className="ring-1 ring-slate-900/15 p-1 pl-3 rounded-sm outline-none"
            />
          </div>
        </div>
        
        {/* Summary Section */}
        <div className="flex flex-1 flex-col">
          <div className="flex flex-col gap-2">
            <h4 className="text-[22px] font-[700]">Summary</h4>
            <div>
              <div className="flex items-center justify-between py-3">
                <h4 className="text-[16px] font-[500]">SubTotal:</h4>
                <h4 className="text-gray-30 font-semibold">${getTotalCartAmount()}</h4>
              </div>
              <hr className="h-[2px] bg-slate-900/15 border-none outline-none" />
              <div className="flex items-center justify-between py-3">
                <h4 className="text-[16px] font-[500]">Shipping Fee:</h4>
                <h4 className="text-gray-30 font-semibold">${getTotalCartAmount() === 0 ? 0 : 15}</h4>
              </div>
              <hr className="h-[2px] bg-slate-900/15 border-none outline-none" />
              <div className="flex items-center justify-between py-3">
                <h4 className="text-[18px] font-[700]">Total:</h4>
                <h4 className="text-[18px] font-[700]">${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 15}</h4>
              </div>
            </div>
          </div>
          <button type="submit" className="btn-secondary w-52 rounded">Proceed to Checkout</button>
        </div>
      </form>
    </div>
  );
};

export default Order;
