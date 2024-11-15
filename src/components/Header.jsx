import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import LogoImg from "../assets/Logo.png";
import { MdMenu, MdClose } from "react-icons/md";
import { GiShoppingBag} from "react-icons/gi";
import { LuUser2 } from "react-icons/lu";
import { FaCircleUser } from "react-icons/fa6";
import { FiPackage } from "react-icons/fi";
import { TbLogout } from "react-icons/tb";
import { ShopContext } from "../context/ShopContext";


const Header = ({setShowLogin}) => {
    const [menuOpened, setMenuOpened] = useState(false);
    const [token, setToken] = useState(false);
    const [header, setHeader] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const {getTotalCartItems} = useContext(ShopContext);
    
    const toggleMenu = () => {
        setMenuOpened(!menuOpened);
    }

    const logout = () => {
        localStorage.removeItem("token")
        setToken("")
        navigate("/")
    }

    useEffect(()=>{
        const handleScroll = () =>{
            window.scrollY > 35 ? setHeader(true) : setHeader(false);
        }

        const checkUrl = () => {
            const currentUrl = window.location.href
            if(currentUrl !== "http://localhost:5173/"){
                setHeader(true)
            }else{
                window.addEventListener("scroll", handleScroll)
            }
        }
        checkUrl();

        return ()=>{
            window.removeEventListener("scroll", handleScroll)
        }
    },[location])

    

    return(
        <header className={`${header ? "bg-white shadow-sm py-4" :"bg-transparent py-5"} fixed p-2 left-0 right-0 w-full z-10 transition-all duration-300`}>
            <div className="mx-auto max-w-[1440px] px-6 lg:px-12 flex items-center justify-between">
                <Link to={'/'} className="bold-24 flex ">
                   <img className="w-[70px] h-[60px]" src={LogoImg}/> <h4 className="top-1 p-3 pl-0">Food<span className="text-red-600">Stack</span></h4>
                </Link>
                
                <div className="flex items-center justify-between gap-x-20">
                    <Navbar header={header} menuOpened={menuOpened} 
                    continerStyles={`${menuOpened ? "flex md:hidden absolute flex-col gap-y-12 top-20 right-6 p-12 bg-white rounded-3xl shadow-xl w-64 medium-16 ring-2 ring-slate-900/5 transition-all duration-300"
                        : "hidden md:flex gap-x-5 xl:gap-x-10 medium-15"
                    }`}/>
                    <div className="flex items-center justify-between gap-x-20 xs:gap-x-8">
                        {!menuOpened ? (
                            <MdMenu onClick={toggleMenu} className="md:hidden cursor-pointer text-2xl"/> 
                        ) : ( 
                            <MdClose onClick={toggleMenu} className="md:hidden cursor-pointer text-2xl"/>
                        )}
                        <Link to={"/cart"} className="flex relative">
                        <GiShoppingBag className="text-[25px] relative"/>
                        <span className="bg-white text-tertiary text-sm absolute 
                        -top-2.5 -right-2.5 flexCenter w-5 h-5 rounded-full shadow-md  ">{getTotalCartItems()}</span>
                        </Link>
                        {!token ? ( <button onClick={()=>setShowLogin(true)} className="btn-light rounded-full flexCenter gap-x-2">
                            <LuUser2 className="bold-18"/>Login</button>
                        ) : (
                    
                        <div className="group relative">
                        <FaCircleUser className='text-2xl'/>
                        <ul className="bg-primary shadow-sm p-3 w-24 ring-1 ring-slate-900/15
                        rounded absolute right-0 hidden group-hover:flex flex-col">
                            <li className="flexCenter gap-x-2 cursor-pointer" onClick={()=> Navigate("./orders")}>
                                <FiPackage className="text-[19px]"/>
                                <p>orders</p>
                            </li>
                            <hr className="my-2"/>
                            <li className="flexCenter gap-x-2 cursor-pointer" onClick={()=> Navigate("./orders")}>
                                <TbLogout className="text-[19px]"/>
                                <p>Logout</p>
                            </li>
                        </ul>
                        </div>     
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}
export default Header;