import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardNavbar from "../components/DashboardNavbar";

function DashboardLayout() {
    return (
        <main className="md:flex block min-h-screen">
            <div className="min-h-screen hidden md:sticky md:block top-0 left-0">
                <Sidebar />
            </div>
            <div className="flex-1 flex flex-col min-h-screen">
                <DashboardNavbar />
                <div className="flex-1 flex flex-col min-h-screen bg-[#f2f2f2]">
                    <Outlet />
                </div>
            </div>
        </main>
    )
}

export default DashboardLayout