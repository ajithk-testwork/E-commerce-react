import React from "react";

const FindUs = () => {
    return(
        <section className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 xl:py-28">
            <div className="mx-auto max-w-[1440px] px-6 lg:px-12 bg-banner bg-center bg-cover
            h-[411px] lg:h-[555px] rounded-2xl flex items-center"> 
                <div className="xl:w-1/2">
                    <h3 className="text-[29px] leading-tight md:text-[36px] 
                    md:leading-[1.3] mb-4 font-semibold">Where we live?</h3>
                    <p>FoodStock is India's largest online food item ordering & delivery chain, 
                        it also tops the chart of India's Unicorn startup lists. 
                        It's a Chennai-based startup started in 2023, 
                        and as of now, it's expanded to more than 5 Indian cities.</p>
                        <button className="medium-14 bg-secondary px-7 py-3 text-white transition-all  rounded-full mt-6">Find our location</button>
                </div>
            </div>
        </section>
    )
}
export default FindUs;