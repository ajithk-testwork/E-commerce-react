import React, { useContext } from "react";
import Item from "./Item";
import { ShopContext } from "../context/ShopContext";

const ProductDisplay = ({category}) => {

    const {all_products} = useContext(ShopContext)

    return(
        <section id="foods" className="mx-auto max-w-[1440px] px-6 lg:px-12 py-16 xl:py-28">
            <div className="max-w-[1000px] pb-20 mx-auto text-center">
                <h3 className="text-[29px] leading-tight md:text-[36px] md:leading-[1.3] 
                mb-4 font-semibold uppercase">Top Dishes Near You </h3>
                
            </div>
            <div className="grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {all_products.map((product)=> {
                    if(category === "All" || category === product.category){
                        return(
                            <div key={product._id}>
                                <Item product={product}/>
                            </div>   
                        )
                    }
                })}
            </div>
        </section>    
    );
};
export default ProductDisplay;