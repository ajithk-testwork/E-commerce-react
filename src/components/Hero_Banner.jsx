import React from "react";
import { Carousel } from "@material-tailwind/react";
import heroImg from "../assets/bg.png"
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Hero_Banner = () => {
    return(
        <section id="home" className="mx-auto max-w-[1440px] px-6 lg:px-12 flex xl:flex-row flex-col gap-5 gap-y-20 
        z-0 relative">
            <div className="absolute xl:-top-1 xl:-right-[38%] -right-1/4
            bg-hero bg-repeat-round -z-10 w-full xl:h-[722px] h-[590px]
            overflow-hidden"/>
            
            <div className="flex-1 pt-48 max-w-[611px]">
                <h2 className="h2 capitalize tracking-[1px]">
                    Delicious Meals Delivered Right <span className="text-red-600">to Your Doorstep</span>
                </h2>
                <p className="pt-4 pb-14" >
                Life is all about finding new tastes and flavors. Give ours a shot.
                I wish you could taste this. And you can – just visit us to enjoy our wide selection of [food].
                </p>
                <div className="inline-flex flex-col xs:flex-row xs:items-center gap-3">
                    <Link className="btn-secondary rounded-full !px-12">Order Now</Link>
                    <Link className="btn-outline rounded-full !px-12 flexCenter gap-x-3
                    hover:bg-slate-300 ">Explore Menu
                    <FaArrowRightLong />
                    </Link>
                    
                </div>
            </div>
            <div className="xl:flex-1 flex justify-end items-end">
                <div className="relative xl:w-full w-[600px] xl:h-full h-[590px] xl:pt-20 xl:pl-24 z-0">
                    <img src={heroImg} alt="" className="object-contain" />
                </div>
            </div>

        </section>
          );
        }
        
    
export default Hero_Banner;