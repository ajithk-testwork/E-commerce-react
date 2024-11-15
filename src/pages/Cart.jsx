import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { TbTrash } from "react-icons/tb";
import {  useNavigate } from "react-router-dom";

const Cart = () => {

    const {all_products, cartItems, 
    getTotalCartAmount, removeFromCart} = useContext(ShopContext)

    const navigate = useNavigate()    

    return(
       <section className="mx-auto max-w-[1440px] px-6 lg:px-12 pt-20">
            <div className="py-20">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-slate-900/20 text-gray-30
                        regular-14 xs:regular-16 text-start py-12">
                            <th className="p-1 text-left">Products</th>
                            <th className="p-1 text-left">Title</th>
                            <th className="p-1 text-left">Price</th>
                            <th className="p-1 text-left">Quantity</th>
                            <th className="p-1 text-left">Total</th>
                            <th className="p-1 text-left">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            all_products.map((product)=>{
                                if(cartItems[product._id] > 0){
                                    return(
                                        <tr key={product._id} className="border-b border-slate-900/20
                                        text-gray-50 p-6 text-[14px] font-[500] text-left">
                                            <td className="p-1">
                                                <img src={product.image} alt="" height={43} width={43}
                                                className="rounded-lg ring-1 ring-offset-neutral-900/5 m-1"/>
                                            </td>
                                            <td className="p-1">
                                                <div className="line-clamp-3">
                                                    {product.name}
                                                </div>
                                            </td>
                                            <td className="p-1">${product.price}</td>
                                            <td className="p-1">{cartItems[product._id]}</td>
                                            <td className="p-1">${product.price * cartItems[product._id]}</td>
                                            <td className="p-1">
                                                <div className="text-[22px] font-[700]">
                                                    <TbTrash onClick={()=>removeFromCart(product._id)}/>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                }
                                return null;
                            })
                        }
                    </tbody>
                </table>
                <div className="flex flex-col xl:flex-row gap-20 mt-20">
                    <div className="flex flex-1 flex-col gap-2">
                        <h4 className="text-[22px] font-[700]">Summary</h4>
                        <div>
                            <div className="flex items-center justify-between py-3"> 
                                <h4 className="text-[16px] font-[500]">SubTotal:</h4>
                                <h4 className="text-gray-30 font-semibold">{getTotalCartAmount()}</h4>
                            </div>
                            <hr className="h-[2px] bg-slate-900/15 border-none outline-none"/>
                            <div className="flex items-center justify-between py-3">
                                <h4 className="text-[16px] font-[500]">Shipping Fee:</h4>
                                <h4 className="text-gray-30 font-semibold">${getTotalCartAmount() === 0 ? 0 : 15}</h4>
                            </div>
                            <hr className="h-[2px] bg-slate-900/15 border-none outline-none"/>
                            <div className="flex items-center justify-between py-3">
                                <h4 className="text-[18px] font-[700]">Total:</h4>
                                <h4 className="text-[18px] font-[700]">${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 15}</h4>
                            </div>
                        </div>
                        <button onClick={()=>navigate('/order')}
                        className="btn-secondary w-52 rounded" >Proceed to Checkout</button>
                    </div>
                    <div className="flex flex-2 flex-col gap-8">
                        <h4 className="capitalize text-[20px] font-[700]">Your coupon code enter here:</h4>
                        <div className="flex items-center justify-between h-[2.8rem] bg-primary
                        ring-1 ring-slate-900/10 w-full max-w-[488px] rounded">
                            <input className="pl-3 bg-transparent border-none outline-none" type="text" placeholder="Coupon Code"/>
                            <button className="btn-dark rounded relative !py-3">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    );
};
export default Cart;