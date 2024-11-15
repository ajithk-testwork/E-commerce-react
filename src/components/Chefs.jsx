import React from "react";
import chef1 from "../assets/chef1.png";
import chef2 from "../assets/chef2.png";
import chef3 from "../assets/chef3.png";



const Chefs = () => {
    return(
        <section >
            <div className="max-w-[1000px] pb-20 mx-auto text-center">
                <h3 className="text-[29px] leading-tight md:text-[36px] md:leading-[1.3] mb-4 font-semibold">Our Chefs</h3>
                <p>A chef's expertise shines as they work tirelessly in kitchens, crafting exquisite dishes with precision and creativity. 
                    Their culinary mastery transforms ingredients into culinary delights, showcasing flavors and 
                    techniques that captivate and satisfy discerning palates.</p>
            </div>

            <div className="mx-auto max-w-[1440px] px-6 lg:px-12 grid grid-cols-1 
            md:grid-cols-2 xl:grid-cols-3 gap-x-10" >
                <div>
                    <img src={chef1} alt="chef1" className="object-contain aspect-square
                    bg-white pt-5 h-[400px] rounded-xl"/>
                </div>
                <div className="mt-14">
                    <img src={chef2} alt="chef1" className="object-contain aspect-square
                    bg-white pt-5 h-[400px] rounded-xl"/>
                </div>
                <div className="mt-28">
                    <img src={chef3
                        
                    } alt="chef1" className="object-contain aspect-square
                    bg-white pt-5 h-[400px] rounded-xl"/>
                </div>
            </div>

        </section>
    )
}
export default Chefs;