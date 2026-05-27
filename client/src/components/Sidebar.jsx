import { useState } from "react";
import { LuChevronLeft, LuChevronRight, LuLogOut } from "react-icons/lu";
import { sideNav } from "../constants/dashboard";
import { IoDiamond } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutRequest } from "../modules/features/auth/authAction";

function Sidebar() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isSideNav, setSideNav] = useState(true);

    return (
        <aside className={`${isSideNav ? 'w-54' : 'w-20'} top-0 left-0 sticky transition-all duration-300 min-h-screen hidden bg-[#fdfdfd] p-4 md:block border-r border-gray-400`}>
            <div className="flex items-center gap-2">
                <div className="w-9 h-9 p-2 rounded-md shrink-0 bg-linear-to-br from-black via-black/70 to-black flex items-center justify-center">
                    <svg fill="none" height="48" viewBox="0 0 37 48" width="37" xmlns="http://www.w3.org/2000/svg"><path clipRule="evenodd" d="m12.8841 4.30945-6.8842 3.97574 6.8891 3.97661 6.8862-3.97575zm8.8919 7.44025-6.887 3.9762-.0007 7.9532 6.8877-3.9771zm2 11.4164-6.8879 3.9772 6.8889 3.9765 6.8871-3.9763zm8.8879 7.4416-6.8868 3.9761v7.9522l6.8868-3.9761zm-10.8868 11.9287v-7.9525l-6.8891-3.9766v7.9525zm-10.8888-18.8569-6.8883-3.9775v-7.9526l6.889 3.9765zm-.0003 4.6187-9.38814-5.4209c-.928127-.5359-1.49986-1.5262-1.49986-2.598v-11.99368c0-.71444.381106-1.37463.999789-1.73193l10.383811-5.996798c.9281-.5359626 2.0716-.5361538 2.9998-.000505l10.3922 5.996973c.619.3572 1.0004 1.01758 1.0004 1.73226v11.41638l9.888 5.7096c.6188.3573.9999 1.0175.9999 1.732v11.9937c0 1.0718-.5718 2.0621-1.5 2.598l-10.3868 5.9969c-.6187.3572-1.381.3572-1.9998.0001l-10.3891-5.9969c-.9283-.5358-1.5002-1.5263-1.5002-2.5982z" fill="#fff" fillRule="evenodd" /></svg>
                </div>
                <h1
                    className={`text-md sm:text-xl transition-all duration-300 font-medium text-neutral-800 tracking-tight
                    ${isSideNav
                            ? 'opacity-100 translate-x-0 w-auto'
                            : 'opacity-0 overflow-hidden w-0 pointer-events-none'
                        }`}
                >
                    Agentify
                </h1>
            </div>
            <button
                onClick={() => setSideNav(!isSideNav)}
                className="absolute cursor-pointer z-50 -right-3 top-20 border border-gray-500 text-neutral-700 rounded-full p-1 bg-gray-200 shadow-md hover:scale-105"
            >
                {isSideNav ? <LuChevronLeft size={16} /> : <LuChevronRight size={16} />}
            </button>
            <ul className="space-y-2 mt-20">
                {sideNav.map((sideNavItem, index) => {
                    const Icon = sideNavItem.icon;
                    return (
                        <li
                            onClick={() => navigate(sideNavItem.path)}
                            key={index}
                            className={`cursor-pointer ${location.pathname === sideNavItem.path ? 'bg-neutral-800 text-white' : 'group-hover:text-neutral-700 hover:bg-black/15 text-neutral-600'}  font-medium flex items-center p-2 rounded-md`}
                        >
                            <div className="flex items-center gap-3">
                                <Icon className="size-5" />
                                <p
                                    className={`transition-opacity duration-300 text-sm whitespace-nowrap
                                        ${isSideNav
                                            ? 'opacity-100'
                                            : 'opacity-0 w-0 overflow-hidden pointer-events-none'
                                        }`}
                                >
                                    {sideNavItem.title}
                                </p>
                            </div>
                        </li>)
                }
                )}
            </ul>
            <button onClick={() => { dispatch(logoutRequest()); navigate("/") }} className="flex items-center gap-3 p-2 cursor-pointer absolute bottom-10 hover:text-red-600 text-red-500">
                <span className='text-xl'>
                    <LuLogOut />
                </span>
                <span
                    className={`font-semibold transition-opacity duration-300 text-sm whitespace-nowrap ${isSideNav ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden pointer-events-none'}`}
                >
                    Logout
                </span>
            </button>
        </aside>
    )
}

export default Sidebar