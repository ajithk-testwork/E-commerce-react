import React from "react";
import { GoChecklist } from "react-icons/go";
import { PiCookingPot } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { GrFormCheckmark } from "react-icons/gr";


const Steps = () => {
    return(
        <section className="mx-auto max-w-[1440px] px-6 lg:px-12 py-48  xl:py-28;">
            <div className="max-w-[622px] pb-20 mx-auto text-center">
                <h3 className="text-[29px] leading-tight md:text-[36px] md:leading-[1.3] mb-4 font-semibold uppercase">How it Works ?</h3>
                <p>
                Customers select dishes from menus and add them to their cart on food delivery platforms.
                Restaurants prepare orders, which are then delivered to customers' locations by designated delivery services.
                </p>
            </div>
            <div className="flex items-center justify-center top-[-30px] gap-5 flex-wrap">
                <div className="flex items-center justify-center gap-4">
                    <div className="h-10 w-10 flex items-center justify-center bg-red-600
                    rounded-full text-white">
                        <GoChecklist className="text-2xl"/>
                    </div>
                    <hr className="bg-[#555] outline-none border-none h-[1px] w-6 sm:w-44 rounded-full"/>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <div className="h-10 w-10 flex items-center justify-center bg-red-600
                    rounded-full text-white">
                        <PiCookingPot  className="text-2xl"/>
                    </div>
                    <hr className="bg-[#555] outline-none border-none h-[1px] w-6 sm:w-44 rounded-full"/>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <div className="h-10 w-10 flex items-center justify-center bg-red-600
                    rounded-full text-white">
                        <TbTruckDelivery className="text-2xl"/>
                    </div>
                    <hr className="bg-slate-900/10 outline-none border-none h-[1px] w-6 sm:w-44 rounded-full"/>
                </div>
                <div className="flex items-center justify-center gap-4">
                    <div className="h-10 w-10 flex items-center justify-center bg-red-600
                    rounded-full text-white">
                        <GrFormCheckmark className="text-2xl"/>
                    </div>
                    
                </div>
                
            </div>
        </section>
    )
}
export default Steps;