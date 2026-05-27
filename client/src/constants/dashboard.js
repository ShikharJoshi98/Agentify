import { BsRobot } from "react-icons/bs";
import { LuDatabase, LuFilePen, LuHouse, LuLaptop, LuScanText, LuUser, LuWallet } from "react-icons/lu";

export const sideNav = [
    {
        title: 'Dashboard',
        icon: LuHouse,
        path: '/dashboard'
    },
    {
        title: 'AI Agents',
        icon: BsRobot,
        path: '/dashboard/analyse'
    },
    {
        title: 'Data',
        icon: LuDatabase,
        path: '/dashboard/resumeBuilder'
    },
    {
        title: 'Pricing',
        icon: LuWallet,
        path: '/dashboard/interviewPrep'
    },
    {
        title: 'Account Details',
        icon: LuUser,
        path: '/dashboard/account-details'
    }
];

export const colors = [
    "bg-yellow-100",
    "bg-blue-100",
    "bg-green-100",
    "bg-pink-100",
    "bg-purple-100",
    "bg-orange-100",
    "bg-cyan-100"
]