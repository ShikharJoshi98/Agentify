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