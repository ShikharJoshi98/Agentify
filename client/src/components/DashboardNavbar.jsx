import { useLocation, useNavigate } from "react-router-dom"
import { sideNav } from "../constants/Dashboard";
import { FaRegCircleUser } from "react-icons/fa6";
import { useState } from "react";
import { LuLogOut, LuSparkles } from "react-icons/lu";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { RiMenu2Fill } from "react-icons/ri";

function DashboardNavbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [openSideNav, setOpenSideNav] = useState(false);
    const heading = sideNav.find((sideNavItem, index) => sideNavItem.path === location.pathname);

    return (
        <nav className="sticky top-0 bg-[#fdfdfd] border-b border-gray-400 px-2 sm:px-6 py-4 flex justify-between items-center">
            {openSideNav &&
                (
                    <div className="fixed inset-0 transition-opacity duration-300 bg-black/20 bg-opacity-50 z-10"
                        onClick={() => setOpenSideNav(false)}>
                    </div>
                )}
            <aside className={`fixed top-0 left-0 h-screen w-60 bg-white text-neutral-700 shadow-lg z-10 p-4 transition-transform duration-300 ease-in-out ${openSideNav ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex items-center justify-between my-5">
                    <div className="flex items-center gap-1.5 cursor-pointer group">
                        <div className="w-8 h-8 rounded-2xl bg-linear-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                            <LuSparkles className="w-5 h-5 text-white" />
                        </div>
                        <h1 className="text-2xl font-semibold flex items-end gap-0.5 tracking-tight text-neutral-900">
                            CareerPilot
                            <div className="w-1.5 h-1.5 ml-1 mb-1.5 rounded-full bg-blue-500"></div>
                        </h1>
                    </div>
                    <FaAngleDoubleLeft onClick={() => setOpenSideNav(false)} />
                </div>
                <ul className="list-none space-y-1 mt-14">
                    {
                        sideNav.map((sideNavItem, index) => {
                            const Icon = sideNavItem.icon;
                            return (
                                <li
                                    key={index}
                                    onClick={() => { navigate(`${sideNavItem.path}`); setOpenSideNav(false); }}
                                    className={`${location.pathname === `${sideNavItem.path}` ? 'bg-black/10 font-semibold' : 'hover:bg-black/5'} flex items-center gap-2 cursor-pointer p-1 rounded-md`}>
                                    <Icon /> {sideNavItem.title}
                                </li>
                            )
                        })
                    }
                    <li
                        className="flex items-center gap-2 cursor-pointer p-1 text-red-500 font-medium">
                        <LuLogOut /> Logout</li>
                </ul>
            </aside>
            <div className="flex items-center gap-3 sm:gap-5">
                <RiMenu2Fill onClick={() => setOpenSideNav(true)} className="size-5 block md:hidden" />
                <h1 className="text-lg sm:text-2xl font-medium text-neutral-700">{heading.title}</h1>
            </div>
            <div className="flex items-center gap-1 sm:gap-3">
                <FaRegCircleUser className="size-5 sm:size-8" />
                <p className="text-xs sm:text-sm font-medium text-neutral-600">John Doe</p>
            </div>
        </nav>
    )
}

export default DashboardNavbar