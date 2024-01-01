import { NavLink } from "react-router-dom";
import { IoIosNotifications } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { MdSwitchAccount } from "react-icons/md";
const NavBar = () => {
    const [menuDower, setMenuDower] = useState(false)
    const [imgDropDown, setImgDropDown] = useState(false)
    const handleOpenMenuDower = () => {
        setMenuDower(true)
    }
    const handelCloseMenuDower = () => {
        setMenuDower(false)
    }
    const handelImgDropDown = ()=>{
        setImgDropDown(!imgDropDown)
    }
    const menu = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "p- border-b-2 text-purple-600 border-purple-600" : "hover:border-b-2 hover:border-purple-600 hover:pb-1 hover:text-purple-600 "
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/Membership"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "p- border-b-2 text-purple-600 border-purple-600" : "hover:border-b-2 hover:text-purple-600 hover:border-purple-600 hover:pb-1"
                }
            >
                Membership
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/Blog"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "p- border-b-2 text-purple-600 border-purple-600" : "hover:border-b-2 hover:text-purple-600 hover:border-purple-600 hover:pb-1"
                }
            >
                Blog
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/Shop"
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "p- border-b-2 text-purple-600 border-purple-600 " : "hover:border-b-2 hover:text-purple-600 hover:border-purple-600 hover:pb-1"
                }
            >
                Shop
            </NavLink>
        </li>
        <li className=" text-3xl hidden lg:block">
            <IoIosNotifications />
        </li>
        <li>
            <NavLink
                to="/Join-US "
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : " border-2 bg-purple-50 border-purple-600 p-2 rounded-lg hover:bg-purple-600 hover:text-white hover:duration-300"
                }
            >
                Join US
            </NavLink>
        </li>
    </>
    return (
        <nav className=" bg-white shadow-xl shadow-purple-200 relative  ">
            <div className="hidden lg:flex justify-between lg:p-5  items-center">
                <div className=" flex-1  items-center flex">
                    <img className=" w-16" src="https://i.ibb.co/80KdXdY/005d61-42a961913b4f4bd9b6c250911c863a4a-mv2.png" alt="" />
                    <h2 className=" text-2xl font-bold">Topic<span className=" text-purple-600">Trove</span></h2>
                </div>
                <div className=" flex-1 p-5 hidden lg:block">
                    <ul className=" flex justify-between text-lg ">
                        {menu}
                    </ul>
                </div>
            </div>

            {/* menu Dower  */}

            <div className=" flex justify-between p-3 lg:hidden ">
                <div className=" flex-1  items-center flex">
                    <img   className=" w-10" src="https://i.ibb.co/80KdXdY/005d61-42a961913b4f4bd9b6c250911c863a4a-mv2.png" alt="" />
                    <h2 className="  font-semibold">Topic<span className=" text-purple-600">Trove</span></h2>
                </div>
                <div className=" flex gap-3 justify-center items-center">
                    <p className=" text-3xl"><IoIosNotifications /></p>
                    <img onClick={handelImgDropDown} className=" w-10 h-10 rounded-full" src="https://i.ibb.co/WPnztQd/team-2.webp" alt="" />
                    <p className=" text-2xl" onClick={handleOpenMenuDower}><GiHamburgerMenu /></p>
                </div>
            </div>
            <div className={` absolute bg-black bg-opacity-55 w-full h-screen top-0 left-0 z-50 ${menuDower ? "block duration-500:" : "hidden"}`}>
                <div className="bg-white w-48  h-full">
                    <p className=" flex justify-end p-3" onClick={handelCloseMenuDower}><ImCross /></p>
                    <ul className="  space-y-5 p-5 ">
                        {menu}
                    </ul>
                </div>
            </div>

            {/*  Img Drop Down */}

            <div className={ `bg-white space-y-5 shadow-2xl shadow-purple-300 border border-purple-600 absolute top-16 md:right-20  p-5 ${imgDropDown ? "block": "hidden"} `}>
                <div className=" flex gap-3 items-center border-b-2 pb-3 border-purple-300">
                    <img className=" w-10 h-10 rounded-full" src="https://i.ibb.co/WPnztQd/team-2.webp" alt="" />
                    <div>
                        <p>saiful islam</p>
                        <p>Programin.saifulIslam@gmail.com</p>
                    </div>
                </div>
                <div className=" space-y-5 border-b-2 border-purple-300 pb-4">
                    <p className=" flex gap-3 text-xl items-center "> <FaHome /> <span className="hover:text-purple-600 hover:underline"> Dashboard</span></p>
                    <p className=" flex gap-3 text-xl items-center "> <CgProfile />  <span className="hover:text-purple-600 hover:underline"> My Profile</span> </p>
                    <p className=" flex gap-3 text-xl items-center "> <FiLogOut /> <span className="hover:text-purple-600 hover:underline"> Logout</span> </p>
                </div>
                <p className=" flex gap-3 text-xl items-center "><MdSwitchAccount /> <span className="hover:text-purple-600 hover:underline"> Add Another Account</span></p>
            </div>
        </nav>
    );
};

export default NavBar;