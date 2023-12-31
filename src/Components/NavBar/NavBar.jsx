import { NavLink } from "react-router-dom"
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const NavBar = () => {
    const [toggel, setToggel] = useState(false)
    const menu = <>
        <li>
            <NavLink
                to="/messages"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/messages"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
            >
                Membership
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/messages"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : "bg-purple-600 text-white hover:bg-purple-800"
                }
            >
                Join US
            </NavLink>
        </li>

    </>
    const handelToggel = ()=>{
        setToggel(true)
    }
    return (
        <>
            <div className="navbar  bg-white shadow-xl shadow-purple-200 p-2  ">
                <div className="flex-1 flex items-center ">
                    <img className=" w-20" src="https://i.ibb.co/80KdXdY/005d61-42a961913b4f4bd9b6c250911c863a4a-mv2.png" alt="" />
                    <h2 className=" text-3xl font-bold">Topic<span className=" text-purple-600">Trove</span></h2>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 hidden lg:flex gap-3 text-purple-600 text-lg font-semibold">
                        {menu}
                    </ul>
                    <div className=" text-2xl lg:hidden">
                        <GiHamburgerMenu onClick={handelToggel} />
                    </div>
                </div>
            </div>
            <div className={` bg-black  bg-opacity-50 absolute z-50 left-0 top-0  w-full h-screen ${toggel? "block":"hidden"} lg:hidden`}>
            <ul className="menu  w-48 px-5 py-10 h-full bg-white  lg:flex gap-3 text-purple-600 text-lg font-semibold">
                        {menu}
                    </ul>
            </div>
        </> 
    )
}

export default NavBar