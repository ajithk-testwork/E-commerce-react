import React from "react";
import { categories } from "../assets/data";

const Categories = ({category, setCategory}) => {
    return(
       <section id="menu" className="mx-auto max-w-[1440px] px-6 pb-6 lg:px-12 py-16">
            <div className="max-w-[1000px] pb-20 mx-auto text-center">
                <h3 className="text-[29px] leading-tight md:text-[36px] md:leading-[1.3] 
                mb-4 font-semibold uppercase">What's on your mind? </h3>
                <p>Choose one of your favorite foods, select and order the dishes, and enjoy!</p>
                <div className="flex items-center justify-start gap-6 pt-11 flex-wrap">
                    {categories.map((item)=>(
                        <div
                        onClick={()=>setCategory((prev)=>(prev === item.name ? "All"
                            : item.name))}
                            id={item.name}
                            key={item.name}
                            className={`${category === item.name ? "ring-1 ring-slate-900/5" : ""} flex items-center justify-center
                            bg-white flex-col rounded-2xl cursor-pointer`}>
                            <div className="p-4 rounded-2xl">  
                            <img src={item.image} alt="categoryImg" height={110}
                            width={110} className="object-contain aspect-square"/>
                            </div>
                            <h4 className="pb-4 medium-14">{item.name}</h4>
                        </div>

                    ))}
                </div>
            </div>
       </section>
    );
};
export default Categories;